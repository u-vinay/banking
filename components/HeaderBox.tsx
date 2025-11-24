import React from 'react'

const HeaderBox = ({type="title",title,subtext,user}: HeaderBoxProps) => {
  return (
    <div className=" flex flex-col gap-1">
        <h1 className=' text-[24px] leading-[30px] lg:text-[30px]:leading-[38px] font-semibold text-gray-900'>{title}
            {type === 'greeting' && (
                <span className='text-blue-400'>&nbsp;{user}</span>
            )}
        </h1>
        <p className=' text-[14px] leading-5 lg:text-16 font-normal text-gray-600'>{subtext}</p>
    </div>
    
  )
}

export default HeaderBox