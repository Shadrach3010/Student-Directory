"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import AuthLayout from "@/app/components/auth/AuthLayout";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Sign in to continue to your dashboard."
    >
      <Card>
        <form className="space-y-6">

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            icon={<Mail size={18} />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            icon={<Lock size={18} />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            rightIcon={
              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="text-gray-500 hover:text-black"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            }
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Button type="submit">
            Login
          </Button>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-blue-600 hover:underline"
            >
              Register
            </Link>
          </p>

        </form>
      </Card>
    </AuthLayout>
  );
}