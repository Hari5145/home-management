import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	btn: {
		backgroundColor: "#353535",
		borderRadius: "8px",
		minWidth: "5rem",
		marginRight: "1rem",
		color: "white",
		marginTop: "1%",
	},
});

const Header = () => {
	const classe = useStyles();
	return (
		<div
			style={{
				background: "transparent",
				display: "flex",
				justifyContent: "space-between",
				width: "100%",
			}}
		>
			<div style={{ fontWeight: "600" }}>Hello</div>
			<div
				style={{
					display: "flex",
					lineHeight: "2rem",
				}}
			>
				{" "}
				<button className={classe.btn}>Home</button>
				<button className={classe.btn}>News</button>
				<button className={classe.btn}>Solutions</button>
				<button className={classe.btn}>Products</button>
				<button className={classe.btn}>About</button>
			</div>
		</div>
	);
};

export default Header;
