import React from "react";
import style from "@/styles/footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import Link from "next/link";
import {
  Arapey,
  Antic_Didone,
  Eagle_Lake,
  Playfair_Display,
  Cormorant,
  Roboto,
  Libre_Bodoni,
} from "next/font/google";

const arapey = Arapey({
  weight: "400",
  subsets: ["latin"],
});

const playfair_display = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const antic_didone = Antic_Didone({
  weight: "400",
  subsets: ["latin"],
});

const eagle_lake = Eagle_Lake({
  weight: "400",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const libre_bodoni = Libre_Bodoni({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <>

      <footer className={style.footer}>
        <div className={style.main_footer}>
          
          <section className={style.address}>
            <h2 className={playfair_display.className}>Address</h2>
            <p>
              70 Okner Parkway <br />
              Livingston, New Jersey <br />
              07039
            </p>
            <div className={style.social}>
              <h2 className={playfair_display.className}>Follow Along</h2>
              <div className={style.media}>
              <Link className={style.social_link} href={""}>
                <GrFacebookOption />
              </Link>
              <Link className={style.social_link} href={""}>
                <FaInstagram />
              </Link>
              </div>
            </div>
          </section>
          <section className={style.hello}>
            <h2 className={playfair_display.className}>Say Hello</h2>
            <div className={style.mail}>
              <Link
                className={style.mail}
                href="mailto:Orders@ParreTextile.com"
              >
                Orders@ParreTextile.com
              </Link>
            </div>
            <div className={style.mail}>
              <Link
                className={style.mail}
                href="mailto:MediaPR@ParreTextile.com"
              >
                MediaPR@ParreTextile.com
              </Link>
            </div>
            <div className={style.mail}>
              <Link
                className={style.mail}
                href="mailto:SampleRequests@ParreTextile.com"
              >
                SampleRequests@ParreTextile.com
              </Link>
            </div>
            <div className={style.mail}>
              <Link
                className={style.mail}
                href="mailto:CustomerService@ParreTextile.com"
              >
                CustomerService@ParreTextile.com
              </Link>
            </div>
            <div className={style.mail}>
              <Link
                className={style.mail}
                href="mailto:InvestorRelations@ParreTextile.com"
              >
                InvestorRelations@ParreTextile.com
              </Link>
            </div>
          </section>
        </div>
        <div className={style.foot}>
          <div className={style.links}>
            <Link href={"/"} className={antic_didone.className}>
              Home
            </Link>
            <Link href={"/About"} className={antic_didone.className}>
              About
            </Link>
            <Link href={"/Textiles"} className={antic_didone.className}>
              Textiles
            </Link>
            <Link href={"/Showrooms"} className={antic_didone.className}>
              Showroom
            </Link>
            <Link href={"/FAQs"} className={antic_didone.className}>
              FAQ&apos;s
            </Link>
          </div>
          <div className={`${style.copys} ${antic_didone.className}`}>
            PARRE&apos; &copy; 2024. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
