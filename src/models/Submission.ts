import { model, models, Schema } from "mongoose";

const submissionSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const Submission = models.Submission || model("Submission", submissionSchema);

export default Submission;
