import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userID: {
      type: Number,
      required: true,
    },
    petSitterID: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
