import React, { MouseEventHandler, useState } from 'react'
import styled from 'styled-components'
import { TLeader, TOurLeadership } from './_types'
import Modal, { ModalFlex } from './components/_modal'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { Localize } from 'components/localization'
import { CssGrid, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

const StyledSectionContainer = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0 16px;
`
const StyledCssGrid = styled(CssGrid)`
    max-width: 996px;

    @media (max-width: 1100px) {
        max-width: 90%;
        padding: 0 40px;
    }
    @media ${device.tablet} {
        max-width: unset;
        padding: 0;
    }
    @media (max-width: 359px) {
        grid-template-columns: repeat(3, 88px);
        grid-column-gap: 12px;
        grid-row-gap: 4px;
    }
`
const StyledHeader = styled(Header)`
    padding-bottom: 40px;

    @media ${device.laptop} {
        font-size: 28px;
    }
    @media ${device.tablet} {
        padding-bottom: 24px;
    }
`
const StyledImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 20px;

    @media ${device.tabletS} {
        width: 104px;
        height: 114px;
    }
    @media ${device.tabletL} {
        &:nth-child(3n-2) {
            ${ModalFlex} {
                left: 0;
            }
        }
        &:nth-child(3n) {
            ${ModalFlex} {
                align-self: right;
                right: 0;
            }
        }
    }
    @media ${device.tabletS} {
        padding-bottom: 10px;
    }
    @media ${device.mobileL} {
        width: 88px;
        height: 98px;
    }
`
type MouseEvent = MouseEventHandler<HTMLDivElement> &
    ((event: MouseEventHandler<HTMLDivElement>) => void)

const LeaderCard = (leader: TLeader) => {
    const { name, role, photo, link_url } = leader
    const [is_popup_shown, setIsPopupShown] = useState(false)
    const [is_mobile] = useBrowserResize()
    const showModal: MouseEvent = () => setIsPopupShown(true)
    const dontShowModal: MouseEvent = () => setIsPopupShown(false)

    return (
        <StyledImageWrapper key={name} onMouseOver={showModal} onMouseLeave={dontShowModal}>
            <img
                src={photo?.localFile?.publicURL}
                alt="leader"
                width={is_mobile ? '98px' : '120px'}
                height={is_mobile ? '98px' : '120px'}
            />
            {is_popup_shown && <Modal name={name} role={role} link={link_url} />}
        </StyledImageWrapper>
    )
}

const OurLeadership = ({ our_leadership }: TOurLeadership) => {
    return (
        <StyledSectionContainer padding="0 16px 120px" background="var(--color-white)">
            <StyledHeader as="h2" size="48px" align="center" type="page-title">
                <Localize translate_text={our_leadership?.header} />
            </StyledHeader>
            <StyledCssGrid
                height="unset"
                columns="repeat(auto-fill, 120px)"
                column_gap="99px"
                row_gap="60px"
                laptop_columns="repeat(auto-fill, 120px)"
                tablet_columns="repeat(3, 120px)"
                tablet_column_gap="99px"
                tablet_row_gap="60px"
                mobile_columns="repeat(3, 88px)"
                mobile_column_gap="24px"
                mobile_row_gap="6px"
            >
                {our_leadership?.leaders?.map((leader) => (
                    <LeaderCard key={leader.name} {...leader} />
                ))}
            </StyledCssGrid>
        </StyledSectionContainer>
    )
}
export default OurLeadership
