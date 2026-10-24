"use client";
import { useSession, signOut } from "@/lib/auth-client";

export default function Dashboard() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <h1>একটু দাঁড়ান...</h1>;
  }

  if (!session) {
    return (
      <div className="text-center p-5 bg-white max-w-md mx-auto mt-5 border-2 border-red-500">
        <h2 className="text-red-600 font-bold text-2xl">লগইন করা নাই!</h2>
        <p>ড্যাশবোর্ড দেখতে হলে আগে সাইন ইন করে আসেন।</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 max-w-lg mx-auto border-2 border-black text-center">
      <h1 className="text-2xl font-bold text-blue-600">ওয়েলকাম {session.user.name} !</h1>
      <p className="my-2">আপনার ইমেইল আইডি: {session.user.email}</p>
      
      <div className="bg-green-200 p-3 my-4 font-bold">
        অভিনন্দন! আপনি সফলভাবে সাইন ইন করেছেন এবং ড্যাশবোর্ড দেখছেন।
      </div>

      <button
        onClick={() => {
          signOut();
          window.location.href = "/";
        }}
        className="bg-red-600 text-white p-2 font-bold"
      >
        লগ আউট করুন
      </button>
    </div>
  );
}
