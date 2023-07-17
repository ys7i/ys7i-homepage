declare module "process" {
  global {
    namespace ImportMetaEnv {
      interface ProcessEnv {
        NODE_ENV: string;
        CONTENTFUL_ACCESS_TOKEN: string;
        CONTENTFUL_SPACE_ID: string;
        AWS_REGION: string;
        AWS_ACCESS_KEY_ID: string;
        AWS_SECRET_ACCESS_KEY: string;
        FROM_MAIL: string;
        TO_MAIL: string;
      }
    }
  }
}
