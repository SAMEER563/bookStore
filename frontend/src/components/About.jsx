import React from 'react'

function About() {
  return (
   <>
   <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-16'>
        <div className='w-full md:w-1/2'>
            <h1 className='items-center '>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum veniam dolore praesentium, inventore ea libero minima at, repellat odio sed quis quo tempore maxime ex obcaecati voluptatibus. Veritatis neque a voluptatibus eveniet cumque rerum qui aliquid reprehenderit voluptatum aperiam!</p>
        </div>
    <div className='w-full md:w-1/2'>
        <img src="https://img.freepik.com/free-photo/front-view-stacked-books-ladders-education-day_23-2149241046.jpg?w=996" className='h-70 rounded-xl mt-5 ml-14 w-92 h-60' alt=''/>
        
        </div>
   </div>
   </>
  )

}


export default About