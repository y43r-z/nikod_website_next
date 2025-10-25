import SiteHeader from "@/components/layouts/SiteHeader";
import type { Metadata } from "next";
import { Box, Container } from "@mui/material";
import FooterDesctop from "@/components/layouts/FooterDesctop";

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
