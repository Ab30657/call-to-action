import React from "react";
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinkItems,
	FooterLinksWrapper,
	FooterLink,
	FooterLinkTitle,
} from "./FooterElements";
const Footer = () => {
	const redirect = (e) => {
		e.preventDefault();
		window.open("https://discord.com/invite/rkb9JSZSxp", "_blank");
	};
	const redirectFb = (e) => {
		e.preventDefault();
		window.open("https://www.facebook.com/groups/askbuddie/", "_blank");
	};
	const redirectPage = (e) => {
		e.preventDefault();
		window.open("https://www.askbuddie.com", "_blank");
	};
	const redirectBlog = (e) => {
		e.preventDefault();
		window.open("https://www.askbuddie.com/blog", "_blank");
	};
	const redirectGit = (e) => {
		e.preventDefault();
		window.open("https://github.com/askbuddie", "_blank");
	};
	const redirectWeb = (e) => {
		e.preventDefault();
		window.open("https://www.techradar.com/news/how-open-source-communities-work", "_blank");
	};
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle> About Us</FooterLinkTitle>
							<FooterLink to="/" onClick={redirectPage}>
								How we work
							</FooterLink>
							<FooterLink to="/" onClick={redirectGit}>
								Github
							</FooterLink>
							<FooterLink to="/" onClick={redirect}>
								Discord
							</FooterLink>
							<FooterLink to="/">Terms of Service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Social Media</FooterLinkTitle>
							<FooterLink to="/" onClick={redirectFb}>
								Facebook
							</FooterLink>
							<FooterLink to="/">Instagram</FooterLink>
							<FooterLink to="/">Twitter</FooterLink>
							<FooterLink to="/" onClick={redirectBlog}>
								Blog
							</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Extras</FooterLinkTitle>
							<FooterLink to="/">How it works</FooterLink>
							<FooterLink to="/">Testemonials</FooterLink>
							<FooterLink to="/">Careers</FooterLink>
							<FooterLink to="/">Top Donators</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>
								<b>References</b>
							</FooterLinkTitle>
							<FooterLink to="/" onClick={redirectPage}>
								https://www.askbuddie.com
							</FooterLink>
							<FooterLink to="/" onClick={redirectFb}>
								https://www.facebook.com/groups/askbuddie
							</FooterLink>
							<FooterLink to="/" onClick={redirectWeb}>
								https://www.techradar.com/news/how-open-source-communities-work
							</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<div style={{ color: "white" }}>
					© <b>{new Date().getFullYear()}</b> This page is just for university's project purpose and is not
					associated with the organization.
				</div>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
