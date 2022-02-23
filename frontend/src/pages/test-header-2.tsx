import Link from 'next/link'

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/FAQ' },
  { name: 'contact', href: '/contact' },
]

export default function Example() {
  return (
    <div className='relative bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 ' aria-label='Top'>
        <div className='w-full py-6 flex items-center justify-between border-b-2 border-gray-100'>
          <div className='flex items-center'>
            <a href='#'>
              <span className='sr-only'>Workflow</span>
              <Link href={'/'}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 '
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z' />
                  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                  />
                </svg>
              </Link>
            </a>
            {/* <div className='hidden ml-10 space-x-8 lg:block'>3
              {navigation.map((link) => (
                <Link href={link.href}>
                  <a
                    key={link.name}
                    className='justify-items-start text-base font-medium text-gray-500 hover:text-gray-900'
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div> */}
          </div>
          <div className='ml-10 space-x-4'>
            <div className='flex items-center justify-end'>
              {/* <div className='items-center justify-end ml-10 space-x-8 lg:block'> */}
              <a
                href='#'
                className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                  />
                </svg>
              </a>
              <a
                href='#'
                className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-700 hover:bg-red-600'
              >
                Login
              </a>
            </div>
          </div>
        </div>
        {/* <div className='py-4 flex flex-wrap justify-center space-x-6 lg:hidden'>
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='justify-items-start text-base font-medium text-gray-500 hover:text-gray-900'
            >
              {link.name}
            </a>
          ))}
        </div> */}
      </div>
    </div>
  )
}
