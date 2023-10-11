/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-black">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div
      className="flex flex-col items-center gap-4 rounded-lg bg-yellow-400 p-6 shadow-lg sm:flex-row sm:justify-between"
    >
      <strong className="text-xl text-white hover:text-black sm:text-xl">
      Thankx4askin Podcast
      </strong>

      <a
        className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-black hover:bg-black hover:text-white focus:outline-none focus:ring active:bg-white/90 active:text-black"
        href="https://form.jotform.com/232798407887173"
      >
        <span className="text-sm font-medium"> Contact Us </span>

        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>

    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-white">More Info</p>

        <nav aria-label="Footer About Nav" className="mt-8">
          <ul className="space-y-4 text-sm">
          <li>
              <a
                className="text-gray-400 transition hover:text-yellow-300/75"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 transition hover:text-yellow-300/75"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 transition hover:text-yellow-300/75"
                href="/episodes"
              >
                Episodes
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-white">Our Services</p>

        <nav aria-label="Footer Services Nav" className="mt-8">
          <ul className="space-y-4 text-sm">
            <li>
              <a
                className="text-gray-400 transition hover:text-gray-700/75"
                href="/services"
              >
                Podcasting 
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-white">Resources</p>

        <nav aria-label="Footer Resources Nav" className="mt-8">
          <ul className="space-y-4 text-sm">
            <li>
              <a
                className="text-gray-400 transition hover:text-gray-700/75"
                href="/merchandise"
              >
                Mechandise
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-white">Helpful Links</p>

        <nav aria-label="Footer Helpful Nav" className="mt-8">
          <ul className="space-y-4 text-sm">
            <li>
              <a
                className="text-gray-400 transition hover:text-gray-700/75"
                href="https://form.jotform.com/232798407887173"
              >
                Contact Us
              </a>
            </li>

           
           
            
          </ul>
        </nav>
      </div>
    </div>

    <div className="mt-16">
      <ul className="flex justify-center gap-6 sm:justify-end">
        <li>
          <a
            href="https://www.facebook.com/detox.jones"
            rel="noreferrer"
            target="_blank"
            className="text-blue-600 transition hover:text-blue-500"
          >
            <span className="sr-only">Facebook</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://instagram.com/thanx4askin?igshid=NzZhOTFlYzFmZQ=="
            rel="noreferrer"
            target="_blank"
            className="text-purple-500 transition hover:text-purple-400"
          >
            <span className="sr-only">Instagram</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://www.tiktok.com/@thanx4askin?is_from_webapp=1&sender_device=pc"
            rel="noreferrer"
            target="_blank"
            className="text-sky-400 transition hover:text-sky-300"
          >
            <span className="sr-only">Tik Tok</span>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="22" 
            height="22" 
            fill="currentColor" 
            className=" text-gray-600 transition hover:text-white active:text-gray-600" 
            viewBox="0 0 16 16">
            <path 
            fillRule="evenodd"
            d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"
            clipRule="evenodd"/>
          </svg>
          </a>
        </li>

        
      </ul>

      <div className="mt-16 sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-center text-yellow-400 sm:justify-start">
          <img src='/thx.png'  alt='' className="h-24"/>
          <h1 className='mt-4 text-center'><br/>We paint portraits of black people by interviewing real people who are making real impact in their community.</h1>
        </div>

        <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
