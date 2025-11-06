import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Switch } from './ui/switch';
import { Skeleton } from './ui/skeleton';
import { Upload, FileImage, Edit, Download, AlertTriangle } from 'lucide-react';
import { Badge } from './ui/badge';

interface FormData {
  prescriptionImage: File | null;
  prescriptionName: string;
  symptoms: string;
  duration: string;
  customQuery: string;
  includeAlternates: boolean;
}

export function AutoScanPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    prescriptionImage: null,
    prescriptionName: '',
    symptoms: '',
    duration: '',
    customQuery: '',
    includeAlternates: false,
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setFormData({ ...formData, prescriptionImage: file });
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true);
    
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
            <CardTitle>Prescription Analysis</CardTitle>
            <CardDescription>
              Upload your prescription for detailed analysis and recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label>Prescription Image *</Label>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {imagePreview ? (
                    <div className="space-y-4">
                      <img src={imagePreview} alt="Prescription preview" className="max-h-48 mx-auto rounded" />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setImagePreview(null);
                          setFormData({ ...formData, prescriptionImage: null });
                        }}
                      >
                        Remove Image
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p className="mb-2 text-gray-700">
                        Drag and drop your prescription image here, or
                      </p>
                      <label>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                          required
                        />
                        <span className="text-blue-600 hover:underline cursor-pointer">
                          browse files
                        </span>
                      </label>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="prescriptionName">Prescription Name *</Label>
                <Input
                  id="prescriptionName"
                  placeholder="Enter medication name"
                  value={formData.prescriptionName}
                  onChange={(e) => setFormData({ ...formData, prescriptionName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="symptoms">Symptoms *</Label>
                <Textarea
                  id="symptoms"
                  placeholder="Describe your symptoms..."
                  value={formData.symptoms}
                  onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration of Symptoms *</Label>
                <Input
                  id="duration"
                  placeholder="e.g., 3 days, 1 week"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customQuery">Custom Query (Optional)</Label>
                <Textarea
                  id="customQuery"
                  placeholder="Any specific questions about this prescription?"
                  value={formData.customQuery}
                  onChange={(e) => setFormData({ ...formData, customQuery: e.target.value })}
                  rows={2}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <Label htmlFor="alternates">Include Alternate Medications</Label>
                  <p className="text-gray-600">Show alternative medication options</p>
                </div>
                <Switch
                  id="alternates"
                  checked={formData.includeAlternates}
                  onCheckedChange={(checked) => setFormData({ ...formData, includeAlternates: checked })}
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Analyze Prescription
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex h-full">
      {/* Left Panel */}
      <div className="w-2/5 bg-blue-50 p-6 overflow-auto border-r border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-900">Prescription Summary</h2>
          <Button variant="outline" size="sm" onClick={handleEdit}>
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>

        <div className="space-y-4">
          {imagePreview && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileImage className="h-5 w-5 text-blue-600" />
                  Prescription Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img src={imagePreview} alt="Prescription" className="w-full rounded" />
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Medication Name</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{formData.prescriptionName}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Symptoms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{formData.symptoms}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{formData.duration}</p>
            </CardContent>
          </Card>

          {formData.customQuery && (
            <Card>
              <CardHeader>
                <CardTitle>Custom Query</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{formData.customQuery}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl">
          <h2 className="text-gray-900 mb-6">Analysis Report</h2>

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
                  <CardTitle>Medication Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-gray-600">Generic Name:</p>
                    <p className="text-gray-900">Amoxicillin</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Drug Class:</p>
                    <p className="text-gray-900">Penicillin Antibiotic</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Common Uses:</p>
                    <p className="text-gray-900">Bacterial infections, respiratory tract infections</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dosage Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-gray-600">Recommended Dosage:</p>
                    <p className="text-gray-900">500mg three times daily</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Duration:</p>
                    <p className="text-gray-900">7-10 days (complete the full course)</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Administration:</p>
                    <p className="text-gray-900">Take with or without food. Drink plenty of water.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    Warnings & Precautions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Do not use if allergic to penicillin or similar antibiotics</li>
                    <li>• May cause stomach upset; take with food if needed</li>
                    <li>• Complete the full course even if symptoms improve</li>
                    <li>• Avoid alcohol during treatment</li>
                    <li>• May reduce effectiveness of birth control pills</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Drug Interactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-700">May interact with:</p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Warfarin</Badge>
                      <Badge variant="outline">Methotrexate</Badge>
                      <Badge variant="outline">Oral Contraceptives</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {formData.includeAlternates && (
                <Card>
                  <CardHeader>
                    <CardTitle>Alternate Medications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="text-gray-900 mb-2">Azithromycin</h4>
                        <p className="text-gray-700 mb-2">Macrolide antibiotic, shorter treatment course (3-5 days)</p>
                        <div className="flex gap-2">
                          <Badge className="bg-green-100 text-green-800 border-green-200">Fewer doses</Badge>
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">Good alternative</Badge>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="text-gray-900 mb-2">Cephalexin</h4>
                        <p className="text-gray-700 mb-2">Cephalosporin antibiotic, similar spectrum of activity</p>
                        <div className="flex gap-2">
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">Similar efficacy</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Export Analysis
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
