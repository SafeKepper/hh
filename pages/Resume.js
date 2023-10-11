import Head from "next/head";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import React from "react";

export default function Resume() {

    return (
        <>
        <Head></Head>
        <div className="mt-20"></div>
        <NavBar/>
        <Skills/>
        </>
    )
}