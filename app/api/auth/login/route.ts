import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

const SECRET_KEY = process.env.JWT_SECRET || "dev_secret_key";

export async function POST(req: NextRequest) {
  try {
    const { phone, password } = await req.json();

    if (!phone || !password)
      return NextResponse.json(
        { error: "شماره موبایل و رمز عبور الزامی است." },
        { status: 400 }
      );

    const user = await prisma.user.findUnique({ where: { phone } });
    if (!user)
      return NextResponse.json(
        { error: "کاربری با این شماره یافت نشد." },
        { status: 400 }
      );

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return NextResponse.json(
        { error: "رمز عبور اشتباه است." },
        { status: 400 }
      );

    // 🎫 ساخت JWT Token
    const token = jwt.sign(
      { id: user.id, role: user.role, phone: user.phone },
      SECRET_KEY,
      { expiresIn: "7d" }
    );

    // 🍪 تنظیم کوکی امن
    const response = NextResponse.json({
      message: "ورود موفقیت‌آمیز بود.",
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    });

    response.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,     // جلوگیری از دسترسی در جاوااسکریپت (امنیت XSS)
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", // جلوگیری از CSRF
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // ۷ روز
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "خطا در ورود." }, { status: 500 });
  }
}
