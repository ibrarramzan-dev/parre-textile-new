import "@/styles/App.scss";

export const metadata = {
  title: " Parre' Textile",
  description: 'Luxury Printed Textiles Exclusively for Discerning Interior Designers',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body suppressContentEditableWarning>{children}</body>
    </html>
  )
}
