import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projectTypes, terrainTypes, regions } from "@/data/mockData";
import { Sparkles, ArrowRight } from "lucide-react";

interface FormData {
  projectType: string;
  terrain: string;
  estimatedCost: string;
  duration: string;
  labourAvailability: number;
  materialAvailability: number;
  regulatoryDelay: number;
  weatherSeverity: number;
  vendorRating: number;
  manpowerSkill: number;
  region: string;
}

const NewProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    terrain: "",
    estimatedCost: "",
    duration: "",
    labourAvailability: 70,
    materialAvailability: 80,
    regulatoryDelay: 30,
    weatherSeverity: 40,
    vendorRating: 75,
    manpowerSkill: 70,
    region: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to results with form data
    navigate('/results', { state: { formData } });
  };

  const updateField = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <DashboardLayout 
      title="New Project Prediction"
      subtitle="Enter project details to get AI-powered cost and timeline predictions"
    >
      <div className="max-w-4xl mx-auto animate-fade-in">
        <form onSubmit={handleSubmit}>
          <Card className="shadow-lg border-2">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                Project Details
              </CardTitle>
              <CardDescription>
                Fill in the project parameters for accurate ML-based predictions
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project Type */}
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select 
                    value={formData.projectType} 
                    onValueChange={(v) => updateField('projectType', v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Terrain */}
                <div className="space-y-2">
                  <Label htmlFor="terrain">Terrain Type</Label>
                  <Select 
                    value={formData.terrain} 
                    onValueChange={(v) => updateField('terrain', v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select terrain" />
                    </SelectTrigger>
                    <SelectContent>
                      {terrainTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Region */}
                <div className="space-y-2">
                  <Label htmlFor="region">Region</Label>
                  <Select 
                    value={formData.region} 
                    onValueChange={(v) => updateField('region', v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map(region => (
                        <SelectItem key={region} value={region}>{region}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Estimated Cost */}
                <div className="space-y-2">
                  <Label htmlFor="estimatedCost">Estimated Cost (₹ Crores)</Label>
                  <Input
                    id="estimatedCost"
                    type="number"
                    placeholder="e.g., 250"
                    value={formData.estimatedCost}
                    onChange={(e) => updateField('estimatedCost', e.target.value)}
                  />
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <Label htmlFor="duration">Planned Duration (Days)</Label>
                  <Input
                    id="duration"
                    type="number"
                    placeholder="e.g., 180"
                    value={formData.duration}
                    onChange={(e) => updateField('duration', e.target.value)}
                  />
                </div>

                {/* Vendor Rating */}
                <div className="space-y-2">
                  <Label>Vendor Rating: {formData.vendorRating}%</Label>
                  <Slider
                    value={[formData.vendorRating]}
                    onValueChange={([v]) => updateField('vendorRating', v)}
                    max={100}
                    step={5}
                    className="mt-3"
                  />
                </div>

                {/* Labour Availability */}
                <div className="space-y-2">
                  <Label>Labour Availability: {formData.labourAvailability}%</Label>
                  <Slider
                    value={[formData.labourAvailability]}
                    onValueChange={([v]) => updateField('labourAvailability', v)}
                    max={100}
                    step={5}
                    className="mt-3"
                  />
                </div>

                {/* Material Availability */}
                <div className="space-y-2">
                  <Label>Material Availability: {formData.materialAvailability}%</Label>
                  <Slider
                    value={[formData.materialAvailability]}
                    onValueChange={([v]) => updateField('materialAvailability', v)}
                    max={100}
                    step={5}
                    className="mt-3"
                  />
                </div>

                {/* Manpower Skill */}
                <div className="space-y-2">
                  <Label>Manpower Skill Level: {formData.manpowerSkill}%</Label>
                  <Slider
                    value={[formData.manpowerSkill]}
                    onValueChange={([v]) => updateField('manpowerSkill', v)}
                    max={100}
                    step={5}
                    className="mt-3"
                  />
                </div>

                {/* Regulatory Delay */}
                <div className="space-y-2">
                  <Label>Expected Regulatory Delay: {formData.regulatoryDelay}%</Label>
                  <Slider
                    value={[formData.regulatoryDelay]}
                    onValueChange={([v]) => updateField('regulatoryDelay', v)}
                    max={100}
                    step={5}
                    className="mt-3"
                  />
                </div>

                {/* Weather Severity */}
                <div className="space-y-2 md:col-span-2 lg:col-span-1">
                  <Label>Weather Severity: {formData.weatherSeverity}%</Label>
                  <Slider
                    value={[formData.weatherSeverity]}
                    onValueChange={([v]) => updateField('weatherSeverity', v)}
                    max={100}
                    step={5}
                    className="mt-3"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <Button type="submit" variant="accent" size="lg" className="min-w-[200px]">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Predict
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default NewProject;
