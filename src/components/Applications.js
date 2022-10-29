import React from 'react'

export default function Applications(props) {
    

  return (
       <img className='cards' src={props.src} alt={props.alt} 
            onClick={() => {
                props.setFrame(props.projLink)
            }}
       ></img> 
  )
}
