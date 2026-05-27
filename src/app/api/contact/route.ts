import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { contactSchema } from "@/lib/validation";
import Submission from "@/models/Submission";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Invalid form data.",
          errors: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    await dbConnect();
    const submission = await Submission.create(parsed.data);

    return NextResponse.json(
      {
        message: "Form Submitted Successfully",
        id: submission._id,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { message: "Unable to submit the form right now." },
      { status: 500 }
    );
  }
}
