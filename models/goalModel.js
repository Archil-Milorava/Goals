import mongoose from "mongoose";

const goalsSchema = new mongoose.Schema(
  {
    goal: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Goal = mongoose.model("Goals", goalsSchema)