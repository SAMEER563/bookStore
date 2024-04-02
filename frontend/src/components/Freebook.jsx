import React from 'react'
import list from "../../public/list.json"


function Freebook() {
    const filterData = list.filter((data) => data.category === "Free");
  return (
  <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ducimus, animi veritatis sapiente totam optio ullam dignissimos modi perferendis ex.</p>
    </div>
  </>
  );
}

export default Freebook