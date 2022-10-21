import React, { MouseEventHandler, ReactElement, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'
import Modal from './modal'
import { Localize } from 'components/localization'
import { Flex } from 'components/containers'
import { QueryImage, ImageWrapper } from 'components/elements'
import device from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

type MouseEvent = MouseEventHandler<HTMLDivElement> &
    ((event: MouseEventHandler<HTMLDivElement>) => void)

type LeaderType = {
    name: string
    position: ReactElement
    link: string
    image: ImageDataLike
}

const query = graphql`
    query {
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

export const ModalFlex = styled(Flex)`
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

const StyledImageWrapper = styled(ImageWrapper)`
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

const LeaderCard = ({ image, name, position, link }: LeaderType) => {
    const [is_popup_shown, setIsPopupShown] = useState(false)
    const [is_mobile] = useBrowserResize()

    const showModal: MouseEvent = () => setIsPopupShown(true)
    const dontShowModal: MouseEvent = () => setIsPopupShown(false)

    return (
        <StyledImageWrapper
            onMouseOver={showModal}
            onMouseLeave={dontShowModal}
            width={is_mobile ? '98px' : '120px'}
            height={is_mobile ? '98px' : '120px'}
            loading="lazy"
        >
            <QueryImage width="100%" height="100%" data={image} alt="leader" loading="lazy" />
            {is_popup_shown && <Modal name={name} position={position} link={link} />}
        </StyledImageWrapper>
    )
}

const Leaders = () => {
    const leaders_data = useStaticQuery(query)
    const leaders: LeaderType[] = [
        {
            name: 'Jean-Yves Sireau',
            position: <Localize translate_text="Chief Executive Officer" />,
            link: 'https://www.linkedin.com/in/jeanyvessireau/',
            image: leaders_data.jy,
        },
        {
            name: 'Rakshit Choudhary ',
            position: <Localize translate_text="Chief Operating Officer" />,
            link: 'https://www.linkedin.com/in/rakshit-choudhary-9a67b61b0/',
            image: leaders_data.rakshit,
        },
        {
            name: 'Tom Molesworth',
            position: <Localize translate_text="Chief Information Officer" />,
            link: '',
            image: leaders_data.tom,
        },
        {
            name: 'Joanna Frendo',
            position: <Localize translate_text="Chief Compliance Officer" />,
            link: 'https://www.linkedin.com/in/joanna-frendo-4449975/',
            image: leaders_data.joanna,
        },
        {
            name: 'Louise Wolf',
            position: <Localize translate_text="Chief Financial Officer" />,
            link: 'https://www.linkedin.com/in/louise-wolf-7b98b460/',
            image: leaders_data.louise,
        },
        {
            name: 'Shyamala Siva',
            position: <Localize translate_text="Chief Administrative Officer" />,
            link: 'https://www.linkedin.com/in/shyamala-siva-90043b208/',
            image: leaders_data.shyamala,
        },
        {
            name: 'Seema Hallon',
            position: <Localize translate_text="Head of People Management" />,
            link: 'https://www.linkedin.com/in/seema-hallon-6919073/',
            image: leaders_data.seema,
        },
        {
            name: 'Derek Swift',
            position: <Localize translate_text="Head of Marketing & Global Partnerships" />,
            link: 'https://www.linkedin.com/in/derek-swift-5787208/',
            image: leaders_data.derek,
        },
        {
            name: 'Waqas Awan',
            position: <Localize translate_text="Vice President of Product" />,
            link: 'https://www.linkedin.com/in/waqasawan/',
            image: leaders_data.waqas,
        },
        {
            name: 'Raunak Kathuria',
            position: <Localize translate_text="Vice President of Engineering" />,
            link: 'https://www.linkedin.com/in/raunakkathuria/',
            image: leaders_data.raunak,
        },
        {
            name: 'Edwin Raspe',
            position: <Localize translate_text="Vice President of IT Operations" />,
            link: 'https://my.linkedin.com/in/edwin-raspe-210a722/',
            image: leaders_data.edwin,
        },
        {
            name: 'Kaveh Mousavi Zamani',
            position: <Localize translate_text="Vice President of Engineering" />,
            link: 'https://de.linkedin.com/in/kavehmz/',
            image: leaders_data.kaveh,
        },
        {
            name: 'Jeyavarthini Vairakanan',
            position: <Localize translate_text="Vice President of Customer Support" />,
            link: 'https://www.linkedin.com/in/jeyavarthini-vairakanan-812b7a121/',
            image: leaders_data.jeya,
        },
        {
            name: 'Gary Ross Vytialingam',
            position: <Localize translate_text="Chief Risk Officer" />,
            link: 'https://www.linkedin.com/in/gary-ross-vytialingam-37a729106/',
            image: leaders_data.gary,
        },
        {
            name: 'Jennice Lourdsamy',
            position: <Localize translate_text="Head of Accounts" />,
            link: 'https://www.linkedin.com/in/jennice-lourdsamy-352b897/',
            image: leaders_data.jennice,
        },
    ]

    return (
        <>
            {leaders.map((leader: LeaderType) => (
                <LeaderCard key={leader.name} {...leader} />
            ))}
        </>
    )
}

export default Leaders
