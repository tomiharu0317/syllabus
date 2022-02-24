import Link from 'next/link'

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/FAQ' },
    { name: 'contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className=' bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6' aria-label='Footer'>
        <div className='w-full mt-8 border-t border-gray-200  md:flex md:items-center md:justify-between'></div>
        <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
          <nav className='-mx-5 -my-2 flex flex-wrap justify-center' aria-label='Footer'>
            {navigation.main.map((item) => (
              <div key={item.name} className='px-5 py-2'>
                <Link href={item.href}>
                  <a className='text-base text-gray-500 hover:text-gray-900'>{item.name}</a>
                </Link>
              </div>
            ))}
          </nav>
          <p className='mt-8 text-center text-xs md:text-base text-gray-400'>
            &copy; 2022 tomiharu0317. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
