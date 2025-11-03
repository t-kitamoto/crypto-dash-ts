import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col gap-8 bg-[#0e1117] p-8 text-center font-sans leading-relaxed text-[#f0f0f0]">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-lg">
        Oops! The page you're looking for does not exist
      </p>
      <Link
        to="/"
        className="font-bold text-[#007bff] no-underline hover:underline"
      >
        ⬅️ Go Back Home
      </Link>
    </div>
  );
}
