import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "dev_secret_key";

// نقش‌هایی که به داشبورد دسترسی دارن
const allowedRoles = ["ADMIN", "MANAGER"]; 

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const payload = jwt.verify(token, SECRET_KEY) as {
      id: number;
      role: string;
    };

    // دسترسی ندارد
    if (!allowedRoles.includes(payload.role)) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
