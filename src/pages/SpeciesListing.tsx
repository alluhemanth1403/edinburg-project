import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { species } from "@/data/species";
import { Search } from "lucide-react";

const SpeciesListing = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = species.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.scientificName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || s.conservationStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statuses = [...new Set(species.map((s) => s.conservationStatus))];

  return (
    <div className="container py-10">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Scottish Mammals</h1>
      <p className="text-muted-foreground mb-8">Browse all tracked mammal species across Scotland.</p>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search species..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[220px]">
            <SelectValue placeholder="Conservation status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            {statuses.map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-center py-12">No species found matching your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((s) => (
            <Link key={s.id} to={`/species/${s.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="pb-2">
                  <div className="text-5xl mb-2">{s.emoji}</div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{s.name}</CardTitle>
                  <p className="text-xs italic text-muted-foreground">{s.scientificName}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{s.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className={`px-2 py-0.5 rounded-full font-medium ${
                      s.conservationStatus === "Critically Endangered" ? "bg-destructive/15 text-destructive" :
                      s.conservationStatus === "Near Threatened" ? "bg-accent/15 text-accent-foreground" :
                      "bg-primary/10 text-primary"
                    }`}>{s.conservationStatus}</span>
                    <span className="text-muted-foreground">{s.observationCount} obs.</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpeciesListing;
