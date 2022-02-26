import Link from 'next/link'
/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <>
      <div className='flex justify-end'>
        <div className='flex-shrink-0 px-6 pt-8 pb-0 sm:pt-10 sm:pb-4'>
          <div className='flex px-4 jusitify-end x-auto sm:px-6 md:px-8'>
            <Link href={'/mylist/timetable'}>
              <button
                type='button'
                className='text-gray-700 bg-white border border-gray-300  hover:bg-gray-50 focus:ring-gray-200 btn'
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
