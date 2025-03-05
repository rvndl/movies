import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getSortName } from "../../utils";
import {
  DiscoverMoviesQueryOptions,
  DiscoverMoviesSortOption,
} from "../../api";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { pl } from "date-fns/locale";

const avaliableSortings: DiscoverMoviesSortOption[] = [
  "popularity.asc",
  "popularity.desc",
  "vote_average.asc",
  "vote_average.desc",
];

interface Props {
  value: DiscoverMoviesQueryOptions;
  onChange: (value: DiscoverMoviesQueryOptions) => void;
}

export const DiscoverMoviesListFilters = ({ value, onChange }: Props) => {
  return (
    <section className="flex flex-col md:flex-row items-end gap-2">
      <div className="grid gap-2">
        <p className="text-accent-foreground text-sm font-medium">
          Data premiery
        </p>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-56 justify-start text-left font-normal",
                !value.date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {value.date?.from ? (
                value.date.to ? (
                  <>
                    {format(value.date.from, "dd.MM.yyyy", { locale: pl })} -{" "}
                    {format(value.date.to, "dd.MM.yyyy", { locale: pl })}
                  </>
                ) : (
                  format(value.date.from, "dd.MM.yyyy", { locale: pl })
                )
              ) : (
                <span>Wybierz zakres dat</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={value.date?.from}
              selected={value.date}
              onSelect={(date) => onChange({ ...value, date })}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-accent-foreground text-sm font-medium">Sortuj</p>
        <Select
          value={value.sortBy}
          onValueChange={(sortBy) =>
            onChange({ ...value, sortBy: sortBy as DiscoverMoviesSortOption })
          }
        >
          <SelectTrigger className="w-56 md:w-48">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            {avaliableSortings.map((sort) => (
              <SelectItem key={sort} value={sort}>
                {getSortName(sort)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </section>
  );
};
