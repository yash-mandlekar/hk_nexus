import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide your full name."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email address."],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Please provide a phone number."],
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Please specify the position you are applying for."],
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Resume is required."],
    },
    resumeFilename: {
      type: String,
      required: true,
    },
    resumeMimeType: {
      type: String,
      required: true,
    },
    resumeSize: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.JobApplication ||
  mongoose.model("JobApplication", JobApplicationSchema);
