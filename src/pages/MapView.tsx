import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { species } from "@/data/species";
import { MapPin } from "lucide-react";

const sampleLocations = [
  { name: "Cairngorms National Park", lat: "57.05°N", lng: "3.60°W", species: ["Red Squirrel", "Scottish Wildcat", "Mountain Hare"] },
  { name: "Isle of Mull", lat: "56.45°N", lng: "6.00°W", species: ["Eurasian Otter", "Red Deer"] },
  { name: "Glen Affric", lat: "57.25°N", lng: "5.05°W", species: ["Pine Marten", "Red Squirrel"] },
  { name: "Orkney Islands", lat: "59.00°N", lng: "3.00°W", species: ["Harbour Seal"] },
  { name: "Loch Lomond", lat: "56.10°N", lng: "4.60°W", species: ["Eurasian Badger", "Red Deer"] },
  { name: "Shetland", lat: "60.40°N", lng: "1.15°W", species: ["Eurasian Otter", "Harbour Seal"] },
];

const MapView = () => {
  return (
    <div className="container py-10">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Observation Map</h1>
      <p className="text-muted-foreground mb-8">Key locations where Scottish mammals have been observed.</p>

      {/* Placeholder map */}
      <Card className="mb-10 overflow-hidden">
        <CardContent className="p-0">
          <div className="relative bg-nature-forest/10 h-[400px] flex items-center justify-center">
            {/* Stylised Scotland outline placeholder */}
            <div className="text-center">
              <div className="text-8xl mb-4">🗺️</div>
              <p className="text-lg font-display font-semibold text-foreground">Interactive Map Placeholder</p>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                In a full implementation, this would display an interactive map (e.g. Leaflet or Google Maps)
                showing observation pins across Scotland.
              </p>
            </div>

            {/* Decorative pins */}
            {[
              { top: "20%", left: "45%" },
              { top: "35%", left: "55%" },
              { top: "50%", left: "40%" },
              { top: "30%", left: "30%" },
              { top: "60%", left: "50%" },
              { top: "15%", left: "55%" },
            ].map((pos, i) => (
              <MapPin
                key={i}
                className="absolute h-6 w-6 text-accent animate-pulse"
                style={{ top: pos.top, left: pos.left, animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Location cards */}
      <h2 className="font-display text-2xl font-bold mb-4">Key Observation Sites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleLocations.map((loc) => (
          <Card key={loc.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                {loc.name}
              </CardTitle>
              <p className="text-xs text-muted-foreground">{loc.lat}, {loc.lng}</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {loc.species.map((sp) => {
                  const found = species.find((s) => s.name === sp);
                  return (
                    <span key={sp} className="text-xs px-2 py-0.5 rounded-full bg-muted">
                      {found?.emoji} {sp}
                    </span>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MapView;
