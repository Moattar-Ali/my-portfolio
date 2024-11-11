/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
// import Image from "next/image";

export default function Header(){
return(
  
    <div className="headerContainer">
      
      <header>
      <div className="myLogo">
      <img src="https://th.bing.com/th/id/OIP.-T9_iYPFw8NKy_7GwwBMigHaB4?rs=1&pid=ImgDetMain" alt="logo"/>
      </div>
      

      <ul className="headerButton">
      
        <Link href={'/'}>
      
      <li className="header_items">Home</li>
      </Link>

      <Link href={"/about"}>
      <li className="header_items">About</li>
      </Link>

      <Link href={"/my-projects"}>
      <li className="header_items">My Projects</li>
      </Link>

      </ul>

      </header>
      </div>
  
)

}
