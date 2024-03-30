import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header";
import Navigation from "@/Components/Navigation";
import ProductsPage from "@/Components/Products";

export default function Home() {
  return (
    <>
       <Header />
       <Navigation />
       <ProductsPage />
       <Footer />
    </>
  );
}
