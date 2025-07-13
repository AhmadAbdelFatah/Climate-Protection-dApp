"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gift, Users, Activity, DollarSign, Shield, AlertTriangle, CheckCircle, Send, UserMinus } from "lucide-react"
import { Navigation } from "@/components/navigation"

const systemStats = {
  totalFarmers: 590,
  totalTokens: 125000,
  activeProposals: 3,
  ethicsMembers: 3,
  totalPayouts: 45200,
  systemHealth: "Healthy",
}

const recentLogs = [
  {
    id: "log-001",
    timestamp: "2024-01-10 14:30:22",
    action: "Token Airdrop",
    details: "50 CLIMATE tokens distributed to 590 farmers",
    severity: "info",
  },
  {
    id: "log-002",
    timestamp: "2024-01-10 12:15:45",
    action: "Payout Triggered",
    details: "Zone B flood payout: $2,450 to 45 farmers",
    severity: "success",
  },
  {
    id: "log-003",
    timestamp: "2024-01-10 09:22:11",
    action: "Ethics Council Vote",
    details: "Proposal PRO-2024-001 approved by council",
    severity: "info",
  },
  {
    id: "log-004",
    timestamp: "2024-01-09 16:45:33",
    action: "Security Alert",
    details: "Failed login attempt from suspicious IP",
    severity: "warning",
  },
]

const ethicsCouncil = [
  { id: "member-001", name: "Dr. Priya Sharma", role: "Agricultural Ethics Specialist", status: "active" },
  { id: "member-002", name: "James Ochieng", role: "Community Leader", status: "active" },
  { id: "member-003", name: "Maria Santos", role: "Climate Justice Advocate", status: "active" },
]

export default function AdminPanel() {
  const [airdropAmount, setAirdropAmount] = useState("")
  const [airdropAddresses, setAirdropAddresses] = useState("")
  const [newMemberName, setNewMemberName] = useState("")
  const [newMemberRole, setNewMemberRole] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleAirdrop = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate airdrop process
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    setIsProcessing(false)
    setAirdropAmount("")
    setAirdropAddresses("")
    alert("Airdrop completed successfully!")
  }

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate adding member
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    setNewMemberName("")
    setNewMemberRole("")
    alert("Ethics council member added successfully!")
  }

  const handleRemoveMember = async (memberId: string) => {
    if (confirm("Are you sure you want to remove this member from the ethics council?")) {
      setIsProcessing(true)
      
      // Simulate removal
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setIsProcessing(false)
      alert("Member removed successfully!")
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "success": return "bg-green-100 text-green-800"
      case "warning": return "bg-yellow-100 text-yellow-800"
      case "error": return "bg-red-100 text-red-800"
      default: return "bg-blue-100 text-blue-800"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "success": return <CheckCircle className="h-4 w-4" />
      case "warning": return <AlertTriangle className="h-4 w-4" />
      case "error": return <AlertTriangle className="h-4 w-4" />
      default: return <Activity className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-green-900">Admin Panel</h1>
            <p className="text-green-700">System administration and management</p>
            <Badge className="bg-red-100 text-red-800">
              <Shield className="h-3 w-3 mr-1" />
              Admin Access Required
            </Badge>
          </div>

          {/* System Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-green-800">Total Farmers</CardTitle>
                <Users className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-900">{systemStats.totalFarmers}</div>
                <p className="text-xs text-green-600">Registered users</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-800">Total Tokens</CardTitle>
                <DollarSign className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900">{systemStats.totalTokens.toLocaleString()}</div>
                <p className="text-xs text-blue-600">CLIMATE in circulation</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-purple-800">System Health</CardTitle>
                <Activity className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-900">{systemStats.systemHealth}</div>
                <p className="text-xs text-purple-600">All systems operational</p>
              </CardContent>
            </Card>
          </div>

          {/* Admin Actions */}
          <Tabs defaultValue="airdrop" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="airdrop">Token Airdrop</TabsTrigger>
              <TabsTrigger value="ethics">Ethics Council</TabsTrigger>
              <TabsTrigger value="logs">System Logs</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            <TabsContent value="airdrop">
              <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-900">
                    <Gift className="h-5 w-5" />
                    Token Airdrop
                  </CardTitle>
                  <CardDescription>
                    Distribute CLIMATE tokens to farmer addresses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAirdrop} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="amount" className="text-green-900">Amount per Address</Label>
                      <Input
                        id="amount"
                        type="number"
                        value={airdropAmount}
                        onChange={(e) => setAirdropAmount(e.target.value)}
                        placeholder="e.g., 50"
                        className="border-green-200 focus:border-green-400"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="addresses" className="text-green-900">Recipient Addresses</Label>
                      <textarea
                        id="addresses"
                        value={airdropAddresses}
                        onChange={(e) => setAirdropAddresses(e.target.value)}
                        placeholder="Enter addresses (one per line) or 'ALL_FARMERS' for all registered farmers"
                        className="w-full min-h-32 p-3 border border-green-200 rounded-md focus:border-green-400 focus:outline-none"
                        required
                      />
                      <p className="text-sm text-green-600">
                        Use "ALL_FARMERS" to airdrop to all {systemStats.totalFarmers} registered farmers
                      </p>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                        <div className="text-sm text-amber-800">
                          <p className="font-medium mb-1">Airdrop Preview:</p>
                          <p>Amount: {airdropAmount || "0"} CLIMATE per address</p>
                          <p>Recipients: {airdropAddresses === "ALL_FARMERS" ? systemStats.totalFarmers : airdropAddresses.split('\n').filter(addr => addr.trim()).length} addresses</p>
                          <p>Total: {(Number.parseInt(airdropAmount || "0") * (airdropAddresses === "ALL_FARMERS" ? systemStats.totalFarmers : airdropAddresses.split('\n').filter(addr => addr.trim()).length)).toLocaleString()} CLIMATE</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700"
                      disabled={!airdropAmount || !airdropAddresses || isProcessing}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {isProcessing ? "Processing Airdrop..." : "Execute Airdrop"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ethics">
              <div className="space-y-6">
                {/* Current Members */}
                <Card className="border-purple-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-900">
                      <Users className="h-5 w-5" />
                      Current Ethics Council Members
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {ethicsCouncil.map((member) => (
                        <div key={member.id} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-purple-900">{member.name}</h4>
                            <p className="text-sm text-purple-700">{member.role}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-100 text-green-800">{member.status}</Badge>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleRemoveMember(member.id)}
                              className="border-red-300 text-red-700 hover:bg-red-50"
                              disabled={isProcessing}
                            >
                              <UserMinus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Add New Member */}
                <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="\
