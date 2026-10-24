import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-yellow-50">
        <div className="bg-red-600 text-white p-5 border-b-4 border-black">
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            <Link href="/" className="text-3xl font-black">
              বাজার দর
            </Link>
            <div className="space-x-2">
              <Link href="/" className="bg-white text-black p-2 font-bold">
                হোম
              </Link>
              <Link href="/dashboard" className="bg-white text-black p-2 font-bold">
                ড্যাশবোর্ড
              </Link>
              <Link href="/sign-in" className="bg-blue-500 text-white p-2 font-bold">
                সাইন ইন
              </Link>
              <Link href="/sign-up" className="bg-green-500 text-white p-2 font-bold">
                সাইন আপ
              </Link>
            </div>
          </div>
        </div>

        <div className="p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
