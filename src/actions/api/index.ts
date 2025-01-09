"use server";

import OrigamidService from "@/services/origamid";
import { LoginDTO } from "@/interfaces/api";
import { deleteCookie, setCookie } from "../cookies";

export async function login(data: LoginDTO) {
  try {
    const service = new OrigamidService();
    const { token } = await service.login(data);

    await setCookie("token", token);

    return { ok: true, message: "User authenticated" };
  } catch (error: any) {
    await deleteCookie("token");

    return { ok: false, message: error.message };
  }
}
