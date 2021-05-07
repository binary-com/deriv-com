const isBrowser = () => typeof window !== 'undefined'

const deriv_com_url = 'deriv.com'
const deriv_me_url = 'deriv.me'

const deriv_com_app_id = 16929
const deriv_me_app_id = 1411

const supported_domains = [deriv_com_url, deriv_me_url]
const domain_url =
    isBrowser() && supported_domains.includes(window.location.hostname)
        ? window.location.hostname
        : deriv_com_url

export const deriv_app_id = domain_url === deriv_com_url ? deriv_com_app_id : deriv_me_app_id
export const deriv_app_url = `https://app.${domain_url}`
export const deriv_bot_app_url = `https://app.${domain_url}/bot`
export const deriv_dp2p_app_url = `https://app.${domain_url}/cashier/p2p`
export const deriv_developer_url = `https://developers.${domain_url}`
export const smarttrader_url = `https://smarttrader.${domain_url}`
export const blog_url = `https://blog.${deriv_com_url}`
export const deriv_cookie_domain = domain_url
export const login_url = `https://login.${domain_url}`
export const affiliate_signup_url = `https://login.${domain_url}/signup.php`
export const affiliate_signin_url = `https://login.${domain_url}/signin.php`
export const community_url = `https://community.${deriv_com_url}`
export const oauth_url = `https://oauth.${domain_url}`

export const application_id = 'f0aef779-d9ec-4517-807e-a84c683c4265'
export const besquare_signup_url =
    'https://deriv.zohorecruit.com/jobs/Careers/590522000011882533/BeSquare-Graduate-Trainee?source=CareerSite'
export const binary_url = 'https://binary.com'
export const brand_name = 'Deriv'
export const cfd_warning_height = {
    desktop: 8,
    tablet: 12,
}
export const client_token = 'pubc42fda54523c5fb23c564e3d8bceae88'
export const deriv_app_languages = ['id', 'pt', 'es']
export const deriv_status_page_url = 'https://deriv.statuspage.io'
export const dmt5_ios_url =
    'https://download.mql5.com/cdn/mobile/mt5/ios?server=Deriv-Demo,Deriv-Server'
export const dmt5_android_url =
    'https://download.mql5.com/cdn/mobile/mt5/android?server=Deriv-Demo,Deriv-Server'
export const dmt5_linux_url =
    'https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux'
export const dmt5_macos_url =
    'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg'
export const dmt5_windows_url =
    'https://download.mql5.com/cdn/web/deriv.limited/mt5/deriv5setup.exe'
export const dp2p_google_play_url =
    'https://play.google.com/store/apps/details?id=com.deriv.dp2p&hl=en&gl=US'
export const gtm_test_domain = 'deriv-com.binary.sx'
export const livechat_client_id = '66aa088aad5a414484c1fd1fa8a5ace7'
export const livechat_license_id = 12049137
export const map_api_key = 'AIzaSyAEha6-HeZuI95L9JWmX3m6o-AxQr_oFqU'
export const mga_link_url =
    'https://authorisation.mga.org.mt/verification.aspx?lang=EN&company=a5fd1edc-d072-4c26-b0cd-ab3fa0f0cc40&details=1'
export const p2p_playstore_url = 'https://play.google.com/store/apps/details?id=com.deriv.dp2p'
export const pushwoosh_app_code = 'DD293-35A19'
export const sample_rate = 25
export const zoho_url = 'https://deriv.zohorecruit.com'
