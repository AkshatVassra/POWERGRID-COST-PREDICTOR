import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { HighRiskTable } from "@/components/dashboard/HighRiskTable";
import { CostComparisonChart } from "@/components/charts/CostComparisonChart";
import { TimelineComparisonChart } from "@/components/charts/TimelineComparisonChart";
import { mockProjects, dashboardStats } from "@/data/mockData";
import { 
  Clock, 
  IndianRupee, 
  FolderKanban, 
  AlertTriangle,
  TrendingUp,
  CheckCircle
} from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout 
      title="POWERGRID – Project Cost & Timeline Predictor"
      subtitle="AI-powered predictions for infrastructure project management"
    >
      <div className="space-y-8 animate-fade-in">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <StatCard
            title="Avg Cost Overrun"
            value={`${dashboardStats.avgCostOverrun}%`}
            icon={<IndianRupee className="w-6 h-6" />}
            variant="warning"
            trend={{ value: 2.3, label: "vs last month" }}
          />
          <StatCard
            title="Avg Delay"
            value={`${dashboardStats.avgDelay}%`}
            icon={<Clock className="w-6 h-6" />}
            variant="danger"
            trend={{ value: -1.5, label: "vs last month" }}
          />
          <StatCard
            title="Total Projects"
            value={dashboardStats.totalProjects}
            icon={<FolderKanban className="w-6 h-6" />}
            variant="primary"
          />
          <StatCard
            title="Active Projects"
            value={dashboardStats.activeProjects}
            icon={<TrendingUp className="w-6 h-6" />}
            variant="accent"
          />
          <StatCard
            title="High Risk"
            value={dashboardStats.highRiskProjects}
            icon={<AlertTriangle className="w-6 h-6" />}
            variant="danger"
          />
          <StatCard
            title="On Track"
            value={dashboardStats.onTrackProjects}
            icon={<CheckCircle className="w-6 h-6" />}
            variant="success"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CostComparisonChart />
          <TimelineComparisonChart />
        </div>

        {/* High Risk Projects Table */}
        <HighRiskTable projects={mockProjects} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
