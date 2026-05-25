export interface Project {
  id: string;
  name: string;
  type: string;
  region: string;
  estimatedCost: number;
  predictedCost: number;
  plannedDuration: number;
  predictedDelay: number;
  riskLevel: "Low" | "Medium" | "High";
  status: "On Track" | "At Risk" | "Delayed";
  completionPercent: number;
}

export const mockProjects: Project[] = [
  {
    id: "PG-2024-001",
    name: "Delhi-NCR Transmission Line",
    type: "Transmission Line",
    region: "North",
    estimatedCost: 250,
    predictedCost: 285,
    plannedDuration: 180,
    predictedDelay: 25,
    riskLevel: "High",
    status: "At Risk",
    completionPercent: 45,
  },
  {
    id: "PG-2024-002",
    name: "Mumbai Substation Upgrade",
    type: "Substation",
    region: "West",
    estimatedCost: 120,
    predictedCost: 128,
    plannedDuration: 90,
    predictedDelay: 8,
    riskLevel: "Medium",
    status: "On Track",
    completionPercent: 72,
  },
  {
    id: "PG-2024-003",
    name: "Chennai Underground Cable",
    type: "Underground Cable",
    region: "South",
    estimatedCost: 180,
    predictedCost: 225,
    plannedDuration: 150,
    predictedDelay: 35,
    riskLevel: "High",
    status: "Delayed",
    completionPercent: 28,
  },
  {
    id: "PG-2024-004",
    name: "Kolkata Grid Expansion",
    type: "Grid Infrastructure",
    region: "East",
    estimatedCost: 95,
    predictedCost: 98,
    plannedDuration: 60,
    predictedDelay: 3,
    riskLevel: "Low",
    status: "On Track",
    completionPercent: 85,
  },
  {
    id: "PG-2024-005",
    name: "Bangalore Smart Grid",
    type: "Smart Grid",
    region: "South",
    estimatedCost: 320,
    predictedCost: 352,
    plannedDuration: 240,
    predictedDelay: 18,
    riskLevel: "Medium",
    status: "On Track",
    completionPercent: 55,
  },
  {
    id: "PG-2024-006",
    name: "Jaipur Solar Integration",
    type: "Renewable Integration",
    region: "North",
    estimatedCost: 210,
    predictedCost: 268,
    plannedDuration: 200,
    predictedDelay: 42,
    riskLevel: "High",
    status: "At Risk",
    completionPercent: 32,
  },
];

export const dashboardStats = {
  avgDelay: 15.8,
  avgCostOverrun: 12.4,
  totalProjects: 156,
  activeProjects: 48,
  highRiskProjects: 12,
  onTrackProjects: 36,
};

export const costComparisonData = [
  { month: "Jan", planned: 45, predicted: 48 },
  { month: "Feb", planned: 52, predicted: 58 },
  { month: "Mar", planned: 48, predicted: 52 },
  { month: "Apr", planned: 70, predicted: 78 },
  { month: "May", planned: 65, predicted: 72 },
  { month: "Jun", planned: 85, predicted: 95 },
];

export const timelineComparisonData = [
  { project: "Project A", planned: 90, predicted: 102 },
  { project: "Project B", planned: 120, predicted: 128 },
  { project: "Project C", planned: 60, predicted: 75 },
  { project: "Project D", planned: 180, predicted: 195 },
  { project: "Project E", planned: 150, predicted: 168 },
];

export const regionData = [
  { region: "North", projects: 42, avgDelay: 18, avgOverrun: 14 },
  { region: "South", projects: 38, avgDelay: 12, avgOverrun: 10 },
  { region: "East", projects: 28, avgDelay: 8, avgOverrun: 6 },
  { region: "West", projects: 35, avgDelay: 15, avgOverrun: 11 },
  { region: "Central", projects: 13, avgDelay: 20, avgOverrun: 16 },
];

export const featureImportance = [
  { feature: "Weather Severity", importance: 0.28, color: "hsl(var(--chart-1))" },
  { feature: "Regulatory Delay", importance: 0.22, color: "hsl(var(--chart-2))" },
  { feature: "Terrain Type", importance: 0.18, color: "hsl(var(--chart-3))" },
  { feature: "Vendor Rating", importance: 0.15, color: "hsl(var(--chart-4))" },
  { feature: "Labour Availability", importance: 0.10, color: "hsl(var(--chart-5))" },
  { feature: "Material Availability", importance: 0.07, color: "hsl(var(--accent))" },
];

export const projectTypes = [
  "Transmission Line",
  "Substation",
  "Underground Cable",
  "Overhead Cable",
  "Grid Infrastructure",
  "Smart Grid",
  "Renewable Integration",
];

export const terrainTypes = [
  "Plain",
  "Hilly",
  "Desert",
  "Coastal",
  "Urban",
  "Forest",
  "Marshy",
];

export const regions = [
  "North",
  "South",
  "East",
  "West",
  "Central",
  "North-East",
];
