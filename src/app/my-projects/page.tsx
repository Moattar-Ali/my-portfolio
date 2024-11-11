import Link from "next/link";

export default function Projects(){
    return(
        <div className="text-white bg-black">
        <h1><b>MY PROJECTS</b></h1>
        <p>Here is the link of my Github account where all the projects that I have made using HTML, CSS, TYPESCRIPT, JAVASCRIPT and NEXT JS have been uploaded:</p>
       <ul>

       
       <br></br>
       <Link href="https://github.com/Moattar-Ali/static-resume.git">
       <li><b>Static Resume</b></li>
       </Link>

       <br></br>
       <Link href="https://github.com/Moattar-Ali/dynamic-resume.git"> 
        <li><b>Simple Dynamic Resume</b></li>
       </Link>

       <br></br>
       <Link href="https://github.com/Moattar-Ali/editable-resume.git">
       <li><b>Editable Resume</b></li>
       </Link>
       
       <br></br>
       <Link href="https://github.com/Moattar-Ali/sharable-resume.git">  
       <li><b>Sharable Resume</b></li>
       </Link>
       </ul>
        
        </div>
    )
}