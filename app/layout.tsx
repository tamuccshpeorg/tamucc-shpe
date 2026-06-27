import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "SHPE TAMU-CC",
  description: "Society of Hispanic Professional Engineers at TAMU-CC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
