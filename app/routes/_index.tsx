import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Cognittron" }];
};

export default function Index() {
  return (
    <div>
      <h1 className="font-bold text-4xl">Título da trilha</h1>
    </div>
  );
}
