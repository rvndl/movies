import { Page } from "@/components/page";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoveDetailsQuery } from "../api";
import { MovieDetailsPageContent } from "../components/";
import toast from "react-hot-toast";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const MovieDetailsPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, isLoading, isError, error } = useMoveDetailsQuery(id, {
    enabled: !!id,
  });

  useEffect(() => {
    if (isError) {
      toast.error(
        `Wystąpił błąd podczas pobierania szczegółów filmu: ${error}, spróbuj ponownie`
      );
    }
  }, [isError, error]);

  useEffect(() => {
    if (!id) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page
      breadcrumbs={[
        {
          label: `Szczegóły: ${data?.title ?? "Ładowanie..."}`,
          href: `/movie/${id}`,
        },
      ]}
    >
      <div className="flex flex-col gap-4">
        <Link href="/">
          <Button variant="outline">
            <ArrowLeftIcon />
            Wróć
          </Button>
        </Link>
        <MovieDetailsPageContent movie={data} isLoading={isLoading} />
      </div>
    </Page>
  );
};
