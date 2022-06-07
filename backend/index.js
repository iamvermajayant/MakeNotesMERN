const express = require("express");
const notes = require("./data/Notes.js")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const UserRoutes = require("./Routes/UserRoutes");
const { notFound, errorHandler } = require("./Middleware/errorMiddleware.js");



const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>hello from Jayant</h1>");
});

// app.get("/api/notes/:token", (req, res) => {
//   res.status(200).json({ param: req.params.token}); 
// });

app.get("/api/notes", (req,res)=>{
  res.json(notes);
});

app.use('/api/users', UserRoutes);
app.use(notFound);
app.use(errorHandler);

// app.get("/api/notes/:id", (req,res)=>{
//   const note = notes.find((item) => item._id === req.params.id);
//   res.send(note);
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
