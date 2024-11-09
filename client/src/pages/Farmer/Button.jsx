import React from 'react'

const Button = ({label}) => {
  return (
    <div>
        <button className='bg-red-700'>{label}</button>
    </div>
  )
}

export default Button