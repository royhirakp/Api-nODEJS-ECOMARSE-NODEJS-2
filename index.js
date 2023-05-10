// const app = express();
const port = 30;
const app = require("./app");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
