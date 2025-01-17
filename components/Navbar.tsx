import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="maw-w-[1440px] m-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-between items-center">
          <Image 
            src="/logo.svg" 
            alt="car app logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <Button 
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" 
        />
      </nav>
    </header>
  )
}

export default NavBar