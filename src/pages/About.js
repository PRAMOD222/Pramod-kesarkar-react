import mypic from '../images/cropme.jpg'
import Axios from "axios"
import FileDownload from "js-file-download"


const About = () => {

    const download = (e) => {
        e.preventDefault()
        Axios({
            url:"http://localhost:4000",
            method: "GET",
            responseType: "blob"
        }).then((res)=>{
            FileDownload(res.data,"Resume.pdf")
        })
    }
    

    return <div class="about">
    <div class="abhead">
        <h1 class="headtext1">ABOUT <span class="headtext2">ME</span></h1>
        <h6 class="hsubtxt"><span class="headtext2">---</span> I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I
            DO <span class="headtext2">---</span></h6>
    </div>
    <div class="about2">
        <img src={mypic} class="abimg"alt="myimg" />
        <div class="maintb">
            <div class="tablekey">First Name<span class="tabledata">Pramod</span></div>
            <div class="tablekey">Last Name<span class="tabledata">Kesarkar</span></div>
            <div class="tablekey">Birthdate<span class="tabledata">18 September 1999</span></div>
            <div class="tablekey">Nationality<span class="tabledata">Indian</span></div>
            <div class="tablekey">Address<span class="tabledata">Shippur</span></div>
        </div>
        <div class="maintb">
            <div class="tablekey">Langages<span class="tabledata">English</span></div>
            <div class="tablekey">Phone<span class="tabledata">7219294594</span></div>
            <div class="tablekey">Email<span class="tabledata">pramodkesarakar@gmail.com</span></div>
            <div class="tablekey">Instagram<span class="tabledata">pramod_kesarkar1</span></div>
            <div class="tablekey">Linkedin<span class="tabledata">pramod kesarakar</span></div>
        </div>
    </div>
    <div class="about3">
        <div class="edu">
            <div class="oneblock">
                <h6 class="date">2020 - 2023</h6>
                <h2 class="eduname">B TECH DEGREE</h2>
                <p class="spe"><span class="fname">Specialization - </span> Electronics and Telecommunication</p>
                <p class="clg"><span class="fname">College</span> Sant Gajanan Maharaj Collage of Engineering</p>
            </div>
            <div class="oneblock">
                <h6 class="date">2017 - 2019</h6>
                <h2 class="eduname">DIPLOMA</h2>
                <p class="spe"><span class="fname">Specialization - </span> Electronics and Telecommunication</p>
                <p class="clg"><span class="fname">College</span> Sant Gajanan Maharaj Rural polytecnic</p>
            </div>
            <div class="oneblock">
                <h6 class="date">2015 - 2017</h6>
                <h2 class="eduname">12th MCVC</h2>
                <p class="spe"><span class="fname">Specialization - </span> Electronics and Telecommunication</p>
                <p class="clg"><span class="fname">College</span>Sadhana Junior College gadhinglaj</p>
            </div>
        </div>
        <div class="edu">
            <div class="oneblock">
                <h6 class="date">2022</h6>
                <h2 class="eduname">Number calculator web app</h2>
                <p class="spe"><span class="fname">Description - </span> it can calculate which numbers are prime
                    number palindrome number and perfect number</p>
            </div>
            <div class="oneblock">
                <h6 class="date">2022</h6>
                <h2 class="eduname">Project 2</h2>
                <p class="spe"><span class="fname">Description - </span> Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Sint inventore molestias ad.</p>
            </div>
            <div class="oneblock">
                <h6 class="date">2022</h6>
                <h2 class="eduname">Project3</h2>
                <p class="spe"><span class="fname">Description - </span> Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Sint inventore molestias ad.</p>
            </div>
        </div>
    </div>
    <div class="ab4title">
        <h2 class="skillh">SKILLS</h2>
    </div>
    <div class="about4">
        <div class="ab4content">
            <p>HTML</p>
            <div class="con4">
                <div class="skills html">80%</div>
            </div>
        </div>
        <div class="ab4content">
            <p>CSS</p>
            <div class="con4">
                <div class="skills css">75%</div>
            </div>
        </div>
        <div class="ab4content">
            <p>JavaScript</p>
            <div class="con4">
                <div class="skills js">65%</div>
            </div>
        </div>
        <div class="ab4content">
            <p>React.js</p>
            <div class="con4">
                <div class="skills react">50%</div>
            </div>
        </div>
        <div class="ab4content">
            <p>C</p>
            <div class="con4">
                <div class="skills c">80%</div>
            </div>
        </div>
        <div class="ab4content">
            <p>CPP</p>
            <div class="con4">
                <div class="skills cpp">70%</div>
            </div>
        </div>
        <div class="ab4content">
            <p>Python</p>
            <div class="con4">
                <div class="skills py">60%</div>
            </div>
        </div>
        <div class="ab4content">
            <p>GitHub</p>
            <div class="con4">
                <div class="skills git1">90%</div>
            </div>
        </div>
        <div class="ab4content">
            <p>Node.js</p>
            <div class="con4">
                <div class="skills node">60%</div>
            </div>
        </div>
    </div>
    <div class="cvbut">
        <button onClick={(e)=>download(e)} type="button" class="button b2">Download my CV</button>
    </div>
</div>;
  };
  
  export default About;