import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import TableCell from "@material-ui/core/TableCell";
import { TableContainer, TableHead, TableBody, Paper, Table } from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import Switch from "@material-ui/core/Switch";
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles({
	root: { width: "100%" },
	container: { maxHeight: "100%" },
	
});

function NewTable(props) {
	const classes = useStyles();
	const [rows, setRows] = useState([]);
	const [headers, setHeaders] = useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	useEffect(() => {
		console.log(props.rows);
		setRows(props.rows);
	}, [props.rows]);

	useEffect(() => {
		setHeaders(props.headers);
	}, [props.headers]);

	const handleToggle = (id, event) => {
		// setRows(rows.map(row => (row.id === id ? { ...row, status: event } : row)));
		setRows(
			rows.map(row => {
				if (row.id === id) {
					return { ...row, status: event };
				} else {
					return row;
				}
			})
		);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper className={classes.root} >
			<TableContainer className={classes.container} >
				<Table>
					<TableHead>
						<TableRow>
							{headers.map(emp => (
								<TableCell key={emp.id} style={{ minWidth: emp.minWidth }}>
									{emp.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row, i) => {
								return (
									<TableRow key={`row-${i}`}>
										{headers.map(emp => (
											<TableCell
												key={emp.id}
												style={{ minWidth: emp.minWidth }}
											>
												{emp.id === "status" ? (
													<Switch
														onChange={e =>
															handleToggle(row[headers[0].id], e.target.checked)
														}
														checked={row[emp.id]}
													/>
												) : (
													row[emp.id]
												)}
											</TableCell>
										))}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
				<TablePagination
					rowsPerPageOptions={[5, 10]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</TableContainer>
		</Paper>
	);
}
export default NewTable;
