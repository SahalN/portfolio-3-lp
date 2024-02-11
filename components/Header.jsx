/** @format */

export default function Header() {
  return (
    <>
      <div className='relative flex flex-row justify-between font-bold text-lg items-center '>
        <div className='absolute -top-10 left-[350px] '>
          <img src='/images/half-circle.png' alt='' />
        </div>
        <div className='z-10'>
          <img src='/images/main-logo.png' alt='' />
        </div>
        <nav className='z-10'>
          <ul className='flex flex-row gap-8 '>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </nav>
        <div>
          <a
            href=''
            className='py-2 px-4 bg-black text-white text-base font-bold'>
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
}
