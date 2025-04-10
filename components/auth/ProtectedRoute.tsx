"use client";

import { useAuth } from "@/context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2).max(50),
});

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  if (!user) {
    return (
      <>
        {!showLogin && (
          <div className="flex h-screen items-center justify-center bg-black/50">
            <div className="flex flex-col gap-6">
              <h2 className="text-white">Login Required</h2>
              <button
                onClick={() => setShowLogin(true)}
                className="mt-4 px-4 py-2 bg-[var(--primary)] text-white rounded"
              >
                Login
              </button>
            </div>
          </div>
        )}
        {showLogin && <LoginPopup />}
      </>
    );
  }
  return children;
};

const LoginPopup = () => {
  const { login } = useAuth();

  // const handleLogin = () => {
  //   login({ name: "User" });
  // };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    login({ ...values });
    console.log(values == values);
    // values;
  }

  return (
    <div className="h-screen flex items-center justify-center bg-black/50">
      <div className="space-y-4 p-6 bg-white shadow-md shadow-black w-[400px]">
        <h2 className="text-center">Login</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              {...form.register("email")}
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              {...form.register("password")}
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {form.formState.errors.password && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            {form.formState.isSubmitting ? "Submitting..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProtectedRoute;
