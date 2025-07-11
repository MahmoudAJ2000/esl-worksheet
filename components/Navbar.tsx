import Link from "next/link";
import Image from "next/image"

export default function Navbar(props : {hasButton : boolean}) {
  return (
    <div className="navbar bg-base-300 shadow-sm sm:px-10">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-lg font-extrabold"> 
          <Image
            alt="Smartsheet ESL logo"
            width="28"
            height="28"
            decoding="async"
            src="/logo.png"
          ></Image>
          <strong className="text-lg font-extrabold tracking-tight">Smartsheet<span className="text-accent">PDF</span></strong>
        </Link>
      </div>

      <div className={`navbar-end ${props.hasButton? "":"hidden"} max-sm:hidden`}>
        <Link href="/dashboard" className="btn btn-primary btn-ghost">
          Create Worksheet
        </Link>
      </div>
    </div>
  );
}
