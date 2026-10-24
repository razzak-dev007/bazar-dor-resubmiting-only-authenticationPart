import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-800 my-4">আমাদের বাজার দর প্রজেক্ট</h1>
      <p className="text-xl mb-8">আজকের বাজার দর নিচে দেওয়া হলো:</p>

      <div className="flex flex-col gap-4 max-w-md mx-auto">
        <div className="bg-white p-4 border-2 border-black text-left">
          <h2 className="text-2xl font-bold">১. আলু</h2>
          <p className="text-red-600 font-bold">দাম: ৫০ টাকা কেজি</p>
          <Link href="/product/1" className="bg-yellow-400 p-1 mt-2 inline-block font-bold">
            ডিটেইলস দেখুন
          </Link>
        </div>

        <div className="bg-white p-4 border-2 border-black text-left">
          <h2 className="text-2xl font-bold">২. পেয়াজ</h2>
          <p className="text-red-600 font-bold">দাম: ১২০ টাকা কেজি</p>
          <Link href="/product/2" className="bg-yellow-400 p-1 mt-2 inline-block font-bold">
            ডিটেইলস দেখুন
          </Link>
        </div>

        <div className="bg-white p-4 border-2 border-black text-left">
          <h2 className="text-2xl font-bold">৩. রসুন</h2>
          <p className="text-red-600 font-bold">দাম: ২২০ টাকা কেজি</p>
          <Link href="/product/3" className="bg-yellow-400 p-1 mt-2 inline-block font-bold">
            ডিটেইলস দেখুন
          </Link>
        </div>

        <div className="bg-white p-4 border-2 border-black text-left">
          <h2 className="text-2xl font-bold">৪. ডিম (এক ডজন)</h2>
          <p className="text-red-600 font-bold">দাম: ১৫০ টাকা</p>
          <Link href="/product/4" className="bg-yellow-400 p-1 mt-2 inline-block font-bold">
            ডিটেইলস দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
}
