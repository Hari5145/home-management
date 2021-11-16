import React, { useState, useEffect } from "react";
import { Form, Modal, Button } from "rsuite";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	modal: {
		display: "absolute",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const Editmodal = props => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
		props.onClose();
	};

	useEffect(() => {
		if (props.show !== open) {
			setOpen(props.show);
		}
	}, [props.show]);

	return (
		<Modal open={open} onClose={handleClose} onHide={handleClose}>
			<Modal.Header>
				<Modal.Title>Edit Details</Modal.Title>
			</Modal.Header>
			<Modal.Body className={classes.modal}>
				<Form layout="horizontal">
					<Form.Group controlId="month">
						<Form.ControlLabel>Month</Form.ControlLabel>
						<Form.Control name="month" />
					</Form.Group>

					<Form.Group controlId="e_bill">
						<Form.ControlLabel>Electricity Bill</Form.ControlLabel>
						<Form.Control bill="e_bill" />
					</Form.Group>

					<Form.Group controlId="w_bill">
						<Form.ControlLabel>Water Bill</Form.ControlLabel>
						<Form.Control name="w_bill" />
					</Form.Group>

					<Form.Group controlId="dues">
						<Form.ControlLabel>Dues</Form.ControlLabel>
						<Form.Control name="dues" />
					</Form.Group>

					<Form.Group controlId="members">
						<Form.ControlLabel>Members</Form.ControlLabel>
						<Form.Control name="members" />
					</Form.Group>
					<Form.Group
						style={{
							display: "grid",
						}}
					>
						<Button
							onClick={handleClose}
							style={{ background: "#73D7E6", color: "#4C5159" }}
						>
							Ok
						</Button>
						<Button
							onClick={handleClose}
							appearance="subtle"
							style={{ background: "#D9E3F0", color: "#4C5159" }}
						>
							Cancel
						</Button>
					</Form.Group>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default Editmodal;
