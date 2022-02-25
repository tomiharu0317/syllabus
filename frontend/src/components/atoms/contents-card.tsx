import Link from 'next/link'
/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid'

export default function ContentCard() {
  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-lg my-2'>
      <div className='px-4 py-5 sm:px-6'>
        <div className='-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap'>
          <div className='ml-4 mt-4'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>Course Name</h3>
            {/* <p className='mt-1 text-sm text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
            </p> */}
          </div>
          <div className='ml-4 mt-4 flex-shrink-0'>
            <Link href={'/course/sample-course'}>
              <button
                type='button'
                className='relative inline-flex items-center px-4 py-2 mr-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
              >
                find details
              </button>
            </Link>

            <button
              type='button'
              className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700'
            >
              Add to List
            </button>
          </div>
        </div>
        {/* <h3 className='text-lg leading-6 font-medium text-gray-900'>Applicant Information</h3> */}
        {/* <p className='mt-1 max-w-2xl text-sm text-gray-500'>Personal details and application.</p> */}
      </div>
      <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
        <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
          <div className='sm:col-span-1'>
            <dt className='text-sm font-medium text-gray-500'>Full name</dt>
            <dd className='mt-1 text-sm text-gray-900'>Margot Foster</dd>
          </div>
          <div className='sm:col-span-1'>
            <dt className='text-sm font-medium text-gray-500'>Application for</dt>
            <dd className='mt-1 text-sm text-gray-900'>Backend Developer</dd>
          </div>
          <div className='sm:col-span-1'>
            <dt className='text-sm font-medium text-gray-500'>Email address</dt>
            <dd className='mt-1 text-sm text-gray-900'>margotfoster@example.com</dd>
          </div>
          <div className='sm:col-span-1'>
            <dt className='text-sm font-medium text-gray-500'>Salary expectation</dt>
            <dd className='mt-1 text-sm text-gray-900'>$120,000</dd>
          </div>
          <div className='sm:col-span-2'>
            <dt className='text-sm font-medium text-gray-500'>About</dt>
            <dd className='mt-1 text-sm text-gray-900'>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa
              consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit
              nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}