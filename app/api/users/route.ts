import { NextRequest, NextResponse } from "next/server";
import { getAllUsers, createUser } from "../../../services/userService";

export async function GET() {
  const users = await getAllUsers();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const newUser = await createUser(data);
  return NextResponse.json(newUser);
}

