import SiteHeader from "@/components/layouts/SiteHeader";
import type { Metadata } from "next";
import { Box, Container } from "@mui/material";
import FooterDesctop from "@/components/layouts/FooterDesctop";

export const metadata: Metadata = {
  title: "نرم افزار انبارداری و حسابداری آنلاین نیکد | مدیریت فروشگاه",
  description: "نرم‌افزار انبارداری و حسابداری نیکد - راه‌حل جامع مدیریت فروشگاه، صدور فاکتور، کنترل موجودی و گزارش‌گیری مالی. مناسب برای فروشگاه‌های کوچک و متوسط با پشتیبانی ۲۴ ساعته",
  keywords: [
    "نرم افزار انبارداری",
    "نرم افزار حسابداری",
    "مدیریت فروشگاه",
    "صدور فاکتور",
    "کنترل موجودی",
    "گزارش مالی",
    "انبارداری آنلاین",
    "حسابداری فروشگاه",
    "نرم افزار کسب و کار",
    "مدیریت مشتریان"
  ].join(", "),
  authors: [{ name: "نیکد", url: "https://nikod.ir" }],
  creator: "نیکد",
  publisher: "نیکد",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nikod.ir"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "نرم افزار انبارداری و حسابداری آنلاین نیکد",
    description: "مدیریت حرفه‌ای فروشگاه با نرم‌افزار انبارداری و حسابداری نیکد - صدور فاکتور، کنترل موجودی و گزارش‌گیری پیشرفته",
    url: "https://nikod.ir",
    siteName: "نیکد",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "نرم افزار انبارداری و حسابداری نیکد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "نرم افزار انبارداری و حسابداری آنلاین نیکد",
    description: "مدیریت هوشمند فروشگاه با نرم‌افزار نیکد",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box className="bg-blue-50">
      <SiteHeader />
      {/* محتوای صفحات */}
      <Container
        maxWidth="lg"
        sx={{
          py: 4, // فاصله عمودی بالا و پایین
          px: { xs: 2, sm: 3 },
        }}
      >
        {children}
      </Container>
      <FooterDesctop />
    </Box>
  );
}
