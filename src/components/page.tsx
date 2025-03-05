import { Fragment, PropsWithChildren } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface Props {
  breadcrumbs?: Breadcrumb[];
}

export const Page = ({ breadcrumbs, children }: PropsWithChildren<Props>) => {
  return (
    <main className="flex flex-col gap-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Filmy</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbs?.map(({ label, href }) => (
            <Fragment key={label}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={href}>{label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4">{children}</div>
    </main>
  );
};
