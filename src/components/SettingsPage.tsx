import { useState } from "react";
import {
  User,
  Shield,
  Bell,
  Heart,
  Settings as SettingsIcon,
  Info,
  Upload,
  Download,
  Trash2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
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
import { Slider } from "./ui/slider";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState("profile");
  const [settings, setSettings] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    dateOfBirth: "1990-01-01",
    gender: "male",
    emailNotifications: true,
    pushNotifications: true,
    twoFactor: false,
    dataSharing: false,
    language: "en",
    theme: "light",
    fontSize: [16],
    units: "metric",
    bloodType: "O+",
  });

  const sections = [
    { id: "profile", label: "Profile Settings", icon: User },
    { id: "privacy", label: "Privacy & Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "medical", label: "Medical Information", icon: Heart },
    { id: "preferences", label: "App Preferences", icon: SettingsIcon },
    { id: "about", label: "About & Support", icon: Info },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>
                  Manage your personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Photo
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={settings.fullName}
                    onChange={(e) =>
                      setSettings({ ...settings, fullName: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={settings.email}
                    onChange={(e) =>
                      setSettings({ ...settings, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={settings.dateOfBirth}
                    onChange={(e) =>
                      setSettings({ ...settings, dateOfBirth: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    value={settings.gender}
                    onValueChange={(value: any) =>
                      setSettings({ ...settings, gender: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not">
                        Prefer not to say
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case "privacy":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>
                  Manage your privacy and security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-gray-900">Change Password</h4>
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                      Confirm New Password
                    </Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Update Password
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-gray-900">Two-Factor Authentication</h4>
                    <p className="text-gray-600">
                      Add an extra layer of security
                    </p>
                  </div>
                  <Switch
                    checked={settings.twoFactor}
                    onCheckedChange={(checked: boolean) =>
                      setSettings({ ...settings, twoFactor: checked })
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-gray-900">Data Sharing</h4>
                    <p className="text-gray-600">
                      Share anonymized data for research
                    </p>
                  </div>
                  <Switch
                    checked={settings.dataSharing}
                    onCheckedChange={(checked: boolean) =>
                      setSettings({ ...settings, dataSharing: checked })
                    }
                  />
                </div>

                <Separator />

                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download My Data
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case "notifications":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Manage how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-gray-900">Email Notifications</h4>
                    <p className="text-gray-600">Receive updates via email</p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked: boolean) =>
                      setSettings({ ...settings, emailNotifications: checked })
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-gray-900">Push Notifications</h4>
                    <p className="text-gray-600">Receive push notifications</p>
                  </div>
                  <Switch
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked: boolean) =>
                      setSettings({ ...settings, pushNotifications: checked })
                    }
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="reminderFrequency">Reminder Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="never">Never</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "medical":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Medical Information</CardTitle>
                <CardDescription>
                  Keep your medical information up to date
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bloodType">Blood Type</Label>
                  <Select
                    value={settings.bloodType}
                    onValueChange={(value: any) =>
                      setSettings({ ...settings, bloodType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A+">A+</SelectItem>
                      <SelectItem value="A-">A-</SelectItem>
                      <SelectItem value="B+">B+</SelectItem>
                      <SelectItem value="B-">B-</SelectItem>
                      <SelectItem value="AB+">AB+</SelectItem>
                      <SelectItem value="AB-">AB-</SelectItem>
                      <SelectItem value="O+">O+</SelectItem>
                      <SelectItem value="O-">O-</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-gray-900">Emergency Contacts</h4>
                    <Button variant="outline" size="sm">
                      Add Contact
                    </Button>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 mb-1">Dr. Jane Smith</p>
                    <p className="text-gray-600">Primary Care Physician</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-gray-900">Primary Care Physician</h4>
                  <div className="space-y-2">
                    <Label htmlFor="physicianName">Physician Name</Label>
                    <Input id="physicianName" placeholder="Dr. John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="physicianPhone">Phone Number</Label>
                    <Input
                      id="physicianPhone"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-gray-900">Insurance Information</h4>
                  <div className="space-y-2">
                    <Label htmlFor="insuranceProvider">
                      Insurance Provider
                    </Label>
                    <Input
                      id="insuranceProvider"
                      placeholder="Blue Cross Blue Shield"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="policyNumber">Policy Number</Label>
                    <Input id="policyNumber" placeholder="ABC123456789" />
                  </div>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700">
                  Save Medical Info
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case "preferences":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>App Preferences</CardTitle>
                <CardDescription>Customize your app experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select
                    value={settings.language}
                    onValueChange={(value: any) =>
                      setSettings({ ...settings, language: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-gray-900">Theme</h4>
                    <p className="text-gray-600">Light or dark mode</p>
                  </div>
                  <Select
                    value={settings.theme}
                    onValueChange={(value: any) =>
                      setSettings({ ...settings, theme: value })
                    }
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-gray-900">Font Size</h4>
                    <span className="text-gray-600">
                      {settings.fontSize[0]}px
                    </span>
                  </div>
                  <Slider
                    value={settings.fontSize}
                    onValueChange={(value: any) =>
                      setSettings({ ...settings, fontSize: value })
                    }
                    min={12}
                    max={24}
                    step={1}
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="units">Measurement Units</Label>
                  <Select
                    value={settings.units}
                    onValueChange={(value: any) =>
                      setSettings({ ...settings, units: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="metric">Metric</SelectItem>
                      <SelectItem value="imperial">Imperial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
                <CardDescription>Manage your stored data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Chat History
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete All Assessments
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export All Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case "about":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About & Support</CardTitle>
                <CardDescription>
                  App information and help resources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-gray-600 mb-1">App Version</p>
                  <p className="text-gray-900">1.0.0</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Terms of Service
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Privacy Policy
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Contact Support
                  </Button>
                </div>

                <Separator />

                <Button variant="destructive" className="w-full">
                  Log Out
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-full flex bg-gray-50">
      {/* Left Sidebar Navigation */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <h2 className="text-gray-900 mb-4">Settings</h2>
        <nav className="space-y-1">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{section.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-3xl p-6">{renderSection()}</div>
      </div>
    </div>
  );
}
