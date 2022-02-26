import Timetable from '@/components/molecules/timetable'
import Breadcrumb from '@/components/molecules/breadcrumbs'
import Button from '@/components/atoms/button'
import { NextPage } from 'next'

const TimeTable: NextPage = () => {
  return (
    <>
      <div className='no-sidebar-page-breadcrumb-container'>
        <Breadcrumb />
      </div>
      <div className='relative bg-white'>
        <div className='max-w-7xl mx-auto px-10 sm:px-6 ' aria-label='Top'>
          <div className='flex h-full max-w-7xl'>
            <div className='flex flex-col flex-1 overflow-x-auto'>
              <div className='ml-4 mt-4 flex-shrink-0'>
                {/* <div className='flex items-center justify-betweenpx-4'> */}
              </div>
              <Button />
              {/* spring Semester */}
              <Timetable />
              {/* autumn Semester */}
              <Timetable />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TimeTable
