import Image from "next/image";
import Navbar from "./navbar/page";
import Body from "./body/page";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Body />
    </div>
  );
}
