import SearchForm from '@/components/molecules/search-form'
import Course from '@/components/organisms/course'
import Pagenation from '@/components/molecules/pagination'
import { NextPage } from 'next'

const CourseRender: NextPage = () => {
  return (
    <div>
      <SearchForm />
      <Course />
      <Pagenation />
    </div>
  )
}

export default CourseRender
