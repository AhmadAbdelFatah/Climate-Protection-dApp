"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { UserPlus, MapPin, Leaf, Shield, CheckCircle, ArrowRight, Users, DollarSign, Info } from "lucide-react"
import { Navigation } from "@/components/navigation"

const cropTypes = [
  "Rice",
  "Wheat",
  "Maize",
  "Cotton",
  "Sugarcane",
  "Groundnut",
  "Coffee",
  "Tea",
  "Spices",
  "Vegetables",
  "Fruits",
  "Other",
]

const regions = [
  { value: "zone-a", label: "Zone A - Eastern Plains" },
  { value: "zone-b", label: "Zone B - Central Valley" },
  { value: "zone-c", label: "Zone C - Western Hills" },
]

export default function FarmerOnboarding() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    region: "",
    cropType: "",
    farmSize: "",
    experience: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [completed, setCompleted] = useState(false)

  const totalSteps = 3
  const progress = (step / totalSteps) * 100

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsSubmitting(false)
    setCompleted(true)
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isStepValid = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.phone && formData.location
      case 2:
        return formData.region && formData.cropType && formData.farmSize
      case 3:
        return formData.experience
      default:
        return false
    }
  }

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto border-green-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="text-center py-12">
              <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-green-900 mb-4">Welcome to ClimateShield!</h2>
              <p className="text-green-700 mb-6 text-lg">
                Your farmer profile has been created successfully. You're now part of our climate protection community.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-green-50 rounded-lg">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-medium text-green-900">Protected</h3>
                  <p className="text-sm text-green-700">Your crops are now covered</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-medium text-blue-900">Connected</h3>
                  <p className="text-sm text-blue-700">Join 590+ farmers</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <DollarSign className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <h3 className="font-medium text-amber-900">Rewarded</h3>
                  <p className="text-sm text-amber-700">Earn tokens for participation</p>
                </div>
              </div>

              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 text-base px-4 py-2">
                  Farmer ID: #FARM-2024-
                  {Math.floor(Math.random() * 1000)
                    .toString()
                    .padStart(3, "0")}
                </Badge>
                <div className="space-y-2">
                  <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                    Go to Dashboard
                  </Button>
                  <Button variant="outline" className="w-full border-green-300 text-green-700 bg-transparent" size="lg">
                    Learn More About Protection
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-green-900">Join as a Farmer</h1>
            <p className="text-green-700">Protect your crops with community-driven climate insurance</p>
          </div>

          {/* Progress */}
          <Card className="border-blue-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-blue-700">
                  <span>
                    Step {step} of {totalSteps}
                  </span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* How It Works Info */}
          <Card className="border-amber-200 bg-amber-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900">
                <Info className="h-5 w-5" />
                How Climate Protection Works
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-amber-800">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <p>Join your regional protection pool with other farmers</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <p>Contribute $25/month to the shared protection fund</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <p>Automatic payouts when climate triggers are met</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-xs font-bold">
                  4
                </div>
                <p>Participate in governance and earn rewards</p>
              </div>
            </CardContent>
          </Card>

          {/* Form Steps */}
          <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900">
                <UserPlus className="h-5 w-5" />
                {step === 1 && "Personal Information"}
                {step === 2 && "Farm Details"}
                {step === 3 && "Experience & Confirmation"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Tell us about yourself"}
                {step === 2 && "Information about your farm"}
                {step === 3 && "Final details to complete your profile"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-green-900">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="border-green-200 focus:border-green-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-green-900">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="border-green-200 focus:border-green-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-green-900">
                      Farm Location
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => updateFormData("location", e.target.value)}
                      placeholder="Village, District, State"
                      className="border-green-200 focus:border-green-400"
                    />
                    <p className="text-sm text-green-600">
                      <MapPin className="h-4 w-4 inline mr-1" />
                      We'll use this to assign you to the correct protection zone
                    </p>
                  </div>
                </div>
              )}

              {/* Step 2: Farm Details */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="region" className="text-green-900">
                      Protection Region
                    </Label>
                    <Select value={formData.region} onValueChange={(value) => updateFormData("region", value)}>
                      <SelectTrigger className="border-green-200 focus:border-green-400">
                        <SelectValue placeholder="Select your region" />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map((region) => (
                          <SelectItem key={region.value} value={region.value}>
                            {region.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cropType" className="text-green-900">
                      Primary Crop Type
                    </Label>
                    <Select value={formData.cropType} onValueChange={(value) => updateFormData("cropType", value)}>
                      <SelectTrigger className="border-green-200 focus:border-green-400">
                        <SelectValue placeholder="Select your main crop" />
                      </SelectTrigger>
                      <SelectContent>
                        {cropTypes.map((crop) => (
                          <SelectItem key={crop} value={crop.toLowerCase()}>
                            <div className="flex items-center gap-2">
                              <Leaf className="h-4 w-4 text-green-600" />
                              {crop}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farmSize" className="text-green-900">
                      Farm Size (acres)
                    </Label>
                    <Input
                      id="farmSize"
                      value={formData.farmSize}
                      onChange={(e) => updateFormData("farmSize", e.target.value)}
                      placeholder="e.g., 5.5"
                      type="number"
                      step="0.1"
                      className="border-green-200 focus:border-green-400"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Experience & Confirmation */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-green-900">
                      Farming Experience (years)
                    </Label>
                    <Select value={formData.experience} onValueChange={(value) => updateFormData("experience", value)}>
                      <SelectTrigger className="border-green-200 focus:border-green-400">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years (New farmer)</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="11-20">11-20 years</SelectItem>
                        <SelectItem value="20+">20+ years (Experienced)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Profile Summary */}
                  <div className="p-4 bg-green-50 rounded-lg space-y-3">
                    <h3 className="font-medium text-green-900">Profile Summary</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-green-700">Name:</span>
                        <p className="font-medium">{formData.name || "Not provided"}</p>
                      </div>
                      <div>
                        <span className="text-green-700">Location:</span>
                        <p className="font-medium">{formData.location || "Not provided"}</p>
                      </div>
                      <div>
                        <span className="text-green-700">Region:</span>
                        <p className="font-medium">
                          {regions.find((r) => r.value === formData.region)?.label || "Not selected"}
                        </p>
                      </div>
                      <div>
                        <span className="text-green-700">Crop:</span>
                        <p className="font-medium capitalize">{formData.cropType || "Not selected"}</p>
                      </div>
                      <div>
                        <span className="text-green-700">Farm Size:</span>
                        <p className="font-medium">
                          {formData.farmSize ? `${formData.farmSize} acres` : "Not provided"}
                        </p>
                      </div>
                      <div>
                        <span className="text-green-700">Experience:</span>
                        <p className="font-medium">{formData.experience || "Not selected"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-2">By joining, you agree to:</p>
                        <ul className="space-y-1 text-blue-700">
                          <li>• Contribute $25/month to your regional protection pool</li>
                          <li>• Provide accurate information about your farm</li>
                          <li>• Participate in community governance when possible</li>
                          <li>• Follow ethical guidelines for claims and payouts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={step === 1}
                  className="border-green-300 text-green-700 bg-transparent"
                >
                  Previous
                </Button>

                {step < totalSteps ? (
                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid(step)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!isStepValid(step) || isSubmitting}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {isSubmitting ? "Creating Profile..." : "Complete Registration"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
