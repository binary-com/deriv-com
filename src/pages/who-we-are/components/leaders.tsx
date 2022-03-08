import React, { MouseEventHandler, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'
import Modal from './modal'
import { Flex } from 'components/containers'
import { QueryImage, ImageWrapper } from 'components/elements'
import device from 'themes/device'

type MouseEvent = MouseEventHandler<HTMLDivElement> &
    ((event: MouseEventHandler<HTMLDivElement>) => void)

type LeaderType = {
    id: number
    name: string
    position: string
    link: string
    image: ImageDataLike
}

type LeaderCardType = {
    leader: LeaderType
}

const query = graphql`
    query {
        antony: file(relativePath: { eq: "who-we-are/antony.jpg" }) {
            ...fadeIn
        }
        derek: file(relativePath: { eq: "who-we-are/derek.jpg" }) {
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

const LeaderCard = ({ leader }: LeaderCardType) => {
    const [is_popup_shown, setIsPopupShown] = useState(false)

    const showModal: MouseEvent = () => setIsPopupShown(true)
    const dontShowModal: MouseEvent = () => setIsPopupShown(false)

    return (
        <StyledImageWrapper
            onMouseOver={showModal}
            onMouseLeave={dontShowModal}
            width="120px"
            height="120px"
            loading="lazy"
        >
            <QueryImage
                width="100%"
                height="100%"
                data={leader.image}
                alt="leader"
                loading="lazy"
            />
            {is_popup_shown && (
                <Modal name={leader.name} position={leader.position} link={leader.link} />
            )}
        </StyledImageWrapper>
    )
}

const Leaders = () => {
    const leaders_data = useStaticQuery(query)
    const leaders: LeaderType[] = [
        {
            id: 1,
            name: 'Jean-Yves Sireau',
            position: 'Chief Executive Officer',
            link: 'https://www.linkedin.com/in/jeanyvessireau/',
            image: leaders_data.jy,
        },
        {
            id: 2,
            name: 'Rakshit Choudhary ',
            position: 'Chief Operating Officer',
            link: 'https://www.linkedin.com/in/rakshit-choudhary-9a67b61b0/',
            image: leaders_data.rakshit,
        },
        {
            id: 3,
            name: 'Tom Molesworth',
            position: 'Chief Technology Officer',
            link: '',
            image: leaders_data.tom,
        },
        {
            id: 4,
            name: 'Joanna Frendo',
            position: 'Chief Compliance Officer',
            link: 'https://www.linkedin.com/in/joanna-frendo-4449975/',
            image: leaders_data.joanna,
        },
        {
            id: 5,
            name: 'Louise Wolf',
            position: 'Chief Financial Officer',
            link: 'https://www.linkedin.com/in/louise-wolf-7b98b460/',
            image: leaders_data.louise,
        },
        {
            id: 6,
            name: 'Shyamala Siva',
            position: 'Chief Administrative Officer',
            link: 'https://www.linkedin.com/in/shyamala-siva-90043b208/',
            image: leaders_data.shyamala,
        },
        {
            id: 7,
            name: 'Gary Ross Vytialingam',
            position: 'Chief Risk Officer',
            link: 'https://www.linkedin.com/in/gary-ross-vytialingam-37a729106/',
            image: leaders_data.gary,
        },
        {
            id: 8,
            name: 'Seema Hallon',
            position: 'Head of People Management',
            link: 'https://www.linkedin.com/in/seema-hallon-6919073/',
            image: leaders_data.seema,
        },
        {
            id: 9,
            name: 'Derek Swift',
            position: 'Head of Marketing & Global Partnerships',
            link: 'https://www.linkedin.com/in/derek-swift-5787208/',
            image: leaders_data.derek,
        },
        {
            id: 10,
            name: 'Waqas Awan',
            position: 'Head of Product & Content Design',
            link: 'https://www.linkedin.com/in/waqasawan/',
            image: leaders_data.waqas,
        },
        {
            id: 11,
            name: 'Raunak Kathuria',
            position: 'Head of Back End Development',
            link: 'https://www.linkedin.com/in/raunakkathuria/',
            image: leaders_data.raunak,
        },
        {
            id: 12,
            name: 'Jeyavarthini Vairakanan',
            position: 'Head of Customer Support',
            link: 'https://www.linkedin.com/in/jeyavarthini-vairakanan-812b7a121/',
            image: leaders_data.jeya,
        },
        {
            id: 13,
            name: 'Antony Pradeep Charles',
            position: 'Head of Strategy & Project Management',
            link: 'https://www.linkedin.com/in/antonypradeep/',
            image: leaders_data.antony,
        },
        {
            id: 14,
            name: 'Jennice Lourdsamy',
            position: 'Head of Accounts',
            link: 'https://www.linkedin.com/in/jennice-lourdsamy-352b897/',
            image: leaders_data.jennice,
        },
    ]

    return (
        <>
            {leaders.map((leader: LeaderType) => (
                <LeaderCard key={leader.id} leader={leader} />
            ))}
        </>
    )
}

export default Leaders
