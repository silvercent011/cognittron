import { driver, handleRecords } from "~/neo4j.server";

export async function getStepsByTrail(trailId: string) {
  const { records, summary } = await driver.executeQuery(
    "MATCH (t:Trail WHERE t.id = $trailId)-[:HAS_STEP]->(s:Step) RETURN t as trail, collect(s) as steps",
    { trailId }
  );

  return handleRecords(records);
}

export async function createStep(input: {
  trailId: string;
  stepId: string;
  title: string;
  content: string;
}) {
  const { records, summary } = await driver.executeQuery(
    `
    MATCH (t:Trail WHERE t.id = $trailId)
    CREATE (s:Step { 
      id: $stepId, 
      title: $title, 
      content: $content 
    })
    CREATE (t)-[:HAS_STEP]->(s)
    RETURN s
    `,
    input
  );

  return handleRecords(records);
}
