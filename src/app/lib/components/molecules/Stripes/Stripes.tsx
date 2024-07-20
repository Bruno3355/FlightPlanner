import "./styles.css"

export default function Stripes() {
  const speedValues = [27, 32, 19, 21, 36, 11, 24, 18, 39, 25, 14, 29, 12, 20, 35, 28, 30, 22, 33, 13, 31, 23, 34, 26, 15, 38, 16, 37, 17, 10];

  return (
    <div className="h-screen w-full relative grid justify-between align-middle">
        {speedValues.map((value, index) => {
          return <span style={{ ['--i' as any]: value, }} key={index}></span>
        })}

    </div>

  )
}
