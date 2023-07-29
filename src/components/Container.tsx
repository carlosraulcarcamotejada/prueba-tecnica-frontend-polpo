import {FC} from 'react'

interface IContainer {
    children: JSX.Element | JSX.Element[];
}


const Container:FC<IContainer> = ({children}):JSX.Element => {
  return (
    <div
        className='
                  flex 
                  flex-col
                  gap-y-16
                  items-center 
                  justify-center 
                  p-12 
                  '
    >
        {children}
    </div>
  )
}

export  {Container}