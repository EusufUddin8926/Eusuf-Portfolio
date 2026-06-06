import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Eusuf Uddin — Android Developer",
  description:
    "Passionate Android Developer with 3.5+ years of experience in Kotlin, Java, Jetpack Compose, and mobile architecture.",
  keywords: ["Android Developer", "Kotlin", "Java", "Mobile Development", "Bangladesh"],
  authors: [{ name: "Md Eusuf Uddin" }],
  openGraph: {
    title: "Md Eusuf Uddin — Android Developer",
    description: "Passionate Android Developer based in Dhaka, Bangladesh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
