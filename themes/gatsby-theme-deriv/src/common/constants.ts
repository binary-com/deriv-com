const MAP_API_KEY = process.env.GATSBY_MAP_API_KEY
const isBrowser = () => typeof window !== 'undefined'

export const deriv_com_url = 'deriv.com'
export const deriv_me_url = 'deriv.me'
export const deriv_be_url = 'deriv.be'
export const staging_deriv_be_url = 'staging.deriv.be'

export const deriv_com_app_id = 16929
export const deriv_me_app_id = 1411
export const deriv_be_app_id = 30767
export const deriv_ctrader_app_id = 36218
export const deriv_bot_app_id = 19111

const domain_url_pair = {
    [deriv_com_url]: deriv_com_url,
    [deriv_me_url]: deriv_me_url,
    [deriv_be_url]: deriv_be_url,
    [staging_deriv_be_url]: deriv_be_url,
}

export const domains = [
    deriv_com_url,
    deriv_me_url,
    deriv_be_url,
    staging_deriv_be_url,
    'localhost',
    'deriv-com-git-fork',
] //deriv-com-git-fork for vercel server, localhost - for developer mode

const getDomainUrl = (): string =>
    isBrowser() && window.location.hostname in domain_url_pair
        ? domain_url_pair[window.location.hostname]
        : deriv_com_url

const getDomainAppID = () => {
    if (getDomainUrl() === deriv_me_url) return deriv_me_app_id
    else if (getDomainUrl() === deriv_be_url) return deriv_be_app_id
    else return deriv_com_app_id
}
// '-eutestlink-' regex is meant to create test link for eu countries.
// To make them work on your test links you need to include 'eu-' in your branch name.
export const eu_domains = [
    new RegExp(/^eu$/),
    new RegExp(/^staging-eu$/),
    new RegExp(/^beta-eu$/),
    new RegExp(/eu-/),
]
export const eu_urls = ['eu.deriv.com', 'staging-eu.deriv.com', 'beta-eu.deriv.com']

// URL
export const domain_full_url = `https://${getDomainUrl()}`
export const deriv_app_id = getDomainAppID()
export const deriv_app_url = `https://app.${getDomainUrl()}`
export const deriv_api_url = `https://api.${getDomainUrl()}`
export const deriv_bot_app_url = `${deriv_app_url}/bot`
export const deriv_dp2p_app_url = `${deriv_app_url}/cashier/p2p`
export const deriv_life_url = `https://derivlife.com/`
export const academy_url = `https://academy.deriv.com/`
export const derivx_app_url = `${deriv_app_url}/derivx`
export const smarttrader_url = `https://smarttrader.${getDomainUrl()}`
export const traders_hub = 'https://app.deriv.com/'
export const dtrader_url = `https://app.${getDomainUrl()}/dtrader`
export const binary_bot_url = `https://bot.${getDomainUrl()}`
export const blog_url = `https://blog.${deriv_com_url}`
export const deriv_cookie_domain = getDomainUrl()
export const login_url = `https://login.${getDomainUrl()}`
export const affiliate_signup_url = `https://login.${getDomainUrl()}/signup.php`
export const affiliate_signin_url = `https://login.${getDomainUrl()}/signin.php`
export const community_url = `https://community.${deriv_com_url}`
export const oauth_url = `https://oauth.${getDomainUrl()}`
export const deriv_app_login = `${oauth_url}/oauth2/authorize?app_id=${deriv_app_id}`
export const ctrader_login = `${oauth_url}/oauth2/authorize?app_id=${deriv_ctrader_app_id}`
export const whatsapp_url = `https://wa.me/35699578341`

export const besquare_signup_url =
    'https://deriv.zohorecruit.eu/jobs/Careers/47807000013799423/Empty?source=CareerSite '
export const binary_url = 'https://binary.com'
export const brand_name = 'Deriv'
export const deriv_app_languages = ['id', 'es', 'ru', 'fr', 'de', 'ko', 'th', 'it', 'tr', 'vi']
export const smart_trader_languages = [
    'es',
    'fr',
    'id',
    'it',
    'pl',
    'pt',
    'ru',
    'vi',
    'zh_cn',
    'zh_tw',
]
export const affiliate_reset_password_link = 'https://login.deriv.com/password-reset.php'
export const deriv_status_page_url = 'https://deriv.statuspage.io'
export const deriv_bug_bounty_url = 'https://hackerone.com/deriv?type=team'
export const derivx_ios_url = 'https://apps.apple.com/us/app/deriv-x/id1563337503'
export const derivx_android_url = 'https://play.google.com/store/apps/details?id=com.deriv.dx'
export const derivx_huawei_url = 'https://appgallery.cloud.huawei.com/ag/n/app/C104633219'
export const deriv_go_playstore_url = 'https://play.google.com/store/apps/details?id=com.deriv.app'
export const deriv_go_huaweiappgallery_url = 'https://appgallery.huawei.com/app/C103801913'
export const deriv_go_ios_url =
    'https://apps.apple.com/my/app/deriv-go-online-trading-app/id1550561298'
export const dmt5_web_browser_url =
    'https://metatraderweb.app/trade?servers=Deriv-Server-02&trade_server=Deriv-Server-02&login=100648979'
export const deriv_mt5_app_url =
    'https://metatraderweb.app/trade?servers=Deriv-Server-02&trade_server=Deriv-Server-02&login=100648979'
export const dmt5_windows =
    'https://download.mql5.com/cdn/web/deriv.com.limited/mt5/deriv5setup.exe'
export const dmt5_app_gallery_url =
    'https://download.mql5.com/cdn/mobile/mt5/android/app-gallery?hl=en&utm_source=www.metatrader5.com&utm_campaign=install.metaquotes'
export const dmt5_ios_url =
    'https://download.mql5.com/cdn/mobile/mt5/ios?server=Deriv-Demo,Deriv-Server,Deriv-Server-02'
export const dmt5_android_url =
    'https://download.mql5.com/cdn/mobile/mt5/android?server=Deriv-Demo,Deriv-Server,Deriv-Server-02'
export const dmt5_linux_url =
    'https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux'
export const dmt5_macos_url =
    'https://download.mql5.com/cdn/mobile/mt5/ios?hl=en&utm_source=www.metatrader5.com&utm_campaign=install.metaquotes'
export const dmt5_mac_app_url =
    'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg'
export const dmt5_windows_download_url =
    'https://download.mql5.com/cdn/web/deriv.com.limited/mt5/deriv5setup.exe'
export const dmt5_app_gallery =
    'https://download.mql5.com/cdn/mobile/mt5/android/app-gallery?hl=en&utm_source=www.metatrader5.com&utm_campaign=install.metaquotes'
export const dmt5_windows_url =
    'https://download.mql5.com/cdn/web/deriv.com.limited/mt5/deriv5setup.exe'
export const dp2p_google_play_url =
    'https://play.google.com/store/apps/details?id=com.deriv.dp2p&hl=en&gl=US'
export const ctrader_android_url = 'https://play.google.com/store/apps/details?id=com.deriv.ct'

//to be updated with ctrader ios url later
export const ctrader_ios_url =
    'https://download.mql5.com/cdn/mobile/mt5/ios?server=Deriv-Demo,Deriv-Server'
export const how_to_trade_accumulator_video_id = '917007011'
export const what_are_accumulator_video_id = '915479906'
export const ctrader_web_browser_url = 'ct.deriv.com'
export const ctrader_traders_hub_url = ' https://app.deriv.com/'
export const ctrader_windows_url = 'https://getctrader.com/deriv/ctrader-deriv-setup.exe'
export const ctrader_apple_store_url = ' https://apps.apple.com/us/app/deriv-ctrader/id6466996509'
export const ctrader_mac_os_url = 'https://getctradermac.com/deriv/ctrader-deriv-setup.dmg'
export const gtm_test_domain = 'deriv-com.binary.sx'
export const map_api_key = MAP_API_KEY
export const mga_link_url =
    'https://authorisation.mga.org.mt/verification.aspx?lang=EN&company=a5fd1edc-d072-4c26-b0cd-ab3fa0f0cc40&details=1'
export const p2p_playstore_url = 'https://play.google.com/store/apps/details?id=com.deriv.dp2p'
export const p2p_applestore_url = 'https://apps.apple.com/us/app/deriv-dp2p/id1506901451'
export const p2p_huawei_appgallery_url = 'https://appgallery.huawei.com/#/app/C103844755'
export const sample_rate = 25
export const zoho_url = 'https://deriv.zohorecruit.eu'
export const zoho_jobs_url = 'https://deriv.zohorecruit.eu/jobs/'
export const zoho_career_url = 'https://deriv.zohorecruit.eu/jobs/Careers'
export const live_chat_redirection_link = `?is_livechat_open=true`
export const localized_link_url = Object.freeze({
    affiliate_sign_in: affiliate_signin_url,
    affiliate_sign_up: affiliate_signup_url,
    binary: binary_url,
    binary_bot: binary_bot_url,
    blog: blog_url,
    community: community_url,
    derivx: derivx_app_url,
    deriv_app_login,
    api: deriv_api_url,
    dbot: deriv_bot_app_url,
    deriv_app: deriv_app_url,
    mt5: deriv_mt5_app_url,
    smart_trader: smarttrader_url,
    zoho: zoho_url,
    domain_full_url: domain_full_url,
    derivlife: deriv_life_url,
    academy: academy_url,
    'terms_and_conditions/#clients': domain_full_url,
    'terms_and_conditions/#business-partners': domain_full_url,
})
export const default_server_url = 'green.derivws.com'

export const live_chat_key = 'live_chat_redirection'

export const reddit_url = 'https://www.reddit.com/user/Deriv_official/'
export const telegram_url = 'https://t.me/derivdotcomofficial'
export const youtube_url = 'https://www.youtube.com/@deriv'
export const contact_us_form_post_data = 'https://formkeep.com/f/7f4b8b55f10f'

export const cookie_key = 'browser_update_alert_modal_shown'
export const browsers_minimum_required_version = {
    Chrome: 72,
    Chromium: 66,
    'Mail.RU_Bot': 62,
    Maxthon: 6,
    'MIUI Browser': 10,
    'Mobile Safari': 15,
    Opera: 58,
    'Samsung Browser': 10,
    UCBrowser: 13,
}
export const bannerTypes = {
    cookieBanner: 'cookie-banner',
    outdatedBrowserBanner: 'outdated-browser-banner',
}

export const firebaseConfig = {
    databaseURL: 'https://deriv-static-pricingfeedv2.firebaseio.com',
}
