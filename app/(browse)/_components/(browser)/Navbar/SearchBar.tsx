"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState<string | null>(null);
  const route = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query) return;
    const url = new URL(window.location.href);
    url.searchParams.set("search", query!.trim());
    route.push(url.toString());
  };

  const onDelete = () => {
    setQuery(null);
    const url = new URL(window.location.href);
    url.searchParams.delete("search");
    route.push(url.toString());
  };

  return (
    <form className="relative lg:w-[400px] w-full flex items-center" onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setQuery(e.target.value)}
        value={query || ""}
        type="text"
        placeholder="Search..."
        className="w-full rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent border-r-0"
      />
      {query && query.trim() !== "" && (
        <X
          onClick={onDelete}
          className="cursor-pointer absolute right-16 size-4 text-muted-foreground hover:text-muted-foreground/50"
        />
      )}
      <Button
        type="submit"
        className="border border-l-0 rounded-l-none bg-[#252931] hover:bg-[#252931] flex items-center justify-center"
      >
        <SearchIcon className="text-white " />
      </Button>
    </form>
  );
};

export default SearchBar;
