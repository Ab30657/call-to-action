import React from "react";
import Icon1 from "../../img/svg-4.svg";
import Icon2 from "../../img/svg-5.svg";
import Icon3 from "../../img/svg-6.svg";
import Icon4 from "../../img/svg-9.svg";
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from "./ServicesElements";
const Services = () => {
	const redirectblog = (e) => {
		e.preventDefault();
		window.open("https://www.askbuddie.com/blog/", "_blank");
	};
	const redirectweb = (e) => {
		e.preventDefault();
		window.open("https://shotcoder.com/", "_blank");
	};
	const redirectFb = (e) => {
		e.preventDefault();
		window.open("https://www.facebook.com/groups/askbuddie/", "_blank");
	};
	const redirectPage = (e) => {
		e.preventDefault();
		window.open("https://www.askbuddie.com", "_blank");
	};
	return (
		<ServicesContainer id="services">
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard onClick={redirectblog}>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Ask-Buddie Blog</ServicesH2>
					<ServicesP>
						Anything related to Ask Buddie or recent technology updates are featured in this blog. Some of
						the members have also written about their experiences.
					</ServicesP>
				</ServicesCard>
				<ServicesCard onClick={redirectPage}>
					<ServicesIcon src={Icon2} />
					<ServicesH2>Virtual Offices</ServicesH2>
					<ServicesP>
						Since, it is an online community, you can access our virtual offices online anywhere in the
						world.
					</ServicesP>
				</ServicesCard>
				<ServicesCard onClick={redirectweb}>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Web Hosting</ServicesH2>
					<ServicesP>
						Shotcoder Inc is their official web hosting service. As members of our organization, one can get
						1 year of free web hosting. Join now!
					</ServicesP>
				</ServicesCard>
				<ServicesCard onClick={redirectFb}>
					<ServicesIcon src={Icon4} />
					<ServicesH2>Workshops and Events</ServicesH2>
					<ServicesP>
						Coding bootcamps, Workshops to indulge more people into tech community. <br />
						Organize hackathons where individuals can present their coding skills and ideas nationwide!
					</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
