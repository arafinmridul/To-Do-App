import React from 'react'

export const Footer = () => {
  let footerStyle = {
      // position : 'relative',
      // top : '10vh',
      // width : '100%',
      border : '3px solid green'
  }
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
        <p className='text-center my-3 py-2'>Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}
