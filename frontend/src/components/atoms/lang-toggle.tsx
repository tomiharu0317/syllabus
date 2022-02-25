/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function LangToggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className='h-6'>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-gray-400' : 'bg-gray-400',
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
          <span
            className={classNames(
              enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
            )}
            aria-hidden='true'
          >
            {/* <svg className='h-3 w-3 text-gray-400' fill='none' viewBox='0 0 12 12'>
              <path
                d='M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg> */}
            <span className='text-gray-600 text-xs'>JP</span>
          </span>
          <span
            className={classNames(
              enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
            )}
            aria-hidden='true'
          >
            <span className='text-gray-600 text-xs'>EN</span>
          </span>
        </span>
      </Switch>
    </div>
  )
}
