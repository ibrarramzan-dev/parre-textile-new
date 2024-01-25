import "@/styles/App.scss";

export const metadata = {
  title: "PARRE' Textile",
  description: 'Luxury Printed Textiles Exclusively for Discerning Interior Designers',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body suppressContentEditableWarning>{children}</body>
    </html>
  )
}
