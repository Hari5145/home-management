import React from "react";

import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

const lineDatas = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
	datasets: [
		{
			label: "Building Expenses",
			data: [500, 1080, 300, 50, 220, 310],
			fill: false,
			backgroundColor: "yellow",
			borderColor: "black",
		},
	],
};

const data = {
	labels: ["Prasad", "Anand", "Hari", "Raghul"],
	datasets: [
		{
			label: "Per Families",
			data: [12, 19, 3, 5],
			fill: false,

			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
			],
			borderWidth: 1,
		},
	],
};

const options = {
	scales: {
		y: {
			beginAtZero: true,
		},
	},
};

const LineChart = () => (
	<>
		<div style={{ display: "flex", marginTop: "20px", marginLeft: "-20px" }}>
			<div
				style={{
					// border: "transparant",
					// background: "lightgrey",
					// borderRadius: "10px",
					marginTop: "20px",
					marginLeft: "20px",
					width: "30%",
				}}
			>
				<Line
					data={lineDatas}
					options={options}
					style={{
						resize: "both",
						overflow: "auto",
						maxHeight: "50vh",
						maxWidth: "80vw",
						paddingLeft: "60px",
					}}
				/>
			</div>
			<Doughnut
				data={data}
				style={{
					resize: "both",
					overflow: "auto",
					maxHeight: "30vh",
					maxWidth: "50vw",
					paddingLeft: "60px",
				}}
			/>
		</div>
	</>
);

export default LineChart;
