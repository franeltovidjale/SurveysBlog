import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function PageContent({ children}) {
  return (
    <div>
     <Header />
     <div>
         {children}
     </div>
     <Footer />
    </div>
  )
}
