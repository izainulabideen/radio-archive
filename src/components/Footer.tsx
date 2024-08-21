import { logo } from '../assets/images'

function Footer() {
  return (
    <footer className="bg-color1 border-t-2 border-color2 border-opacity-60 py-12 px-4 md:px-10 tracking-wide relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h2 className="text-color2 text-md uppercase mb-4">Navigate</h2>
          <ul className="space-y-4">
            <li>
              <a href="/" className="text-color5 text-sm transition-all">About Us</a>
            </li>
            <li>
              <a href="/" className="text-color5 text-sm transition-all">The Los Angeles / Long Beach archive</a>
            </li>
            <li>
              <a href="/" className="text-color5 text-sm transition-all">The Collector Technology</a>
            </li>
            <li>
              <a href="/" className="text-color5 text-sm transition-all">The Transcriber Technology</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:items-end lg:justify-start">
          <a href='/'><img src={logo} alt="logo" width={200} height={200} className='w-60' /></a>
          <p className='font-light text-sm text-color5'>E: <a href="mailto:admin@radio-archive.org" className='font-light text-sm uppercase underline'>admin@radio-archive.org</a></p>
        </div>
      </div>

      <hr className="my-8 border-color1 border-opacity-60" />

      <div className="flex sm:justify-between flex-wrap gap-6">
        <p className='text-color5 text-sm'>©2024 Radio Archiv.org, All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer