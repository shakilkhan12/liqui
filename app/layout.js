import "./globals.css";

export const metadata = {
  title: "Liqui FLX",
  description: "Liqui FLX website description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#010319]">{children}</body>
    </html>
  );
}
