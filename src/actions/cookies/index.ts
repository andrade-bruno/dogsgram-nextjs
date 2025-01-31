"use server";

import { cookies } from "next/headers";

export async function setCookie(key: string, value: string): Promise<boolean> {
  const cookiesAPI = await cookies();

  cookiesAPI.set(key, value, {
    httpOnly: true,
    secure: true,
  });

  return true;
}

export async function getCookie(key: string): Promise<string | undefined> {
  const cookiesAPI = await cookies();

  return cookiesAPI.get(key)?.value;
}

export async function deleteCookie(key: string) {
  const cookiesAPI = await cookies();

  cookiesAPI.delete(key);

  return true;
}
