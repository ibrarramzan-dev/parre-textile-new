import { Header } from "@/Components/Header";
import ProductsPage from "@/Components/ProductsHome";
import Footer from "@/Components/Footer";
import QuoteHome from "@/Components/QuoteHome";


export default function Home() {
  return (
    <>
      <Header />
      <ProductsPage />
      <QuoteHome />
      <Footer />
    </>
  );
}
