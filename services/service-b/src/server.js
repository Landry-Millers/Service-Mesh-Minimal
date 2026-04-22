require("dotenv").config();
const app = require("./app");

const port = Number(process.env.PORT || 3002);
app.listen(port, () => {
  console.log(`Service B listening on port ${port}`);
});
