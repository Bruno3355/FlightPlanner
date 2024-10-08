import React from 'react'

type ChildrenProps = {
    children: React.ReactNode,
    active: boolean | null
}

export default function FourGridContainer({children, active}: ChildrenProps) {
  return (
<section className={`w-[calc(100vw_-_5rem)] h-full bg-grey_light p-8 transition-all duration-[1000ms] ${active ? "opacity-100 ml-20" : "absolute -top-40 opacity-0 max-h-0 max-w-0"}`}>
       {active && 
               <div className={`w-full h-full grid grid-cols-4 grid-rows-4 gap-4`}>
               {children}
           </div>
       }

      </section>
  )
}
