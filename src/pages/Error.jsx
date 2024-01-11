import React from 'react'
import ErrorImg from "../assets/error2.jpg"

const Error = () => {
  return (
    <div className='error'>
      <div className="coverImg">  <img src={ErrorImg} alt="" /> </div>
      {/* <div className="bt">ارجع الي الرئيسية</div> */}
    </div>
  )
}

export default Error