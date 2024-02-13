/** @format */
import Footer from "../components/Footer";
import Header from "../components/Header";
import { montserrat } from "./font";
import "./global.css";

export default function RootLatout({ children }) {
  return (
    <html lang='en' className={montserrat.variable}>
      <body className='flex flex-col min-h-screen font-montserrat'>
        <header className='bg-[#FFD4D0] pt-8 px-36'>
          <Header />

          <div className='flex flex-row items-center pt-10 '>
            <div className='flex flex-col gap-8'>
              <div className='text-xl font-normal'>
                <p>UX Designer</p>
              </div>
              <div>
                <h1 className='text-5xl font-bold '>Hi There, I’m </h1>
              </div>
              <div className='text-[#FC3314] font-bold text-5xl'>
                Sarah Jones
              </div>
              <div>
                <p className='text-base font-normal '>
                  Welcome to my portfolio of captivating digital experiences.
                  Explore my work and let's create something extraordinary
                  together.
                </p>
              </div>
              <div className='flex flex-row items-center gap-5'>
                <div>
                  <button className='px-10 py-2 text-base font-bold text-white bg-black'>
                    Hire Me
                  </button>
                </div>
                <div>
                  <button className='py-2 px-10 bg-white border-[1px] border-black text-black text-base font-bold'>
                    Portfolio
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img src='/images/main-image.png' alt='' />
            </div>
          </div>
        </header>
        <main className='bg-white grow'>{children}</main>
        <footer className='py-8 px-36 bg-[#1F1F1F] text-white'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
