export default function ServiceCard({
  icon,
  title,
  children,
}: {
  icon: any;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex h-80 w-80 flex-col items-center justify-between gap-4 rounded-lg border p-4">
      <div className="flex w-full flex-col items-center">
        <div className="mb-4">{icon}</div>
        <p className="text-lg font-semibold">{title}</p>
      </div>
      {children}
    </div>
  );
}
