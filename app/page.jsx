import Desc from "@/components/Desc";
import Feed from "@/components/Feed";
import Home from "@/components/Home";
import Nav from "@/components/Nav";

export default function page() {
  return (
    <div>
      <Nav />
      <Home />
      <Desc />
      <Feed />
    </div>
  );
}
