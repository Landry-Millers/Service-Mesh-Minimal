require("dotenv").config();
const config = require("./config");
const { app } = require("./app");

app.listen(config.port, () => {
  console.log(`Gateway listening on port ${config.port}`);
});
