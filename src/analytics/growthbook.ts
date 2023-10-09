import { GrowthBook } from '@growthbook/growthbook-react'
import * as RudderAnalytics from 'rudder-sdk-js'

export type GrowthBookTypes = GrowthBook

type AttributesTypes = {
    id: string
    country: string
    user_language: string
    device_language: string
    device_type: string
}

const gb_setup = {
    apiHost: 'https://cdn.growthbook.io',
    clientKey: 'sdk-jJ33wcv3oAB2xvxM',
    decryptionKey: 'xI1bW4LrYj0qntz+fbBfJg==',
    enableDevMode: process.env.NODE_ENV !== 'production',
    subscribeToChanges: true,
    trackingCallback: (experiment, result) => {
        RudderAnalytics.track('experiment_viewed', {
            experimentId: experiment.key,
            variationId: result.variationId,
        })
    },
    // use it for development and testing purpose
    onFeatureUsage: (featureKey, result) => {
        console.log('feature', featureKey, 'has value', result.value)
    },
}
export class Growthbook {
    GrowthBook
    private static _instance: Growthbook

    constructor(gb_setup) {
        this.GrowthBook = new GrowthBook(gb_setup)
        this.init()
    }

    // for make instance by singleton
    public static getInstance() {
        if (!Growthbook._instance) {
            Growthbook._instance = new Growthbook(gb_setup)
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

    useFeatureIsOn(id: string): boolean {
        return this.GrowthBook.isOn(id)
    }
    getFeatureValue(id: string, fallback: string) {
        return this.GrowthBook.getFeatureValue(id, fallback)
    }

    init() {
        this.GrowthBook.loadFeatures().catch((err) => console.error(err))
    }
}
