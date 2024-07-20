import { ComponentProps } from "react"

interface CardProps extends ComponentProps<'div'>{
  width?: string,
  height?: string,
  classAtributes?: string

}

export default function Card(props: CardProps) {
  console.log(props)

  return (
    <div className={`rounded-2xl bg-grey_light w-[640px] h-[428px] ${props.classAtributes}`}>index</div>
  )
}
