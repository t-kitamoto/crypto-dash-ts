import { Link } from "react-router";

export default function Header() {
  return (
    <div className="flex justify-end gap-4 bg-[#0e1117] px-8 pt-8 font-sans leading-relaxed text-[#f0f0f0]">
      <Link
        to="/"
        className="font-bold text-[#58a6ff] no-underline transition-colors duration-200 hover:text-[#4090db]"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="font-bold text-[#58a6ff] no-underline transition-colors duration-200 hover:text-[#4090db]"
      >
        About
      </Link>
    </div>
  );
}
