import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 250,
		width: 550,
		margin: 10,
	},
}));

const Families = () => {
	const classes = useStyles();

	const familyMembers = [
		{
			name: "K Prasad",
			members: 4,
			duration: "Three Years",
		},
		{
			name: "Anand",
			members: 3,
			duration: "2 Years",
		},
		{
			name: "Hari",
			members: 1,
			duration: "2 Months",
		},
		{
			name: "Raghul",
			members: 2,
			duration: "6 Months",
		},
	];

	return (
		<Grid
			container
			className={classes.root}
			style={{ paddingLeft: "70px", paddingTop: "23px" }}
		>
			<Grid item xs={12}>
				<Grid container>
					{familyMembers.map(tenant => (
						<Grid key={tenant} item>
							<Paper
								className={classes.paper}
								style={{
									background: "#DBCFD2",
									borderRadius: "5px",
									padding: "5px",
								}}
							>
								<div style={{ display: "flex", justifyContent: "flex-end" }}>
									<DeleteIcon />
								</div>{" "}
								<div
									style={{
										fontSize: "40px",
										display: "grid",
										justifyItems: "center",
										paddingTop: "10px",
									}}
								>
									{`Name: ${tenant.name}`}
									<div
										style={{
											fontSize: "40px",
											display: "grid",
											justifyItems: "center",
										}}
									>
										{`Members: ${tenant.members}`}
										<div
											style={{
												fontSize: "40px",
												display: "grid",
												justifyItems: "center",
											}}
										>{`Duration: ${tenant.duration}`}</div>
									</div>
								</div>{" "}
								<Button style={{ background: "#F29595" }}>More info...</Button>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Families;
