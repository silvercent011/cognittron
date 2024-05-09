type StepCardProps = {
  title: string;
  content: string;
};

export function StepCard({ title, content }: StepCardProps) {
  return (
    <div className="p-6 border border-gray-100 bg-theme_light-surface_0 rounded-lg">
      <h1 className="font-semibold text-lg text-theme_light-high_em leading-6">
        {title}
      </h1>
      <p className=" text-base font-medium text-theme_light-med_em leading-6">
        {content}
      </p>
    </div>
  );
}
