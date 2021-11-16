import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

let styles = makeStyles({
	root: {
		minWidth: 275,
		width: "80%",
		margin: "40px",
		marginLeft: "100px",
		height: "80%",
	},
	bullet: {
		display: "inline-block",

		transform: "scale(0.8)",
	},
	title: {
		fontSize: 50,
		display: "flex",
		justifyContent: "center",
	},
	pos: {
		marginBottom: 12,
		fontSize: 18,
	},
	info: {
		fontSize: 25,
		color: "black",
	},
	card: {
		padding: "8px 12px",
		display: "inline-block",
		verticalAlign: "middle",
	},
});

const DATA = [
	{
		month: "January",
		electricity_bill: "700",
		water_bill: "1000",
		members: "For 4 members",
		dues: "No Dues",
	},
];

const Memberdata = ({ data }) => {
	const classes = styles();
	return (
		<div>
			<Typography className={classes.info} color="textSecondary">
				Month: {data.month}
			</Typography>{" "}
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<Typography className={classes.pos} style={{ color: "black" }}>
						Electricity Bill:- Rs.{" "}
						<span style={{ color: "white" }}>{data.electricity_bill}</span>
					</Typography>
					<Typography className={classes.pos} style={{ color: "black" }}>
						Water Bill:- Rs.
						<span style={{ color: "white" }}>
							{data.water_bill}
							<p style={{ color: "white", fontSize: "small" }}>
								{`(For ${data.no_of_members} members)`}
							</p>
						</span>
					</Typography>
				</div>
				<div>
					<Typography className={classes.pos} style={{ color: "black" }}>
						Dues:- Rs. <span style={{ color: "white" }}>{data.dues}</span>
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default Memberdata;
