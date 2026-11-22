import { Divide } from "lucide-react";
import Image from "next/image";
import Banner from "../components/Banner";
import FeaturesCard from "../components/FeaturesCard";
import AllCategories from "../categories/page";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
<Banner/>
<FeaturesCard/>
<AllCategories/>
<Footer/>
    </div>
  );
}
