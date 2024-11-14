import { config } from "dotenv";
import process from "process";

export default class Config {
    static #env: string | undefined = process.env.NODE_ENV;

    static load: () => void = () => {
        config({
            path: `.env${Config.#env !== `prod` ? `.${Config.#env}` : ``}`,
        });
    };
}
