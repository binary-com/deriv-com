import { resources, defaultNS } from './components/localization/config'

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS
        resources: typeof resources['en']
    }
}
