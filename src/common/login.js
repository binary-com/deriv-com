// const Cookies             = require('js-cookie');
// const Client              = require('./client_base');
// const getLanguage         = require('../language').get;
// const isMobile            = require('../os_detect').isMobile;
// const isStorageSupported  = require('../storage').isStorageSupported;
// const LocalStore          = require('../storage').LocalStore;
// const urlForCurrentDomain = require('../url').urlForCurrentDomain;
// const isLoginPages        = require('../utility').isLoginPages;
// const TrafficSource       = require('../../app/common/traffic_source');
// const getAppId            = require('../../config').getAppId;

// const Login = (() => {
//     const redirectToLogin = () => {
//         if (!Client.isLoggedIn() && !isLoginPages() && isStorageSupported(sessionStorage)) {
//             sessionStorage.setItem('redirect_url', window.location.href);
//             window.location.href = loginUrl();
//         }
//     };

//     const loginUrl = () => {
//         const server_url = localStorage.getItem('config.server_url');
//         const language   = getLanguage();
//         const signup_device      = LocalStore.get('signup_device') || (isMobile() ? 'mobile' : 'desktop');
//         const date_first_contact = LocalStore.get('date_first_contact');
//         const marketing_queries  = `&signup_device=${signup_device}${date_first_contact ? `&date_first_contact=${date_first_contact}` : ''}`;

//         return ((server_url && /qa/.test(server_url)) ?
//             `https://${server_url}/oauth2/authorize?app_id=${getAppId()}&l=${language}${marketing_queries}` :
//             urlForCurrentDomain(`https://oauth.binary.com/oauth2/authorize?app_id=${getAppId()}&l=${language}${marketing_queries}`)
//         );
//     };

//     const socialLoginUrl = (brand, affiliate_token, utm_source, utm_medium, utm_campaign) => (
//         `${loginUrl()}&social_signup=${brand}${affiliate_token}${utm_source}${utm_medium}${utm_campaign}`
//     );

//     const initOneAll = () => {
//         ['google', 'facebook'].forEach(provider => {
//             $(`#button_${provider}`).off('click').on('click', e => {
//                 e.preventDefault();

//                 const affiliate_tracking   = Cookies.getJSON('affiliate_tracking');
//                 const utm_data             = TrafficSource.getData();
//                 const utm_source           = TrafficSource.getSource(utm_data);
//                 const utm_source_link      = utm_source ? `&utm_source=${utm_source}` : '';
//                 const utm_medium_link      = utm_data.utm_medium ? `&utm_medium=${utm_data.utm_medium}` : '';
//                 const utm_campaign_link    = utm_data.utm_campaign ? `&utm_campaign=${utm_data.utm_campaign}` : '';
//                 const affiliate_token_link = affiliate_tracking ? `&affiliate_token=${affiliate_tracking.t}` : '';
//                 const social_login_url     = socialLoginUrl(provider, affiliate_token_link,
//                     utm_source_link, utm_medium_link, utm_campaign_link);

//                 window.location.href = social_login_url;
//             });
//         });
//     };

//     return {
//         redirectToLogin,
//         initOneAll,
//     };
// })();

// module.exports = Login;
