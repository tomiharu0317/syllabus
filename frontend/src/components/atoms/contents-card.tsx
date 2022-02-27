import Link from 'next/link'
import { useLocale } from '@/hooks/lang/lang-locale'
/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid'

export default function ContentCard() {
  const { t } = useLocale()

  return (
    <div className='my-2 overflow-hidden bg-white shadow sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6 whitespace-nowrap'>
        <div className='flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap'>
          <div className='mt-4 ml-4'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>Course Name</h3>
            {/* <p className='mt-1 text-sm text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
            </p> */}
          </div>
          <div className='flex-shrink-0 mt-4 ml-4'>
            <Link href={'/course/sample-course'}>
              <button
                type='button'
                className='mr-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-gray-200 btn'
              >
                {t.DETAIL}
              </button>
            </Link>

            <button
              type='button'
              className='text-white bg-red-700 border border-transparent hover:bg-red-600 focus:ring-red-700 btn'
            >
              {t.ADD_TO_LIST}
            </button>
          </div>
        </div>
        {/* <h3 className='text-lg font-medium leading-6 text-gray-900'>Applicant Information</h3> */}
        {/* <p className='max-w-2xl mt-1 text-sm text-gray-500'>Personal details and application.</p> */}
      </div>
      <div className='px-4 py-5 border-t border-gray-200 sm:px-6'>
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
