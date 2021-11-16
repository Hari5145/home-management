import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String },
	floorNumber: { type: Number },
	rentalType: { type: String, default: "lease" },
	tenure: { type: String },
	agreementDate: { type: Date },
	expiryDate: { type: Date },
	bills: { type: Array, default: [] },
	dues: { type: Array, default: [] },
	createdAt: { type: Date, default: new Date() },
});

const UserModal = mongoose.model("user", userSchema);

export default UserModal;
