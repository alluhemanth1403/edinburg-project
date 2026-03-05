import { useParams, Link } from "react-router-dom";
import { getSpeciesById } from "@/data/species";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import { ArrowLeft } from "lucide-react";

const SpeciesDetail = () => {
  const { id } = useParams<{ id: string }>();
  const s = getSpeciesById(id || "");

  if (!s) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl font-bold mb-4">Species not found</h1>
        <Button asChild variant="outline"><Link to="/species">Back to species</Link></Button>
      </div>
    );
  }

  const chartConfig = {
    count: { label: "Observations", color: "hsl(var(--primary))" },
  };

  return (
    <div className="container py-10">
      <Button asChild variant="ghost" className="mb-6 gap-1">
        <Link to="/species"><ArrowLeft className="h-4 w-4" /> All Species</Link>
      </Button>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="text-7xl md:text-8xl">{s.emoji}</div>
        <div className="flex-1">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-1">{s.name}</h1>
          <p className="italic text-muted-foreground mb-4">{s.scientificName}</p>
          <p className="text-foreground mb-4">{s.description}</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-muted font-medium">🌿 {s.habitat}</span>
            <span className={`px-3 py-1 rounded-full font-medium ${
              s.conservationStatus === "Critically Endangered" ? "bg-destructive/15 text-destructive" :
              s.conservationStatus === "Near Threatened" ? "bg-accent/15 text-accent-foreground" :
              "bg-primary/10 text-primary"
            }`}>{s.conservationStatus}</span>
            <span className="px-3 py-1 rounded-full bg-muted font-medium">{s.observationCount} observations</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle>Observations Over the Year</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <AreaChart data={s.monthlyData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="count"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.15}
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Observations table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Observations</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Observer</TableHead>
                <TableHead className="hidden sm:table-cell">Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {s.observations.map((obs) => (
                <TableRow key={obs.id}>
                  <TableCell className="whitespace-nowrap">{obs.date}</TableCell>
                  <TableCell>{obs.location}</TableCell>
                  <TableCell>{obs.observer}</TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">{obs.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeciesDetail;
