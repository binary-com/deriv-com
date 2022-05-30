import { navigate } from 'gatsby'
import { isBrowser, addScript } from 'common/utility'
import { getCountryRule } from 'components/containers/visibility'

export const url = isBrowser() ? window.location.href : ''

export const addScriptForCIO = (is_eu) => {
    const site_id = process.env.GATSBY_ENV_CIO_SITE_ID

    let cio_url

    if (is_eu) {
        cio_url = 'https://assets.customer.io/assets/track-eu.js'
    } else {
        cio_url = 'https://assets.customer.io/assets/track.js'
    }

    addScript({
        text: `
            var _cio = _cio || [];
            var a,b,c;a=function(f){return function(){_cio.push([f].
            concat(Array.prototype.slice.call(arguments,0)))}};b=["load","identify",
            "sidentify","track","page"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
            var t = document.createElement('script'),
                s = document.getElementsByTagName('script')[0];
            t.async = true;
            t.id    = 'cio-tracker';
            t.setAttribute('data-site-id', '${site_id}');
            t.src = '${cio_url}' 
            //If your account is in the EU, use:
            s.parentNode.insertBefore(t, s);`,
    })
}
export const handleTag = (tag_name) => {
    navigate(`/academy/search?category=${encodeURI(`${tag_name}`)}`)
}

export const dataFilter = (data) => {
    const not_allowed_for_eu_uk = {
        smart_trader: 'c1925a11-e999-4750-97af-cc243186ce40',
        options: '1d194e63-e40e-440f-85f1-79e9030e2114',
    }

    const { is_eu, is_uk } = getCountryRule()
    let filtered_data = data

    if (is_eu) {
        filtered_data = data.filter(
            (item) =>
                item.visibility !== 'hide_for_eu' &&
                item.visibility !== 'hide_for_eu_uk' &&
                item.id !== not_allowed_for_eu_uk.smart_trader &&
                item.id !== not_allowed_for_eu_uk.options,
        )
    } else if (is_uk) {
        filtered_data = data.filter(
            (item) =>
                item.visibility !== 'hide_for_uk' &&
                item.visibility !== 'hide_for_eu_uk' &&
                item.id !== not_allowed_for_eu_uk.smart_trader &&
                item.id !== not_allowed_for_eu_uk.options,
        )
    }
    return filtered_data
}
