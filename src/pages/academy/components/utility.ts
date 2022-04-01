import React from 'react'
import { isBrowser } from 'common/utility'
import { DerivStore } from 'store'

export const url = isBrowser() ? window.location.href : ''

export const addScriptForCIO = () => {
    const { is_eu_country } = React.useContext(DerivStore)
    const site_id = process.env.GATSBY_ENV_CIO_SITE_ID

    let cio_url = 'https://assets.customer.io/assets/track.js'
    if (is_eu_country) {
        cio_url = 'https://assets.customer.io/assets/track-eu.js'
    }

    const addScript = (settings) => {
        const script = document.createElement('script')
        const { async, text, src, id } = settings

        if (async) script.async = settings['async']
        if (text) script.text = settings['text']
        if (src) script.src = settings['src']
        if (id) script.id = settings['id']
        document.body.appendChild(script)
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
