import { PropsWithChildren } from "react";
import { Geist } from "next/font/google";
import { Navbar } from "./navbar";
import clsx from "clsx";

const geist = Geist({ subsets: ["latin"] });

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={clsx("w-full", geist.className)}>
      <Navbar />
      <div className="mt-8">
        <main className="w-full px-1.5 mx-auto mb-0 md:mb-4 max-w-7xl sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
};
