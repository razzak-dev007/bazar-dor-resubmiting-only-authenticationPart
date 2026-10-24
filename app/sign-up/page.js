"use client";
import { useState } from "react";
import { signUp } from "@/lib/auth-client";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function submitForm(e) {
    e.preventDefault();
    setMsg("");

    if (password.length < 8) {
      setMsg("পাসওয়ার্ড অন্তত ৮ টা ক্যারেক্টার হতে হবে!");
      return;
    }

    var hasNum = false;
    var hasLet = false;

    for (var i = 0; i < password.length; i++) {
      var c = password[i];
      if (c >= '0' && c <= '9') {
        hasNum = true;
      }
      if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
        hasLet = true;
      }
    }

    if (!hasNum || !hasLet) {
      setMsg("পাসওয়ার্ডে সংখ্যা আর অক্ষর দুটোই দেওয়া লাগবে!");
      return;
    }

    const res = await signUp.email({
      email: email,
      password: password,
      name: name,
    });

    if (res.error) {
      setMsg(res.error.message);
    } else {
      alert("সাইন আপ সফল হয়েছে! এখন সাইন ইন অপশনে গিয়ে লগইন করো।");
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-5 border-4 border-blue-600 mt-5">
      <h1 className="text-2xl font-bold mb-3">সাইন আপ করুন</h1>

      {msg != "" && (
        <div className="bg-red-200 text-red-800 p-2 mb-3">
          {msg}
        </div>
      )}

      <form onSubmit={submitForm}>
        <div className="mb-3">
          <p>আপনার নাম:</p>
          <input
            type="text"
            className="border-2 border-gray-400 p-1 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <p>ইমেইল এড্রেস:</p>
          <input
            type="email"
            className="border-2 border-gray-400 p-1 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <p>পাসওয়ার্ড (৮ টা অক্ষর, নাম্বার+লেটার):</p>
          <input
            type="password"
            className="border-2 border-gray-400 p-1 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="bg-green-600 text-white p-2 font-bold w-full">
          একউন্ট খুলুন
        </button>
      </form>
    </div>
  );
}
