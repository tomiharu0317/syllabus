export default function Example() {
  return (
    <div>
      {/* <div className='flex h-screen bg-green-300'> */}
      {/* <div className='flex-1 flex flex-col overflow-hidden'> */}
      {/* <header className='flex justify-between items-center bg-blue-300 p-4'>
          <div className='flex'>Left</div>
          <div className='flex'>Right</div>
        </header> */}
      <div className='relative bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 ' aria-label='Top'>
          <div className='flex h-full'>
            {/* <nav className='flex w-72 h-full bg-pink-500'>
          <div className='w-full flex mx-auto px-6 py-8'>
            <div className='w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed'>
              Sidebar
            </div>
          </div>
        </nav> */}
            {/* Static sidebar for desktop */}
            {/* FIXME md:inset-y-0 を消したらいい感じになったので注目 */}
            {/* md:inset-y-0 */}
            <div className='hidden  lg:flex lg:w-64'>
              {/* <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'> */}
              {/* Sidebar component, swap this element with another sidebar if you like */}

              {/* この部分の解析 */}
              <div className='flex flex-col w-80 flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto'>
                {/* <div className='flex items-center flex-shrink-0 px-4'>
            <img
              className='h-8 w-auto'
              src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
              alt='Workflow'
            />
          </div> */}
              </div>
            </div>
            <main className='flex flex-col w-full justfy-end bg-white overflow-x-hidden overflow-y-auto mb-14'>
              <div className='flex w-full mx-auto px-6 py-8'>
                <div className='flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed'>
                  <div className='flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600'>
                    Post
                  </div>
                  <div className='flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600'>
                    Post
                  </div>
                  <div className='flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600'>
                    Post
                  </div>
                  <div className='flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600'>
                    Post
                  </div>
                  <div className='flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600'>
                    Post
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
