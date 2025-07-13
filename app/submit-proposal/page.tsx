"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, AlertCircle, CheckCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function SubmitProposal() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [proposalType, setProposalType] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const proposalTypes = [
    {
      value: "payout-policy",
      label: "Change Payout Policy",
      description: "Modify trigger conditions or payout amounts",
    },
    { value: "ethics-member", label: "Add Ethics Member", description: "Nominate new ethics council member" },
    { value: "fund-allocation", label: "Allocate Unused Funds", description: "Decide how to use surplus funds" },
    { value: "region-expansion", label: "Region Expansion", description: "Add new geographic coverage area" },
    { value: "other", label: "Other", description: "General governance proposal" },
  ]

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto border-green-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="text-center py-12">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-900 mb-2">Proposal Submitted!</h2>
              <p className="text-green-700 mb-6">
                Your proposal has been submitted successfully and will be reviewed by the community.
              </p>
              <div className="space-y-2 mb-6">
                <Badge className="bg-green-100 text-green-800">Proposal ID: #PRO-2024-001</Badge>
                <p className="text-sm text-green-600">Voting will begin in 24 hours</p>
              </div>
              <Button onClick={() => setSubmitted(false)} className="bg-green-600 hover:bg-green-700">
                Submit Another Proposal
              </Button>
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
            <h1 className="text-3xl font-bold text-green-900">Submit Proposal</h1>
            <p className="text-green-700">Help shape the future of our climate protection community</p>
          </div>

          {/* Info Card */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">Before submitting:</p>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Proposals require 24 hours for community review</li>
                    <li>• Voting period lasts 7 days</li>
                    <li>• 60% approval needed to pass</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Proposal Form */}
          <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900">
                <FileText className="h-5 w-5" />
                Proposal Details
              </CardTitle>
              <CardDescription>Provide clear and detailed information about your proposal</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Proposal Type */}
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-green-900">
                    Proposal Type
                  </Label>
                  <Select value={proposalType} onValueChange={setProposalType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select proposal type" />
                    </SelectTrigger>
                    <SelectContent>
                      {proposalTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div>
                            <div className="font-medium">{type.label}</div>
                            <div className="text-sm text-muted-foreground">{type.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-green-900">
                    Proposal Title
                  </Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a clear, descriptive title"
                    className="border-green-200 focus:border-green-400"
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-green-900">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide detailed explanation of your proposal, including rationale and expected impact..."
                    className="border-green-200 focus:border-green-400 min-h-32"
                    required
                  />
                  <p className="text-sm text-green-600">{description.length}/500 characters</p>
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label className="text-green-900">Supporting Documents (Optional)</Label>
                  <div className="border-2 border-dashed border-green-200 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <p className="text-sm text-green-700 mb-2">Upload supporting documents, charts, or images</p>
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.doc,.docx,.jpg,.png,.csv"
                    />
                    <Label htmlFor="file-upload" className="cursor-pointer">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="border-green-300 text-green-700 bg-transparent"
                      >
                        Choose File
                      </Button>
                    </Label>
                    {file && <p className="text-sm text-green-600 mt-2">Selected: {file.name}</p>}
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={!title || !description || !proposalType || isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Proposal"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Guidelines */}
          <Card className="border-amber-200 bg-amber-50/50">
            <CardHeader>
              <CardTitle className="text-amber-900">Proposal Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-amber-800 space-y-2">
              <p>• Be specific and clear about what you're proposing</p>
              <p>• Explain how it benefits the community</p>
              <p>• Include any relevant data or research</p>
              <p>• Consider potential risks or drawbacks</p>
              <p>• Respect community values and ethics</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
