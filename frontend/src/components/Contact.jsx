import React from 'react'
import contact from "../../public/contact.png"
import { useForm } from 'react-hook-form';


function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data);
  return (
    <>
       <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-16'>
       <div className='  w-full md:w-1/2'><img src={contact} className=' h-70 rounded-xl' alt=''/></div>
       <div className=' h-100   flex items-center justify-center ml-5 '>
                <div  className=" w-[300px]">
                    <div className="mt-4">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        
                        <h3 className="font-bold text-lg items-center ">CONTACT US</h3>
                        {/* email */}
                        <div className='mt-4 space-y-2'>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type='text' placeholder='Enter your Name' className='w-80 px-3 py-1 border-[3px] rounded-md outline-none' 
                                {...register("name", { required: true })}/>
                                <br />
                              {errors.name && (
                               <span className="text-sm text-red-500">
                                 Name is required
                                </span>
                                   )}
                            </div>
                            <span>Email</span>
                            <br />
                            <input type='email' placeholder='Enter your email' className='w-80 px-3 py-1 border-[3px]  rounded-md outline-none'
                            {...register("email", { required: true })} />
                             <br />
                              {errors.email && (
                               <span className="text-sm text-red-500">
                                 Email is required
                                </span>
                                   )}
                        </div>
                        {/* Message*/}

                        <div className='mt-4 space-y-2'>
                            <span>Message</span>
                            <br />
                            <textarea className="textarea textarea-info w-80 px-3 py-1 border-[3px]rounded-md outline-none" placeholder="Enter your Message"
                            {...register("message", { required: true })} />
                           
                            <br />
                              {errors.message && (
                               <span className="text-sm text-red-500">
                                 Message is required
                                </span>
                                   )}
                        </div>
                        {/* buttom */}
                        <div className='flex justify-around mt-4'>
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">SUBMIT</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default Contact