import React, { useEffect, useState } from 'react'
import { useQueryParam, StringParam } from 'use-query-params'
import { addScriptForCIO } from '../components/_utility'
import AcademyNav from './_academy-nav'
import Subscribe from './_subscribe'
import { SectionContainer, SEO, Flex } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import { isBrowser } from 'common/utility'
import { LinkButton } from 'components/form/'
import useRegion from 'components/hooks/use-region'
import { TString } from 'types/generics'

const Subscription = () => {
    const [email] = useQueryParam('email', StringParam)
    const [confirmation_code] = useQueryParam('c', StringParam)
    const [is_script_loaded, setScriptLoaded] = useState(false)
    const { is_eu } = useRegion()

    useEffect(() => {
        if (email && confirmation_code) {
            addScriptForCIO(is_eu)
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

    const title_text: TString = '_t_Thank you for subscribing_t_'
    const description_text: TString =
        '_t_Thank you for confirming your email address, you will receive a confirmation email shortly._t_'
    const academy_link_text: TString = '_t_Take me to Academy_t_'

    return (
        <>
            <SEO title={localize(title_text)} description={localize(description_text)} no_index />
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
                    <LinkButton secondary to="/academy/">
                        {localize(academy_link_text)}
                    </LinkButton>
                </Flex>
            </SectionContainer>
        </>
    )
}

export default WithIntl()(Subscription)
