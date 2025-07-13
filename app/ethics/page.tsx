"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Users, CheckCircle, XCircle, AlertTriangle, Send, Calendar, User } from "lucide-react"
import { Navigation } from "@/components/navigation"

const councilMembers = [
  {
    id: "member-001",
    name: "Dr. Priya Sharma",
    role: "Agricultural Ethics Specialist",
    experience: "15 years",
    joinDate: "2023-01-15",
    decisionsCount: 23,
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "PhD in Agricultural Ethics, former UN Food & Agriculture advisor",
  },
  {
    id: "member-002",
    name: "James Ochieng",
    role: "Community Leader",
    experience: "12 years",
    joinDate: "2023-03-20",
    decisionsCount: 18,
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Local farmer representative, cooperative management expert",
  },
  {
    id: "member-003",
    name: "Maria Santos",
    role: "Climate Justice Advocate",
    experience: "8 years",
    joinDate: "2023-06-10",
    decisionsCount: 12,
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Environmental law background, climate adaptation specialist",
  },
]

const pastDecisions = [
  {
    id: "decision-001",
    title: "Approve Emergency Payout for Zone B Floods",
    description: "Reviewed emergency payout request following unexpected flooding in Zone B affecting 45 farmers.",
    decision: "approved",
    date: "2024-01-08",
    votesFor: 3,
    votesAgainst: 0,
    impact: "2,450 USD distributed to affected farmers",
  },
  {
    id: "decision-002",
    title: "Reject Fraudulent Claim Investigation",
    description: "Investigated suspicious claim from farmer claiming drought damage during recorded rainfall period.",
    decision: "rejected",
    date: "2023-12-22",
    votesFor: 0,
    votesAgainst: 3,
    impact: "Prevented fraudulent payout, maintained pool integrity",
  },
  {
    id: "decision-003",
    title: "Approve New Payout Criteria for Heat Waves",
    description: "Reviewed and approved new temperature-based payout triggers for extreme heat events.",
    decision: "approved",
    date: "2023-12-15",
    votesFor: 2,
    votesAgainst: 1,
    impact: "Enhanced protection for farmers against heat stress",
  },
]

const ethicsIssues = [
  {
    id: "issue-001",
    title: "Review Payout Distribution Fairness",
    description: "Community concern about payout distribution methodology and transparency.",
    status: "under-review",
    submittedBy: "farmer_collective_a",
    submittedDate: "2024-01-10",
    priority: "medium",
  },
  {
    id: "issue-002",
    title: "Investigate Data Privacy Concerns",
    description: "Questions raised about how farmer location and crop data is stored and used.",
    status: "resolved",
    submittedBy: "privacy_advocate_b",
    submittedDate: "2023-12-28",
    priority: "high",
    resolution: "Updated privacy policy and implemented additional data protection measures",
  },
]

export default function EthicsCouncil() {
  const [concernTitle, setConcernTitle] = useState("")
  const [concernDescription, setConcernDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmitConcern = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
    setConcernTitle("")
    setConcernDescription("")
  }

  const getDecisionIcon = (decision: string) => {
    return decision === "approved" ? (
      <CheckCircle className="h-4 w-4 text-green-600" />
    ) : (
      <XCircle className="h-4 w-4 text-red-600" />
    )
  }

  const getDecisionColor = (decision: string) => {
    return decision === "approved" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "under-review":
        return "bg-yellow-100 text-yellow-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      case "escalated":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-green-900">Ethics Council</h1>
            <p className="text-green-700">Ensuring fair and ethical climate protection for all farmers</p>
          </div>

          {/* Council Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-purple-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-purple-800">Council Members</CardTitle>
                <Users className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-900">{councilMembers.length}</div>
                <p className="text-xs text-purple-600">Active members</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-800">Decisions Made</CardTitle>
                <CheckCircle className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900">{pastDecisions.length}</div>
                <p className="text-xs text-blue-600">This quarter</p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-amber-800">Open Issues</CardTitle>
                <AlertTriangle className="h-4 w-4 text-amber-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-900">
                  {ethicsIssues.filter((issue) => issue.status === "under-review").length}
                </div>
                <p className="text-xs text-amber-600">Under review</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="members" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="members">Council Members</TabsTrigger>
              <TabsTrigger value="decisions">Past Decisions</TabsTrigger>
              <TabsTrigger value="issues">Ethics Issues</TabsTrigger>
              <TabsTrigger value="submit">Submit Concern</TabsTrigger>
            </TabsList>

            <TabsContent value="members" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {councilMembers.map((member) => (
                  <Card key={member.id} className="border-purple-200 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle className="text-purple-900">{member.name}</CardTitle>
                          <CardDescription>{member.role}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-gray-700">{member.bio}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-purple-700">Experience:</span>
                          <p className="font-medium">{member.experience}</p>
                        </div>
                        <div>
                          <span className="text-purple-700">Decisions:</span>
                          <p className="font-medium">{member.decisionsCount}</p>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">
                        Joined: {new Date(member.joinDate).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="decisions" className="space-y-4">
              {pastDecisions.map((decision) => (
                <Card key={decision.id} className="border-blue-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className={getDecisionColor(decision.decision)}>
                            {getDecisionIcon(decision.decision)}
                            <span className="ml-1 capitalize">{decision.decision}</span>
                          </Badge>
                          <Badge variant="outline" className="border-gray-300">
                            {decision.id}
                          </Badge>
                        </div>
                        <CardTitle className="text-blue-900">{decision.title}</CardTitle>
                        <CardDescription>{decision.description}</CardDescription>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(decision.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-green-700">Votes For: {decision.votesFor}</span>
                      <span className="text-red-700">Votes Against: {decision.votesAgainst}</span>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Impact:</strong> {decision.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="issues" className="space-y-4">
              {ethicsIssues.map((issue) => (
                <Card key={issue.id} className="border-amber-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(issue.status)}>
                            <span className="capitalize">{issue.status.replace("-", " ")}</span>
                          </Badge>
                          <Badge className={getPriorityColor(issue.priority)}>{issue.priority} Priority</Badge>
                        </div>
                        <CardTitle className="text-amber-900">{issue.title}</CardTitle>
                        <CardDescription>{issue.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm text-gray-600">
                      <p>Submitted by: {issue.submittedBy}</p>
                      <p>Date: {new Date(issue.submittedDate).toLocaleDateString()}</p>
                    </div>
                    {issue.resolution && (
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-800">
                          <strong>Resolution:</strong> {issue.resolution}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="submit">
              {submitted ? (
                <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
                  <CardContent className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-green-900 mb-2">Concern Submitted!</h2>
                    <p className="text-green-700 mb-6">
                      Your concern has been submitted to the Ethics Council for review.
                    </p>
                    <div className="space-y-2 mb-6">
                      <Badge className="bg-green-100 text-green-800">Reference: #ETH-2024-001</Badge>
                      <p className="text-sm text-green-600">You will be notified of the council's decision</p>
                    </div>
                    <Button onClick={() => setSubmitted(false)} className="bg-green-600 hover:bg-green-700">
                      Submit Another Concern
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-900">
                      <AlertTriangle className="h-5 w-5" />
                      Submit Ethics Concern
                    </CardTitle>
                    <CardDescription>Report concerns about fairness, transparency, or ethical issues</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitConcern} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="concern-title" className="text-green-900">
                          Concern Title
                        </Label>
                        <Input
                          id="concern-title"
                          value={concernTitle}
                          onChange={(e) => setConcernTitle(e.target.value)}
                          placeholder="Brief description of your concern"
                          className="border-green-200 focus:border-green-400"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="concern-description" className="text-green-900">
                          Detailed Description
                        </Label>
                        <Textarea
                          id="concern-description"
                          value={concernDescription}
                          onChange={(e) => setConcernDescription(e.target.value)}
                          placeholder="Provide detailed information about your concern, including any evidence or examples..."
                          className="border-green-200 focus:border-green-400 min-h-32"
                          required
                        />
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div className="text-sm text-blue-800">
                            <p className="font-medium mb-1">Your submission will be:</p>
                            <ul className="space-y-1 text-blue-700">
                              <li>• Reviewed by all council members</li>
                              <li>• Kept confidential during investigation</li>
                              <li>• Responded to within 7 business days</li>
                              <li>• Handled with complete impartiality</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700"
                        disabled={!concernTitle || !concernDescription || isSubmitting}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        {isSubmitting ? "Submitting..." : "Submit Concern"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
