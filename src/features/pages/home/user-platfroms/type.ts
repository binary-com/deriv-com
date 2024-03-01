export type MakeWritable<T> = {
    -readonly [K in keyof T]: T[K]
}

export type PlatformTab = {
    content: React.ReactNode
    tabId: 'All' | 'CFDs' | 'Options' | 'Bots' | 'Social'
}

export type FilterKeyType = Omit<PlatformTab['tabId'], 'All'>
