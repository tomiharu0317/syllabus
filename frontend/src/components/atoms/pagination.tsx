import { useLocale } from '@/hooks/lang/lang-locale'

/* This example requires Tailwind CSS v2.0+ */
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'

export default function Pagination() {
  const { t } = useLocale()

  return (
    <div>
      <nav className='flex items-center justify-center px-4 mt-8 sm:px-0'>
        <div className='flex items-center justify-center flex-1 w-0 -mt-px'>
          <a
            href='#'
            className='inline-flex items-center px-2 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300'
          >
            <ArrowNarrowLeftIcon className='w-5 h-5 text-gray-400' aria-hidden='true' />
          </a>
        </div>
        <div className='items-center justify-center md:flex'>
          {/* <a
          href='#'
          className='inline-flex items-center px-2 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300'
        >
          <ArrowNarrowLeftIcon className='w-5 h-5 mr-3 text-gray-400' aria-hidden='true' />
        </a> */}
          <a
            href='#'
            className='inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300'
          >
            1
          </a>
          {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
          <a
            href='#'
            className='inline-flex items-center px-4 pt-4 text-sm font-medium text-black border-t-2 border-red-700'
            aria-current='page'
          >
            2
          </a>
          <a
            href='#'
            className='inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300'
          >
            3
          </a>
          <span className='inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent'>
            ...
          </span>
          <a
            href='#'
            className='inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300'
          >
            10
          </a>
          {/* <a
          href='#'
          className='inline-flex items-center px-2 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300'
        >
          <ArrowNarrowRightIcon className='w-5 h-5 ml-3 text-gray-400' aria-hidden='true' />
        </a> */}
        </div>
        <div className='flex items-center justify-center flex-1 w-0 -mt-px'>
          <a
            href='#'
            className='inline-flex items-center px-2 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300'
          >
            <ArrowNarrowRightIcon className='w-5 h-5 text-gray-400' aria-hidden='true' />
          </a>
        </div>
      </nav>
      <div className='flex items-center justify-center px-6 py-8'>
        <p className='text-sm text-gray-700'>
          <span className='font-medium'>1</span> to <span className='font-medium'>10</span> /{t.ALL}{' '}
          <span className='font-medium'>97</span> {t.COURSES}
        </p>
      </div>
    </div>
  )
}
