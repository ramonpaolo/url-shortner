declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGODB_URL: string;
            
            PORT: number;

            HOST_REDIS: string;
            PORT_REDIS: number;
            PASSWORD_REDIS: string;

            REDISCLOUD_URL: string;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
