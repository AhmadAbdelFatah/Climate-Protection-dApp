"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import {
  Map,
  MapPin,
  CloudRain,
  Users,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Plus,
  Info,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

const regions = {
  "zone-a": {
    name: "Zone A - Eastern Plains",
    farmers: 245,
    poolBalance: 12500,
    avgContribution: 25,
    lastPayout: "2023-11-15",
    payoutAmount: 3200,
    coordinates: "12.9716°N, 77.5946°E",
    cropTypes: ["Rice", "Wheat", "Sugarcane"],
    riskLevel: "Medium",
  },
  "zone-b": {
    name: "Zone B - Central Valley",
    farmers: 189,
    poolBalance: 9800,
    avgContribution: 25,
    lastPayout: "2024-01-08",
    payoutAmount: 2450,
    coordinates: "13.0827°N, 80.2707°E",
    cropTypes: ["Cotton", "Maize", "Groundnut"],
    riskLevel: "High",
  },
  "zone-c": {
    name: "Zone C - Western Hills",
    farmers: 156,
    poolBalance: 7200,
    avgContribution: 25,
    lastPayout: "2023-09-22",
    payoutAmount: 1800,
    coordinates: "11.0168°N, 76.9558°E",
    cropTypes: ["Coffee", "Spices", "Vegetables"],
    riskLevel: "Low",
  },
}

const rainfallData = {
  "zone-a": [
    { month: "Jul", rainfall: 145, normal: 120 },
    { month: "Aug", rainfall: 98, normal: 110 },
    { month: "Sep", rainfall: 76, normal: 95 },
    { month: "Oct", rainfall: 45, normal: 80 },
    { month: "Nov", rainfall: 23, normal: 60 },
    { month: "Dec", rainfall: 12, normal: 40 },
    { month: "Jan", rainfall: 8, normal: 25 },
  ],
  "zone-b": [
    { month: "Jul", rainfall: 120, normal: 100 },
    { month: "Aug", rainfall: 85, normal: 95 },
    { month: "Sep", rainfall: 62, normal: 85 },
    { month: "Oct", rainfall: 34, normal: 70 },
    { month: "Nov", rainfall: 18, normal: 50 },
    { month: "Dec", rainfall: 8, normal: 30 },
    { month: "Jan", rainfall: 5, normal: 20 },
  ],
  "zone-c": [
    { month: "Jul", rainfall: 180, normal: 150 },
    { month: "Aug", rainfall: 165, normal: 140 },
    { month: "Sep", rainfall: 142, normal: 125 },
    { month: "Oct", rainfall: 98, normal: 100 },
    { month: "Nov", rainfall: 67, normal: 75 },
    { month: "Dec", rainfall: 45, normal: 50 },
    { month: "Jan", rainfall: 32, normal: 35 },
  ],
}

const payoutTriggers = {
  "zone-a": {
    drought: "< 20mm for 25 consecutive days",
    flood: "> 200mm in 48 hours",
    temperature: "> 42°C for 5 consecutive days",
  },
  "zone-b": {
    drought: "< 15mm for 20 consecutive days",
    flood: "> 180mm in 48 hours",
    temperature: "> 40°C for 5 consecutive days",
  },
  "zone-c": {
    drought: "< 25mm for 30 consecutive days",
    flood: "> 250mm in 48 hours",
    temperature: "> 38°C for 7 consecutive days",
  },
}

export default function MapView() {
  const [selectedRegion, setSelectedRegion] = useState<keyof typeof regions>("zone-a")

  const currentRegion = regions[selectedRegion]
  const currentRainfall = rainfallData[selectedRegion]
  const currentTriggers = payoutTriggers[selectedRegion]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "High":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "Low":
        return <CheckCircle className="h-4 w-4" />
      case "Medium":
        return <Info className="h-4 w-4" />
      case "High":
        return <AlertTriangle className="h-4 w-4" />
      default:
        return <Info className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-green-900">Regional Map & Climate Data</h1>
            <p className="text-green-700">Explore climate protection coverage across different regions</p>
          </div>

          {/* Region Selector */}
          <Card className="border-blue-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Map className="h-5 w-5" />
                Select Region
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select
                value={selectedRegion}
                onValueChange={(value) => setSelectedRegion(value as keyof typeof regions)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(regions).map(([key, region]) => (
                    <SelectItem key={key} value={key}>
                      <div className="flex items-center justify-between w-full">
                        <span>{region.name}</span>
                        <Badge className={`ml-2 ${getRiskColor(region.riskLevel)}`}>{region.riskLevel} Risk</Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Region Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-green-800">Farmers</CardTitle>
                <Users className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-900">{currentRegion.farmers}</div>
                <p className="text-xs text-green-600">Active participants</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-800">Pool Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900">${currentRegion.poolBalance.toLocaleString()}</div>
                <p className="text-xs text-blue-600">Available for payouts</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-purple-800">Last Payout</CardTitle>
                <TrendingUp className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-900">${currentRegion.payoutAmount.toLocaleString()}</div>
                <p className="text-xs text-purple-600">{new Date(currentRegion.lastPayout).toLocaleDateString()}</p>
              </CardContent>
            </Card>

            <Card
              className={`border-2 bg-white/80 backdrop-blur-sm ${currentRegion.riskLevel === "High" ? "border-red-300" : currentRegion.riskLevel === "Medium" ? "border-yellow-300" : "border-green-300"}`}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
                {getRiskIcon(currentRegion.riskLevel)}
              </CardHeader>
              <CardContent>
                <Badge className={getRiskColor(currentRegion.riskLevel)}>{currentRegion.riskLevel} Risk</Badge>
                <p className="text-xs text-gray-600 mt-1">Climate assessment</p>
              </CardContent>
            </Card>
          </div>

          {/* Region Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-900">
                  <MapPin className="h-5 w-5" />
                  Region Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-green-900 mb-2">Location</h4>
                  <p className="text-sm text-green-700">{currentRegion.coordinates}</p>
                </div>
                <div>
                  <h4 className="font-medium text-green-900 mb-2">Primary Crops</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentRegion.cropTypes.map((crop) => (
                      <Badge key={crop} variant="outline" className="border-green-300 text-green-700">
                        {crop}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-green-900 mb-2">Contribution</h4>
                  <p className="text-sm text-green-700">${currentRegion.avgContribution}/month per farmer</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <CloudRain className="h-5 w-5" />
                  Rainfall History
                </CardTitle>
                <CardDescription>Last 7 months vs normal levels</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={currentRainfall}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="normal" stroke="#94a3b8" fill="#e2e8f0" name="Normal" />
                    <Area type="monotone" dataKey="rainfall" stroke="#3b82f6" fill="#93c5fd" name="Actual" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Payout Triggers */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900">
                <AlertTriangle className="h-5 w-5" />
                Payout Trigger Conditions
              </CardTitle>
              <CardDescription>Automatic payout conditions for {currentRegion.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Drought</h4>
                  <p className="text-sm text-blue-700">{currentTriggers.drought}</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-medium text-red-900 mb-2">Flood</h4>
                  <p className="text-sm text-red-700">{currentTriggers.flood}</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-medium text-orange-900 mb-2">Heat Wave</h4>
                  <p className="text-sm text-orange-700">{currentTriggers.temperature}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Card */}
          <Card className="border-green-300 bg-gradient-to-br from-green-100 to-emerald-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900">
                <Plus className="h-5 w-5" />
                Join {currentRegion.name}
              </CardTitle>
              <CardDescription>Start protecting your crops in this region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-green-700">Monthly Contribution:</span>
                    <p className="font-medium text-green-900">${currentRegion.avgContribution}</p>
                  </div>
                  <div>
                    <span className="text-green-700">Coverage Area:</span>
                    <p className="font-medium text-green-900">{currentRegion.cropTypes.join(", ")}</p>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Contribute to {currentRegion.name.split(" - ")[0]}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
