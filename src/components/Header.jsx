import Image from "next/image";

export default function Header({ image }) {
  return (
    <div className="relative w-full h-[55vh]">
        <img src={`/images/${image}`} className="object-cover" fill priority alt='rall' />
    </div>
  )
}
