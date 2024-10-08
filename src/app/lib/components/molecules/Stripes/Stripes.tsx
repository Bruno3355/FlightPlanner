import "./styles.css"

export interface AppProps {
  active: boolean | null;
}

export default function Stripes(props: AppProps) {
  const speedValues = [27, 32, 19, 21, 36, 11, 24, 18, 39, 25, 14, 29, 12, 20, 35, 28, 30, 22, 33, 13, 31, 23, 34, 26, 15, 38, 16, 37, 17, 10];

  return (
    <div className={`h-full w-full absolute grid items-center content-center transition-all duration-500 ${props.active ? 'opacity-0' : 'opacity-100'}`}>
        {speedValues.map((value, index) => {
          return <span className="w-[5px] h-[150px] bg-[#425568] rotate-[50deg] animate-stripes [&>*:nth-child(odd)]:h-[75px] [&>*:nth-child(even)]:translate-x-[205px] [&>*:nth-child(even)]:rotate-[45deg] calculateSpeed" style={{ ['--i' as any]: value, }} key={index}></span>
        })}

    </div>

  )
}
