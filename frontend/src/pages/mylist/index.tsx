import type { NextPage } from 'next'
import { useLocale } from '@/hooks/lang/lang-locale'
import { useRequireLogin } from '@/hooks/useRequireLogin'
import Dashboard from '@/components/organisms/dashboard'

const Mylist: NextPage = () => {
  const { t } = useLocale()
  const isMylist = true
  const pages = [{ name: t.MYLIST, href: '/mylist', current: true }]

  useRequireLogin()

  return <Dashboard pages={pages} />
}

export default Mylist
