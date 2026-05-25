import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import { timelineComparisonData } from "@/data/mockData";

export function TimelineComparisonChart() {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="font-semibold text-lg">Planned vs Predicted Timeline</h3>
        <p className="text-sm text-muted-foreground">Project duration comparison (Days)</p>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={timelineComparisonData} layout="vertical" margin={{ top: 10, right: 10, left: 60, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false} />
            <XAxis 
              type="number"
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              dataKey="project"
              type="category"
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              width={70}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              cursor={{ fill: 'hsl(var(--muted))', opacity: 0.3 }}
            />
            <Legend />
            <Bar 
              dataKey="planned" 
              fill="hsl(var(--chart-planned))" 
              radius={[0, 4, 4, 0]}
              name="Planned Duration"
              barSize={16}
            />
            <Bar 
              dataKey="predicted" 
              fill="hsl(var(--chart-predicted))" 
              radius={[0, 4, 4, 0]}
              name="Predicted Duration"
              barSize={16}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
