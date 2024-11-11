/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */



export default function Home() {
  return (

    <div className="bg-black">
    <div className="my_image"></div>

    <div className="myIntro">
      <b>Hey! This is me Moattar Ali, a passionate Next.JS learner...</b>
      </div>

<hr></hr>

<h1 className="heading"><b>Skills</b></h1>

<div className="parentForSkills">
<div className="my_skills">
<h3 className="sub_heading"><b>HTML</b></h3>
  <div className="imaging">
  <img src="https://th.bing.com/th/id/OIP.rEbLvjHfRkEQPOpMDtFFXgHaHa?rs=1&pid=ImgDetMain" alt="Html image"/>
  </div>

</div>

<div className="my_skills">
<h3 className="sub_heading"><b>CSS</b></h3>
  <div className="imaging">
  <img src="https://th.bing.com/th/id/OIP.bPNRzP1yM7L6czPfwWFEtAHaHa?rs=1&pid=ImgDetMain" alt="CSS image"/>
  </div>
 
</div>

<div className="my_skills">
<h3 className="sub_heading"><b>JAVASCRIPT</b></h3>
  <div className="imaging">
    <img src="https://th.bing.com/th/id/OIP.iHiKEbE66LFT1Rl5BkXTUQAAAA?w=320&h=320&rs=1&pid=ImgDetMain" alt="Javascript image"/>
  </div>
 
</div>

<div className="my_skills">
<h3 className="sub_heading"><b>TYPESCRIPT</b></h3>
 <div className="imaging">
  <img src="https://th.bing.com/th/id/OIP._d0fPxuK_Iql4AwWKPHcAAHaHa?rs=1&pid=ImgDetMain" alt="typescript image"/>
  </div>
 
</div>

<div className="my_skills">
<h3 className="sub_heading"><b>C/C++</b></h3>
  <div className="imaging">
  <img src="https://th.bing.com/th/id/OIP.Lb57UcPT2T9S6Zq7UGm2gQHaHa?rs=1&pid=ImgDetMain" alt="c/c++ image"/>
  </div>
</div>

<div className="my_skills">
<h3 className="sub_heading"><b>MS OFFICE</b></h3>
  <div className="imaging">
  <img src="https://th.bing.com/th/id/OIP.sVDyBfpnJsPsNHFvQbEWowAAAA?rs=1&pid=ImgDetMain" alt="MS Office image"/>
  </div>
</div>
</div>

      <hr></hr>
      <h1 className="heading"><b>My Projects</b></h1>
    <div>

    <div className="projects">
      
      <a href="https://github.com/Moattar-Ali/static-resume.git">Simple Static Resume</a>
    </div>

    <div className="projects">
    <a href="https://github.com/Moattar-Ali/dynamic-resume.git">Simple Dynamic Resume</a>
    </div>

    <div className="projects">
    <a href="https://github.com/Moattar-Ali/editable-resume.git">Editable Dynamic Resume</a>
    </div>

    <div className="projects">
    <a href="https://github.com/Moattar-Ali/sharable-resume.git">Sharable Dynamic Resume</a>
    </div>
    </div>

   </div>
  )
}
