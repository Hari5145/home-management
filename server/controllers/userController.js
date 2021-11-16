import UserModal from "../modals/userModal.js";

export const userController = {
	createuser: async (req, res) => {
		const body = req.body;
		const newUser = new UserModal(body);
		try {
			await newUser.save();
			res.status(201).json(newUser);
		} catch (err) {
			res.status(409).json({ message: err.message });
		}
	},
	getallusers: async (req, res) => {
		try {
			const users = await UserModal.find();
			res.status(200).json(users);
		} catch (err) {
			res.status(404).json({ message: err.message });
		}
	},
};
