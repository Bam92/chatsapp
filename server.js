// server.js
import chalk from 'chalk';
import "dotenv/config.js";


import app from "./app.js"
const { PORT } = process.env


app.listen(PORT, () => console.log(chalk.green(`The server is listening on port ${PORT}`)))