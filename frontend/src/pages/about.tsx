import type { NextPage } from 'next'
import Breadcrumb from '@/components/molecules/breadcrumbs'

// const About: NextPage = () => {

//   return (
//     <div>
//       <Breadcrumb />
//       <AboutMe />
//     </div>
//   )
// }

/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Invite team members',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Notifications',
    description:
      'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
  },
  {
    name: 'List view',
    description:
      'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
  },
  {
    name: 'Boards',
    description:
      'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
  },
  {
    name: 'Keyboard shortcuts',
    description:
      'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
  },
  {
    name: 'Reporting',
    description:
      'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
  },
  {
    name: 'Calendars',
    description:
      'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
  },
  {
    name: 'Mobile app',
    description:
      'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
  },
]

export default function AboutMe() {
  const pages = [{ name: 'about', href: '/about', current: true }]

  return (
    <div>
      <div className='no-sidebar-page-breadcrumb-container'>
        <Breadcrumb pages={pages} />
      </div>

      <div className='base-container'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='static-page-title'>All-in-one platform</h2>
          <p className='static-page-sub-title'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
            sagittis vel nulla nec.
          </p>
        </div>
        <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
          {features.map((feature) => (
            <div key={feature.name} className='relative'>
              <dt>
                <CheckIcon className='absolute w-6 h-6 text-green-500' aria-hidden='true' />
                <p className='text-lg font-medium leading-6 text-gray-900 ml-9'>{feature.name}</p>
              </dt>
              <dd className='mt-2 text-base text-gray-500 ml-9'>{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
