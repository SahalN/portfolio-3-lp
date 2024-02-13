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
      {/*  */}
      <div className='flex flex-col py-10 text-center items-centergap-6 px-36'>
        <div className='px-48'>
          <h1 className='text-4xl font-bold '>Core Design Skills</h1>
        </div>
        <div className='px-48 text-base font-normal'>
          <p className='pb-10'>
            I excel in essential design skills, creating visually stunning and
            functional digital experiences. From UI design to UX research, my
            passion is to craft effe ctive and memorable digital solutions.
          </p>
        </div>
        <div className='flex flex-row gap-20 mx-auto text-left'>
          <div className='flex-1'>
            <div>
              <div>
                <h3 className='font-bold'>Interaction Design</h3>
              </div>
              <div className='flex flex-row items-center gap-3 '>
                <div>
                  <img src='/images/bc1.png' alt='' />
                </div>
                <div>
                  <p className='font-bold'>60%</p>
                </div>
              </div>
            </div>
            <div className='pt-2'>
              <div>
                <h3 className='font-bold'>Interaction Design</h3>
              </div>
              <div className='flex flex-row items-center gap-3 '>
                <div>
                  <img src='/images/bc2.png' alt='' />
                </div>
                <div>
                  <p className='font-bold'>70%</p>
                </div>
              </div>
            </div>
            <div className='pt-2'>
              <div>
                <h3 className='font-bold'>Interaction Design</h3>
              </div>
              <div className='flex flex-row items-center gap-3 '>
                <div>
                  <img src='/images/bc3.png' alt='' />
                </div>
                <div>
                  <p className='font-bold'>45%</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <div>
              <div>
                <h3 className='font-bold'>Interaction Design</h3>
              </div>
              <div className='flex flex-row items-center gap-3 '>
                <div>
                  <img src='/images/bc4.png' alt='' />
                </div>
                <div>
                  <p className='font-bold'>95%</p>
                </div>
              </div>
            </div>
            <div className='pt-2'>
              <div>
                <h3 className='font-bold'>Interaction Design</h3>
              </div>
              <div className='flex flex-row items-center gap-3 '>
                <div>
                  <img src='/images/bc5.png' alt='' />
                </div>
                <div>
                  <p className='font-bold'>80%</p>
                </div>
              </div>
            </div>
            <div className='pt-2'>
              <div>
                <h3 className='font-bold'>Interaction Design</h3>
              </div>
              <div className='flex flex-row items-center gap-3 '>
                <div>
                  <img src='/images/bc6.png' alt='' />
                </div>
                <div>
                  <p className='font-bold'>50%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-row bg-[#FFD4D0] px-36 items-center'>
        <div>
          <img src='/images/left-arrow.png' alt='' />
        </div>
        <div className='flex flex-col justify-center gap-10 text-center '>
          <div className='flex justify-center'>
            <img src='/images/half-circle-top.png' alt='' />
          </div>
          <div>
            <h1 className='text-4xl font-bold'>Testemonials</h1>
          </div>
          <div>
            <p className='text-base font-normal px-44'>
              Sara Jones's designs are both visually captivating and highly
              effective. She transformed our website, enhancing user engagement
              and conversions. Her attention to detail and creative approach are
              top-notch. Highly recommended!
            </p>
          </div>
          <div className='flex flex-row items-center justify-center gap-4 pb-10 '>
            <div>
              <img src='/images/pp.png' alt='' />
            </div>
            <div>
              <p>John Smith / CEO of XYZ Company</p>
            </div>
          </div>
        </div>
        <div>
          <img src='/images/right-arrow.png' alt='' />
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col gap-5 py-32 text-center px-36 bg-[#F7F7F7]'>
        <div className='px-44'>
          <h1 className='text-4xl font-bold '>
            Design Insights and Inspiration
          </h1>
        </div>
        <div className='px-44'>
          <p className='text-base font-normal pb-7'>
            Discover industry insights, expert tips, and design inspiration.
            Stay updated with the latest trends in web design and user
            experience.
          </p>
        </div>
        <div className='grid grid-cols-3 text-left gap-x-20 '>
          <div className='flex flex-col gap-4 bg-white'>
            <div>
              <img src='/images/img-typo.png' alt='' className='w-full ' />
            </div>
            <div className='p-2'>
              <p className='text-[12px] font-normal'>August 15, 2023 / UX</p>
            </div>
            <div className='p-2'>
              <h1 className='text-base font-bold'>
                Typography Tips for Design Success
              </h1>
            </div>
            <div className='p-2'>
              <p className='text-sm font-normal'>
                Dive into the world of web typography and discover how to
                choose, pair, and optimize fonts for compelling and readable
                digital designs.
              </p>
            </div>
            <div className='flex flex-row items-center gap-4 p-2'>
              <div>
                <p className='font-bold text-[12px]'>Read More</p>
              </div>
              <div>
                <img src='/images/right-arrow.png' className='w-4' alt='' />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 bg-white'>
            <div>
              <img src='/images/img-psycho.png' alt='' className='w-full ' />
            </div>
            <div className='p-2'>
              <p className='text-[12px] font-normal'>August 15, 2023 / UX</p>
            </div>
            <div className='p-2'>
              <h1 className='text-base font-bold'>Color Psychology in UX</h1>
            </div>
            <div className='p-2'>
              <p className='text-sm font-normal'>
                Explore how color choices impact user emotions and
                decision-making in UX design.
              </p>
            </div>
            <div className='flex flex-row items-center gap-4 p-2 '>
              <div>
                <p className='font-bold text-[12px]'>Read More</p>
              </div>
              <div>
                <img src='/images/right-arrow.png' className='w-4' alt='' />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 bg-white'>
            <div>
              <img src='/images/img-micro.png' alt='' className='w-full' />
            </div>
            <div className='p-2'>
              <p className='text-[12px] font-normal'>August 15, 2023 / UX</p>
            </div>
            <div className='p-2'>
              <h1 className='text-base font-bold'>
                Boosting UX with Microinteractions
              </h1>
            </div>
            <div className='p-2'>
              <p className='text-sm font-normal'>
                Discover the power of microinteractions in enhancing user
                experience and engagement.
              </p>
            </div>
            <div className='flex flex-row items-center gap-4 p-2'>
              <div>
                <p className='font-bold text-[12px]'>Read More</p>
              </div>
              <div>
                <img src='/images/right-arrow.png' className='w-4' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='relative flex flex-row py-32 px-36 bg-[#FFD4D0] gap-10'>
        <div className='flex flex-col flex-1 gap-20 '>
          <div>
            <h1 className='pb-2 text-4xl font-bold'>Get in Touch</h1>
            <p className='text-base font-normal'>
              Have a question or a project in mind? I'd love to hear from you.
              Let's chat and make something amazing together.
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-x-3'>
              <div>
                <img src='/images/phone-call.png' alt='' />
              </div>
              <div>
                <p>+1205 5872 321</p>
              </div>
            </div>
            <div className='flex flex-row gap-x-3'>
              <div>
                <img src='/images/email-vec.png' alt='' />
              </div>
              <div>
                <p>contact@sarajonesdesign.com</p>
              </div>
            </div>
            <div className='flex flex-row gap-x-3'>
              <div>
                <img src='/images/point.png' alt='' />
              </div>
              <div>
                <p>
                  1234 Design Street,Creativeville, Webland,Imaginary State,
                  98765
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-4'>
            <div>
              <img src='/images/x.png' alt='' />
            </div>
            <div>
              <img src='/images/instagram.png' alt='' />
            </div>
            <div>
              <img src='/images/dribble.png' alt='' />
            </div>
            <div>
              <img src='/images/facebook.png' alt='' />
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 gap-6'>
          <div>
            <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='First name'
            />
          </div>
          <div>
            <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Email'
            />
          </div>
          <div>
            <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Phone number'
            />
          </div>
          <div>
            <textarea
              type='text'
              rows='10'
              className='bg-gray-50 border border-gray-300 w-full h-full text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Your message'
            />
          </div>
          <div>
            <button className='px-8 py-2 text-base font-bold text-white bg-black'>
              Send Message
            </button>
          </div>
        </div>
        <div className='absolute -left-10 top-1/3'>
          <img src='/images/half-circle-left.png' alt='' />
        </div>
      </div>
    </>
  );
}
