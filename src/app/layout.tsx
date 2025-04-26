import "./globals.css";
import localfont from "next/font/local";
import metadata from "./metadata";
import Sidebar from "@components/navigation/Sidebar";
import Navbar from "@components/navigation/Navbar";
import Footer from "@components/layout/Footer";

export { metadata };

const muli = localfont({
  src: [{ path: "./../fonts/Muli.ttf", weight: "400", style: "normal" }],
  variable: "--muli",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${muli.className} antialiased`}>
        <Sidebar />
        <main className="w-full">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
