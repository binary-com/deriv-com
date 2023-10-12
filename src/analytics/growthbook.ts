import { GrowthBook } from '@growthbook/growthbook-react'
import * as RudderAnalytics from 'rudder-sdk-js'

export type GrowthBookType = GrowthBook

export type AttributesTypes = {
    id?: string
    country: string
    user_language: string
    device_language: string
    device_type: string
}
export class Growthbook {
    GrowthBook
    private static _instance: Growthbook

    // we have to pass settings due the specific framework implementation
    constructor(clientKey: string, decryptionKey: string, enableDevMode: boolean) {
        this.GrowthBook = new GrowthBook<GrowthBook>({
            apiHost: 'https://cdn.growthbook.io',
            clientKey,
            decryptionKey,
            enableDevMode,
            subscribeToChanges: true,
            trackingCallback: (experiment, result) => {
                RudderAnalytics.track('experiment_viewed', {
                    experimentId: experiment.key,
                    variationId: result.variationId,
                })
            },
        })
        this.init()
    }

    // for make instance by singleton
    public static getGrowthBookInstance(
        clientKey: string,
        decryptionKey: string,
        enableDevMode: boolean,
    ) {
        if (!Growthbook._instance) {
            Growthbook._instance = new Growthbook(clientKey, decryptionKey, enableDevMode)
            return Growthbook._instance
        }
        return Growthbook._instance
    }

    setAttributes({ id, country, user_language, device_language, device_type }: AttributesTypes) {
        return this.GrowthBook.setAttributes({
            id,
            country,
            user_language,
            device_language,
            device_type,
        })
    }
    getFeatureState<K>(id: K) {
        return this.GrowthBook.evalFeature(id)
    }
    getFeatureValue<K>(key: K, defaultValue: string) {
        return this.GrowthBook.getFeatureValue(key, defaultValue)
    }
    setUrl(href: string) {
        return this.GrowthBook.setURL(href)
    }
    init() {
        return this.GrowthBook.loadFeatures().catch((err) => console.error(err))
    }
}
