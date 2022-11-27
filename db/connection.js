import chalk from 'chalk';
import mongoose from "mongoose";
import "dotenv/config.js";

const { DB_CONNECTION } = process.env

mongoose.connect(
    DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)

mongoose.connection
.on("open", () => chalk.green("DATABASE STATE", "Connection Open"))
.on("close", () => chalk.magenta("DATABASE STATE", "Connection Close"))
.on("error", (error) => chalk.red("DATABASE STATE", error))

export default mongoose