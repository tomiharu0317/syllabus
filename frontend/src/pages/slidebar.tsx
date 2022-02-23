/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className='flex h-screen'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as='div' className='fixed inset-0 flex z-40 md:hidden' onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 -mr-12 pt-2'>
                    <button
                      type='button'
                      className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex-shrink-0 flex items-center px-4'>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
                    alt='Workflow'
                  />
                </div>
                <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                  <nav className='px-2 space-y-1'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? 'text-gray-500'
                              : 'text-gray-400 group-hover:text-gray-500',
                            'mr-4 flex-shrink-0 h-6 w-6',
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className='flex-shrink-0 w-14' aria-hidden='true'>
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>
        {/* Static sidebar for desktop */}
        {/* FIXME md:inset-y-0 を消したらいい感じになったので注目 */}
        {/* md:inset-y-0 */}
        <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto'>
            <div className='flex items-center flex-shrink-0 px-4'>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
                alt='Workflow'
              />
            </div>
            <div className='mt-5 flex-grow flex flex-col'>
              <nav className='flex-1 px-2 pb-4 space-y-1'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
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
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className='md:pl-64 flex flex-col flex-1'>
          <div className='sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow'>
            <button
              type='button'
              className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
            </button>
            <div className='flex-1 px-4 flex justify-between'>
              <div className='flex-1 flex'>
                <form className='w-full flex md:ml-0' action='#' method='GET'>
                  <label htmlFor='search-field' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                    <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                      <SearchIcon className='h-5 w-5' aria-hidden='true' />
                    </div>
                    <input
                      id='search-field'
                      className='block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                      placeholder='Search'
                      type='search'
                      name='search'
                    />
                  </div>
                </form>
              </div>{' '}
              {/* マイリストとログインフォーム molecules */}
              <div className='flex items-center justify-end mr-2 lg:mr-24'>
                {/* <div className='items-center justify-end ml-10 space-x-8 lg:block'> */}
                <a
                  href='#'
                  className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8'
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
                <a
                  href='#'
                  className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-700 hover:bg-red-600'
                >
                  Login
                </a>
              </div>
            </div>
          </div>

          <main className='flex-1'>
            <div className='py-6'>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                <h1 className='text-2xl font-semibold text-gray-900'>Dashboard</h1>
              </div>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                {/* Replace with your content */}
                <div className='py-4'>
                  <div className='border-4 border-dashed border-gray-200 rounded-lg h-96' />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
