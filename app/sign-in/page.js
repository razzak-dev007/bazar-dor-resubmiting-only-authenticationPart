"use client";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  async function loginUser(e) {
    e.preventDefault();
    setErr("");

    const res = await signIn.email({
      email: email,
      password: password,
    });

    if (res.error) {
      setErr("লগইন হয়নি! ইমেইল বা পাসওয়ার্ড ভুল আছে।");
    } else {
      window.location.href = "/dashboard";
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-5 border-4 border-green-600 mt-5">
      <h1 className="text-2xl font-bold mb-3">সাইন ইন করুন</h1>

      {err != "" && (
        <div className="bg-red-300 p-2 mb-3">
          {err}
        </div>
      )}

      <form onSubmit={loginUser}>
        <div className="mb-3">
          <p>ইমেইল:</p>
          <input
            type="email"
            className="border-2 border-gray-400 p-1 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <p>পাসওয়ার্ড:</p>
          <input
            type="password"
            className="border-2 border-gray-400 p-1 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white p-2 font-bold w-full">
          লগইন
        </button>
      </form>
    </div>
  );
}
