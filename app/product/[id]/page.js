"use client";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";

export default function ProductDetail({ params }) {
  const { data: session, isPending } = useSession();
  const id = params.id;

  if (isPending) {
    return <p>ওয়েট করেন...</p>;
  }

  if (!session) {
    return (
      <div className="bg-white p-5 max-w-md mx-auto text-center border-4 border-red-600">
        <h1 className="text-xl font-bold text-red-600">আপনি প্রোডাক্ট দেখতে পারবেন না!</h1>
        <p className="my-2">প্রোডাক্টের খবর জানতে হলে একাউন্ট খুলে সাইন ইন করেন।</p>
        <Link href="/sign-in" className="bg-blue-500 text-white p-2 inline-block font-bold mt-2">
          সাইন ইন পেজ
        </Link>
      </div>
    );
  }

  var name = "";
  var price = "";
  var details = "";

  if (id == "1") {
    name = "আলু";
    price = "৫০ টাকা কেজি";
    details = "বগুড়ার তাজা আলু। খুব ভালো কোয়ালিটি।";
  } else if (id == "2") {
    name = "পেয়াজ";
    price = "১২০ টাকা কেজি";
    details = "পাবনার লাল পেয়াজ। তরকারিতে দিলে স্বাদ বাড়ে।";
  } else if (id == "3") {
    name = "রসুন";
    price = "২২০ টাকা কেজি";
    details = "একদম দেশি রসুন। কোয়ালিটি ১০০%";
  } else if (id == "4") {
    name = "ডিম (এক ডজন)";
    price = "১৫০ টাকা";
    details = "ফার্মের তাজা ডিম। লাল ডিম।";
  } else {
    name = "পাওয়া যায়নি";
    price = "0";
    details = "এই আইডি দিয়ে কিছু নাই";
  }

  return (
    <div className="bg-white p-5 max-w-md mx-auto border-2 border-black">
      <h1 className="text-3xl font-bold text-green-600">{name}</h1>
      <p className="text-xl font-bold text-red-500 my-2">দাম: {price}</p>
      <p className="bg-gray-100 p-2 my-3">{details}</p>

      <Link href="/" className="text-blue-600 font-bold underline">
        হোমে যান
      </Link>
    </div>
  );
}
