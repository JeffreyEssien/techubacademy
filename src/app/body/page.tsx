import Image from "next/image"
import image1 from '../images/people-practicing-social-integration-workspace 1.png'
import image2 from '../images/content.png'
import image3 from '../images/image content.png'
import image4 from '../images/programming-background-with-person-working-with-codes-computer 1.png'
import image5 from '../images/html-css-collage-concept-with-person 1.png'
import Footer from "../footer/page"

export default function Body() {
    return(
        <div className="text-black bg-white">
            <div className="relative border-box">
             <div className="absolute relative inset-0 z-10">
            <Image src={image1} alt="image"  className="max-h-[100rem]"/>
            </div>
            <div className="absolute z-10 inset-0 bg-gradient-to-r from-[#071909] to-[#3EA64C00]">
                <div className="w-[60%] mx-[5rem] my-[5rem] py-[5rem] onset-0 absolute z-20">
                <div className="z-40 ">
                <p className="text-[5rem] w-[70%] font-bold text-white opacity-100">Design the Future with Product Design</p>
                <p className="text-white text-[1.2rem] w-[80%] font-medium opacity-100">Transform your ideas into impactful digital products with our product design courses. Learn user-centered design principles, wireframing, prototyping, and usability testing to create intuitive and visually stunning products that delight users and drive business success.</p>
                </div>
                <div className="mt-3">
                    <button className="bg-[#2F7D39] text-white px-4 py-4 rounded-lg">Register Now</button>
                    <button className="text-white bg-transparent px-4 py-3 mx-5 rounded-lg outline-white outline">Read More</button>
                </div>
                </div>
            </div>
            </div>

            <div className="bg-[#ECF6ED] flex flex-col xl:flex-row space-x-4 xl:px-40 pt-20">
                <div className="flex flex-col w-[95%] ">
                    <p className="text-black mt-4 text-[2.5rem] font-medium pb-3">About Us</p>
                    <p className="text-black text-[2.5rem] pb-3 w-[80%]">Welcome to <span className="font-bold">Tech Hub Academy</span>, where innovation meets education. We're more than just an academy; we're a vibrant community of passionate learners, dedicated instructors, and industry professionals, all driven by a shared mission to empower individuals with the skills they need to thrive in the ever-evolving world of technology.</p>
                    <button className="bg-[#2F7D39] px-8 py-2 rounded-lg w-[20rem] text-black">Read More</button>
                </div>
                <div>
                    <Image src={image2} alt="black" width={1180}    className="rounded-lg h-[900px]"/>
                </div>
            </div>

            <div className="bg-white w-[82%] mx-auto py-5">
                <p className="text-black font-medium text-[2.5rem] pb-10">Our Courses</p>
                <div className="flex flex-col xl:flex-row">
                    <Image src={image3} alt="image" width={700} className="xl:flex hidden"/>
                    <div className="xl:w-[50%] mx-auto flex flex-col">
                        <p className="text-[#2F7D39] text-[2rem]">Product Design</p>
                        <p className="text-[1.4rem] font-medium flex items-center">Transform your ideas into impactful digital products with our product design courses. Learn the principles of user-centered design, wireframing, prototyping, and usability testing as you explore the entire product development lifecycle. Whether you're designing web applications, mobile apps, or software interfaces, our courses will equip you with the skills and knowledge to create intuitive, visually stunning, and user-friendly products that delight users and drive business results.</p>
                        <button className="bg-[#2F7D39] text-white w-[11rem] px-4 rounded-lg py-2 mt-4">Start Course</button>
                    </div>
                    <Image src={image3} alt="image" width={700} className="xl:hidden pt-10"/>
                </div>

                <div className="flex flex-col xl:flex-row pt-20">
                    <div className="xl:w-[50%] mr-4 flex flex-col">
                        <p className="text-[#2F7D39] text-[2rem]">Front-End Development</p>
                        <p className="text-[1.4rem] font-medium flex items-center w-[90%]">Bring your designs to life and create seamless user experiences with our frontend engineering courses. From HTML and CSS fundamentals to advanced JavaScript frameworks like React and Vue.js, our courses cover the latest tools and techniques used by top frontend developers. Dive deep into responsive design, accessibility, and performance optimization as you build dynamic and interactive web applications that captivate users and drive engagement.</p>
                        <button className="bg-[#2F7D39] text-white w-[11rem] px-4 rounded-lg py-2 mt-2">Start Course</button>
                    </div>
                    <Image src={image4} alt="image" width={700} className="rounded-3xl py-5"/>
                </div>

                <div className="flex flex-col xl:flex-row pt-20">
                <Image src={image5} alt="image" width={700} className="rounded-3xl xl:flex hidden"/>
                    <div className="xl:w-[50%] mx-auto flex flex-col">
                        <p className="text-[#2F7D39] text-[2rem]">Back-End Design</p>
                        <p className="text-[1.4rem] font-medium flex items-center">Unlock the power of server-side programming with our comprehensive backend development courses. Whether you're a beginner looking to build a strong foundation or an experienced developer seeking to expand your skill set, our courses cover everything from database management and API design to server deployment and optimization. With hands-on projects and real-world scenarios, you'll gain the expertise you need to create robust, scalable, and secure backend systems.</p>
                        <button className="bg-[#2F7D39] text-white w-[11rem] px-4 rounded-lg py-2 mt-2">Start Course</button>
                    </div>
                    <Image src={image5} alt="image" width={700} className="rounded-3xl xl:hidden py-5"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}