import React, { useState } from "react";
import Footer from "../components/Footer";
import FooterHeroSection from "../components/FooterHeroSection";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
	homeObjHistory,
	homeObjOne,
	homeObjThree,
	homeObjTrans,
	homeObjTwo,
	homeObjFour,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/SideBar";

const Home = () => {
	const [isOpen, setIsOpen] = useState();

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
			<Navbar toggle={toggle}></Navbar>
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjHistory} />
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjTrans} />
			<Services></Services>
			<InfoSection {...homeObjThree} />
			<InfoSection {...homeObjFour} />
			<FooterHeroSection />
			<Footer />
		</>
	);
};

export default Home;
