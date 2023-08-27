import React from 'react'

import Link from 'next/link'
import Container from './ui/Container';
 



export const revalidate =0;


const NavBar = async () => {
 
  return (
    <div className="border-b">
   <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-20 items-center sm:justify-between transition-all">
          <div className='flex items-center gap-6'>
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <p className="font-bold text-xl">Jørgen Ø</p>
            </Link>

            <Link href="https://portifoliofirstyear.vercel.app/" target="_blank" className="ml-4 flex lg:ml-0 gap-x-2">
              <p className="font-semi-bold text-md hover:font-black hover:text-red-600 px-2 py-2 transition-all hover:py-5 border rounded-lg shadow-lg hover:px-10">PORTIFØLJE</p>
            </Link>

          
       
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NavBar