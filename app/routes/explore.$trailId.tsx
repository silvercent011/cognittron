import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { Button, CreateStepForm, PlusIcon, StepCard } from "~/components";
import { createStep, getStepsByTrail } from "~/data/trail";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const updates = Object.fromEntries(formData);

  updates.trailId = params.trailId!;

  // @ts-ignore
  updates.stepId = formData.get("id");

  await createStep(updates as any);

  return null;
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const records = await getStepsByTrail(params.trailId as string);
  return { records, params };
};

export default function Trail() {
  const { records, params } = useLoaderData<typeof loader>();
  let [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <div className="pt-20 flex flex-col gap-10 container mx-auto max-w-[800px]">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">{records.trail.title}</h1>
          <Button onClick={() => setIsOpen(true)} variant="primary">
            <PlusIcon />
            Adicionar Passo
          </Button>
          <CreateStepForm
            trailId={params.trailId as string}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
        <div className="flex flex-col gap-6">
          {records.steps &&
            records.steps.length &&
            records.steps.map(
              (step: { title: string; content: string }, index: any) => (
                <StepCard
                  key={index}
                  title={step.title}
                  content={step.content}
                />
              )
            )}
        </div>
      </div>
    </main>
  );
}
