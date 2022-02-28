import type { NextPage } from 'next'
import Dashboard from '@/components/organisms/dashboard'
import { useLocale } from '@/hooks/lang/lang-locale'

const Mylist: NextPage = () => {
  const { t } = useLocale()
  const isMylist = true
  const pages = [{ name: t.MYLIST, href: '/mylist', current: true }]

  return <Dashboard pages={pages} />
}

export default Mylist
