import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { species, totalObservations, totalSpecies } from "@/data/species";
import { TreePine, Eye, PawPrint, ArrowRight } from "lucide-react";

const featuredSpecies = species.slice(0, 4);

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-primary py-20 md:py-32">
        <div className="container text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Scottish Mammal Observations
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
            Discover and record Scotland's incredible mammal biodiversity — from the Highland Tiger to the coastal otter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/species">Browse Species</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/submit">Submit a Sighting</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 -mt-20">
          {[
            { icon: PawPrint, label: "Species Tracked", value: totalSpecies },
            { icon: Eye, label: "Total Observations", value: totalObservations.toLocaleString() },
            { icon: TreePine, label: "Habitats Covered", value: "12+" },
          ].map((stat) => (
            <Card key={stat.label} className="text-center shadow-md">
              <CardContent className="pt-6">
                <stat.icon className="mx-auto h-8 w-8 text-accent mb-2" />
                <p className="text-3xl font-bold font-display text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Species */}
      <section className="container pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Featured Species</h2>
          <Button asChild variant="ghost" className="gap-1">
            <Link to="/species">View all <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSpecies.map((s) => (
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
      </section>
    </div>
  );
};

export default Index;
