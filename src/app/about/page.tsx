import Navbar from "../navbar/page";

export default function() {

    const persons = [
        {id: 1, name: 'Olivia Rhye' , position: 'Founder & CEO'},
        {id: 2, name: 'Phoenix Baker' , position: 'Engineering Manager'},
        {id: 3, name: 'Lana Steiner' , position: 'Product Manager'},
        {id: 4, name: 'Demi Wilkinson' , position: 'Frontend Developer'},
        {id: 5, name: 'Candice Wu' , position: 'Backend Developer'},
        {id: 6, name: 'Natali Craig' , position: 'Product Designer'},
        {id: 7, name: 'Drew Cano' , position: 'UX Researcher'},
        {id: 8, name: 'Orlando Diggs' , position: 'Customer Success'},
    ]

    return(
        <div className="bg-white text-black">
            <Navbar />
            <p className="text-[1.4rem] text-[#3EA64C] text-center py-10">About us</p>
            <p className="text-[2.8rem] text-black font-bold text-center">About Tech-Hub Academy</p>
            <p className="text-center w-[60%] font-medium mx-auto text-[1.9rem] py-10">Welcome to <span className="font-bold">Tech Hub Academy</span>, where innovation meets education. We're more than just an academy; we're a vibrant community of passionate learners, dedicated instructors, and industry professionals, all driven by a shared mission to empower individuals with the skills they need to thrive in the ever-evolving world of technology.</p>

            <div>
                <p className="text-center text-[2.4rem] font-bold pt-20">Meet our Team</p>
                <p className="text-[#475467] text-center w-[45%] mx-auto text-[1.5rem] py-3">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</p>
            </div>

            <div className="grid grid-cols-4 w-[95%] mx-auto justify-items-center pt-10">
                {persons.map((person) => (
                    <div className="" key={person.id}>
                        <div className="text-center bg-gray-400 w-[50px] h-[50px] rounded-full mx-auto"> .</div>
                        <p className="text-[#101828] text-center font-bold text-[1.2rem] ">{person.name}</p>
                        <p className="text-[#25642E] text-center text-[1.1rem] font-medium pb-10">{person.position}</p>
                    </div>
                ))}
            </div>

            <div className="">
                <p className="text-[#1C4B22] text-center px-2 py-2 font-bold my-2 bg-[#E2F2E4] rounded-3xl w-[7rem] mx-auto">Careers</p>
                <p className="font-medium text-[2.5rem] text-center py-5">We do not have a placement for now</p>
            </div>
        </div>
    )
}