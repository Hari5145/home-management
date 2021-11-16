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

const NewEmployee = ({ formValue, onOpen, onClose, onSubmit }) => {
	const classes = useStyles();
	const [form, setForm] = useState({
		name: "",
		location: "",
		expense: "",
		income: "",
	});
	const [open, setOpen] = useState(null);

	useEffect(() => {
		setForm(formValue);
	}, [formValue]);
	useEffect(() => {
		setOpen(onOpen);
	}, [onOpen]);

	return (
		<Modal open={open} onClose={onClose}>
			<Modal.Header>
				<Modal.Title>New Employee</Modal.Title>
			</Modal.Header>
			<Modal.Body className={classes.modal}>
				<Form layout="horizontal" onChange={setForm} formValue={form}>
					<Form.Group controlId="name">
						<Form.ControlLabel>Username</Form.ControlLabel>
						<Form.Control name="name" />
						<Form.HelpText>Username is required</Form.HelpText>
					</Form.Group>

					<Form.Group controlId="location">
						<Form.ControlLabel>Location</Form.ControlLabel>
						<Form.Control name="location" />
					</Form.Group>

					<Form.Group controlId="expense">
						<Form.ControlLabel>Expense</Form.ControlLabel>
						<Form.Control name="expense" />
					</Form.Group>

					<Form.Group controlId="income">
						<Form.ControlLabel>Income</Form.ControlLabel>
						<Form.Control name="income" />
					</Form.Group>
					<Form.Group
						style={{
							display: "grid",
						}}
					>
						<Button
							onClick={() => onSubmit(form)}
							style={{ background: "#73D7E6", color: "#4C5159" }}
						>
							Ok
						</Button>
						<Button
							onClick={onClose}
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

export default NewEmployee;
