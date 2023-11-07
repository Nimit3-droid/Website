"use client";
import React, { useState } from "react";
import CanvasBackground from "../components/CanvasBackground";
import Contact from "@/components/contact";
import TypeingEffect from "@/UI/TypeingEffect";
import Experience from "@/components/Experience";
import NavBar from "@/components/NavBar";
import BeautifulAnimation from "@/components/BeautifulAnimation";
import Introduction from "@/components/Introduction";
import PDFViewer from "@/components/PdfViewer";

const Home = () => {
  return (
    <div>
      <NavBar />
      {/* <PDFViewer/> */}
      <Introduction/>
      <Experience customCSS='relative z-20'/>
      <Contact customCSS='relative z-20 my-60' />
    </div>
  );
};

export default Home;
