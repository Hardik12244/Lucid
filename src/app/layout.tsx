import type { Metadata } from "next";
import { Geist, Google_Sans } from "next/font/google";
import "./globals.css";



const geist = Geist({
  subsets: ["latin"],
});
const google_Sans = Google_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucid",
  description: "Buy with clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={google_Sans.className}>
        {children}
      </body>
    </html>
  );
}