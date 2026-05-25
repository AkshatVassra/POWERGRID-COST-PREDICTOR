import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { regionData, projectTypes, regions } from "@/data/mockData";
import { useState } from "react";
import { MapPin, Filter, TrendingUp, Clock, AlertTriangle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Simplified India map representation with regions
const IndiaMapVisualization = () => {
  const regionPositions = {
    North: { top: "15%", left: "45%", delay: 18 },
    South: { top: "70%", left: "50%", delay: 12 },
    East: { top: "40%", left: "75%", delay: 8 },
    West: { top: "45%", left: "25%", delay: 15 },
    Central: { top: "45%", left: "50%", delay: 20 },
    "North-East": { top: "30%", left: "85%", delay: 22 },
  };

  const getDelayColor = (delay: number) => {
    if (delay <= 10) return "bg-success";
    if (delay <= 15) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <div className="relative w-full h-[400px] bg-muted/20 rounded-2xl border overflow-hidden">
      {/* India outline simplified */}
      <svg 
        viewBox="0 0 400 450" 
        className="absolute inset-0 w-full h-full opacity-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M200 50 L280 80 L320 150 L350 200 L340 280 L300 350 L250 400 L200 420 L150 400 L100 350 L60 280 L50 200 L80 150 L120 80 Z" />
      </svg>

      {/* Region markers */}
      {Object.entries(regionPositions).map(([region, pos]) => (
        <div
          key={region}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
          style={{ top: pos.top, left: pos.left }}
        >
          <div className={`
            w-12 h-12 rounded-full flex items-center justify-center 
            ${getDelayColor(pos.delay)} text-white font-bold text-sm
            shadow-lg transition-all duration-300 group-hover:scale-110
            animate-pulse
          `}>
            {pos.delay}%
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 
            bg-card border rounded-lg px-3 py-1 shadow-md text-sm font-medium
            opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
            {region}
            <div className="text-xs text-muted-foreground">Avg Delay: {pos.delay}%</div>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl p-4 border shadow-md">
        <p className="text-sm font-semibold mb-2">Delay Hotspots</p>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-success" />
            <span>≤10%</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-warning" />
            <span>11-15%</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span>&gt;15%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Insights = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  return (
    <DashboardLayout 
      title="Project Insights"
      subtitle="Geographic analysis and project performance trends"
    >
      <div className="space-y-8 animate-fade-in">
        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Filters:</span>
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Project Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Project Types</SelectItem>
                  {projectTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {regions.map(region => (
                    <SelectItem key={region} value={region}>{region}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Map and Region Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* India Map */}
          <Card className="lg:col-span-2 shadow-lg">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                Project Hotspots by Delay
              </CardTitle>
              <CardDescription>Interactive map showing average delay percentages by region</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <IndiaMapVisualization />
            </CardContent>
          </Card>

          {/* Region Stats */}
          <Card className="shadow-lg">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle>Region Statistics</CardTitle>
              <CardDescription>Project distribution and performance</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {regionData.map((region) => (
                  <div 
                    key={region.region}
                    className="p-4 rounded-xl bg-muted/30 border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{region.region}</span>
                      <span className="text-sm text-muted-foreground">{region.projects} projects</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-warning" />
                        <span className="text-muted-foreground">Delay:</span>
                        <span className="font-medium">{region.avgDelay}%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-destructive" />
                        <span className="text-muted-foreground">Overrun:</span>
                        <span className="font-medium">{region.avgOverrun}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Comparison Chart */}
        <Card className="shadow-lg">
          <CardHeader className="border-b bg-muted/30">
            <CardTitle>Regional Performance Comparison</CardTitle>
            <CardDescription>Average delay and cost overrun by region</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '12px'
                    }}
                  />
                  <Bar dataKey="avgDelay" fill="hsl(var(--warning))" name="Avg Delay %" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="avgOverrun" fill="hsl(var(--destructive))" name="Avg Cost Overrun %" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Insights;
