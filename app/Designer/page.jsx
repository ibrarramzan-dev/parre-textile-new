import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header";
import { quotes } from "@/Components/quotes/quotesArray";
import style from "@/styles/quotes/quote.module.scss";
import { RxAvatar } from "react-icons/rx";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className={style.number}>
        <div className={style.allquotes}>
          <Quote />
        </div>
      </div>
      <Footer />
    </>
  )
}

const Quote = () => {
  return (
    <>
      {
        quotes.map((quote, index) => (
          <div key={index}>
            <div className={style.para}>
              <div className={style.logo}><FaQuoteLeft className={style.logo} /></div>
              <div className={style.quote}>
                {quote.quote}
              </div>
              <div className={style.author}>
                <div className={style.avatar}>
                  {quote.avatarImg === "" ? <RxAvatar /> : <Image src={quote.avatarImg} alt="" />}
                </div>
                <div className={style.name}>
                  <span className={style.author}>{quote.author}</span>
                  <span className={style.expertise}>{quote.expertise}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}
