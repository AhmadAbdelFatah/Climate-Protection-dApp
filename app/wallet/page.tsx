"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { Wallet, Send, Gift, Award, TrendingUp, Copy, ExternalLink, Vote } from "lucide-react"
import { Navigation } from "@/components/navigation"

const tokenBalanceHistory = [
  { month: "Jul", balance: 100 },
  { month: "Aug", balance: 150 },
  { month: "Sep", balance: 120 },
  { month: "Oct", balance: 180 },
  { month: "Nov", balance: 200 },
  { month: "Dec", balance: 175 },
  { month: "Jan", balance: 225 },
]

const votingHistory = [
  { month: "Jul", votes: 2 },
  { month: "Aug", votes: 4 },
  { month: "Sep", votes: 3 },
  { month: "Oct", votes: 5 },
  { month: "Nov", votes: 6 },
  { month: "Dec", votes: 4 },
  { month: "Jan", votes: 7 },
]

const transactions = [
  {
    id: "tx-001",
    type: "airdrop",
    amount: 50,
    description: "Monthly community airdrop",
    date: "2024-01-10",
    status: "completed",
  },
  {
    id: "tx-002",
    type: "reward",
    amount: 25,
    description: "Voting participation reward",
    date: "2024-01-08",
    status: "completed",
  },
  {
    id: "tx-003",
    type: "transfer",
    amount: -15,
    description: "Sent to farmer_jane_b",
    date: "2024-01-05",
    status: "completed",
  },
  {
    id: "tx-004",
    type: "reward",
    amount: 10,
    description: "Proposal submission bonus",
    date: "2024-01-03",
    status: "completed",
  },
]

export default function WalletPage() {
  const [transferAmount, setTransferAmount] = useState("")
  const [transferAddress, setTransferAddress] = useState("")
  const [isTransferring, setIsTransferring] = useState(false)

  const userAddress = "0x742d35Cc6634C0532925a3b8D4C9db96590b5"
  const tokenBalance = 225
  const pendingRewards = 15

  const handleAirdrop = async () => {
    // Simulate airdrop
    console.log("Requesting airdrop...")
  }

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsTransferring(true)

    // Simulate transfer
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsTransferring(false)
    setTransferAmount("")
    setTransferAddress("")
  }

  const handleClaimReward = async () => {
    // Simulate claiming reward
    console.log("Claiming rewards...")
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(userAddress)
  }

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "airdrop":
        return <Gift className="h-4 w-4 text-blue-600" />
      case "reward":
        return <Award className="h-4 w-4 text-green-600" />
      case "transfer":
        return <Send className="h-4 w-4 text-orange-600" />
      default:
        return <Wallet className="h-4 w-4 text-gray-600" />
    }
  }

  const getTransactionColor = (type: string) => {
    switch (type) {
      case "airdrop":
        return "text-blue-600"
      case "reward":
        return "text-green-600"
      case "transfer":
        return "text-orange-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-green-900">My Wallet & Tokens</h1>
            <p className="text-green-700">Manage your climate protection tokens and rewards</p>
          </div>

          {/* Wallet Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-green-800">Token Balance</CardTitle>
                <Wallet className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-900">{tokenBalance}</div>
                <p className="text-xs text-green-600">CLIMATE tokens</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-800">Pending Rewards</CardTitle>
                <Award className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900">{pendingRewards}</div>
                <p className="text-xs text-blue-600">Ready to claim</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-purple-800">Votes Cast</CardTitle>
                <Vote className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-900">31</div>
                <p className="text-xs text-purple-600">This month: 7</p>
              </CardContent>
            </Card>
          </div>

          {/* Wallet Address */}
          <Card className="border-gray-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Wallet Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <code className="flex-1 text-sm font-mono text-gray-700">{userAddress}</code>
                <Button size="sm" variant="outline" onClick={copyAddress}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button onClick={handleAirdrop} className="bg-blue-600 hover:bg-blue-700 h-12">
              <Gift className="h-4 w-4 mr-2" />
              Request Airdrop
            </Button>
            <Button onClick={handleClaimReward} className="bg-green-600 hover:bg-green-700 h-12">
              <Award className="h-4 w-4 mr-2" />
              Claim Rewards
            </Button>
            <Button
              variant="outline"
              className="border-orange-300 text-orange-700 hover:bg-orange-50 h-12 bg-transparent"
            >
              <Send className="h-4 w-4 mr-2" />
              Transfer Tokens
            </Button>
          </div>

          {/* Charts and History */}
          <Tabs defaultValue="balance" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="balance">Balance History</TabsTrigger>
              <TabsTrigger value="voting">Voting Activity</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
            </TabsList>

            <TabsContent value="balance">
              <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-900">
                    <TrendingUp className="h-5 w-5" />
                    Token Balance Over Time
                  </CardTitle>
                  <CardDescription>Your CLIMATE token balance history</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={tokenBalanceHistory}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="balance" stroke="#22c55e" fill="#86efac" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="voting">
              <Card className="border-purple-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-900">
                    <Vote className="h-5 w-5" />
                    Voting Participation
                  </CardTitle>
                  <CardDescription>Number of votes cast per month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={votingHistory}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="votes" fill="#a855f7" />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Voting Rewards:</strong> Earn 5 CLIMATE tokens for each vote cast. Bonus rewards for
                      consistent participation!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="transactions">
              <Card className="border-gray-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">Recent Transactions</CardTitle>
                  <CardDescription>Your latest token movements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions.map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          {getTransactionIcon(tx.type)}
                          <div>
                            <p className="font-medium text-gray-900">{tx.description}</p>
                            <p className="text-sm text-gray-600">{new Date(tx.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-medium ${tx.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                            {tx.amount > 0 ? "+" : ""}
                            {tx.amount} CLIMATE
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {tx.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Transfer Form */}
          <Card className="border-orange-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-900">
                <Send className="h-5 w-5" />
                Transfer Tokens
              </CardTitle>
              <CardDescription>Send CLIMATE tokens to another farmer</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTransfer} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-orange-900">
                    Recipient Address
                  </Label>
                  <Input
                    id="address"
                    value={transferAddress}
                    onChange={(e) => setTransferAddress(e.target.value)}
                    placeholder="0x... or farmer username"
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-orange-900">
                    Amount
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    placeholder="Enter amount to transfer"
                    className="border-orange-200 focus:border-orange-400"
                    max={tokenBalance}
                  />
                  <p className="text-sm text-orange-600">Available: {tokenBalance} CLIMATE</p>
                </div>
                <Button
                  type="submit"
                  disabled={!transferAddress || !transferAmount || isTransferring}
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  {isTransferring ? "Transferring..." : "Transfer Tokens"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
