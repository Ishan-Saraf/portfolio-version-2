import Image from "next/image";
import Navbar from "./components/Navbar";
import TopBackground from "./components/Hero/TopBackground";
import Sections from "./components/Sections";

export default function Home() {
  return (
    <>
      <div className="relative overflow-clip" id="home">
        <Sections />
        <Navbar />
        <TopBackground />
      </div>
    </>
  );
}
