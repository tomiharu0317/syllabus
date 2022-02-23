import Header from '@/components/organisms/header'
import Footer from '@/components/organisms/footer'
import Head from 'next/head'

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');
        </style>
      </Head>
      <body className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </>
  )
}
