import Link from 'next/link'
import { useLocale } from '@/hooks/lang/lang-locale'
import { useRouter } from 'next/router'

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  const { t } = useLocale()
  const router = useRouter()

  return (
    <>
      <div className='flex justify-end'>
        <div className='flex-shrink-0 px-6 pt-8 pb-0 sm:pt-10 sm:pb-4'>
          <div className='flex px-4 jusitify-end x-auto sm:px-6 md:px-8'>
            {/* mylistページなら時間割ボタン, timetableページなら戻るボタン */}
            {router.pathname === '/mylist' ? (
              <Link href={'/mylist/timetable'}>
                <button type='button' className='white-button btn'>
                  {t.TIME_TABLE}
                </button>
              </Link>
            ) : (
              <Link href={'/mylist'}>
                <button type='button' className='white-button btn'>
                  {t.BACK}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
