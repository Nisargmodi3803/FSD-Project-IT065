import React from 'react'

export default function Book() {
  return (
    <div className='book'>
      <div className='input-pair'>
        <label htmlFor=""><b>Train Number : </b></label>
        <label htmlFor=''><b>From : </b></label>
        <label htmlFor=''><b>To : </b></label>
        <label htmlFor=''><b>Price : </b></label>
      </div>
      <div className='input-pair'>
        <input type='number' placeholder='Enter total number of seat'/>
      </div>
    </div>
  )
}
