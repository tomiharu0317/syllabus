import { useLocale } from '@/hooks/lang/lang-locale'

/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'jane.cooper@example.com',
  },
  {
    name: 'Cody Fisher',
    title: 'Product Directives Officer',
    role: 'Owner',
    email: 'cody.fisher@example.com',
  },
  {
    name: 'Cody Fisher',
    title: 'Product Directives Officer',
    role: 'Owner',
    email: 'cody.fisher@example.com',
  },
  {
    name: 'Cody Fisher',
    title: 'Product Directives Officer',
    role: 'Owner',
    email: 'cody.fisher@example.com',
  },
  {
    name: 'Cody Fisher',
    title: 'Product Directives Officer',
    role: 'Owner',
    email: 'cody.fisher@example.com',
  },
  {
    name: 'Cody Fisher',
    title: 'Product Directives Officer',
    role: 'Owner',
    email: 'cody.fisher@example.com',
  },
  // More people...
]

export default function TimeTable() {
  const { t } = useLocale()

  return (
    <div aria-aria-label='Timetable'>
      <div className='py-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-2xl font-bold text-red-700 md:text-3xl'>{t.SPRING_SEMESTER}</h2>
        </div>
      </div>
      <main className='flex flex-col flex-shrink w-full overflow-x-auto bg-white justfy-center'>
        <div className='flex justify-center w-full px-0 py-8 mx-auto sm:px-6'>
          <div className='flex flex-col w-full h-full'>
            <div className='mx-auto max-w-7xl'>
              {/* Replace with your content */}

              <div className='flex flex-col'>
                <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                  <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
                    <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
                      <table className='min-w-full divide-y divide-gray-200'>
                        <thead className='bg-gray-50'>
                          <tr>
                            <th
                              scope='col'
                              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                            >
                              {t.MON}
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                            >
                              {t.TUE}
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                            >
                              {t.WED}
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                            >
                              {t.THU}
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                            >
                              {t.FRI}
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                            >
                              {t.SAT}
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                            >
                              {t.SUN}
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                            >
                              {t.OTHERS}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {people.map((person, personIdx) => (
                            <tr
                              key={person.email}
                              className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                            >
                              <td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
                                {person.name}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                {person.title}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                {person.email}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                {person.role}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                {person.role}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                {person.role}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                {person.role}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                {person.role}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
