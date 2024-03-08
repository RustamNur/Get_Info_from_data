import React from 'react'

const Modal = ({closeModal}) => {
  return (
      <div className='container' >
          <h1>Hello world</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit aliquid facere, tenetur repellendus cum reiciendis!</p>
          <button onClick={closeModal}>Hide</button>
    </div>
  )
}

export default Modal