/* This example requires Tailwind CSS v2.0+ */
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'

export default function Pagination() {
  return (
    <nav className='px-4 mt-8 flex items-center justify-center sm:px-0'>
      <div className='-mt-px w-0 flex-1 flex items-center justify-center'>
        <a
          href='#'
          className='border-t-2 border-transparent pt-4  px-2  inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300'
        >
          <ArrowNarrowLeftIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
        </a>
      </div>
      <div className='md:flex items-center justify-center'>
        {/* <a
          href='#'
          className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-2 inline-flex items-center text-sm font-medium'
        >
          <ArrowNarrowLeftIcon className='mr-3 h-5 w-5 text-gray-400' aria-hidden='true' />
        </a> */}
        <a
          href='#'
          className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
        >
          1
        </a>
        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
        <a
          href='#'
          className='border-red-700 text-black border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
          aria-current='page'
        >
          2
        </a>
        <a
          href='#'
          className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
        >
          3
        </a>
        <span className='border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'>
          ...
        </span>
        <a
          href='#'
          className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
        >
          10
        </a>
        {/* <a
          href='#'
          className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-2 inline-flex items-center text-sm font-medium'
        >
          <ArrowNarrowRightIcon className='ml-3 h-5 w-5 text-gray-400' aria-hidden='true' />
        </a> */}
      </div>
      <div className='-mt-px w-0 flex-1 flex items-center justify-center'>
        <a
          href='#'
          className='border-t-2 border-transparent pt-4 px-2 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300'
        >
          <ArrowNarrowRightIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
        </a>
      </div>
    </nav>
  )
}