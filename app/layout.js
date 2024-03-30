import "@/styles/App.scss";

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
      <body suppressContentEditableWarning>{children}</body>
    </html>
  );
}
