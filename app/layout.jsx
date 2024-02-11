/** @format */
import Footer from "../components/Footer";
import Header from "../components/Header";
import { montserrat } from "./font";
import "./global.css";

export default function RootLatout({ children }) {
  return (
    <html lang='en' className={montserrat.variable}>
      <body className='py-8 px-20 flex flex-col min-h-screen font-montserrat'>
        <header>
          <Header />
        </header>
        <main className='grow'>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
