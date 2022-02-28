/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'
import React from 'react'
import Link from 'next/link'
import { BreadcrumbProps } from 'types/breadcrumbs'

const Breadcrumb = ({ pages }: BreadcrumbProps) => {
  return (
    <div className='relative bg-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex items-center justify-between w-full pt-6'>
          <div className='flex items-center'>
            <nav className='flex ' aria-label='Breadcrumb'>
              <ol role='list' className='flex items-center space-x-4'>
                <li>
                  <Link href={'/'}>
                    <a className='text-gray-600 hover:text-gray-500'>
                      <HomeIcon className='flex-shrink-0 w-5 h-5' aria-hidden='true' />
                      <span className='sr-only'>Home</span>
                    </a>
                  </Link>
                </li>
                {pages.map((page) => (
                  <li key={page.name}>
                    <div className='flex items-center'>
                      <ChevronRightIcon
                        className='flex-shrink-0 w-5 h-5 text-gray-400'
                        aria-hidden='true'
                      />
                      {page.current ? (
                        <span
                          className='ml-4 text-sm font-medium text-gray-400'
                          aria-current={page.current}
                        >
                          {page.name}
                        </span>
                      ) : (
                        <Link href={page.href}>
                          <a
                            className='ml-4 text-sm font-medium text-gray-600 hover:text-gray-500'
                            aria-current={page.current}
                          >
                            {page.name}
                          </a>
                        </Link>
                      )}
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

export default Breadcrumb

// About, FAQ, contactなどの時
// <div className='pl-6 mx-auto max-w-7xl sm:pl-8'>
// <Breadcrumb />
// </div>

// dashboard
// <div className='px-4'>
// <Breadcrumb />
// </div>
