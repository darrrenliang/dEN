import { createServer } from "./server";
import * as dotenv from 'dotenv';
import { AppConfig } from './types/appConfig'

// load env config
dotenv.config();

// get port from env
const port = process.env.SERVER_PORT || '8181' as string;

const appConfig: AppConfig = {
    APP_SERVER_PORT: parseInt(port)
}
// create an api server
const server = createServer(appConfig);

export { server }
