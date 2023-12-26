import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import clsx from 'clsx'
import { Text } from '@deriv/quill-design'
import Anchor from '../../anchor'
import { Localize } from 'components/localization'
import Arrow from 'images/svg/arrow_expandable.svg'
import useRegion from 'components/hooks/use-region'
import usePpc from 'features/hooks/use-ppc'

const CfdWarningBanner = () => {
    const { is_ppc } = usePpc()
    const { is_eu, is_cpa_plan } = useRegion()
    const [expanded, setExpanded] = useState(false)
    const data = useStaticQuery(graphql`
        query {
            strapiCfdWarningBanner {
                loss_percent
            }
        }
    `)
    const loss_percent = data?.strapiCfdWarningBanner?.loss_percent

    if (is_ppc || is_eu || is_cpa_plan) {
        const toggleExpansion = () => {
            setExpanded((prev) => !prev)
        }

        return (
            <>
                <div className="flex bg-background-primary-base items-end shadow-[0px_-4px_10px_rgba(65,_70,_82,_0.1)] pointer-events-auto sm:hidden">
                    <div className="w-[95%] lg:w-[90%] mx-auto p-500">
                        {expanded ? (
                            <Text>
                                <Localize
                                    translate_text="_t_CFDs and other products offered on this website are complex instruments with a high risk of losing money rapidly owing to leverage.<0> {{loss_percent}}% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.</0> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money._t_"
                                    values={{ loss_percent }}
                                    components={[
                                        <Anchor
                                            key={0}
                                            target="_blank"
                                            href="/tnc/eu/risk-disclosure.pdf"
                                        />,
                                    ]}
                                />
                            </Text>
                        ) : (
                            <Text className="w-[95%] mx-auto">
                                <Localize
                                    translate_text="_t_<0> {{loss_percent}}% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.</0>_t_"
                                    values={{ loss_percent }}
                                    components={[
                                        <Anchor
                                            key={0}
                                            target="_blank"
                                            href="/tnc/eu/risk-disclosure.pdf"
                                        />,
                                    ]}
                                />
                            </Text>
                        )}
                    </div>
                    <img
                        onClick={toggleExpansion}
                        src={Arrow}
                        alt="Expand"
                        className={clsx(
                            'transition-transform px-800',
                            expanded ? 'rotate-180 animate-fade-in' : 'rotate-0 animate-fade-out',
                        )}
                    />
                </div>
                <div className="w-full hidden sm:block bg-background-primary-base shadow-[0px_-4px_10px_rgba(65,_70,_82,_0.1)] pointer-events-auto">
                    <div className="w-[95%] lg:w-[90%] mx-auto py-500">
                        <Text className="text-75 lg:text-100">
                            <Localize
                                translate_text="_t_CFDs and other products offered on this website are complex instruments with a high risk of losing money rapidly owing to leverage.<0> {{loss_percent}}% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.</0> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money._t_"
                                values={{ loss_percent }}
                                components={[
                                    <Anchor
                                        key={0}
                                        target="_blank"
                                        href="/tnc/eu/risk-disclosure.pdf"
                                    />,
                                ]}
                            />
                        </Text>
                    </div>
                </div>
            </>
        )
    }
    return <></>
}

export default CfdWarningBanner
