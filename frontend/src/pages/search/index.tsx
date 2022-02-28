import type { NextPage } from 'next'
import Dashboard from '@/components/organisms/dashboard'
import { useLocale } from '@/hooks/lang/lang-locale'

const Search: NextPage = () => {
  const { t } = useLocale()

  const pages = [{ name: t.SEARCH_RESULT, href: '/search', current: true }]

  return <Dashboard pages={pages} />
}

export default Search
