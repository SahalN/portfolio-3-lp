/** @format */

export default function LandingPage() {
  return (
    <>
      <div className='flex flex-col justify-center gap-8 text-center text-white px-36 pt-8  bg-[#1F1F1F]'>
        <div>
          <h1 className='text-4xl font-bold'>About Me</h1>
        </div>
        <div className='px-56'>
          <p className='font-light'>
            I'm Sara Jones, a UI/UX designer dedicated to crafting intuitive and
            visually stunning digital experiences. With a passion for
            user-centric design, I transform ideas into functional and beautiful
            interfaces. Let's collaborate and shape the future of design
            together.
          </p>
        </div>
        <div className='flex flex-row justify-center gap-x-44'>
          <div>
            <h2 className='font-bold text-[64px] text-[#FFD4D0]'>502</h2>
            <p className='text-lg font-bold'>Projects Done</p>
          </div>
          <div>
            <h2 className='font-bold text-[64px] text-[#FFD4D0]'>10+</h2>
            <p className='text-lg font-bold'>Years of Experience</p>
          </div>
          <div>
            <h2 className='font-bold text-[64px] text-[#FFD4D0]'>273+</h2>
            <p className='text-lg font-bold'>Clients Served</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src='/images/full-circle.png' alt='' />
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col justify-center gap-8 py-10 pt-10 text-center bg-white px-36'>
        <div className='px-44'>
          <h1 className='text-4xl font-bold'>Services</h1>
        </div>
        <div className='px-44'>
          <p className='text-base font-normal'>
            Explore my design services, from user interface and experience to
            prototyping and testing. Let's craft exceptional digital experiences
            together.
          </p>
        </div>
        <div className='flex flex-row justify-between gap-20 text-left'>
          <div className='flex flex-col gap-5'>
            <div>
              <img src='/images/star.png' alt='' />
            </div>
            <div>
              <h3 className='text-lg font-bold'>Design</h3>
            </div>
            <div>
              <p className='text-sm font-normal'>
                I specialize in web development and design, creating visually
                appealing, user-friendly digital experiences.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div>
              <img src='/images/audi.png' alt='' />
            </div>
            <div>
              <h3 className='text-lg font-bold'>Branding</h3>
            </div>
            <div>
              <p className='text-sm font-normal'>
                I'm a branding expert, crafting unique visual identities that
                tell your story and resonate with your audience.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div>
              <img src='/images/search.png' alt='' />
            </div>
            <div>
              <h3 className='text-lg font-bold'>UX Research</h3>
            </div>
            <div>
              <p className='text-sm font-normal'>
                "I specialize in user experience research, collaborating on web
                development, and ensuring user-friendly digital products.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div>
              <img src='/images/noted.png' alt='' />
            </div>
            <div>
              <h3 className='text-lg font-bold'>Usability Testing</h3>
            </div>
            <div>
              <p className='text-sm font-normal'>
                I perform usability testing and optimize designs websites based
                on real-user feedback for seamless interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='relative flex flex-wrap bg-white mb-[600px]'>
        <div className='px-36 flex flex-col justify-center gap-8 pt-10 text-center bg-[#FFD4D0] pb-36'>
          <div className='px-80'>
            <h1 className='text-4xl font-bold'>My Portfolio</h1>
          </div>
          <div className='px-80'>
            <p className='text-base font-normal '>
              Explore my design services, from user interface and experience to
              prototyping and testing. Let's craft exceptional digital
              experiences together.
            </p>
          </div>
        </div>

        <div className='absolute grid justify-center w-full grid-cols-3 pt-8 text-left bg-fixed top-48 gap-14 place-items-center px-36 '>
          <div className='bg-white '>
            <div>
              <img src='/images/img-1.png' alt='' />
            </div>
            <div className='flex flex-row justify-between'>
              <div>
                <div className='col-span-2 pt-4'>
                  <h2 className='text-xl font-bold'>Educational Platform</h2>
                </div>
                <div className='pt-4'>
                  <p className='text-sm'>Web Design / Usability Testing</p>
                </div>
              </div>
              <div className='place-self-end'>
                <img src='/images/send.png' alt='' />
              </div>
            </div>
          </div>
          <div className='bg-white '>
            <div>
              <img src='/images/img-2.png' alt='' />
            </div>
            <div className='flex flex-row justify-between'>
              <div>
                <div className='col-span-2 pt-4'>
                  <h2 className='text-xl font-bold'>Travel App Design</h2>
                </div>
                <div className='pt-4'>
                  <p className='text-sm'>UX Research / App Design </p>
                </div>
              </div>
              <div className='place-self-end'>
                <img src='/images/send.png' alt='' />
              </div>
            </div>
          </div>
          <div className='bg-white '>
            <div>
              <img src='/images/img-3.png' alt='' />
            </div>
            <div className='flex flex-row justify-between'>
              <div>
                <div className='col-span-2 pt-4'>
                  <h2 className='text-xl font-bold'>Personal Page</h2>
                </div>
                <div className='pt-4'>
                  <p className='text-sm'>Web Design</p>
                </div>
              </div>
              <div className='place-self-end'>
                <img src='/images/send.png' alt='' />
              </div>
            </div>
          </div>
          <div className='bg-white '>
            <div>
              <img src='/images/img-4.png' alt='' />
            </div>
            <div className='flex flex-row justify-between'>
              <div>
                <div className='col-span-2 pt-4'>
                  <h2 className='text-xl font-bold'>Furniture Mobile App</h2>
                </div>
                <div className='pt-4'>
                  <p className='text-sm'>App Design </p>
                </div>
              </div>
              <div className='place-self-end'>
                <img src='/images/send.png' alt='' />
              </div>
            </div>
          </div>
          <div className='bg-white '>
            <div>
              <img src='/images/img-5.png' alt='' />
            </div>
            <div className='flex flex-row justify-between'>
              <div>
                <div className='col-span-2 pt-4'>
                  <h2 className='text-xl font-bold'>
                    Coffee House Landing Page
                  </h2>
                </div>
                <div className='pt-4'>
                  <p className='text-sm'>UX Research / Web Design </p>
                </div>
              </div>
              <div className='place-self-end'>
                <img src='/images/send.png' alt='' />
              </div>
            </div>
          </div>
          <div className='bg-white '>
            <div>
              <img src='/images/img-6.png' alt='' />
            </div>
            <div className='flex flex-row justify-between'>
              <div>
                <div className='col-span-2 pt-4'>
                  <h2 className='text-xl font-bold'>Home Services Page</h2>
                </div>
                <div className='pt-4'>
                  <p className='text-sm'>Web Design / Marketing</p>
                </div>
              </div>
              <div className='place-self-end'>
                <img src='/images/send.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
