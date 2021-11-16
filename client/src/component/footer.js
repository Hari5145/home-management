import React from "react";

const PageFooter = () => {
	return (
		<div
			style={{
				background: "#f5f5f5	",
				height: "5%",
				display: "flex",
				justifyContent: "flex-end",
				width: "100%",
				position: "absolute",
				bottom: "0px",
				color: "black",
			}}
		>
			<a href="#">Privacy</a>
			<p
				style={{
					display: "flex",
					justifyContent: "flex-end",
					marginTop: "15px",
				}}
			>
				Copyright &copy; 2020
			</p>
		</div>
	);
};

export default PageFooter;
