import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="relative w-full max-w-sm">
      <Input
        className="rounded-full pl-8"
        placeholder="Search..."
        type="search"
      />
      <Search className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 opacity-50" />
    </div>
  );
}
