import React from "react"

export interface CardProps extends React.ComponentProps<'div'>{
  width?: string,
  height?: string,
  classAtributes?: string,
  children?: React.ReactNode

}

export default function Card(props: CardProps) {

  return (
    <div className={`w-full h-full rounded-2xl bg-white drop-shadow-xl p-4 ${props.classAtributes}`}>{
      props.children
    }</div>
  )
}
