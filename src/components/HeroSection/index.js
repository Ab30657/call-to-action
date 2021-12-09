import React, { useState } from "react";
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from "./HeroElements";
import Video from "../../videos/clip.mp4";
import { ButtonLinks } from "../ButtonElements";
const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const redirect = (e) => {
		e.preventDefault();
		window.open("https://discord.com/invite/rkb9JSZSxp", "_blank");
	};

	const onHover = () => {
		setHover(!hover);
	};
	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Join Ask-Buddie!</HeroH1>
				<HeroP>
					An online technology community for technology enthusiasts and embrace the digital age of the 21st
					century!
				</HeroP>
				<HeroBtnWrapper>
					<ButtonLinks
						primary="true"
						dark="true"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						target="_blank"
						onClick={redirect}
					>
						<b>Join us in Discord</b> {hover ? <ArrowForward /> : <ArrowRight />}
					</ButtonLinks>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
