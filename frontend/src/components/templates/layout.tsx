import Header from '@/components/organisms/header'
import Footer from '@/components/organisms/footer'
import Head from 'next/head'

export default function Layout({ children }: any) {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header />
        {/* <main className='flex-1'>{children}</main> */}
        <main className=''>{children}</main>
        <Footer />
      </div>
    </>
  )
}
