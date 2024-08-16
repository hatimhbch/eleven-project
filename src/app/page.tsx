import { Metadata } from "next";
import Aboutme from "./components/aboutme/page";
import Collection from "./components/collection/collection";
import '@/app/page.css'

export const metadata: Metadata = {
  title: "elevenai is Blog for Articles about anything you think about. ai and programming languages",
}

export default function Home() {
  return (
    <div className="homepage">
      <Collection />
      <Aboutme />
    </div>

  );
}
