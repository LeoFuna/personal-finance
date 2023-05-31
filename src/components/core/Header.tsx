import Image from "next/image";

export default function Header() {
  return(
    <header className="flex justify-between">
      <div className="w-1/12 bg-blue">
        <Image src='/logo.png' width={50} height={50} alt="Logo" />
      </div>
      <div className="flex w-1/3 justify-end">
        <h3 className="text-blue font-bold bg-white">Olá, Leonardo</h3>
        <div className="w-4/12 bg-blue">
          <Image src='/logo.png' width={50} height={50} alt="Avatar" />
        </div>
      </div>
    </header>
  )
}