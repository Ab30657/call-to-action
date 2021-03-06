import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Button = styled(LinkS)`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
	whitespace: wrap;
	padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
	color: ${({ dark }) => (dark ? "#010606" : "#fff")};
	font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.25s ease-in-out;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
		transform: scale(1.15);
	}
	&:active {
		transform: scale(1);
	}
	text-decoration: none;
`;

export const ButtonLinks = styled.a`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
	whitespace: wrap;
	padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
	color: ${({ dark }) => (dark ? "#010606" : "#fff")};
	font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.25s ease-in-out;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
		transform: scale(1.15);
	}
	&:active {
		transform: scale(1);
	}
	text-decoration: none;
`;
