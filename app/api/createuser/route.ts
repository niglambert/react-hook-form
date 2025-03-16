import { NextResponse } from "next/server";
import { userSchema } from "@/lib/types";

export async function POST(request: Request) {
  const body: unknown = await request.json();
  const results = await userSchema.safeParse(body);
  const zodErrors: { [key: string]: string }[] = [];

  if (!results.success) {
    results.error.issues.forEach((issue) => {
      zodErrors.push({ [issue.path[0]]: issue.message });
    });
  }

  return NextResponse.json(
    zodErrors.length > 0 ? { errors: zodErrors, ok: false } : { ok: true },
  );
}
