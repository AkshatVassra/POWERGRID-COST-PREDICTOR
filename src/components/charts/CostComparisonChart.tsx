import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { costComparisonData } from "@/data/mockData";

export function CostComparisonChart() {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="font-semibold text-lg">Planned vs Predicted Cost</h3>
        <p className="text-sm text-muted-foreground">Monthly cost comparison (₹ Crores)</p>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={costComparisonData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="plannedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-planned))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--chart-planned))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-predicted))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--chart-predicted))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="planned" 
              stroke="hsl(var(--chart-planned))" 
              strokeWidth={2}
              fill="url(#plannedGradient)" 
              name="Planned Cost"
            />
            <Area 
              type="monotone" 
              dataKey="predicted" 
              stroke="hsl(var(--chart-predicted))" 
              strokeWidth={2}
              fill="url(#predictedGradient)" 
              name="Predicted Cost"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
