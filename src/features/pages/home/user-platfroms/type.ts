export type FilterKeyType<
    T extends Record<number, Record<string, unknown>>,
    K extends keyof T[number],
> = T[number][K]

export type MakeWritable<T> = {
    -readonly [K in keyof T]: T[K]
}
