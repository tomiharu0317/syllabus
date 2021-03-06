import type { NextPage } from 'next'
import Head from 'next/head'
import SearchForm from '@/components/molecules/search-form'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Waseda Syllabus</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-white'>
        <div className='base-container'>
          <div className='text-center'>
            <h1 className='mt-6 text-4xl font-semibold text-red-700 sm:text-5xl sm:tracking-tight lg:text-6xl'>
              Waseda Syllabus
            </h1>
            <div className='mt-10'>
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
