import { Header } from "@/Components/Header";
import ProductsPage from "@/Components/ProductsHome";
import { Gallery } from "@/Components/Gallery";
import Footer from "@/Components/Footer";
import Banner from "@/Components/Banner";
import Designer from "@/app/Designer/page";
import { HomeTextiles } from "@/Components/HomeTextiles";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <ProductsPage />
      <Gallery />
      <HomeTextiles />
      <Designer />
      <Footer />
    </>
  );
}
