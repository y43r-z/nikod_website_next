import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { firstName, lastName, phone, password, email } = data;

    // 🧠 Validation
    if (!phone || !password)
      return NextResponse.json(
        { error: "شماره موبایل و رمز عبور الزامی است." },
        { status: 400 }
      );

    // ✅ Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { phone },
    });
    if (existingUser)
      return NextResponse.json(
        { error: "این شماره موبایل قبلاً ثبت شده است." },
        { status: 400 }
      );

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 💾 Create new user
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        phone,
        email,
        password: hashedPassword,
      },
    });

    // 🚀 Remove password before returning
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json(
      { message: "ثبت‌نام با موفقیت انجام شد.", user: userWithoutPassword },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "خطا در ثبت‌نام کاربر." },
      { status: 500 }
    );
  }
}
