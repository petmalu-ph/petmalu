import ServerConfig from "../interfaces/serverConfig.interface";

let config: ServerConfig = {
    port: 3000,
    enableCORS: true,
    origin: 'http://localhost:8080'
}

export default config;