/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
// import Link from "next/link";


export default function Footer(){
    return(
        <div className="footerContainer">
          <footer className="h-5000">
          <h1>Do you have any query? Feel free to contact us through:</h1>

        <div className="footer_btn">

            <div className="contact_link">
            <a href="linkedin.com/in/moattar-ali-118315300">
            <img className="h-8 w-8" src="https://th.bing.com/th/id/OIP.VJhVCn_KEP55vMgXH9jepwHaHY?rs=1&pid=ImgDetMain" alt="LinkedIn"></img>
            </a>
            </div>

            <div className="contact_link">
            <a href="https://www.facebook.com/share/14w1KcBDgj/">
            <img className="h-8 w-8" src="https://th.bing.com/th/id/OIP.lkR1eCnLcPZ32cYreDUNkgHaHa?w=2084&h=2084&rs=1&pid=ImgDetMain" alt="Facebook"></img>
            </a>
            </div>

            <div className="contact_link">
              <a href="moattar789@gmail.com">
             <img className="h-8 w-8" src="https://th.bing.com/th/id/OIP.qBL2O6kmVCm8iTeU_IG0RQHaHa?rs=1&pid=ImgDetMain" alt="Email"/>                
              </a>
              </div>
              </div>
           
{/* <ul className="footer_btn">
  <br></br>
 <Link href="/about">
 <li>About</li>
 <br></br>
 </Link>
 <Link href="/my-projects"><li>Projects</li></Link>
</ul> */}

      </footer>
      </div>
    )
}