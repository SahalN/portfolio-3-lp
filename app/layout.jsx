/** @format */
import Footer from "../components/Footer";
import Header from "../components/Header";
import { montserrat } from "./font";
import "./global.css";

export default function RootLatout({ children }) {
  return (
    <html lang='en' className={montserrat.variable}>
      <body className=' flex flex-col min-h-screen font-montserrat'>
        <header className='bg-[#FFD4D0] pt-8 px-36'>
          <Header />

          <div className='flex flex-row items-center pt-10 '>
            <div className='flex flex-col gap-8'>
              <div className='font-normal text-xl'>
                <p>UX Designer</p>
              </div>
              <div>
                <h1 className='font-bold text-5xl '>Hi There, I’m </h1>
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
              <div className='flex flex-row gap-5 items-center'>
                <div>
                  <button className='py-2 px-10 bg-black text-white text-base font-bold'>
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
        <main className='grow py-8 px-36'>{children}</main>
        <footer className='py-8 px-36'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
