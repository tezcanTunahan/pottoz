import Img from "@/models/img";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { userId, img } = await request.json();

  try {
    await connectToDB();
    const newImg = new Img({ creator: userId, img });

    await newImg.save();
    return new Response(JSON.stringify(newImg), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Img", { status: 500 });
  }
};
