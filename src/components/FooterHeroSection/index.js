import React, { useState } from "react";
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroP,
	HeroBtnWrapper,
	HeroBtnWrapperCln,
} from "./FooterHeroElements";
import $ from "jquery";

import Video from "../../videos/clip2.mp4";
import { ButtonLinks } from "../ButtonElements";
const FooterHeroSection = () => {
	const [hover, setHover] = useState(false);
	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroP>
					Finally, there are ways you can help the communities like Ask-Buddie and the Open-Source community
					as a whole. First and foremost, and you might have guessed it. <b>Yes, programming!</b> In today’s
					world coding isn’t that difficult. If you have a passion for it, go for it! <br />
					<br />
					Join the Ask-Buddie community and start contributing to the open-source community. Write your own
					code! Also, consider
					<b> donating</b> to Ask-Buddie as they are involved in managing and organizing coding boot camps,
					hackathons, etc. which are a great way to continue encouraging this community to spread awareness
					about data privacy, and indulge more technology enthusiasts. <br />
					<br />
					In the end, we have completed talking about issues of data privacy and awareness circling it. How
					people should be conscious about how their data is being used; it's your most important asset, yes
					even more than your money. We learned the ways AskBuddie is contributing to the Open-Source
					community, and how it is gathering individuals interested in technology willing to bring that
					transparency that is lacking in today’s world. And then, there are ways you can get involved.
					<br />
					<br />
					<span style={{ textTransform: "uppercase" }}>
						<b>Now, it's your turn!</b>
					</span>
				</HeroP>
				<HeroBtnWrapperCln>
					<HeroBtnWrapper>
						<ButtonLinks primary="true" dark="true" onMouseEnter={onHover} onMouseLeave={onHover}>
							<b>Donate 0.10$</b>
						</ButtonLinks>
					</HeroBtnWrapper>
					<HeroBtnWrapper>
						<ButtonLinks
							primary="true"
							dark="true"
							onMouseEnter={onHover}
							onMouseLeave={onHover}
							target="_blank"
						>
							<b>Donate 0.50$</b>
						</ButtonLinks>
					</HeroBtnWrapper>
					<HeroBtnWrapper>
						<ButtonLinks
							primary="true"
							dark="true"
							onMouseEnter={onHover}
							onMouseLeave={onHover}
							target="_blank"
						>
							<b>Donate 1.00$</b>
						</ButtonLinks>
					</HeroBtnWrapper>
				</HeroBtnWrapperCln>
			</HeroContent>
		</HeroContainer>
	);
};

export default FooterHeroSection;
