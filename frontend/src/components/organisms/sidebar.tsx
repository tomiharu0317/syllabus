import Checkbox from '../atoms/checkbox'
/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline'

const navigation = [
  // { name: 'Dashboard', icon: HomeIcon, current: false, href: '#' },
  {
    name: 'Team',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Projects',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Calendar',
    icon: CalendarIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Documents',
    icon: InboxIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Reports',
    icon: ChartBarIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  return (
    <div className='flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white'>
      {/* <div className='flex items-center flex-shrink-0 px-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-10 h-10 stroke-gray-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke=''
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
        <p className='pl-2 text-lg font-semibold text-gray-400'>Waseda Syllabus</p>
      </div> */}
      <div className='flex flex-col flex-grow mt-5'>
        <nav className='flex-1 px-2 space-y-1 bg-white lg:pl-0' aria-label='Sidebar'>
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <a
                  href='#'
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md',
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6',
                    )}
                    aria-hidden='true'
                  />
                  {item.name}
                </a>
              </div>
            ) : (
              <Disclosure as='div' key={item.name} className='space-y-1'>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900',
                        'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md ',
                      )}
                    >
                      <item.icon
                        className='flex-shrink-0 w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500'
                        aria-hidden='true'
                      />
                      <span className='flex-1'>{item.name}</span>
                      <svg
                        className={classNames(
                          open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                          'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150',
                        )}
                        viewBox='0 0 20 20'
                        aria-hidden='true'
                      >
                        <path d='M6 6L14 10L6 14V6Z' fill='currentColor' />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className='space-y-1'>
                      {/* {item.children.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as='a'
                          href={subItem.href}
                          className='flex items-center w-full py-2 pr-2 text-sm font-medium text-gray-600 rounded-md group pl-11 hover:text-gray-900 hover:bg-gray-50'
                        >
                          {subItem.name}
                        </Disclosure.Button>
                      ))} */}
                      <Checkbox />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ),
          )}
        </nav>
      </div>
    </div>
  )
}
