import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { DesktopWrapper, HoverChevron, StyledChevron } from './_search-styled'
import SearchBar from './_search-bar'
import { Flex } from 'components/containers'
import device from 'themes/device'
import { Header } from 'components/elements'
import AcademyLogo from 'images/svg/blog/academy-text.svg'

type NavProps = {
    setModal?: React.Dispatch<React.SetStateAction<boolean>>
    openModal: () => void
    Chevron: string
    is_modal_opened: boolean
}

const TopicSectionWrapper = styled(Flex)`
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`
const NavWrapper = styled.div`
    display: flex;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    height: 7.2rem;

    @media ${device.desktopL} {
        max-width: 1200px;
    }
    @media ${device.tabletL} {
        width: calc(100% - 32px);
    }
`
const LogoWrapper = styled.img`
    width: 186px;
    height: 24px;
`

const SearchNav = ({ setModal, openModal, Chevron, is_modal_opened }: NavProps) => {
    return (
        <NavWrapper>
            <Flex ai="center" jc="space-between">
                <Link to="/academy/">
                    <LogoWrapper src={AcademyLogo} />
                </Link>
                <Flex ai="center" max_width="751px" jc="flex-end">
                    <DesktopWrapper height="auto">
                        <Flex height="auto" jc="flex-end" style={{ position: 'relative' }}>
                            <SearchBar setModal={setModal} />
                        </Flex>
                    </DesktopWrapper>

                    <TopicSectionWrapper
                        ml="40px"
                        width="auto"
                        max_width="auto"
                        ai="center"
                        onClick={openModal}
                    >
                        <Header
                            as="h3"
                            type="paragraph-1"
                            weight="normal"
                            mr="10px"
                            color="--color-black-3"
                        >
                            Topics
                        </Header>
                        <HoverChevron>
                            <StyledChevron
                                src={Chevron}
                                alt="chevron"
                                is_expanded={is_modal_opened}
                            />
                        </HoverChevron>
                    </TopicSectionWrapper>
                </Flex>
            </Flex>
        </NavWrapper>
    )
}

export default SearchNav
