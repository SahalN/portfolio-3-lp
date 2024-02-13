/** @format */

export default function Footer() {
  return (
    <>
      <div className='py-10 '>
        <div className='flex flex-row items-center justify-center gap-10 pb-20 text-center'>
          <div>
            <p className='text-xl font-bold'>About</p>
          </div>
          <div>
            <p className='text-xl font-bold'>Services</p>
          </div>
          <div className='px-10'>
            <img src='/images/f-logo.png' alt='' />
          </div>
          <div>
            <p className='text-xl font-bold'>Portfolio</p>
          </div>
          <div>
            <p className='text-xl font-bold'>Blog</p>
          </div>
        </div>
        <div className='pb-4 text-center'>
          <p>Follow me on social media:</p>
        </div>
        <div className='flex flex-row justify-center gap-6'>
          <div>
            <img src='/images/white-i.png' alt='' />
          </div>
          <div>
            <img src='/images/white-x.png' alt='' />
          </div>
          <div>
            <img src='/images/white-d.png' alt='' />
          </div>
          <div>
            <img src='/images/white-f.png' alt='' />
          </div>
        </div>
      </div>
    </>
  );
}
