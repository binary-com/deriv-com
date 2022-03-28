import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'
import { localize, LocalizedLink } from 'components/localization'
import { SectionContainer, Flex, CssGrid } from 'components/containers'
import { Header, QueryImage, ImageWrapper } from 'components/elements'
import type { ImageWrapperProps } from 'components/elements/query-image'
import device from 'themes/device'
import Linkedin from 'images/svg/who-we-are/linkedin.svg'

const query = graphql`
    query {
        antony: file(relativePath: { eq: "who-we-are/antony.jpg" }) {
            ...fadeIn
        }
        derek: file(relativePath: { eq: "who-we-are/derek.jpg" }) {
            ...fadeIn
        }
        edwin: file(relativePath: { eq: "who-we-are/edwin.jpg" }) {
            ...fadeIn
        }
        gary: file(relativePath: { eq: "who-we-are/gary.jpg" }) {
            ...fadeIn
        }
        jennice: file(relativePath: { eq: "who-we-are/jennice.jpg" }) {
            ...fadeIn
        }
        jeya: file(relativePath: { eq: "who-we-are/jeya.jpg" }) {
            ...fadeIn
        }
        jy: file(relativePath: { eq: "who-we-are/jy.jpg" }) {
            ...fadeIn
        }
        joanna: file(relativePath: { eq: "who-we-are/joanna.jpg" }) {
            ...fadeIn
        }
        kaveh: file(relativePath: { eq: "who-we-are/kaveh.jpg" }) {
            ...fadeIn
        }
        louise: file(relativePath: { eq: "who-we-are/louise.jpg" }) {
            ...fadeIn
        }
        rakshit: file(relativePath: { eq: "who-we-are/rakshit.jpg" }) {
            ...fadeIn
        }
        raunak: file(relativePath: { eq: "who-we-are/raunak.jpg" }) {
            ...fadeIn
        }
        seema: file(relativePath: { eq: "who-we-are/seema.jpg" }) {
            ...fadeIn
        }
        shyamala: file(relativePath: { eq: "who-we-are/shyamala.jpg" }) {
            ...fadeIn
        }
        tom: file(relativePath: { eq: "who-we-are/tom.jpg" }) {
            ...fadeIn
        }
        waqas: file(relativePath: { eq: "who-we-are/waqas.jpg" }) {
            ...fadeIn
        }
    }
`

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
const ModalFlex = styled(Flex)`
    position: absolute;
    top: 130px;
    background-color: white;
    padding: 8px 16px 6px;
    z-index: 1;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0 4px 15px;
    white-space: pre;
    width: fit-content;
    @media ${device.tablet} {
        top: 124px;
    }
    @media ${device.tabletS} {
        top: 108px;
    }
    @media ${device.mobileL} {
        top: 93px;
    }
`
type MouseEvent = React.MouseEventHandler<HTMLDivElement> &
    ((event: MouseEventHandler<HTMLDivElement>) => void)
type StyledImageWrapperPropsType = ImageWrapperProps & {
    onMouseOver: MouseEvent
    onMouseLeave: MouseEvent
    tabindex: string
    width: string
    height: string
}
const StyledImageWrapper = styled(ImageWrapper)<StyledImageWrapperPropsType>`
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

type ModalPropsType = {
    name: string
    position: string
    link?: string
}
type StyledLogoType = {
    link: string
}
const StyledLogo = styled.img<StyledLogoType>`
    width: 32px;
    height: 32px;
    filter: grayscale(100%);

    &:hover {
        filter: ${(props) => (props.link ? 'unset' : 'grayscale(100%)')};
    }
`

const Modal = ({ name, position, link }: ModalPropsType) => {
    return (
        <ModalFlex
            ai="center"
            direction="column"
            width="unset"
            height="unset"
            padding="0px 16px 5px"
        >
            <Header type="unset" as="h4" padding="0" align="center" size="14px">
                {name}
            </Header>
            <Header as="h4" padding="0" type="sub-paragraph" weight="normal" align="center">
                {position}
            </Header>
            {link && (
                <LocalizedLink external="true" to={link} target="_blank" rel="noopener noreferrer">
                    <StyledLogo width="32px" height="32px" src={Linkedin} alt="" link={link} />
                </LocalizedLink>
            )}
        </ModalFlex>
    )
}
type LeaderType = {
    name: string
    position: string
    link: string
    image: ImageDataLike
}

type LeaderProps = {
    leader: LeaderType
    key: number
}
const Leader = ({ leader }: LeaderProps) => {
    const [isPopupShown, setIsPopupShown] = React.useState(false)
    const showModal: MouseEvent = () => {
        setIsPopupShown(true)
    }
    const dontShowModal: MouseEvent = () => {
        setIsPopupShown(false)
    }
    return (
        <StyledImageWrapper
            onMouseOver={showModal}
            onMouseLeave={dontShowModal}
            width="120px"
            height="120px"
            tabindex="1"
            loading="lazy"
        >
            <QueryImage
                width="100%"
                height="100%"
                data={leader.image}
                alt="leader"
                loading="lazy"
            />
            {isPopupShown && (
                <Modal name={leader.name} position={leader.position} link={leader.link} />
            )}
        </StyledImageWrapper>
    )
}

const OurLeadership = () => {
    const leaders_data = useStaticQuery(query)
    const leaders: LeaderType[] = [
        {
            name: 'Jean-Yves Sireau',
            position: localize('Chief Executive Officer'),
            link: 'https://www.linkedin.com/in/jeanyvessireau/',
            image: leaders_data.jy,
        },
        {
            name: 'Rakshit Choudhary ',
            position: localize('Chief Operating Officer'),
            link: 'https://www.linkedin.com/in/rakshit-choudhary-9a67b61b0/',
            image: leaders_data.rakshit,
        },
        {
            name: 'Tom Molesworth',
            position: localize('Chief Technology Officer'),
            link: '',
            image: leaders_data.tom,
        },
        {
            name: 'Joanna Frendo',
            position: localize('Chief Compliance Officer'),
            link: 'https://www.linkedin.com/in/joanna-frendo-4449975/',
            image: leaders_data.joanna,
        },
        {
            name: 'Louise Wolf',
            position: localize('Chief Financial Officer'),
            link: 'https://www.linkedin.com/in/louise-wolf-7b98b460/',
            image: leaders_data.louise,
        },
        {
            name: 'Shyamala Siva',
            position: localize('Chief Administrative Officer'),
            link: 'https://www.linkedin.com/in/shyamala-siva-90043b208/',
            image: leaders_data.shyamala,
        },
        {
            name: 'Seema Hallon',
            position: localize('Head of People Management'),
            link: 'https://www.linkedin.com/in/seema-hallon-6919073/',
            image: leaders_data.seema,
        },
        {
            name: 'Derek Swift',
            position: localize('Head of Marketing & Global Partnerships'),
            link: 'https://www.linkedin.com/in/derek-swift-5787208/',
            image: leaders_data.derek,
        },
        {
            name: 'Waqas Awan',
            position: 'Vice President - Product',
            link: 'https://www.linkedin.com/in/waqasawan/',
            image: leaders_data.waqas,
        },
        {
            name: 'Raunak Kathuria',
            position: 'Vice President - Engineering',
            link: 'https://www.linkedin.com/in/raunakkathuria/',
            image: leaders_data.raunak,
        },
        {
            name: 'Edwin Raspe',
            position: 'Vice President - IT Operations',
            link: 'https://my.linkedin.com/in/edwin-raspe-210a722/',
            image: leaders_data.edwin,
        },
        {
            name: 'Kaveh Mousavi',
            position: 'Vice President - Engineering',
            link: 'https://de.linkedin.com/in/kavehmz/',
            image: leaders_data.kaveh,
        },
        {
            name: 'Jeyavarthini Vairakanan',
            position: 'Vice President - Customer Support',
            link: 'https://www.linkedin.com/in/jeyavarthini-vairakanan-812b7a121/',
            image: leaders_data.jeya,
        },
        {
            name: 'Antony Pradeep Charles',
            position: 'Vice President - Strategy & Project Management',
            link: 'https://www.linkedin.com/in/antonypradeep/',
            image: leaders_data.antony,
        },
        {
            name: 'Gary Ross Vytialingam',
            position: 'Chief Risk Officer',
            link: 'https://www.linkedin.com/in/gary-ross-vytialingam-37a729106/',
            image: leaders_data.gary,
        },
        {
            name: 'Jennice Lourdsamy',
            position: localize('Head of Accounts'),
            link: 'https://www.linkedin.com/in/jennice-lourdsamy-352b897/',
            image: leaders_data.jennice,
        },
    ]
    return (
        <StyledSectionContainer padding="0 16px 120px" background="var(--color-white)">
            <StyledHeader as="h2" size="48px" align="center" type="page-title">
                {localize('Our leadership')}
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
                {leaders.map((leader: LeaderType, index: number) => (
                    <Leader leader={leader} key={index} />
                ))}
            </StyledCssGrid>
        </StyledSectionContainer>
    )
}

export default OurLeadership
