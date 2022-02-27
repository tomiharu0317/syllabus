import { useLocale } from '@/hooks/lang/lang-locale'
import Link from 'next/link'
import LangToggle from '../atoms/lang-toggle'
import LoginButton from '../atoms/login-button'

export default function Header() {
  const { t } = useLocale()
  return (
    <div className='relative bg-white'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6' aria-label='Top'>
        <div className='flex items-center justify-between py-6 border-b-2 border-gray-100'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href={'/'}>
              <a>
                <span className='sr-only'>Home</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-10 h-10 '
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z' />
                  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                  />
                </svg>
              </a>
            </Link>
          </div>

          {/* FIXME mylistのsvgをhoverした時にマイリストと表示される */}
          <div className='ml-10 space-x-4'>
            <div className='flex items-center justify-end'>
              <LangToggle />
              <Link href={'/mylist'}>
                <a className='ml-8 text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-8 h-8'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                    />
                  </svg>
                </a>
              </Link>

              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
