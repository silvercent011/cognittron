import { json, useLoaderData } from "@remix-run/react";
import Button from "~/components/Button";
import { driver, handleRecords } from "../neo4j.server";

export const action = async ({ params }) => {
  return json({ params });
};

export const loader = async ({ params }) => {
  const { records, summary } = await driver.executeQuery(
    "MATCH (t:Trail WHERE t.id = $trailId)-[:HAS_STEP]->(s:Step) RETURN t as trail, collect(s) as steps",
    { trailId: params.trailId }
  );

  return { records: handleRecords(records) };
};

export default function Trail() {
  const { records } = useLoaderData<typeof loader>();

  return (
    <main>
      <div className="pt-20 container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">{records.trail.title}</h1>

          <Button variant="primary">Adicionar Passo</Button>
        </div>
        {JSON.stringify(records)}
      </div>
    </main>
  );
}
