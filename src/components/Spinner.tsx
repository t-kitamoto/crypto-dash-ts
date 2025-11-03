import { BarLoader } from "react-spinners";

type SpinnerProps = {
  color?: string;
};

export function Spinner({ color = "green" }: SpinnerProps) {
  return (
    <div className="m-12 flex items-center justify-center">
      <BarLoader width={250} height={8} color={color} aria-label="Loading..." />
    </div>
  );
}
