import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { species } from "@/data/species";
import { toast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const SubmitObservation = () => {
  const [selectedSpecies, setSelectedSpecies] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Observation submitted!",
      description: "Thank you — this is a prototype, so no data was actually saved.",
    });
  };

  return (
    <div className="container py-10 max-w-2xl">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Submit an Observation</h1>
      <p className="text-muted-foreground mb-8">Record a mammal sighting to help track Scottish biodiversity.</p>

      <Card>
        <CardHeader>
          <CardTitle>New Sighting</CardTitle>
          <CardDescription>Fill in the details of what you observed.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Species */}
            <div className="space-y-2">
              <Label htmlFor="species">Species</Label>
              <Select value={selectedSpecies} onValueChange={setSelectedSpecies}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a species" />
                </SelectTrigger>
                <SelectContent>
                  {species.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.emoji} {s.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input type="date" id="date" />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="e.g. Glen Affric, Highlands" />
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Describe what you saw..." rows={4} />
            </div>

            {/* Photo placeholder */}
            <div className="space-y-2">
              <Label>Photo (optional)</Label>
              <div className="border-2 border-dashed rounded-lg p-8 text-center text-muted-foreground cursor-pointer hover:border-primary/50 transition-colors">
                <Upload className="mx-auto h-8 w-8 mb-2" />
                <p className="text-sm">Click or drag to upload a photo</p>
                <p className="text-xs">(Placeholder — uploads are not functional in this prototype)</p>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Submit Observation
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubmitObservation;
