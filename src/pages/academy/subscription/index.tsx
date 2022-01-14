import React, { useEffect, useState, useContext } from 'react'
import { useQueryParam, StringParam } from 'use-query-params'
import AcademyNav from './_academy-nav'
import Subscribe from './_subscribe'
import { SectionContainer, SEO, Flex } from 'components/containers'
import { localize } from 'components/localization'
import { isBrowser } from 'common/utility'
import { DerivStore } from 'store'
import { LinkButton } from 'components/form/'

const Subscription = () => {
    const [email] = useQueryParam('email', StringParam)
    const [confirmation_code] = useQueryParam('c', StringParam)
    const [is_script_loaded, setScriptLoaded] = useState(false)
    const { is_eu_country } = useContext(DerivStore)

    useEffect(() => {
        if (email && confirmation_code) {
            addScriptForCIO()
            setScriptLoaded(true)
        }
    }, [])

    useEffect(() => {
        if (is_script_loaded && isBrowser()) {
            window._cio.identify({
                id: decodeURIComponent(email),
            })
            window._cio.track('academy_subscription', {
                client_confirmation_code: confirmation_code,
            })
        }
    }, [is_script_loaded])

    const addScriptForCIO = () => {
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

    return (
        <>
            <SEO
                title={localize('Thank you for subscribing')}
                description={localize(
                    'Thank you for confirming your email address, you will receive a confirmation email shortly.',
                )}
                no_index
            />
            <SectionContainer min_height="100vh">
                <AcademyNav />
                <Flex
                    fd="column"
                    max_width="90%"
                    m=" 32px auto"
                    tabletL={{ m: '10px auto', max_width: 'calc(100% - 32px)' }}
                >
                    <Subscribe />
                </Flex>
                <Flex>
                    <LinkButton secondary="true" to="/academy/">
                        {localize('Take me to Academy')}
                    </LinkButton>
                </Flex>
            </SectionContainer>
        </>
    )
}

export default WithIntl()(Subscription)
