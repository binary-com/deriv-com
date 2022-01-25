export type FormikErrors<Values> = {
    [K in keyof Values]?: Values[K] extends string[]
        ? Values[K][number] extends Record<string, unknown>
            ? FormikErrors<Values[K][number]>[] | string | string[]
            : string | string[]
        : Values[K] extends Record<string, unknown>
        ? FormikErrors<Values[K]>
        : string
}

export type FormikTouched<Values> = {
    [K in keyof Values]?: Values[K] extends string[]
        ? Values[K][number] extends Record<string, unknown>
            ? FormikTouched<Values[K][number]>[]
            : boolean
        : Values[K] extends Record<string, unknown>
        ? FormikTouched<Values[K]>
        : boolean
}
