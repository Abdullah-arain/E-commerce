import React from 'react'

export default function Newsletter() {
  return (
    <div className='mt-28 mb-16'>
      <h1 className='md:text-9xl text-7xl font-semibold text-gray-200 text-center -z-50'>Newsletter</h1>

      <section className='md:-mt-[134px] -mt-20 mb-20 text-center content-between justify-items-center'>
        <h1 className='md:text-3xl text-2xl font-bold'>Subscribe Our Newsletter</h1>
        <p className='md:mt-7 mt-3 text-lg'>Get the latest information and promo offers directly</p>

        <form className='md:mt-9 mt-6 flex md:mx-64 mx-3'>
            <input type="email" placeholder='Input email address' className='flex-grow border-gray-600 border py-1 pl-2 mr-1'/>
            <button className='bg-black py-1 text-white px-3'>Get started</button>
        </form>
      </section>
    </div>
  )
}
