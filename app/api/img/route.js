import { connectToDB } from "@/utils/database";
import Img from "@/models/img";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const imgs = await Img.find({});
    return new Response(JSON.stringify(imgs), {
      status: 201,
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
