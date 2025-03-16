import { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { getPollsByUser } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const runtime = 'nodejs';

export const metadata: Metadata = {
  title: "My Profile - VoteEasy",
  description: "View and manage your polls and account on VoteEasy",
};

export default async function ProfilePage() {
  const session = await auth();

  if (!session || !session.user) {
    // Redirect to login if not authenticated
    redirect("/login?callbackUrl=/profile");
  }

  const { user } = session;
  const userPolls = await getPollsByUser(user.id);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-green-900 mb-2">My Profile</h1>
      <p className="text-gray-600 mb-8">Manage your polls and account settings</p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Your personal details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Name</h3>
                  <p>{user.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p>{user.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Member Since</h3>
                  <p>{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/profile/edit">Edit Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>My Polls</CardTitle>
                  <CardDescription>Polls you've created</CardDescription>
                </div>
                <Button size="sm" className="bg-green-700 hover:bg-green-800" asChild>
                  <Link href="/create">Create New Poll</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {userPolls.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">You haven't created any polls yet</p>
                  <Button className="bg-green-700 hover:bg-green-800" asChild>
                    <Link href="/create">Create Your First Poll</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {userPolls.map((poll) => (
                    <div key={poll.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{poll.question}</h3>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {poll.accessType === "members" ? "Members Only" : "Public"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">
                        {new Date(poll.createdAt).toLocaleDateString()} •
                        {poll.options.reduce((sum, option) => sum + option.votes, 0)} votes
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/poll/${poll.id}`}>View</Link>
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 border-red-600">
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
