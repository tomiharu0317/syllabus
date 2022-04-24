import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export function useRequireLogin() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <div>ログイン情報を確認中</div>
  }

  if (status === 'unauthenticated') {
    router.push('/api/auth/callback/google')
  }
}
