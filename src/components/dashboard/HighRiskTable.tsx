import { Project } from "@/data/mockData";
import { RiskBadge } from "./RiskBadge";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HighRiskTableProps {
  projects: Project[];
}

export function HighRiskTable({ projects }: HighRiskTableProps) {
  const navigate = useNavigate();
  
  const highRiskProjects = projects
    .filter(p => p.riskLevel === "High" || p.riskLevel === "Medium")
    .sort((a, b) => {
      const riskOrder = { High: 0, Medium: 1, Low: 2 };
      return riskOrder[a.riskLevel] - riskOrder[b.riskLevel];
    })
    .slice(0, 5);

  return (
    <div className="rounded-2xl border bg-card shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b bg-muted/30">
        <div>
          <h3 className="font-semibold text-lg">High Risk Projects</h3>
          <p className="text-sm text-muted-foreground">Projects requiring immediate attention</p>
        </div>
        <Button variant="ghost" size="sm" className="text-primary" onClick={() => navigate('/insights')}>
          View All
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/20">
              <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project</th>
              <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Region</th>
              <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cost Overrun</th>
              <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Delay</th>
              <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Progress</th>
              <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Risk</th>
            </tr>
          </thead>
          <tbody>
            {highRiskProjects.map((project, index) => {
              const costOverrun = ((project.predictedCost - project.estimatedCost) / project.estimatedCost * 100).toFixed(1);
              return (
                <tr 
                  key={project.id} 
                  className="border-b last:border-0 hover:bg-muted/30 transition-colors cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium">{project.name}</p>
                      <p className="text-xs text-muted-foreground">{project.id}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{project.region}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-destructive font-medium">
                      <TrendingUp className="w-4 h-4" />
                      +{costOverrun}%
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-warning font-medium">+{project.predictedDelay} days</span>
                  </td>
                  <td className="px-6 py-4 min-w-[120px]">
                    <div className="space-y-1">
                      <Progress value={project.completionPercent} className="h-2" />
                      <span className="text-xs text-muted-foreground">{project.completionPercent}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <RiskBadge level={project.riskLevel} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
