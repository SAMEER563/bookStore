import React from 'react'

function About() {
  return (
   <>
   <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-16'>
    <div className='w-full md:w-1/2'>
        <img src="https://source.unsplash.com/1600x900/?about" className='h-70 rounded-xl mt-5 ml-14 w-92 h-60' alt=''/>
        <div className='mt-8 flex items-center '>
        <span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>
        </div>
        </div>
   </div>
   </>
  )

}


export default About