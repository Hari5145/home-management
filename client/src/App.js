import React from "react";
import { Container, Content, Footer } from "rsuite";
import Header from "./component/header";
import PageFooter from "./component/footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from "./config/routes";

// const useStyles = makeStyles(theme => ({
// 	modal: {
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// 	paper: {
// 		backgroundColor: theme.palette.background.paper,
// 		border: "2px solid #000",
// 		boxShadow: theme.shadows[5],
// 		padding: theme.spacing(2, 4, 3),
// 	},
// }));

function App() {
	// const classes = useStyles();

	return (
		<>
			<Router>
				<Header />
				<Container>
					<Content>
						<Switch>
							{ROUTES.map(route =>
								route.hasOwnProperty("subRoutes") ? (
									route.subRoutes.map(subRoute => {
										return (
											<Route
												exact
												path={subRoute.path}
												component={subRoute.component}
											/>
										);
									})
								) : (
									<Route exact path={route.path} component={route.component} />
								)
							)}
						</Switch>
					</Content>
				</Container>
				<Footer>
					<PageFooter />
				</Footer>
			</Router>
		</>
	);
}

export default App;
