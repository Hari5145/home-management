import React, { useState, useEffect } from "react";
import { Nav } from "rsuite";
import { useHistory, useLocation } from "react-router";
import ROUTES from "../config/routes";

const PageSidebar = () => {
	const history = useHistory();
	const location = useLocation();
	const [active, setActive] = useState("");

	useEffect(() => {
		setActive(location.pathname);
	}, [location]);

	useEffect(() => {
		console.log(active);
	}, [active]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				width: "100%",
				justifyContent: "flex-end",
			}}
		>
			<Nav
				style={{
					display: "flex",
					flexDirection: "row",
					lineHeight: "50%",
					alignContent: "center",
					position: "relative",
					left: "50%",
					margin: "0",
					textAlign: "center",
					width: "max-content",
				}}
			>
				{ROUTES.map((route, i) => {
					return (
						<>
							{route.hasOwnProperty("subRoutes") ? (
								<Nav
									eventKey={i + 1}
									title={route.label}
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-evenly",
									}}
								>
									{route.subRoutes.map((subRoute, j) => (
										<Nav.Item
											active={active === subRoute.path}
											eventKey={`${i + 1}-${j + 1}`}
											onClick={() => history.push(subRoute.path)}
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "flex-end",
												paddingRight: "20%",
												paddingLeft: "20%",
											}}
										>
											{subRoute.hasOwnProperty("icon") ? (
												<subRoute.icon />
											) : null}
											{subRoute.label}
										</Nav.Item>
									))}
								</Nav>
							) : (
								<Nav.Item
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
										paddingRight: "20%",
										paddingLeft: "20%",
									}}
									eventKey={i + 1}
									active={active === route.path}
									onSelect={() => history.push(route.path)}
								>
									{route.hasOwnProperty("icon") ? <route.icon /> : null}
									{route.label}
								</Nav.Item>
							)}
						</>
					);
				})}

				{/*
						<Dropdown eventKey="4" title="Settings">
							<Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
							<Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
							<Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
							<Dropdown.Menu eventKey="4-5" title="Custom Action">
								<Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
								<Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown> */}
			</Nav>
		</div>
	);
};

export default PageSidebar;
