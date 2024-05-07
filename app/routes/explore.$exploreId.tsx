import { json, useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => {
  return json({ params });
};

export default function Trail() {
  const { params } = useLoaderData<typeof loader>();

  return (
    <main>
      <div className="pt-20 container mx-auto">
        <h1 className="font-bold text-4xl">Título da trilha</h1>
      </div>
    </main>
  );
}
