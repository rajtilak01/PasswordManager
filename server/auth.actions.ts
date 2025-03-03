'use server';
import { cookies } from 'next/headers';

export async function setCookie(token: string) {
  try {
    (await cookies()).set({
      name: "token",
      value: token,
      sameSite: "strict",
      httpOnly: true,
    });
  } catch (error) {
    console.error("Error setting cookie", error);
    return 
  }
}
