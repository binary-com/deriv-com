import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, Database, type DatabaseReference } from 'firebase/database'
import featuresConfig from '../../static/appConfig'

const thirdPartyFlagsConfig = {
    databaseURL: 'https://deriv-static-staging.firebaseio.com',
}

function getThirdPartyFlags() {
    const app = initializeApp(thirdPartyFlagsConfig, 'thirdPartyFlagsConfig')
    const db = getDatabase(app)
    // console.log('==>', db)
    let fetchedData = featuresConfig
    const starCountRef = ref(db, 'remote_config/deriv-com')
    const flagsData = onValue(
        starCountRef,
        (snapshot) => {
            fetchedData = snapshot.val()
        },
        (error) => {
            console.log(error)
            fetchedData = featuresConfig
        },
    )
    return fetchedData
}
// getThirdPartyFlags()
console.log('====>')

export { getThirdPartyFlags }
