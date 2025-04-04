import React from 'react'

const Layout = ({children} : {children: React.ReactNode}) => { // layouts always has to export some within them
  return (
    <main className='auth'>{children}</main> // we will render children
  )
}

export default Layout