import { Divide } from "lucide-react";
import Image from "next/image";
import Banner from "../components/Banner";
import FeaturesCard from "../components/FeaturesCard";
import AllCategories from "../categories/page";
import Footer from "../components/Footer";
import ChooseUs from "../components/ChooseUs";
import Review from "../components/Review";

export default function Home() {
  return (
    <div>
<Banner/>
<FeaturesCard/>
<AllCategories/>
<ChooseUs/>
<Review></Review>
<Footer/>
    </div>
  );
}
