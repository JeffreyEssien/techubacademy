import Image from "next/image"
import image2 from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="bg-[#C3E3C8] text-black py-10 mt-20 font-urbanist">
            <p className="text-center font-bold text-[1.7rem]">Let's get started on something great</p>
            <p className="text-[#475467] text-center pb-10">Join us, gain expertise, and earn certification</p>

            <div className="flex flex-row w-1/2 mx-auto items-center justify-center pb-20 gap-3">
                <p><svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="44" height="44" rx="22" fill="#ECF6ED" />
                    <path d="M15.25 11.875C14.6864 11.875 14.1459 12.0989 13.7474 12.4974C13.3489 12.8959 13.125 13.4364 13.125 14C13.125 14.5636 13.3489 15.1041 13.7474 15.5026C14.1459 15.9011 14.6864 16.125 15.25 16.125C15.8136 16.125 16.3541 15.9011 16.7526 15.5026C17.1511 15.1041 17.375 14.5636 17.375 14C17.375 13.4364 17.1511 12.8959 16.7526 12.4974C16.3541 12.0989 15.8136 11.875 15.25 11.875ZM13.25 17.875C13.2168 17.875 13.1851 17.8882 13.1616 17.9116C13.1382 17.9351 13.125 17.9668 13.125 18V31C13.125 31.069 13.181 31.125 13.25 31.125H17.25C17.2832 31.125 17.3149 31.1118 17.3384 31.0884C17.3618 31.0649 17.375 31.0332 17.375 31V18C17.375 17.9668 17.3618 17.9351 17.3384 17.9116C17.3149 17.8882 17.2832 17.875 17.25 17.875H13.25ZM19.75 17.875C19.7168 17.875 19.6851 17.8882 19.6616 17.9116C19.6382 17.9351 19.625 17.9668 19.625 18V31C19.625 31.069 19.681 31.125 19.75 31.125H23.75C23.7832 31.125 23.8149 31.1118 23.8384 31.0884C23.8618 31.0649 23.875 31.0332 23.875 31V24C23.875 23.5027 24.0725 23.0258 24.4242 22.6742C24.7758 22.3225 25.2527 22.125 25.75 22.125C26.2473 22.125 26.7242 22.3225 27.0758 22.6742C27.4275 23.0258 27.625 23.5027 27.625 24V31C27.625 31.069 27.681 31.125 27.75 31.125H31.75C31.7832 31.125 31.8149 31.1118 31.8384 31.0884C31.8618 31.0649 31.875 31.0332 31.875 31V22.38C31.875 19.953 29.765 18.055 27.35 18.274C26.6028 18.342 25.8709 18.5269 25.181 18.822L23.875 19.382V18C23.875 17.9668 23.8618 17.9351 23.8384 17.9116C23.8149 17.8882 23.7832 17.875 23.75 17.875H19.75Z" fill="#32853D" />
                </svg>
                </p>
                <Link href='https://www.instagram.com/techubspaces?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><p><svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="44" height="44" rx="22" fill="#ECF6ED" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.965 11.066C19.138 11.012 19.512 11 22.5 11C25.488 11 25.862 11.013 27.034 11.066C28.206 11.119 29.006 11.306 29.706 11.577C30.439 11.854 31.104 12.287 31.654 12.847C32.214 13.396 32.646 14.06 32.922 14.794C33.194 15.494 33.38 16.294 33.434 17.464C33.488 18.639 33.5 19.013 33.5 22C33.5 24.988 33.487 25.362 33.434 26.535C33.381 27.705 33.194 28.505 32.922 29.205C32.646 29.9391 32.2133 30.6042 31.654 31.154C31.104 31.714 30.439 32.146 29.706 32.422C29.006 32.694 28.206 32.88 27.036 32.934C25.862 32.988 25.488 33 22.5 33C19.512 33 19.138 32.987 17.965 32.934C16.795 32.881 15.995 32.694 15.295 32.422C14.5609 32.146 13.8958 31.7133 13.346 31.154C12.7864 30.6047 12.3533 29.9399 12.077 29.206C11.806 28.506 11.62 27.706 11.566 26.536C11.512 25.361 11.5 24.987 11.5 22C11.5 19.012 11.513 18.638 11.566 17.466C11.619 16.294 11.806 15.494 12.077 14.794C12.3537 14.0601 12.7871 13.3953 13.347 12.846C13.896 12.2865 14.5605 11.8534 15.294 11.577C15.994 11.306 16.795 11.12 17.965 11.066ZM26.944 13.046C25.784 12.993 25.436 12.982 22.499 12.982C19.562 12.982 19.214 12.993 18.054 13.046C16.981 13.095 16.399 13.274 16.011 13.425C15.498 13.625 15.131 13.862 14.746 14.247C14.381 14.6021 14.1002 15.0343 13.924 15.512C13.773 15.9 13.594 16.482 13.545 17.555C13.492 18.715 13.481 19.063 13.481 22C13.481 24.937 13.492 25.285 13.545 26.445C13.594 27.518 13.773 28.1 13.924 28.488C14.1 28.965 14.381 29.398 14.746 29.753C15.101 30.118 15.534 30.399 16.011 30.575C16.399 30.726 16.981 30.905 18.054 30.954C19.214 31.007 19.561 31.018 22.499 31.018C25.437 31.018 25.784 31.007 26.944 30.954C28.017 30.905 28.599 30.726 28.987 30.575C29.5 30.375 29.867 30.138 30.252 29.753C30.617 29.398 30.898 28.965 31.074 28.488C31.225 28.1 31.404 27.518 31.453 26.445C31.506 25.285 31.517 24.937 31.517 22C31.517 19.063 31.506 18.715 31.453 17.555C31.404 16.482 31.225 15.9 31.074 15.512C30.874 14.999 30.637 14.632 30.252 14.247C29.8969 13.8821 29.4647 13.6012 28.987 13.425C28.599 13.274 28.017 13.095 26.944 13.046ZM21.094 25.391C21.8787 25.7176 22.7524 25.7617 23.5659 25.5157C24.3795 25.2697 25.0824 24.7489 25.5546 24.0422C26.0268 23.3356 26.2391 22.4869 26.155 21.6411C26.071 20.7953 25.696 20.005 25.094 19.405C24.7102 19.0215 24.2462 18.7278 23.7353 18.5451C23.2245 18.3625 22.6794 18.2954 22.1395 18.3486C21.5996 18.4019 21.0782 18.5742 20.6128 18.8531C20.1475 19.1321 19.7497 19.5107 19.4483 19.9619C19.1469 20.413 18.9492 20.9253 18.8695 21.462C18.7898 21.9986 18.8302 22.5463 18.9875 23.0655C19.1449 23.5847 19.4155 24.0626 19.7797 24.4647C20.144 24.8668 20.5928 25.1832 21.094 25.391ZM18.502 18.002C19.027 17.477 19.6503 17.0605 20.3363 16.7764C21.0223 16.4922 21.7575 16.346 22.5 16.346C23.2425 16.346 23.9777 16.4922 24.6637 16.7764C25.3497 17.0605 25.973 17.477 26.498 18.002C27.023 18.527 27.4395 19.1503 27.7236 19.8363C28.0078 20.5223 28.154 21.2575 28.154 22C28.154 22.7425 28.0078 23.4777 27.7236 24.1637C27.4395 24.8497 27.023 25.473 26.498 25.998C25.4377 27.0583 23.9995 27.654 22.5 27.654C21.0005 27.654 19.5623 27.0583 18.502 25.998C17.4417 24.9377 16.846 23.4995 16.846 22C16.846 20.5005 17.4417 19.0623 18.502 18.002ZM29.408 17.188C29.5381 17.0653 29.6423 16.9177 29.7143 16.754C29.7863 16.5903 29.8248 16.4138 29.8274 16.2349C29.83 16.0561 29.7967 15.8785 29.7295 15.7128C29.6622 15.5471 29.5624 15.3965 29.436 15.27C29.3095 15.1436 29.1589 15.0438 28.9932 14.9765C28.8275 14.9093 28.6499 14.876 28.4711 14.8786C28.2922 14.8812 28.1157 14.9197 27.952 14.9917C27.7883 15.0637 27.6407 15.1679 27.518 15.298C27.2793 15.551 27.1486 15.8871 27.1537 16.2349C27.1588 16.5827 27.2992 16.9149 27.5452 17.1608C27.7911 17.4068 28.1233 17.5472 28.4711 17.5523C28.8189 17.5574 29.155 17.4267 29.408 17.188Z" fill="#32853D" />
                </svg>
                </p>
                </Link>
            </div>

            <div className="flex flex-row w-[80%] xl:w-[20%] mx-auto justify-around">
                <button className="text-center w-[45%] py-3 bg-white rounded-lg">Contact Us</button>
                <button className="text-center w-[45%] py-3 text-white rounded-lg bg-[#2F7D39]">Get Started</button>
            </div>

            <div className="flex flex-row gap-3 text-[#475467] w-full justify-center pt-5">
                <Link href={'/about'}><p>About us |</p></Link>
                <Link href={'/courses'}><p>Courses |</p></Link>
                <Link href={'/'}><p>Class Schedule |</p></Link>
                <Link href={'/contact'}><p>Contact</p></Link>
            </div>

            <div className="bg-[#C3E3C8] border-t border-t-white w-[85%] mt-10 mx-auto flex flex-col xl:flex-row justify-between">
                <Image src={image2} alt="image" className="w-1/4 xl:w-auto mx-auto xl:mx-0"/>

                <p className="text-[#667085]">© 2024 Tech-Hub Academy. All rights reserved.</p>
            </div>
        </div>
    )
}