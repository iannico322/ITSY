import React, { useState } from 'react'
import Logo from './../../images/Itsy_logo_w_text.png'
import logo from './../../images/Itsy_logo.png'
import InputText from '../../components/inputs/input'
const Main = () => {
  // [1,2,3,3,2,2,3,2] put in the usestate
  const [chats,setChats] = useState()


  return (
    <div className='relative flex flex-col w-screen h-screen overflow-hidden bg-gray'>
        <div className='flex relative items-center w-screen max-h-24 min-h-[10%] sm:h-[8%] bg-white border-[0px] box-border  border-black border-opacity-30 '>
            <img src={Logo } alt="Logo" className='object-contain h-[70%] mx-10 ' />

        </div>

        <div className='box-border relative flex items-center justify-center w-full h-full p-10 pt-0 bg-white'>

            <div className='relative flex items-center justify-center w-full h-full gap-5 p-10 mt-10 mb-10 rounded-md bg-gray'>

                <div className='   flex flex-col justify-start w-[70%] h-full relative  bg-white rounded-lg  p-5 '>
                  
                  <div className=' absolute h-[75%] w-full '>
                  <button className=' absolute bottom-0 z-10 flex items-center justify-center gap-2 cursor-pointer right-0 w-[150px] m-20 h-[50px] rounded-lg border-[1px] border-black border-opacity-30 text-white bg-green hover:bg-opacity-70 active:bg-gray'> <span class="material-symbols-outlined">
                    upload
                  </span> Upload</button>

                  </div>
                  <div className=' relative h-[75%]  border-[1px] border-green rounded-md w-full overflow-y-scroll'>
                  
                 
                    <div className='absolute z-0 flex flex-col w-full min-h-full overflow-hidden '>

                   {
                    chats?
                    chats.map(e=>(
                      <div className=' w-[100%] h-[150px] border-[1px] border-b-green bg-green flex items-center justify-center'>{e}</div>
                    ))
                    
                    :  
                    <div className=' flex  flex-col justify-center items-center w-full h-[500px] gap-4'>
                      <img src={logo} alt="logo" className=' h-[100px] w-[100px]' />
                      <h1 className='text-lg font-semibold text-grayText w-[50%] '>Hey dear, I'm ITSY your culinary spider buddy! share your items, and I'll weave menys so snappy!</h1>
                    </div>
                   }

                    {/* chats */}
                      

                    </div>
                    
                    
                  </div>
                  <div className=' flex flex-col justify-around mt-5 relative h-[25%] bg-white'>
                    <div className='flex items-center justify-between gap-4 '>
                      <div className=' flex items-end gap-4 w-[60%]'>
                      <InputText 
                        label="Name"
                      /> 
                      <InputText
                        label="Quantity/Weight"
                      />
                      <button className=' w-[300px] h-[40px] rounded-lg text-white bg-green'>Add item</button>

                      </div>
                      
                      <button className=' flex gap-4 items-center justify-center w-[150px] h-[40px] rounded-lg text-black border-[1px] border-black bg-white'><span className='text-lg font-semibold '>+</span>Preferences</button>
                 
                    
                    </div>

                    <button className=' w-full h-[50px] rounded-lg text-white font-semibold text-lg hover:bg-opacity-70 active:bg-gray bg-green'>Generate recipe</button>
                    

                  </div>

                </div>
                <div className='  w-[30%] h-full reative  bg-white rounded-lg '>


                </div>

            </div>

        </div>
    </div>
  )
}

export default Main