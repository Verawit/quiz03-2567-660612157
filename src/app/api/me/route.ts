import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Verawit Yingsirithanyarat",
    studentId: "660612157",
  });
};
