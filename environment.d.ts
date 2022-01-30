declare global {
    namespace NodeJS {
      interface ProcessEnv {
        MONGODB_URL: string;
        NODE_ENV: 'development' | 'production';
        PORT?: number;
        PWD: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}