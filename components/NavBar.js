import React from "react";
import Link from "next/link";

export default function NavBar() {
    return (
        <main>
            <nav className="flex justify-center items-center mt-24 font-semibold text-lg">
                <h2 className='w-100% px-10 text-white'>
                    <a href='./'>HOME</a>
                </h2>
                <h2 className='w-100% px-10 text-white'>
                    <a href='./Resume'>RESUME</a>
                </h2>
                <h2 className='w-100% px-10 text-white'>
                    <a href='./Projects'>PROJECTS</a>
                </h2>
                <h2 className='w-100% px-10 text-white'>
                    <a href='./blog_in'>BLOG</a>
                </h2>
            </nav>
        </main>
    )
}