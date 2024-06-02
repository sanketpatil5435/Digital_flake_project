const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

const database = require("./config/database");
const userRoutes = require("./routes/user");
const categoryroutes = require("./routes/category");
const subcategoryeoutes = require("./routes/subcategory");
const productroutes = require("./routes/product");
const { cloudinaryConnect } = require("./config/cloudinary");

// Loading environment variables from .env file
dotenv.config();

// Setting up port number
const PORT = process.env.PORT || 4000;
// Connecting to database
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Connecting to cloudinary
cloudinaryConnect();

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/category", categoryroutes);
app.use("/api/v1/subcategory", subcategoryeoutes);
app.use("/api/v1/product", productroutes);

// Testing the server
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});

// Listening to the server
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});

// End of code.
