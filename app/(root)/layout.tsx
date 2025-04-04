import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({children} : {children: React.ReactNode}) => { // layouts always has to export some within them
  return (
    <main className='root'>

      <Sidebar />
      <MobileNav />

        <div className='root-container'>
            <div className='wrapper'>
                {children}
            </div>
        </div>
    </main>
  )
}
// the semantic main tag-> it will not imediately render children, rather will have some additional structure within it
// every layout will also have to render some page so we will move page.tsx inside root
export default Layout