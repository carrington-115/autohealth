import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Skeleton } from "./ui/skeleton";
import { AlertCircle, CheckCircle, Edit, Download, Share } from "lucide-react";
import { Badge } from "./ui/badge";

interface FormData {
  age: string;
  symptoms: string;
  medicalHistory: string;
  travelHistory: string;
  allergies: string;
}

export function AutoCheckPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    age: "",
    symptoms: "",
    medicalHistory: "",
    travelHistory: "",
    allergies: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true);

    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  if (!submitted) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Health Assessment</CardTitle>
            <CardDescription>
              Please provide accurate information for a comprehensive health
              assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="symptoms">Symptoms *</Label>
                <Textarea
                  id="symptoms"
                  placeholder="Describe your symptoms in detail..."
                  value={formData.symptoms}
                  onChange={(e) =>
                    setFormData({ ...formData, symptoms: e.target.value })
                  }
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="medicalHistory">Medical History *</Label>
                <Textarea
                  id="medicalHistory"
                  placeholder="Any pre-existing conditions, past surgeries, etc..."
                  value={formData.medicalHistory}
                  onChange={(e) =>
                    setFormData({ ...formData, medicalHistory: e.target.value })
                  }
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="travelHistory">Travel History *</Label>
                <Select
                  value={formData.travelHistory}
                  onValueChange={(value: any) =>
                    setFormData({ ...formData, travelHistory: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select travel history" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No recent travel</SelectItem>
                    <SelectItem value="domestic">
                      Domestic travel (last 30 days)
                    </SelectItem>
                    <SelectItem value="international">
                      International travel (last 30 days)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="allergies">Allergies *</Label>
                <Input
                  id="allergies"
                  placeholder="e.g., Penicillin, Peanuts, None"
                  value={formData.allergies}
                  onChange={(e) =>
                    setFormData({ ...formData, allergies: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Submit Assessment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex h-full">
      {/* Left Panel - Summary */}
      <div className="w-2/5 bg-blue-50 p-6 overflow-auto border-r border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-900">Assessment Summary</h2>
          <Button variant="outline" size="sm" onClick={handleEdit}>
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                Age
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{formData.age} years old</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                Symptoms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{formData.symptoms}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                Medical History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{formData.medicalHistory}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                Travel History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{formData.travelHistory}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                Allergies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{formData.allergies}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Panel - Report */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl">
          <h2 className="text-gray-900 mb-6">Health Assessment Report</h2>

          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          ) : (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Risk Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                      Moderate Risk
                    </Badge>
                  </div>
                  <p className="text-gray-700">
                    Based on the provided symptoms and medical history, your
                    condition appears to be of moderate concern. We recommend
                    consulting with a healthcare professional for a
                    comprehensive evaluation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Schedule an appointment with your primary care physician
                        within the next 3-5 days
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Monitor your symptoms and keep a daily log
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Stay hydrated and get adequate rest
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Avoid self-medication without professional guidance
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      1. <strong>Immediate Action:</strong> If symptoms worsen
                      or you experience severe pain, difficulty breathing, or
                      other emergency symptoms, seek immediate medical
                      attention.
                    </p>
                    <p className="text-gray-700">
                      2. <strong>Follow-up:</strong> Book an appointment with a
                      healthcare provider to discuss your symptoms and receive
                      personalized medical advice.
                    </p>
                    <p className="text-gray-700">
                      3. <strong>Documentation:</strong> Bring this assessment
                      report to your appointment along with any additional
                      information about symptom progression.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
                <Button variant="outline">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
