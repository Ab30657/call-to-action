import React from "react";
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarLink, SideBarMenu } from "./SideBarElements";
const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			<SideBarContainer isOpen={isOpen} onClick={toggle}>
				<Icon onClick={toggle}>
					<CloseIcon />
				</Icon>
				<SideBarWrapper>
					<SideBarMenu>
						<SideBarLink to="about" onClick={toggle}>
							About
						</SideBarLink>
						<SideBarLink to="discover" onClick={toggle}>
							Discover
						</SideBarLink>
						<SideBarLink to="services" onClick={toggle}>
							Services
						</SideBarLink>
					</SideBarMenu>
				</SideBarWrapper>
			</SideBarContainer>
		</>
	);
};

export default Sidebar;
