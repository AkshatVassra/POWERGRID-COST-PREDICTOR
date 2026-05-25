import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Target, 
  Users, 
  Truck, 
  FileCheck, 
  Building2,
  Cable,
  Factory,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const About = () => {
  const capabilities = [
    {
      icon: Cable,
      title: "Transmission Lines",
      description: "Construction and maintenance of high-voltage transmission lines across diverse terrains"
    },
    {
      icon: Building2,
      title: "Substations",
      description: "Development of modern substations for efficient power distribution"
    },
    {
      icon: Factory,
      title: "Underground Cables",
      description: "Installation of underground and overhead cable systems in urban areas"
    },
    {
      icon: Target,
      title: "Grid Infrastructure",
      description: "Building robust grid infrastructure for reliable power transmission"
    },
  ];

  const challenges = [
    {
      icon: Truck,
      title: "Material Coordination",
      description: "Managing timely procurement and delivery of construction materials across remote locations"
    },
    {
      icon: Users,
      title: "Manpower Management",
      description: "Coordinating skilled workforce across multiple project sites nationwide"
    },
    {
      icon: FileCheck,
      title: "Vendor Coordination",
      description: "Ensuring quality and timeline adherence from multiple vendors and contractors"
    },
  ];

  const goals = [
    "Reduce project cost overruns through predictive analytics",
    "Minimize timeline delays with AI-powered risk assessment",
    "Optimize resource allocation across projects",
    "Improve decision-making with data-driven insights",
    "Enable proactive risk mitigation strategies",
  ];

  return (
    <DashboardLayout 
      title="About POWERGRID"
      subtitle="Power Grid Corporation of India Limited - Building India's Power Infrastructure"
    >
      <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
        {/* Hero Section */}
        <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20" />
          <CardContent className="pt-8 pb-8 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-accent rounded-2xl">
                <Zap className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">POWERGRID</h2>
                <p className="text-primary-foreground/80">Powering India's Growth</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-primary-foreground/90">
              Power Grid Corporation of India Limited is India's largest electric power transmission utility. 
              We are responsible for building and operating the national power grid, ensuring reliable and 
              efficient power transmission across the nation.
            </p>
          </CardContent>
        </Card>

        {/* What We Do */}
        <div>
          <h3 className="text-2xl font-bold mb-6">What We Build</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((item) => (
              <Card key={item.title} className="hover:shadow-md transition-shadow group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Challenges We Address */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Challenges We Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {challenges.map((item) => (
              <Card key={item.title} className="border-l-4 border-l-accent hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Goals */}
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              AI Prediction System Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {goals.map((goal, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border"
                >
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm">{goal}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <Card className="text-center">
          <CardContent className="pt-8 pb-8">
            <p className="text-muted-foreground">
              This prototype demonstrates an AI-powered cost and timeline prediction system 
              designed to help POWERGRID project managers make data-driven decisions and 
              prevent cost overruns and delays in infrastructure projects.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default About;
