import { GrowthBook, useFeatureIsOn } from '@growthbook/growthbook-react'
import { FeatureResult, WidenPrimitives } from '@growthbook/growthbook/src/types/growthbook'
import * as RudderAnalytics from 'rudder-sdk-js'

export type GrowthBookType = GrowthBook

export type AttributesTypes = {
    id?: string
    country: string
    user_language: string
    device_language: string
    device_type: string
}
export class Growthbook<AppFeatures extends Record<string, any> = Record<string, any>> {
    GrowthBook
    private static _instance: Growthbook

    // we have to pass settings due the specific framework implementation
    constructor(clientKey: string, decryptionKey: string, NODE_ENV: string) {
        this.GrowthBook = new GrowthBook<GrowthBook>({
            apiHost: 'https://cdn.growthbook.io',
            clientKey: clientKey,
            decryptionKey: decryptionKey,
            // enableDevMode: process.env.NODE_ENV !== 'production',
            enableDevMode: true,
            subscribeToChanges: true,
            trackingCallback: (experiment, result) => {
                RudderAnalytics.track('experiment_viewed', {
                    experimentId: experiment.key,
                    variationId: result.variationId,
                })
            },
            // use it for development and testing purpose
            onFeatureUsage: (featureKey: string, result: FeatureResult<any>) => {
                console.log('feature', featureKey, 'has value', result.value)
            },
        })
        this.init()
    }

    // for make instance by singleton
    public static getGrowthBookInstance(
        clientKey: string,
        decryptionKey: string,
        NODE_ENV: string,
    ) {
        if (!Growthbook._instance) {
            Growthbook._instance = new Growthbook(clientKey, decryptionKey, NODE_ENV)
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
    getFeatureIsOn<K extends string & keyof AppFeatures = string>(id: K): boolean {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useFeatureIsOn(id)
    }
    getFeatureValue<V extends AppFeatures[K], K extends string & keyof AppFeatures = string>(
        key: K,
        defaultValue: V,
    ): WidenPrimitives<V> {
        return this.GrowthBook.getFeatureValue(key, defaultValue)
    }
    init() {
        this.GrowthBook.loadFeatures().catch((err) => console.error(err))
    }
}
