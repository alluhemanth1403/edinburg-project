export interface Species {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  habitat: string;
  conservationStatus: "Least Concern" | "Near Threatened" | "Vulnerable" | "Endangered" | "Critically Endangered";
  observationCount: number;
  emoji: string;
  observations: Observation[];
  monthlyData: { month: string; count: number }[];
}

export interface Observation {
  id: string;
  date: string;
  location: string;
  observer: string;
  notes: string;
}

export const species: Species[] = [
  {
    id: "red-squirrel",
    name: "Red Squirrel",
    scientificName: "Sciurus vulgaris",
    description: "The red squirrel is native to Britain and is smaller than the invasive grey squirrel. Scotland remains one of its last strongholds in the UK, particularly in the Highlands and parts of the Borders.",
    habitat: "Coniferous and mixed woodland, particularly Caledonian pine forest",
    conservationStatus: "Near Threatened",
    observationCount: 342,
    emoji: "🐿️",
    observations: [
      { id: "rs1", date: "2025-11-15", location: "Abernethy Forest, Cairngorms", observer: "J. MacDonald", notes: "Adult feeding on pine cones" },
      { id: "rs2", date: "2025-10-22", location: "Formby, Borders", observer: "S. Campbell", notes: "Two juveniles spotted near drey" },
      { id: "rs3", date: "2025-09-08", location: "Brownsea Island reserve", observer: "A. Fraser", notes: "Single adult, very tame" },
    ],
    monthlyData: [
      { month: "Jan", count: 18 }, { month: "Feb", count: 22 }, { month: "Mar", count: 35 },
      { month: "Apr", count: 42 }, { month: "May", count: 38 }, { month: "Jun", count: 30 },
      { month: "Jul", count: 28 }, { month: "Aug", count: 32 }, { month: "Sep", count: 40 },
      { month: "Oct", count: 34 }, { month: "Nov", count: 25 }, { month: "Dec", count: 15 },
    ],
  },
  {
    id: "pine-marten",
    name: "Pine Marten",
    scientificName: "Martes martes",
    description: "Once nearly extinct in Britain, the pine marten has made a remarkable recovery in the Scottish Highlands. This elusive, cat-sized predator is an agile climber and mostly nocturnal.",
    habitat: "Mature woodland, rocky hillsides, crags",
    conservationStatus: "Least Concern",
    observationCount: 156,
    emoji: "🦊",
    observations: [
      { id: "pm1", date: "2025-12-01", location: "Glen Affric", observer: "R. Stewart", notes: "Seen at supplementary feeding station" },
      { id: "pm2", date: "2025-11-10", location: "Rothiemurchus Forest", observer: "M. Wilson", notes: "Caught on trail camera at night" },
    ],
    monthlyData: [
      { month: "Jan", count: 8 }, { month: "Feb", count: 10 }, { month: "Mar", count: 15 },
      { month: "Apr", count: 18 }, { month: "May", count: 20 }, { month: "Jun", count: 16 },
      { month: "Jul", count: 12 }, { month: "Aug", count: 14 }, { month: "Sep", count: 16 },
      { month: "Oct", count: 12 }, { month: "Nov", count: 9 }, { month: "Dec", count: 6 },
    ],
  },
  {
    id: "eurasian-otter",
    name: "Eurasian Otter",
    scientificName: "Lutra lutra",
    description: "Scotland is one of the best places in Europe to see otters. They are found across the country, from the remote Highlands to urban rivers. Coastal otters in Scotland are unusual as they are often active during the day.",
    habitat: "Rivers, lochs, coastal waters, estuaries",
    conservationStatus: "Near Threatened",
    observationCount: 278,
    emoji: "🦦",
    observations: [
      { id: "eo1", date: "2025-12-05", location: "Isle of Mull coast", observer: "K. Henderson", notes: "Mother with two cubs fishing in kelp beds" },
      { id: "eo2", date: "2025-11-20", location: "River Tay, Perth", observer: "D. Murray", notes: "Single adult, early morning" },
      { id: "eo3", date: "2025-10-30", location: "Shetland, Lerwick harbour", observer: "E. Anderson", notes: "Otter eating crab on slipway" },
    ],
    monthlyData: [
      { month: "Jan", count: 20 }, { month: "Feb", count: 22 }, { month: "Mar", count: 28 },
      { month: "Apr", count: 30 }, { month: "May", count: 25 }, { month: "Jun", count: 22 },
      { month: "Jul", count: 20 }, { month: "Aug", count: 24 }, { month: "Sep", count: 26 },
      { month: "Oct", count: 28 }, { month: "Nov", count: 18 }, { month: "Dec", count: 15 },
    ],
  },
  {
    id: "red-deer",
    name: "Red Deer",
    scientificName: "Cervus elaphus",
    description: "The red deer is the UK's largest land mammal and an iconic symbol of the Scottish Highlands. Stags can weigh up to 190 kg and their antlers can span over a metre. The annual rut in autumn is a spectacular wildlife event.",
    habitat: "Open moorland, mountain slopes, woodland edges",
    conservationStatus: "Least Concern",
    observationCount: 512,
    emoji: "🦌",
    observations: [
      { id: "rd1", date: "2025-10-15", location: "Glen Coe", observer: "P. MacGregor", notes: "Large stag with full antlers, rutting season" },
      { id: "rd2", date: "2025-09-25", location: "Isle of Rum", observer: "L. Thomson", notes: "Herd of ~30 hinds with calves" },
    ],
    monthlyData: [
      { month: "Jan", count: 35 }, { month: "Feb", count: 30 }, { month: "Mar", count: 38 },
      { month: "Apr", count: 42 }, { month: "May", count: 48 }, { month: "Jun", count: 50 },
      { month: "Jul", count: 45 }, { month: "Aug", count: 48 }, { month: "Sep", count: 55 },
      { month: "Oct", count: 60 }, { month: "Nov", count: 40 }, { month: "Dec", count: 30 },
    ],
  },
  {
    id: "scottish-wildcat",
    name: "Scottish Wildcat",
    scientificName: "Felis silvestris grampia",
    description: "The Scottish wildcat is Britain's rarest mammal and one of the most endangered cats in the world. Often called the 'Highland Tiger', it is larger and more robustly built than a domestic cat with a distinctive bushy, ringed tail.",
    habitat: "Remote Highland forests, scrubland, moorland margins",
    conservationStatus: "Critically Endangered",
    observationCount: 23,
    emoji: "🐱",
    observations: [
      { id: "sw1", date: "2025-08-12", location: "Cairngorms National Park", observer: "NatureScot Team", notes: "Camera trap image — confirmed pure wildcat" },
    ],
    monthlyData: [
      { month: "Jan", count: 1 }, { month: "Feb", count: 2 }, { month: "Mar", count: 3 },
      { month: "Apr", count: 3 }, { month: "May", count: 2 }, { month: "Jun", count: 2 },
      { month: "Jul", count: 2 }, { month: "Aug", count: 3 }, { month: "Sep", count: 2 },
      { month: "Oct", count: 1 }, { month: "Nov", count: 1 }, { month: "Dec", count: 1 },
    ],
  },
  {
    id: "mountain-hare",
    name: "Mountain Hare",
    scientificName: "Lepus timidus",
    description: "The mountain hare is Scotland's only native hare. It turns white in winter for camouflage against snow, making it one of few British mammals to change coat colour seasonally.",
    habitat: "Upland heather moorland, mountain plateaus above 300m",
    conservationStatus: "Least Concern",
    observationCount: 198,
    emoji: "🐇",
    observations: [
      { id: "mh1", date: "2025-12-10", location: "Cairngorm plateau", observer: "H. Ross", notes: "White winter coat, sitting in snow hollow" },
      { id: "mh2", date: "2025-07-18", location: "Angus Glens", observer: "C. Brown", notes: "Brown summer coat, group of 4" },
    ],
    monthlyData: [
      { month: "Jan", count: 12 }, { month: "Feb", count: 15 }, { month: "Mar", count: 20 },
      { month: "Apr", count: 22 }, { month: "May", count: 18 }, { month: "Jun", count: 15 },
      { month: "Jul", count: 16 }, { month: "Aug", count: 18 }, { month: "Sep", count: 20 },
      { month: "Oct", count: 16 }, { month: "Nov", count: 14 }, { month: "Dec", count: 12 },
    ],
  },
  {
    id: "harbour-seal",
    name: "Harbour Seal",
    scientificName: "Phoca vitulina",
    description: "Harbour seals are commonly seen around Scotland's coastline, often hauled out on rocky shores and sandbanks. Scotland holds approximately 80% of the UK's harbour seal population.",
    habitat: "Sheltered coastal waters, estuaries, sea lochs, rocky shores",
    conservationStatus: "Least Concern",
    observationCount: 435,
    emoji: "🦭",
    observations: [
      { id: "hs1", date: "2025-11-28", location: "Loch Fleet, Sutherland", observer: "N. Mackenzie", notes: "Group of ~20 hauled out on sandbar" },
      { id: "hs2", date: "2025-10-05", location: "Orkney, Scapa Flow", observer: "B. Sinclair", notes: "Pup with mother in shallow water" },
    ],
    monthlyData: [
      { month: "Jan", count: 30 }, { month: "Feb", count: 28 }, { month: "Mar", count: 32 },
      { month: "Apr", count: 35 }, { month: "May", count: 40 }, { month: "Jun", count: 50 },
      { month: "Jul", count: 55 }, { month: "Aug", count: 48 }, { month: "Sep", count: 42 },
      { month: "Oct", count: 35 }, { month: "Nov", count: 25 }, { month: "Dec", count: 20 },
    ],
  },
  {
    id: "badger",
    name: "Eurasian Badger",
    scientificName: "Meles meles",
    description: "Badgers are widespread across lowland Scotland, living in complex underground sett systems. They are nocturnal and rarely seen during the day. Badger watching hides have become popular wildlife tourism activities.",
    habitat: "Deciduous woodland, farmland edges, suburban areas",
    conservationStatus: "Least Concern",
    observationCount: 267,
    emoji: "🦡",
    observations: [
      { id: "bg1", date: "2025-09-14", location: "Perthshire woodland", observer: "G. Allan", notes: "Family group of 5 emerging at dusk" },
      { id: "bg2", date: "2025-08-22", location: "Lothians farmland", observer: "F. Reid", notes: "Single adult crossing field track" },
    ],
    monthlyData: [
      { month: "Jan", count: 10 }, { month: "Feb", count: 12 }, { month: "Mar", count: 18 },
      { month: "Apr", count: 25 }, { month: "May", count: 30 }, { month: "Jun", count: 35 },
      { month: "Jul", count: 32 }, { month: "Aug", count: 28 }, { month: "Sep", count: 25 },
      { month: "Oct", count: 20 }, { month: "Nov", count: 18 }, { month: "Dec", count: 14 },
    ],
  },
];

export const totalObservations = species.reduce((sum, s) => sum + s.observationCount, 0);
export const totalSpecies = species.length;

export function getSpeciesById(id: string): Species | undefined {
  return species.find((s) => s.id === id);
}
