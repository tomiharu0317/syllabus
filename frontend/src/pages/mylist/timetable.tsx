import Timetable from '@/components/molecules/timetable'
import Breadcrumb from '@/components/molecules/breadcrumbs'
import Button from '@/components/atoms/button'
import { NextPage } from 'next'
import { useLocale } from '@/hooks/lang/lang-locale'

const TimeTable: NextPage = () => {
  const { t } = useLocale()

  const pages = [
    { name: t.MYLIST, href: '/mylist', current: false },
    { name: t.TIME_TABLE, href: '/mylist/timetable', current: true },
  ]

  return (
    <>
      <div className='no-sidebar-page-breadcrumb-container'>
        <Breadcrumb pages={pages} />
      </div>
      <div className='relative bg-white'>
        <div className='px-10 mx-auto max-w-7xl sm:px-6 ' aria-label='Top'>
          <div className='flex h-full max-w-7xl'>
            <div className='flex flex-col flex-1 overflow-x-auto'>
              <div className='flex-shrink-0 mt-4 ml-4'>
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
