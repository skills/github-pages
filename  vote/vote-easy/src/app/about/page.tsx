import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "About VoteEasy - Simple Online Voting System",
  description: "Learn more about VoteEasy, a free and simple online voting system for creating polls and gathering opinions.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-900 mb-2">About VoteEasy</h1>
        <p className="text-xl text-gray-600">
          A simple, free, and customizable online voting system
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>What is VoteEasy?</CardTitle>
            <CardDescription>
              The easiest way to create and share polls online
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              VoteEasy is a lightweight, user-friendly online voting system that lets you quickly create polls, share them with others, and collect responses. Whether you're deciding on a meeting time, gathering opinions, or conducting informal research, VoteEasy makes the process simple.
            </p>
            <p className="text-gray-700">
              The project was inspired by the need for a straightforward polling tool without complex features or account requirements. Just create, share, and collect responses - it's that easy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
            <CardDescription>
              What makes VoteEasy useful
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-green-800">Free & Simple</h3>
                <p className="text-gray-700">
                  No registration required. Create polls in seconds with a clean, intuitive interface.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-green-800">Anonymous Voting</h3>
                <p className="text-gray-700">
                  Enable anonymous voting to get honest feedback without identifying voters.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-green-800">Named Voting Option</h3>
                <p className="text-gray-700">
                  Alternatively, require names for accountability when needed.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-green-800">Single or Multiple Choice</h3>
                <p className="text-gray-700">
                  Configure polls to allow voters to select one or multiple options.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-green-800">Real-time Results</h3>
                <p className="text-gray-700">
                  View updated results instantly as votes are submitted.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-green-800">Easy Sharing</h3>
                <p className="text-gray-700">
                  Share your poll with a simple link that works across devices.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use</CardTitle>
            <CardDescription>
              Getting started with VoteEasy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-medium text-green-800">Create a poll:</span> Click "Create Poll" and enter your question and options. Configure settings like multiple choice and voter identification.
              </li>
              <li>
                <span className="font-medium text-green-800">Share your poll:</span> Copy the unique link and share it with participants via email, messaging apps, or social media.
              </li>
              <li>
                <span className="font-medium text-green-800">Collect responses:</span> As people vote, results update immediately. You can view results at any time.
              </li>
              <li>
                <span className="font-medium text-green-800">Analyze results:</span> See percentages and vote counts for each option to understand the collective opinion.
              </li>
            </ol>
          </CardContent>
        </Card>

        <div className="text-center py-8">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Ready to create your first poll?</h2>
          <Link href="/create" passHref>
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
