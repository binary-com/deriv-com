import React from 'react'
import { SmallContainer } from '../components/_style'
import accumulator_content from '../content/static/_accumulator'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import { SectionContainer } from 'components/containers'
import CommonHeaderSection from 'components/elements/common-header-section'
import { StyledBox } from 'pages/markets/static/style/_markets-style'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { localize } from 'components/localization'

const WhatAreAccumulators = () => {
    const [is_mobile] = useBrowserResize()

    return (
        <>
            <SectionContainer background="white" padding={is_mobile ? '48px 0 0 0' : '8rem 0 4rem'}>
                <SmallContainer direction="column" ai="flex-start">
                    <CommonHeaderSection
                        title="_t_What are accumulators?_t_"
                        title_font_size={is_mobile ? '28px' : '48px'}
                        margin_title="0 0 1.2rem 0"
                        subtitle="_t_Accumulators (or accumulator options) allow you to heighten your potential profit exponentially without risking more than your stake. Your potential profit will increase regardless of market movement, as long as the price moves within the trade barriers._t_"
                        subtitle_font_size={is_mobile ? '14px' : '16px'}
                        line_height_title={is_mobile ? '34px' : '60px'}
                        line_height={is_mobile ? '20px' : '24px'}
                    />
                </SmallContainer>
            </SectionContainer>
            <FullWidthMultiColumn
                header_width={is_mobile ? '308px' : '1200px'}
                header="_t_Why trade accumulators on Deriv_t_"
                button_title_element={
                    <CommonHeaderSection
                        title="_t_Don't have a Deriv account yet?_t_"
                        title_font_size={is_mobile ? '14px' : '16px'}
                        line_height={is_mobile ? '20px' : '24px'}
                    />
                }
                button_text="_t_Create free demo account_t_"
                multiple_row
                gap="7rem"
            >
                {accumulator_content.map((content, index) => (
                    <StyledBox
                        key={index}
                        item_title={content.item_title}
                        text={content.text}
                        icon={
                            <img
                                width="48px"
                                height="48px"
                                src={content.src}
                                alt={localize(content.alt)}
                            />
                        }
                    ></StyledBox>
                ))}
            </FullWidthMultiColumn>
        </>
    )
}

export default WhatAreAccumulators
