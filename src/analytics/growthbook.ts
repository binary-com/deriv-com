import { GrowthBook, useFeatureIsOn } from '@growthbook/growthbook-react'
import { WidenPrimitives } from '@growthbook/growthbook/src/types/growthbook'
import * as RudderAnalytics from 'rudder-sdk-js'

export type GrowthBookTypes = GrowthBook

export type AttributesTypes = {
    id: string
    country: string
    user_language: string
    device_language: string
    device_type: string
}
export class Growthbook<AppFeatures extends Record<string, any> = Record<string, any>> {
    GrowthBook
    private static _instance: Growthbook

    // we have to pass settings due the specific framework implementation
    constructor(growthbook_settings: any) {
        this.GrowthBook = new GrowthBook<GrowthBook>(growthbook_settings)
        this.init()
    }

    // for make instance by singleton
    public static getGrowthBookInstance(
        clientKey: string,
        decryptionKey: string,
        NODE_ENV: string,
    ) {
        if (!Growthbook._instance) {
            Growthbook._instance = new Growthbook({
                apiHost: 'https://cdn.growthbook.io',
                clientKey,
                decryptionKey,
                enableDevMode: NODE_ENV !== 'production',
                subscribeToChanges: true,
                trackingCallback: (experiment: any, result: any) => {
                    RudderAnalytics.track('experiment_viewed', {
                        experimentId: experiment.key,
                        variationId: result.variationId,
                    })
                },
                // use it for development and testing purpose
                onFeatureUsage: (featureKey, result) => {
                    console.log('feature', featureKey, 'has value', result.value)
                },
            })
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
