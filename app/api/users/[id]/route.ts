import { NextRequest, NextResponse } from "next/server";
import { getUserById, updateUser, deleteUser } from "../../../../services/userService";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const user = await getUserById(Number(params.id));
  return NextResponse.json(user);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json();
  const user = await updateUser(Number(params.id), data);
  return NextResponse.json(user);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await deleteUser(Number(params.id));
  return NextResponse.json({ message: "User deleted successfully" });
}
