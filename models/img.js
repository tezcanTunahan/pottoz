import { Schema, model, models } from "mongoose";

const ImgSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  img: {
    type: String,
    required: [true, "img is required!"],
  },
});

const Img = models.Img || model("Img", ImgSchema);

export default Img;
