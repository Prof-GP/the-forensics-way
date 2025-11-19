// src/data/samples.ts

// Define the interface for a single malware sample (optional but recommended for safety)
export interface MalwareSample {
  id: string;
  name: string;
  sha256: string;
  description: string;
  family?: string; // Optional field
  analysisLink?: string; // Optional field
  status: 'submitted' | 'analyzing' | 'in-progress' | 'completed';
  dateAdded: string;
  lastUpdated: string;
}

// This array holds all the static, public data for your tracking board.
export const initialSamples: MalwareSample[] = [
  // When you receive a new sample via email, paste its JSON object here.
  {
    id: "1",
    name: "ZoomInfoContactContributor.exe",
    sha256: "2dfa06108c4fff621d98183c1a9c50f9b36c0b6b2e1633e18ff5adcdcca01be2",
    description: "infostealer hidden as a Zoom utility",
    family: "Unknown",
    analysisLink: "https://practicalforensics.substack.com/p/malware-analysis-zoominfocontactcontributorexe",
    status: "completed",
    dateAdded: "2025-11-09T14:38:00.000Z",
    lastUpdated: "2025-11-09T14:38:00.000Z"
  },
  // Keep adding your samples here.
];