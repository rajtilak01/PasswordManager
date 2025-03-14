"use server";
import { NextRequest, NextResponse } from "next/server";
import Password from "@/modes/Password";
import { encrypt } from "@/lib/encryption";
import { connectDB } from "@/lib/db";

type passwordObject = {
  website: string;
  username: string;
  password: string;
  userId: string;
};

export async function savePassword(data: passwordObject) {
  await connectDB();
  console.log("server action is called");
  const { website, username, password, userId } = data;

  const hashedPassword = encrypt(password);

  const passwordSave = await Password.create({
    website,
    password: hashedPassword,
    username,
    userId,
  });

  console.log("database entry done");
  return {
    success: true,
    data: {
      website: passwordSave.website,
      username: passwordSave.username,
      userId: passwordSave.userId,
      updatedAt: passwordSave.updatedAt,
    },
  };
}
