import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Memberdata from "./memberdata";
import Carousel from "rsuite/Carousel";
import Typography from "@material-ui/core/Typography";
import { MEMBERS } from "../data/members";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";

const useStyles = makeStyles({
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

const Hari = () => {
	const data = MEMBERS["hari"];
	const [placement] = React.useState("bottom");
	const [shape] = React.useState("bar");
	const classes = useStyles();
	return (
		<>
			<Card className={classes.root}>
				<CardContent>
					<Fab
						color="secondary"
						style={{
							display: "flex",
							position: "relative",
							left: "925px",
							top: "5px",
							marginBottom: "-55px",
						}}
					>
						<EditIcon />
					</Fab>
					<Typography
						className={classes.title}
						color="textSecondary"
						style={{ marginBottom: "40px" }}
						gutterBottom
					>
						{data.name}
					</Typography>
					<Typography className={classes.info} color="textSecondary">
						Info:
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						Floor no: {data.floor} <br />
						Facing: {data.door_facing} <br />
						Type : {data.rent_type} <br />
						Period: {`${data.tenure} months`}
					</Typography>
					<Typography className={classes.info} color="textSecondary">
						Payment Details:
					</Typography>
					<div className={classes.card} style={{ margin: "-20px" }}>
						<Carousel
							className="custom-slider"
							key={{ placement }}
							placement={placement}
							shape={shape}
							style={{
								width: "500px",
								height: "50%",
								margin: "10px",
								borderRadius: "10px",
								height: "170px",
								padding: "10px",
							}}
						>
							{data.bills.map((bill, index) => {
								return (
									<div
										style={{
											backgroundImage:
												"src=https://via.placeholder.com/600x250/8f8e94/FFFFFF?",
										}}
										key={`carousal-${index}`}
									>
										<Memberdata data={bill} />
									</div>
								);
							})}
						</Carousel>
					</div>
					<div style={{ position: "relative", bottom: "40px", left: "910px" }}>
						<Button
							variant="contained"
							size="large"
							style={{ borderRadius: "50px" }}
						>
							<GetAppRoundedIcon />
						</Button>
					</div>
				</CardContent>
			</Card>
		</>
	);
};

export default Hari;
