"use client";
import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
// import LoginIcon from "@mui/icons-material/Login";
import Image from "next/image";

const SiteHeader = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#ffffff", // آبی تیره
        boxShadow: "0px 2px 10px rgba(0,0,0,0.15)",
      }}
    >
      <Toolbar className="flex justify-between items-center  mx-auto w-full  text-emerald-950">
        {/* لوگو */}
        <Box
          className="flex items-center  rtl:space-x-reverse"
          href="/"
          component={Link}
        >
          <Image
            src="/logo.png"
            width={60}
            height={50}
            alt="لوگو نرم افزار نیکد"
          />
          <Typography
            variant="h6"
            className="font-bold  no-underline"
            sx={{
              flexShrink: 0,
              // "&:hover": { color: "#bbdefb" },
              color: "#5271fd",
            }}
          >
            نرم افزار نیکد
          </Typography>
        </Box>

        {/* لینک‌های ناوبری */}
        <Box className="hidden md:flex gap-6">
          <Link href="/" className=" hover:text-blue-400 transition">
            صفحه اصلی
          </Link>
          <Link href="/about" className=" hover:text-blue-400 transition">
            معرفی نرم‌افزار
          </Link>
          {/* <Link href="/contact" className=" hover:text-blue-400 transition">
            تماس با ما
          </Link> */}
        </Box>

        {/* دکمه‌ها */}
        <Box className="flex items-center gap-3">
          <Button
            variant="text"
            color="primary"
            endIcon={<PhoneIcon />}
            // sx={{
            //   backgroundColor: "#1976d2",
            //   "&:hover": { backgroundColor: "#1565c0" },
            //   textTransform: "none",
            // }}
          >
            09934623142
          </Button>

          {/* <Button
            variant="contained"
            color="primary"
            endIcon={<LoginIcon />}
            sx={{}}
          >
            ورود / ثبت‌نام
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SiteHeader;
