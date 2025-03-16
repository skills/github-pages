import { Metadata } from "next";
import RegisterForm from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "Register - VoteEasy",
  description: "Create an account to access member-only features on VoteEasy",
};

export default function RegisterPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-green-900 mb-8">Join VoteEasy</h1>
      <RegisterForm />
    </div>
  );
}
