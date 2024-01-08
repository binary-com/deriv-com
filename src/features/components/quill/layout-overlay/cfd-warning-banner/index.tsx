import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import clsx from 'clsx'
import { Text } from '@deriv/quill-design'
import Anchor from '../../anchor'
import UnexpandedText from './unexpanded-text'
import { cfd_container } from './styles.module.scss'
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
                    <div className="w-[95%] lg:w-[90%] mx-auto p-1000">
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
                            <UnexpandedText loss_percent={loss_percent} />
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
                    <div className={clsx('w-[95%] lg:w-[90%] mx-auto py-1000', cfd_container)}>
                        <Text className="text-75 xl:text-100">
                            <Localize
                                translate_text="_t_CFDs and other products offered on this website are complex instruments with a high risk of losing money rapidly owing to leverage.<0> {{loss_percent}}% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.</0> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money._t_"
                                values={{ loss_percent }}
                                components={[
                                    <Anchor
                                        key={0}
                                        className="lg:text-100"
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
