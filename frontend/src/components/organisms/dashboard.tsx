import { useLocale } from '@/hooks/lang/lang-locale'
import { useRouter } from 'next/router'
import Breadcrumb from '../molecules/breadcrumbs'
import Pagination from '../atoms/pagination'
import Sidebar from './sidebar'
import ContentCard from '../atoms/contents-card'
import Button from '../atoms/button'
import { BreadcrumbProps } from 'types/breadcrumbs'

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
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: false },
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

export default function Dashboard({ pages }: BreadcrumbProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const { t } = useLocale()

  return (
    <>
      <div className='relative bg-white'>
        <div className='px-4 mx-auto max-w-7xl sm:px-6 ' aria-label='Top'>
          <div className='flex h-full'>
            <Transition.Root show={sidebarOpen} as={Fragment}>
              <Dialog
                as='div'
                className='fixed inset-0 z-40 flex lg:hidden'
                onClose={setSidebarOpen}
              >
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
                  <div className='relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white'>
                    <Transition.Child
                      as={Fragment}
                      enter='ease-in-out duration-300'
                      enterFrom='opacity-0'
                      enterTo='opacity-100'
                      leave='ease-in-out duration-300'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <div className='absolute top-0 right-0 pt-2 -mr-12'>
                        <button
                          type='button'
                          className='flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className='sr-only'>Close sidebar</span>
                          <XIcon className='w-6 h-6 text-white' aria-hidden='true' />
                        </button>
                      </div>
                    </Transition.Child>
                    {/* <div className='flex items-center flex-shrink-0 px-4'>
                      <img
                        className='w-auto h-8'
                        src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
                        alt='Workflow'
                      />
                    </div>
                    <div className='flex-1 h-0 mt-5 overflow-y-auto'>
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
                    </div> */}
                    <Sidebar />
                  </div>
                </Transition.Child>
                <div className='flex-shrink-0 w-14' aria-hidden='true'>
                  {/* Dummy element to force sidebar to shrink to fit close icon */}
                </div>
              </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            {/* sidebar を固定する ------------------------- */}
            <div className='flex-col lg:border-r lg:border-gray-200 '>
              <div className='sticky top-0 z-50'>
                {/* ------------------------------------------- */}
                <div className='hidden lg:flex lg:w-64 '>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <Sidebar />
                </div>
              </div>
            </div>
            <div className='flex flex-col flex-1'>
              <div className='sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white border-b-2 border-gray-100'>
                <button
                  type='button'
                  className='px-4 text-gray-500 border-r border-gray-200 focus:outline-none lg:hidden'
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className='sr-only'>Open sidebar</span>
                  <MenuAlt2Icon className='w-6 h-6' aria-hidden='true' />
                </button>
                <div className='flex justify-between flex-1 px-4'>
                  <div className='flex flex-1'>
                    <form className='flex w-full md:ml-0' action='#' method='GET'>
                      <label htmlFor='search-field' className='sr-only'>
                        Search
                      </label>
                      <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                        <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                          <SearchIcon className='w-5 h-5' aria-hidden='true' />
                        </div>
                        <input
                          id='search-field'
                          className='block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                          placeholder={t.SEARCH_FORM}
                          type='search'
                          name='search'
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='flex-shrink-0 mt-4 ml-4'>
                {/* <div className='flex items-center justify-betweenpx-4'> */}
                <Breadcrumb pages={pages} />
              </div>

              {/* マイリストのページなら時間割ボタンを表示 */}
              {router.pathname === '/mylist' && <Button />}

              <main className='flex flex-col w-full overflow-x-hidden overflow-y-auto bg-white justfy-end mb-14'>
                <div className='flex w-full px-6 py-8 mx-auto'>
                  <div className='flex flex-col w-full h-full text-xl'>
                    <div className='px-4 mx-auto max-w-7xl sm:px-6 md:px-8'>
                      {/* Replace with your content */}
                      <ContentCard />
                      <ContentCard />
                      <ContentCard />
                      {/* /End replace */}
                    </div>
                  </div>
                </div>
                <div>
                  <Pagination />
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
