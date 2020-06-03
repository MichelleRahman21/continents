import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link, BrowserRouter } from "react-router-dom";

function NavBar() {
	const pathname = window.location.pathname;

	const path = pathname === "/" ? "home" : pathname.substr(1);
	const [activeItem, setActiveItem] = useState(path);

	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
    <BrowserRouter>
		<Menu size="massive" color="teal" inverted>
			<Menu.Menu position="right">
				<Menu.Item name="home" active={activeItem === "home"} onClick={handleItemClick} as={Link} to="/"/>
				<Menu.Item name="africa"active={activeItem === "africa"}onClick={handleItemClick} as={Link} to="/africa"/>
        <Menu.Item name="americas" active={activeItem === "americas"} onClick={handleItemClick} as={Link} to="/americas"/>
        <Menu.Item name="asia" active={activeItem === "asia"} onClick={handleItemClick} as={Link} to="/asia"/>
        <Menu.Item name="europe" active={activeItem === "europe"} onClick={handleItemClick} as={Link} to="/europe"/>
        <Menu.Item name="oceania" active={activeItem === "oceania"} onClick={handleItemClick} as={Link} to="/oceania" />
			</Menu.Menu>
		</Menu>
    </BrowserRouter>
	);
}

export default NavBar;
