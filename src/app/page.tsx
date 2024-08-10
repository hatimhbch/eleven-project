import Aboutme from "./components/aboutme/page";
import Collection from "./components/collection/collection";
import '@/app/page.css'

export default function Home() {
  return (
    <div className="homepage">
      <Collection />
      <Aboutme />
    </div>

  );
}
