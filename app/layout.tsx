import type { Metadata } from "next";

import "./globals.css";
import ThemeRegistry from "../components/theme/ThemeRegistry";

import localFont from "next/font/local";

const yekan = localFont({
  src: "./fonts/lineawesome/YekanBakhFaNum-Medium.woff",
  display: "swap",
});

export const metadata = {
  title: "وب‌سایت نیکود",
  description: "صفحه اصلی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <ThemeRegistry>
          {children}
          </ThemeRegistry>
      </body>
    </html>
  );
}
