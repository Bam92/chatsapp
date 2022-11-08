// server.js
import chalk from 'chalk';

import app from "./app.js"

const port = 4001

app.listen(port, () => console.log(`The server is listening on port ${chalk.green(port)}`))