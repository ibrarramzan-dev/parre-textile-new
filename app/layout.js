import "@/styles/App.scss";
// import Head from "next/head";
// import favicon1 from "@/public/favicon-16x16.png";
// import favicon2 from "@/public/favicon-32x32.png";
// import favicon3 from "@/public/android-chrome-192x192.png";
// import favicon4 from "@/public/android-chrome-512x512.png";

export const metadata = {
  title: "PARRE' Textile",
  description:
    "Luxury Printed Textiles Exclusively for Discerning Interior Designers",
    icons:{
      icon:['/favicon.ico'],
      apple:['/apple-touch-icon.png?v=4'],
      shortcut:['/apple-touch-icon.png']
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={favicon1}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={favicon2}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={favicon3}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href={favicon4}
        />
      </Head> */}
      <body suppressContentEditableWarning>{children}</body>
    </html>
  );
}
