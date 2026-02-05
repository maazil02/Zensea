import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/zensea").then((res) => {
  if (res) {
    console.log("Connected to MongoDB");
  } else {
    console.log("Error connecting to MongoDB");
  }
});

const userReg = mongoose.Schema({
  fullName: String,
  username: String,
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
});

const signup = new mongoose.model("userData", userReg);

const bookingSchema = new mongoose.Schema({
  activityType: String,
  bookingType: String,
  fullName: String,
  username: String,
  email: String,
  nops: Number,
  price: Number,
});
const Booking = mongoose.model("Booking", bookingSchema);

app.get("/", (req, res) => {
  res.send("Server Started and it's Live Now");
});

app.post("/signup", (req, res) => {
  const uData = req.body;

  signup
    .findOne({ username: uData.username })
    .then((resp) => {
      if (resp) {
        res.send({ alert: "Already Added" });
      } else {
        const newuser = signup({
          username: uData.username,
          password: uData.password,
          email: uData.email,
          phoneNumber: uData.phoneNumber,
          fullName: uData.fullName,
          address: uData.address,
        });
        newuser.save().then((response) => {
          if (response) {
            res.send({ message: "Added successfully!" });
          } else {
            res.send({ message: "Error in added, try later" });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// New login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  signup
    .findOne({ username, password })
    .then((resp) => {
      if (resp) {
        res.send({ message: "Login successful" });
      } else {
        res.status(401).send({ message: "Invalid credentials" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Internal Server Error" });
    });
});

app.post("/api/book", async (req, res) => {
  const { activityType, bookingType, fullName, username, email, nops, price } =
    req.body;

  try {
    const booking = await Booking.create({
      activityType,
      bookingType,
      fullName,
      username,
      email,
      nops,
      price,
    });

    res.status(201).json({ alert: "Booking successful!", booking });
  } catch (error) {
    alert("Error booking activity:", error);
    res.status(500).json({ alert: "Internal Server Error" });
  }
});

//fetch user
app.get("/profile", async (req, res) => {
  try {
    const userData = await signup.find();
    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/bookings", async (req, res) => {
  try {
    const userData = await Booking.find();
    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(9898, () => {
  console.log("Server started at port 9898");
});
