// import express from "express"; // ES Modules style
// import { getUser } from "./user.js";

// const app = express();
// const PORT = 3000;

// // First endpoint: GET /users/:id
// app.get("/users/:id", (req, res) => {
// 	const userId = Number(req.params.id); // get id from URL
// 	const user = getUser(userId); // get the user
// 	if (!user) {
// 		return res.status(404).json({ error: "User not found" });
// 	}
// 	res.json(user); // send user as JSON
// });

// // Start server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express"; // ES Modules style

const app = express();
const PORT = 3000;
app.use(express.json());

// This is the first path of the URL
app.get("/", (req, res) => {
	console.log("Testing something");
	res.send(`Server running at http://localhost:${PORT}`);
});

app.get("/ping", (req, res) => {
	res.json({ message: "pong" });
});

app.get("/status", (req, res) => {
	res.json({
		status: "ok",
		uptime: "running",
		version: "1.0.0",
	});
});

// const notNumber = (x) => {
// 	if

// }

app.get("/square/:number", (req, res) => {
	const num = Number(req.params.number);
	if (isNaN(num)) {
		res.status(400).json({ error: "Not a number" });
	}
	res.json({
		number: num,
		square: num * num,
	});
});

app.post("/users", (req, res) => {
	console.log("POST /users - body:", req.body);
	const userData = req.body;

	res.json({
		message: "Data received",
		data: userData,
	});
});

// Query params
app.get("/users", (req, res) => {
	const { age, country } = req.query;

	res.json({
		message: "message received",
		age: age,
		country: country,
	});
});

// Path params
app.get("/status/:num", (req, res) => {
	const x = Number(req.params.num);

	if (isNaN(x)) {
		res.status(400).json({ error: "Not a number" });
	}
	res.json({
		num: x,
		addition: x + x,
	});
});

const validate = (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ error: "Enter something valid bitch" });
	}

	if (password.length < 6) {
		return res.status(400).json({ error: "Enter a valid password bitch" });
	}

	next();
};

app.post("/logins", validate, (req, res) => {
	const { email, password } = req.body;

	res.json({
		email: email,
		password: password,
	});
});

// A list of users (in-memory array)

const users = [
	{ id: 1, name: "Alice", email: "alice@example.com" },
	{ id: 2, name: "Bob", email: "bob@example.com" },
	{ id: 3, name: "Charlie", email: "charlie@example.com" },
];

const p = {
  "id": 1,
  "title": "Test note",
  "content": "Testing ID logic",
  "createdAt": "..."
}



app.get("/reads", (req, res) => {
	res.json(users); // send the users array as JSON
});

// Where the server listens for how request and port 3000
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
