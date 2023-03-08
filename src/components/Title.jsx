import React, { useEffect, useState } from 'react'

export const Title = () => {
    useEffect(() => {
      console.log('render')
    }, [])
    
    const [title, settitle] = useState('Clon de chat GPT')
  return (
    <>
    <div className='flex justify-center align-middle text-8xl'>
        {title}
    </div>
    <button className='' onClick={() => settitle('Nuevo titulo')}>
            click
        </button>
    </>
  )
}
