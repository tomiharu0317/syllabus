export default function SearchForm() {
  return (
    <div>
      <input
        type='text'
        name='name'
        placeholder='キーワードを入力'
        className='w-96 py-2 border-b-2 border-gray-300 outline-none focus:border-red-700'
      />
    </div>
  )
}
