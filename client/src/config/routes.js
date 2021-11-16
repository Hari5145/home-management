import PageContent from "../component/content";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Prasad from "../members/prasad";
import Anand from "../members/anand";
import Hari from "../members/hari";
import Raghul from "../members/raghul";
import Families from "../component/families";
import Dashboards from "../component/dashboard";

const ROUTES = [
	{
		label: "DashBoard",
		component: Dashboards,
		path: "/component/dashboard",
	},
	{ label: "Contents", component: PageContent, path: "/component/content" },
	{
		label: "Families",
		component: Families,
		path: "/component/families",
	},

	
	{
		label: "Advanced",
		path: "/advanced",



		subRoutes: [
			{
				label: "Kavitha Prasad",
				component: Prasad,
				path: "/advanced/prasad",
				icon: AccountCircleIcon,
			},
			{
				label: "Anand",
				component: Anand,
				path: "/advanced/anand",
				icon: AccountCircleIcon,
			},
			{
				label: "Hari",
				component: Hari,
				path: "/advanced/hari",
				icon: AccountCircleIcon,
			},
			{
				label: "Raghul",
				component: Raghul,
				path: "/advanced/raghul",
				icon: AccountCircleIcon,
			},
		],
	},
];

export default ROUTES;
