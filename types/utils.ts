export type ExtractPromiseType<T> = T extends Promise<infer U> ? U : never;
