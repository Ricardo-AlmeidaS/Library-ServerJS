import "dotenv/config";
import app from "./src/app.js";

<<<<<<< HEAD
const port = 3000;

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
=======
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
>>>>>>> 3e921cc0ea20296b285a5910c7513c7f0ebed0af
});
