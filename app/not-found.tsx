"use client";
import { Container, Typography, Button } from "@mui/material";
import { Home, ArrowBack } from "@mui/icons-material";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <Container maxWidth="md" className="text-center">
        {/* آیکون یا لوگوی خطا */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-blue-200 rounded-full flex items-center justify-center">
            <svg
              className="w-20 h-20 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* متن خطا */}
        <Typography
          variant="h1"
          className="text-9xl font-bold text-blue-800 mb-4"
        >
          404
        </Typography>

        <Typography variant="h4" className="text-blue-700 mb-4 font-medium">
          صفحه مورد نظر یافت نشد
        </Typography>

        <Typography
          variant="body1"
          className="text-blue-600  my-4 text-center"
        >
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد، حذف شده یا آدرس آن
          تغییر کرده است.
        </Typography>

        {/* دکمه‌های عمل */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            variant="contained"
            startIcon={<ArrowBack />}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium"
            onClick={() => window.history.back()}
          >
            بازگشت
          </Button>

          <Link href="/" passHref>
            <Button
              variant="outlined"
              startIcon={<Home />}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-medium"
            >
              صفحه اصلی
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
