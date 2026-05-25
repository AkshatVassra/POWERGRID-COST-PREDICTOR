import { useLocation, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RiskBadge } from "@/components/dashboard/RiskBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { featureImportance } from "@/data/mockData";
import { 
  Download, 
  TrendingUp, 
  Clock, 
  AlertTriangle,
  BarChart3,
  ArrowLeft,
  FileText
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";

// Mock prediction results based on input
const generatePredictions = () => {
  return {
    costOverrun: 14.2,
    delay: 28,
    riskLevel: "Medium" as const,
    confidence: 87,
    predictedCost: 285,
    predictedDuration: 208,
  };
};

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;
  const predictions = generatePredictions();

  const topFactors = featureImportance.slice(0, 3);

  const plannedVsPredicted = [
    { name: "Cost (₹ Cr)", planned: formData?.estimatedCost || 250, predicted: predictions.predictedCost },
    { name: "Duration (Days)", planned: formData?.duration || 180, predicted: predictions.predictedDuration },
  ];

  return (
    <DashboardLayout 
      title="Prediction Results"
      subtitle="AI-generated cost and timeline predictions for your project"
    >
      <div className="space-y-8 animate-fade-in">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => navigate('/new-project')} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Form
        </Button>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Predicted Cost Overrun"
            value={`${predictions.costOverrun}%`}
            subtitle="Above estimated budget"
            icon={<TrendingUp className="w-6 h-6" />}
            variant="warning"
          />
          <StatCard
            title="Predicted Delay"
            value={`${predictions.delay} days`}
            subtitle="Beyond planned timeline"
            icon={<Clock className="w-6 h-6" />}
            variant="danger"
          />
          <StatCard
            title="Model Confidence"
            value={`${predictions.confidence}%`}
            subtitle="Prediction accuracy"
            icon={<BarChart3 className="w-6 h-6" />}
            variant="primary"
          />
          <Card className="relative overflow-hidden">
            <CardContent className="pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-2">Risk Level</p>
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-warning" />
                <RiskBadge level={predictions.riskLevel} size="lg" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Influencing Factors */}
        <Card className="shadow-lg">
          <CardHeader className="border-b bg-muted/30">
            <CardTitle>Top 3 Influencing Factors</CardTitle>
            <CardDescription>Key factors contributing to the prediction</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topFactors.map((factor, index) => (
                <div 
                  key={factor.feature}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border"
                >
                  <div 
                    className="flex items-center justify-center w-12 h-12 rounded-xl text-2xl font-bold"
                    style={{ backgroundColor: factor.color + '20', color: factor.color }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold">{factor.feature}</p>
                    <p className="text-sm text-muted-foreground">
                      Impact: {(factor.importance * 100).toFixed(0)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Feature Importance Chart */}
          <Card className="shadow-lg">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle>Feature Importance</CardTitle>
              <CardDescription>Contribution of each factor to the prediction</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={featureImportance} layout="vertical" margin={{ left: 100 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" domain={[0, 0.35]} tickFormatter={(v) => `${(v * 100).toFixed(0)}%`} />
                    <YAxis dataKey="feature" type="category" width={100} tick={{ fontSize: 12 }} />
                    <Tooltip 
                      formatter={(value: number) => [`${(value * 100).toFixed(1)}%`, 'Importance']}
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '12px'
                      }}
                    />
                    <Bar dataKey="importance" radius={[0, 4, 4, 0]}>
                      {featureImportance.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Planned vs Predicted */}
          <Card className="shadow-lg">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle>Planned vs Predicted</CardTitle>
              <CardDescription>Comparison of estimated and predicted values</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={plannedVsPredicted} margin={{ top: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '12px'
                      }}
                    />
                    <Bar dataKey="planned" fill="hsl(var(--chart-planned))" name="Planned" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="predicted" fill="hsl(var(--chart-predicted))" name="Predicted" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download Report Button */}
        <div className="flex justify-center">
          <Button variant="accent" size="lg" className="min-w-[250px]">
            <Download className="w-5 h-5 mr-2" />
            Download Report
            <FileText className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Results;
