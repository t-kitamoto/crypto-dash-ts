export function ErrorMessage({ message }: { message: string }) {
  return <div className="font-medium text-red-500">{message}</div>;
}
