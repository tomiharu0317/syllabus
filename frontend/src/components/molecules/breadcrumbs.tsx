/* This example requires Tailwind CSS v2.0+ */
import AboutMe from '@/pages/about'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

export default function Breadcrumb() {
  return (
    <div className='relative bg-white'>
      <div className='max-w-7xl mx-auto' aria-label='Top'>
        <div className='w-full pt-6 flex items-center justify-between'>
          <div className='flex items-center'>
            <nav className='flex ' aria-label='Breadcrumb'>
              <ol role='list' className='flex items-center space-x-4'>
                <li>
                  <Link href={'/'}>
                    <a className='text-gray-400 hover:text-gray-500'>
                      <HomeIcon className='flex-shrink-0 h-5 w-5' aria-hidden='true' />
                      <span className='sr-only'>Home</span>
                    </a>
                  </Link>
                </li>
                {pages.map((page) => (
                  <li key={page.name}>
                    <div className='flex items-center'>
                      <ChevronRightIcon
                        className='flex-shrink-0 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <a
                        href={page.href}
                        className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                        aria-current={page.current ? 'page' : undefined}
                      >
                        {page.name}
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

// About, FAQ, contactなどの時
// <div className='max-w-7xl mx-auto pl-6 sm:pl-8'>
// <Breadcrumb />
// </div>

// dashboard
// <div className='px-4'>
// <Breadcrumb />
// </div>
