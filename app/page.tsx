"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"
import { Users, MapPin, DollarSign, CloudRain, TrendingUp, Shield, Globe, Plus, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"

const weatherData = [
  { day: "Day 1", rainfall: 12 },
  { day: "Day 5", rainfall: 8 },
  { day: "Day 10", rainfall: 15 },
  { day: "Day 15", rainfall: 22 },
  { day: "Day 20", rainfall: 5 },
  { day: "Day 25", rainfall: 18 },
  { day: "Day 30", rainfall: 10 },
]

const regionData = [
  { region: "Zone A", farmers: 245, poolBalance: 12500 },
  { region: "Zone B", farmers: 189, poolBalance: 9800 },
  { region: "Zone C", farmers: 156, poolBalance: 7200 },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <Navigation />

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-green-900">Climate Protection Dashboard</h1>
          <p className="text-green-700">Protecting farmers through community-driven mutual aid</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">Total Farmers</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">590</div>
              <p className="text-xs text-green-600">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-amber-800">Active Regions</CardTitle>
              <MapPin className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-900">3</div>
              <p className="text-xs text-amber-600">Zones A, B, C</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">Last Payout</CardTitle>
              <DollarSign className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">$2,450</div>
              <p className="text-xs text-blue-600">Zone B - 3 days ago</p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-emerald-800">Pool Balance</CardTitle>
              <Shield className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-900">$29,500</div>
              <p className="text-xs text-emerald-600">Across all regions</p>
            </CardContent>
          </Card>
        </div>

        {/* Weather Summary & Regional Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-blue-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <CloudRain className="h-5 w-5" />
                Rainfall - Last 30 Days
              </CardTitle>
              <CardDescription>Average across all monitored regions</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={weatherData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="rainfall" stroke="#3b82f6" fill="#93c5fd" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-blue-700">Average: 12.8mm</span>
                <Badge variant="outline" className="border-blue-300 text-blue-700">
                  Normal Range
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900">
                <Globe className="h-5 w-5" />
                Regional Overview
              </CardTitle>
              <CardDescription>Farmers and pool balance by region</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={regionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="farmers" fill="#22c55e" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {regionData.map((region) => (
                  <div key={region.region} className="flex justify-between items-center text-sm">
                    <span className="text-green-700">{region.region}</span>
                    <span className="font-medium text-green-900">${region.poolBalance.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-green-300 bg-gradient-to-br from-green-100 to-emerald-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900">
                <Plus className="h-5 w-5" />
                Join the Protection Pool
              </CardTitle>
              <CardDescription>Start protecting your crops with community support</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-700 mb-4">
                Connect with farmers in your region and contribute to mutual protection against climate risks.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Join Pool
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-gradient-to-br from-amber-100 to-orange-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900">
                <MapPin className="h-5 w-5" />
                Explore Your Area
              </CardTitle>
              <CardDescription>View detailed information about your region</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-amber-700 mb-4">
                Check rainfall patterns, payout history, and connect with local farmers in your area.
              </p>
              <Button
                variant="outline"
                className="w-full border-amber-600 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                View My Area
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="border-slate-200 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <TrendingUp className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-green-900">New farmer joined Zone A</p>
                    <p className="text-sm text-green-600">2 hours ago</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">+1 Farmer</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-blue-900">Payout triggered in Zone B</p>
                    <p className="text-sm text-blue-600">3 days ago</p>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-800">$2,450</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-amber-900">Governance proposal submitted</p>
                    <p className="text-sm text-amber-600">1 week ago</p>
                  </div>
                </div>
                <Badge className="bg-amber-100 text-amber-800">Voting</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
