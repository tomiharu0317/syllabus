import Link from 'next/link'
import { useLocale } from '@/hooks/lang/lang-locale'
import { useRouter } from 'next/router'

/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function LangToggle() {
  const [enabled, setEnabled] = useState(false)
  const router = useRouter()
  const { t } = useLocale()

  const changeLocale = () => {
    setEnabled(!enabled)

    if (enabled) {
      router.push(router.asPath, router.asPath, { locale: 'ja' })
    } else {
      router.push(router.asPath, router.asPath, { locale: 'en' })
    }
  }

  return (
    <div>
      <div className='h-6'>
        <Switch
          checked={enabled}
          onChange={changeLocale}
          className={classNames(
            enabled ? 'bg-gray-500' : 'bg-gray-500',
            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200',
          )}
        >
          <span className='sr-only'>Use setting</span>
          <span
            className={classNames(
              enabled ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
            )}
          >
            <Link href={router.asPath} locale='en' passHref>
              <span
                className={classNames(
                  enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
                  'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                )}
                aria-hidden='true'
              >
                <span className='text-xs font-semibold text-gray-500'>JP</span>
              </span>
            </Link>

            <Link href={router.asPath} locale='ja' passHref>
              <span
                className={classNames(
                  enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
                  'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                )}
                aria-hidden='true'
              >
                <span className='text-xs font-semibold text-gray-500'>EN</span>
              </span>
            </Link>
          </span>
        </Switch>
      </div>
    </div>
  )
}
