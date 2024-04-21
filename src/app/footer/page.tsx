export default function Footer() {
    return(
        <div className="bg-[#C3E3C8] text-black py-10">
            <p className="text-center font-bold text-[1.7rem]">Let's get started on something great</p>
            <p className="text-[#475467] text-center pb-10">Join us, togain expertise, and earn certification</p>

            <div className="flex flex-row w-[80%] xl:w-[20%] mx-auto justify-around">
                <button className="text-center w-[45%] py-3 bg-white rounded-lg">Contact Us</button>
                <button className="text-center w-[45%] py-3 text-white rounded-lg bg-[#2F7D39]">Get Started</button>
            </div>

            <div className="xl:flex grid grid-cols-2 xl:flex-row w-[90%] mx-auto justify-around pt-20">
                <div className="text-xl flex flex-col text-[#475467] space-y-2">
                    <p className="text-[#667085] text-lg pb-3">Product</p>
                    <p>Overview</p>
                    <p>Features</p>
                    <p>Solutions</p>
                    <p>Tutorials</p>
                    <p>Pricing</p>
                    <p>Releases</p>
                </div>

                <div className="text-xl flex flex-col text-[#475467] space-y-2">
                    <p className="text-[#667085] text-lg pb-3">Company</p>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>News</p>
                    <p>Media Kit</p>
                    <p>Contact</p>
                </div>

                <div className="text-xl flex flex-col text-[#475467] space-y-2">
                    <p className="text-[#667085] text-lg pb-3">Resources</p>
                    <p>Blog</p>
                    <p>Newsletter</p>
                    <p>Events</p>
                    <p>Help centre</p>
                    <p>Tutorials</p>
                    <p>Support</p>
                </div>

                <div className="text-xl flex flex-col text-[#475467] space-y-2">
                    <p className="text-[#667085] text-lg pb-3">Use cases</p>
                    <p>Startups</p>
                    <p>Enterprise</p>
                    <p>Government</p>
                    <p>SaaS centre</p>
                    <p>Marketplaces</p>
                    <p>e-Commerce</p>
                </div>

                <div className="text-xl flex flex-col text-[#475467] space-y-2">
                    <p className="text-[#667085] text-lg pb-3">Social</p>
                    <p>Overview</p>
                    <p>Features</p>
                    <p>Solutions</p>
                    <p>Tutorials</p>
                    <p>Pricing</p>
                    <p>Releases</p>
                </div>

                <div className="text-xl flex flex-col text-[#475467] space-y-2">
                    <p className="text-[#667085] text-lg pb-3">Legal</p>
                    <p>Overview</p>
                    <p>Features</p>
                    <p>Solutions</p>
                    <p>Tutorials</p>
                    <p>Pricing</p>
                    <p>Releases</p>
                </div>
            </div>
        </div>
    )
}