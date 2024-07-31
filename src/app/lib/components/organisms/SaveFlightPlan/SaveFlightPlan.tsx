import Card from '../../molecules/Card/Card'

export default function SaveFlightPlan() {
  return (
    <Card
    classAtributes={`col-start-3 col-end-5 row-start-4 row-end-5 grid grid-cols-1 grid-rows-[max-content,80%]`}
  >
    <h2 className="text-2xl font-semibold underline">
      Save Flight Plan
    </h2>
    <div className="flex flex-col items-center gap-4">
      <input
        type="text"
        placeholder="Insert flight plan name"
        className="w-full h-14 rounded-2xl border-b-grey border-2 p-3"
      />
      <button className="w-36 h-10 rounded-2xl bg-primary text-xl font-medium text-white hover:bg-accent hover:text-primary active:bg-green-400 self-end">
        Save
      </button>
    </div>
  </Card>
  )
}
