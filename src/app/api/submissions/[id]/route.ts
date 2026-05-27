import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Submission from "@/models/Submission";

export const runtime = "nodejs";

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!isValidObjectId(params.id)) {
      return NextResponse.json(
        { message: "Invalid submission id." },
        { status: 400 }
      );
    }

    await dbConnect();
    const deleted = await Submission.findByIdAndDelete(params.id);

    if (!deleted) {
      return NextResponse.json(
        { message: "Submission not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Submission deleted." });
  } catch {
    return NextResponse.json(
      { message: "Unable to delete the submission." },
      { status: 500 }
    );
  }
}
