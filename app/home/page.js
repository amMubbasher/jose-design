import React from 'react'
import Image from "next/image";
import Navbar from "../components/Navbar";
import JobBanner from "../components/JobBanner";
import BenefitsList from "../components/BenefitsList";
import GoodFitSection from "../components/oodFitSection";
import ApplicationProcess from "../components/ApplicationProcess";
import ContactFooter from "../components/ContactFooter";
import ApplicationForm from "../components/ApplicationForm";
import ApplicationForm2 from "../components/ApplicationForm2";


function page() {
  return (
    <div>
    <Navbar/>
    <JobBanner/>
    <BenefitsList/>
    <GoodFitSection/>
    <ApplicationProcess/>
    <ContactFooter/> 
    </div>
  )
}

export default page