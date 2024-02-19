import Link from "next/link";

export default function Breakfast () {
  return (
    <div>
      <h1>What are you having for breakfast?</h1>
      <div><Link href='/menu'><h1>Back to menu...</h1></Link></div>
    </div>
  )
}

