import React from 'react'
import Title from './Title'

const SettingSideTitle = ({mainTitle,title}) => {
  return (
     <div className="main">
         <div className="title">
            <Title title={mainTitle} />  
        </div>
        <p className="text-[#666b81] text-[13px]">{title}</p>
     </div>
  )
}

export default SettingSideTitle