import { resources, defaultNS } from '../src/components/localization/config'

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS
        resources: typeof resources['en']
    }
}
