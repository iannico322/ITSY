import React from 'react'

const InputText = (props) => {
  return (
    <div className='flex flex-col items-start w-full min-h-20 '>
        <p>{props.label}</p>
        <input type="text" placeholder={props.label} className=' w-full border-[1px] border-green rounded-md px-5 py-2 text-base font-normal outline-none focus:border-green' />
    </div>
  )
}

export default InputText