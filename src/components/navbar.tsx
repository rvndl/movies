import { FilmIcon } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="p-4 bg-white shadow">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <Link href="/" className="flex items-center">
          <FilmIcon className="w-8 h-8 text-blue-500" />
          <p className="font-bold text-3xl uppercase ml-2">Filmy</p>
        </Link>
      </div>
    </nav>
  );
};
