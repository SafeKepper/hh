import Head from "next/head";
import NavBar from "../components/NavBar";
import MainPage from "../components/MainPage";
import React from "react";

export default function Page() {

    return (
        <>
        <Head></Head>
        <div className="mt-20"></div>
        <NavBar/>
        <MainPage/>
        </>
    )
}