import { SearchIcon } from '@heroicons/react/solid'
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function SearchForm() {
  return (
    <div className='flex items-center justify-center'>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <SearchIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
        </div>
        <input
          type='text'
          name='name'
          placeholder='キーワードを入力'
          className='block w-64 md:w-80 lg:w-96 py-2 pl-10 border-b-2 border-gray-300 outline-none focus:border-red-700'
        />
      </div>
    </div>
  )
}
