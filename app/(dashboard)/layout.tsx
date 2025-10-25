import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "داشبورد ادمین",
  description: "dashbord section",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <h1>header dashbord only  /dashbord</h1>
      <body className={``}>{children}</body>
    </html>
  );
}
