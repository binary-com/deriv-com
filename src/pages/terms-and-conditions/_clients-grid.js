import React from 'react'
import PropTypes from 'prop-types'
import { StyledGrid, StyledContainer, IconWrapper, GridCol, Cta } from './_terms-conditions-style'
import { Show } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
// Icons
import General from 'images/svg/general-tc.svg'
import Trading from 'images/svg/trading-tc.svg'
import Funds from 'images/svg/funds-transfers-tc.svg'
import Security from 'images/svg/security-privacy-tc.svg'
import Risk from 'images/svg/risk-tc.svg'
import PDF from 'images/svg/pdf-icon-black.svg'
import BFX from 'images/svg/bfx-tc.svg'

const Col = ({
    Icon,
    content,
    link_title,
    link_title2,
    link_title3,
    link_title4,
    title,
    url,
    url2,
    url3,
    url4,
}) => (
    <GridCol>
        <IconWrapper>
            <img src={Icon} />
        </IconWrapper>
        <Header as="h4">{title}</Header>
        <Text lh="1.55">{content}</Text>
        <Cta>
            <img src={PDF} alt="pdf icon black" />
            <a href={url} target="_blank" rel="noopener noreferrer">
                {link_title}
            </a>
        </Cta>
        {url2 && link_title2 && (
            <Cta>
                <img src={PDF} alt="pdf icon black" />
                <a href={url2} target="_blank" rel="noopener noreferrer">
                    {link_title2}
                </a>
            </Cta>
        )}
        {url3 && link_title3 && (
            <Show.Eu>
                <Cta>
                    <img src={PDF} alt="pdf icon black" />
                    <a href={url3} target="_blank" rel="noopener noreferrer">
                        {link_title3}
                    </a>
                </Cta>
            </Show.Eu>
        )}
        {url4 && link_title4 && (
            <Show.Eu>
                <Cta>
                    <img src={PDF} alt="pdf icon black" />
                    <a href={url4} target="_blank" rel="noopener noreferrer">
                        {link_title4}
                    </a>
                </Cta>
            </Show.Eu>
        )}
    </GridCol>
)
Col.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.elementType,
    link_title: PropTypes.string,
    link_title2: PropTypes.string,
    link_title3: PropTypes.string,
    link_title4: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    url2: PropTypes.string,
    url3: PropTypes.string,
    url4: PropTypes.string,
}

const IconGrid = () => (
    <StyledContainer>
        <StyledGrid
            columns="repeat(3, 1fr)"
            column_gap="15.4rem"
            row_gap="8rem"
            tablet_columns="repeat(2, 1fr)"
            mobile_columns="1fr"
            mobile_row_gap="10rem"
        >
            <Col
                Icon={General}
                title={localize('General terms of use')}
                content={localize('What you’re agreeing to when you sign up to use Deriv')}
                url="/tnc/general-terms.pdf"
                link_title={localize('General terms of use')}
            />
            <Col
                Icon={Trading}
                title={localize('Trading terms')}
                content={localize('Rules for making trades on any Deriv trading platform')}
                url="/tnc/trading-terms.pdf"
                link_title={localize('Trading terms')}
            />
            <Col
                Icon={Funds}
                title={localize('Funds & transfers')}
                content={localize(
                    'Terms that govern keeping and transferring funds in Deriv and the bonuses you might get',
                )}
                url="/tnc/funds-and-transfers.pdf"
                link_title={localize('Funds & transfers')}
            />
            <Col
                Icon={Security}
                title={localize('Security & privacy')}
                content={localize('How we use and protect the information you give us')}
                url="/tnc/security-and-privacy.pdf"
                link_title={localize('Security & privacy')}
            />
            <Col
                Icon={Risk}
                title={localize('Risk disclosure')}
                content={localize(
                    'A notice to help you understand the risks that might arise when you trade on Deriv',
                )}
                url="/tnc/risk-disclosure.pdf"
                link_title={localize('Risk disclosure')}
            />
            <Col
                Icon={BFX}
                title={localize('Additional terms')}
                content={localize(
                    'Additional terms and restrictions for Deriv clients in certain countries',
                )}
                url="/tnc/deriv-(fx)-ltd.pdf"
                url2="/tnc/deriv-investments-(europe)-limited.pdf"
                url3="/tnc/deriv-(europe)-limited.pdf"
                url4="/tnc/deriv-(mx)-ltd.pdf"
                link_title={localize('Deriv (FX) Ltd')}
                link_title2={localize('Deriv Investments (Europe) Limited')}
                link_title3={localize('Deriv (Europe) Limited')}
                link_title4={localize('Deriv (MX) Ltd')}
            />
        </StyledGrid>
    </StyledContainer>
)

export default IconGrid
