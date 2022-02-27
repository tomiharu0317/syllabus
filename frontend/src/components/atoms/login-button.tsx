import { useSession, signIn, signOut } from 'next-auth/react'
import { useLocale } from '@/hooks/lang/lang-locale'

export default function LoginButton() {
  const { data: session } = useSession()
  const { t } = useLocale()

  if (session) {
    return (
      <>
        <button
          className='inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-red-700 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-red-600'
          onClick={() => signOut()}
        >
          {t.SIGN_OUT}
        </button>
      </>
    )
  }
  return (
    <>
      <button
        className='inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-red-700 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-red-600'
        onClick={() => signIn()}
      >
        {t.LOGIN}
      </button>
    </>
  )
}
