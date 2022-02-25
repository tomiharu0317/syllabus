import Link from 'next/link'
/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <>
      <div className='flex justify-end'>
        <div className='px-6 sm:pt-10 sm:pb-4 pt-8 pb-0 flex-shrink-0'>
          <div className='flex jusitify-end x-auto px-4 sm:px-6 md:px-8'>
            <Link href={'/timetable'}>
              <button
                type='button'
                className='inline-flex px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
              >
                Time Table
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
