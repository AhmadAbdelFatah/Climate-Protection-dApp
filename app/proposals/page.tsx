"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Vote, Clock, CheckCircle, XCircle, DollarSign, Users, Settings, ThumbsUp, ThumbsDown } from "lucide-react"
import { Navigation } from "@/components/navigation"

const proposals = {
  active: [
    {
      id: "PRO-2024-001",
      title: "Increase Drought Payout Threshold",
      description:
        "Adjust drought trigger from 30 days to 25 days without rainfall to better protect farmers during dry spells.",
      type: "payout-policy",
      votesFor: 234,
      votesAgainst: 89,
      totalVotes: 323,
      deadline: "2024-01-15",
      proposer: "farmer_john_a",
      hasVoted: false,
    },
    {
      id: "PRO-2024-002",
      title: "Add Maria Santos to Ethics Council",
      description:
        "Nominate Maria Santos, agricultural extension officer with 15 years experience, to join the ethics council.",
      type: "ethics-member",
      votesFor: 156,
      votesAgainst: 45,
      totalVotes: 201,
      deadline: "2024-01-18",
      proposer: "community_leader_b",
      hasVoted: true,
      userVote: "for",
    },
    {
      id: "PRO-2024-003",
      title: "Allocate Surplus to Emergency Fund",
      description: "Move $5,000 in unused funds to create an emergency response fund for extreme weather events.",
      type: "fund-allocation",
      votesFor: 89,
      votesAgainst: 234,
      totalVotes: 323,
      deadline: "2024-01-20",
      proposer: "treasurer_c",
      hasVoted: false,
    },
  ],
  executed: [
    {
      id: "PRO-2023-045",
      title: "Expand Coverage to Zone D",
      description: "Add Zone D (Northern Valley) to the protection network.",
      type: "region-expansion",
      votesFor: 445,
      votesAgainst: 123,
      totalVotes: 568,
      result: "passed",
      executedDate: "2023-12-15",
    },
  ],
  failed: [
    {
      id: "PRO-2023-044",
      title: "Reduce Contribution Requirements",
      description: "Lower monthly contribution from $25 to $15 per farmer.",
      type: "payout-policy",
      votesFor: 234,
      votesAgainst: 456,
      totalVotes: 690,
      result: "failed",
      failedDate: "2023-12-10",
    },
  ],
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case "payout-policy":
      return <DollarSign className="h-4 w-4" />
    case "ethics-member":
      return <Users className="h-4 w-4" />
    case "fund-allocation":
      return <DollarSign className="h-4 w-4" />
    case "region-expansion":
      return <Settings className="h-4 w-4" />
    default:
      return <Settings className="h-4 w-4" />
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "payout-policy":
      return "bg-blue-100 text-blue-800"
    case "ethics-member":
      return "bg-purple-100 text-purple-800"
    case "fund-allocation":
      return "bg-green-100 text-green-800"
    case "region-expansion":
      return "bg-orange-100 text-orange-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function ProposalsVoting() {
  const [votingOn, setVotingOn] = useState<string | null>(null)

  const handleVote = (proposalId: string, vote: "for" | "against") => {
    setVotingOn(proposalId)
    // Simulate voting process
    setTimeout(() => {
      setVotingOn(null)
      // Update proposal with user vote
    }, 1500)
  }

  const calculatePercentage = (votes: number, total: number) => {
    return total > 0 ? Math.round((votes / total) * 100) : 0
  }

  const getDaysLeft = (deadline: string) => {
    const days = Math.ceil((new Date(deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    return Math.max(0, days)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-green-900">Proposals & Voting</h1>
            <p className="text-green-700">Shape the future of our climate protection community</p>
          </div>

          {/* Voting Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-blue-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-800">Active Proposals</p>
                    <p className="text-2xl font-bold text-blue-900">{proposals.active.length}</p>
                  </div>
                  <Vote className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-800">Executed</p>
                    <p className="text-2xl font-bold text-green-900">{proposals.executed.length}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-red-800">Failed</p>
                    <p className="text-2xl font-bold text-red-900">{proposals.failed.length}</p>
                  </div>
                  <XCircle className="h-8 w-8 text-red-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Proposals Tabs */}
          <Tabs defaultValue="active" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="executed">Executed</TabsTrigger>
              <TabsTrigger value="failed">Failed</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4">
              {proposals.active.map((proposal) => {
                const forPercentage = calculatePercentage(proposal.votesFor, proposal.totalVotes)
                const againstPercentage = calculatePercentage(proposal.votesAgainst, proposal.totalVotes)
                const daysLeft = getDaysLeft(proposal.deadline)

                return (
                  <Card key={proposal.id} className="border-green-200 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge className={getTypeColor(proposal.type)}>
                              {getTypeIcon(proposal.type)}
                              <span className="ml-1 capitalize">{proposal.type.replace("-", " ")}</span>
                            </Badge>
                            <Badge variant="outline" className="border-gray-300">
                              {proposal.id}
                            </Badge>
                          </div>
                          <CardTitle className="text-green-900">{proposal.title}</CardTitle>
                          <CardDescription>{proposal.description}</CardDescription>
                        </div>
                        <div className="text-right text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {daysLeft} days left
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Voting Progress */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-green-700">
                            For: {proposal.votesFor} ({forPercentage}%)
                          </span>
                          <span className="text-red-700">
                            Against: {proposal.votesAgainst} ({againstPercentage}%)
                          </span>
                        </div>
                        <div className="flex gap-1">
                          <Progress value={forPercentage} className="flex-1 h-2" />
                          <Progress value={againstPercentage} className="flex-1 h-2 [&>div]:bg-red-500" />
                        </div>
                        <p className="text-xs text-gray-600 text-center">
                          {proposal.totalVotes} total votes • Need 60% to pass
                        </p>
                      </div>

                      {/* Voting Buttons */}
                      {proposal.hasVoted ? (
                        <div className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">
                            You voted <strong>{proposal.userVote}</strong>
                          </span>
                        </div>
                      ) : (
                        <div className="flex gap-3">
                          <Button
                            onClick={() => handleVote(proposal.id, "for")}
                            disabled={votingOn === proposal.id}
                            className="flex-1 bg-green-600 hover:bg-green-700"
                          >
                            <ThumbsUp className="h-4 w-4 mr-2" />
                            {votingOn === proposal.id ? "Voting..." : "Vote For"}
                          </Button>
                          <Button
                            onClick={() => handleVote(proposal.id, "against")}
                            disabled={votingOn === proposal.id}
                            variant="outline"
                            className="flex-1 border-red-300 text-red-700 hover:bg-red-50"
                          >
                            <ThumbsDown className="h-4 w-4 mr-2" />
                            {votingOn === proposal.id ? "Voting..." : "Vote Against"}
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </TabsContent>

            <TabsContent value="executed" className="space-y-4">
              {proposals.executed.map((proposal) => (
                <Card key={proposal.id} className="border-green-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className={getTypeColor(proposal.type)}>
                            {getTypeIcon(proposal.type)}
                            <span className="ml-1 capitalize">{proposal.type.replace("-", " ")}</span>
                          </Badge>
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Executed
                          </Badge>
                        </div>
                        <CardTitle className="text-green-900">{proposal.title}</CardTitle>
                        <CardDescription>{proposal.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-green-700">
                        Passed with {Math.round((proposal.votesFor / proposal.totalVotes) * 100)}% approval
                      </span>
                      <span className="text-gray-600">
                        Executed on {new Date(proposal.executedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="failed" className="space-y-4">
              {proposals.failed.map((proposal) => (
                <Card key={proposal.id} className="border-red-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className={getTypeColor(proposal.type)}>
                            {getTypeIcon(proposal.type)}
                            <span className="ml-1 capitalize">{proposal.type.replace("-", " ")}</span>
                          </Badge>
                          <Badge className="bg-red-100 text-red-800">
                            <XCircle className="h-3 w-3 mr-1" />
                            Failed
                          </Badge>
                        </div>
                        <CardTitle className="text-green-900">{proposal.title}</CardTitle>
                        <CardDescription>{proposal.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-red-700">
                        Failed with {Math.round((proposal.votesFor / proposal.totalVotes) * 100)}% approval
                      </span>
                      <span className="text-gray-600">
                        Failed on {new Date(proposal.failedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
