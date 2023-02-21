import React, { MouseEventHandler, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'
import Modal from './modal'
import { Flex } from 'components/containers'
import { QueryImage, ImageWrapper } from 'components/elements'
import device from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'

type MouseEvent = MouseEventHandler<HTMLDivElement> &
    ((event: MouseEventHandler<HTMLDivElement>) => void)

type LeaderType = {
    name: string
    position: TString
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
        >
            <QueryImage width="100%" height="100%" data={image} alt="leader" loading="lazy" />
            {is_popup_shown && (
                <Modal name={name} position={<Localize translate_text={position} />} link={link} />
            )}
        </StyledImageWrapper>
    )
}

const Leaders = () => {
    const leaders_data = useStaticQuery(query)
    const leaders: LeaderType[] = [
        {
            name: 'Jean-Yves Sireau',
            position: '_t_Chief Executive Officer_t_',
            link: 'https://www.linkedin.com/in/jeanyvessireau/',
            image: leaders_data.jy,
        },
        {
            name: 'Rakshit Choudhary ',
            position: '_t_Chief Operating Officer_t_',
            link: 'https://www.linkedin.com/in/rakshit-choudhary-9a67b61b0/',
            image: leaders_data.rakshit,
        },
        {
            name: 'Tom Molesworth',
            position: '_t_Chief Information Officer_t_',
            link: '',
            image: leaders_data.tom,
        },
        {
            name: 'Joanna Frendo',
            position: '_t_Chief Compliance Officer_t_',
            link: 'https://www.linkedin.com/in/joanna-frendo-4449975/',
            image: leaders_data.joanna,
        },
        {
            name: 'Louise Wolf',
            position: '_t_Chief Financial Officer_t_',
            link: 'https://www.linkedin.com/in/louise-wolf-7b98b460/',
            image: leaders_data.louise,
        },
        {
            name: 'Shyamala Siva',
            position: '_t_Chief Administrative Officer_t_',
            link: 'https://www.linkedin.com/in/shyamala-siva-90043b208/',
            image: leaders_data.shyamala,
        },
        {
            name: 'Seema Hallon',
            position: '_t_Head of People Management_t_',
            link: 'https://www.linkedin.com/in/seema-hallon-6919073/',
            image: leaders_data.seema,
        },
        {
            name: 'Derek Swift',
            position: '_t_Head of Marketing & Global Partnerships_t_',
            link: 'https://www.linkedin.com/in/derek-swift-5787208/',
            image: leaders_data.derek,
        },
        {
            name: 'Waqas Awan',
            position: '_t_Vice President of Product_t_',
            link: 'https://www.linkedin.com/in/waqasawan/',
            image: leaders_data.waqas,
        },
        {
            name: 'Raunak Kathuria',
            position: '_t_Vice President of Engineering_t_',
            link: 'https://www.linkedin.com/in/raunakkathuria/',
            image: leaders_data.raunak,
        },
        {
            name: 'Edwin Raspe',
            position: '_t_Vice President of IT Operations_t_',
            link: 'https://my.linkedin.com/in/edwin-raspe-210a722/',
            image: leaders_data.edwin,
        },
        {
            name: 'Kaveh Mousavi Zamani',
            position: '_t_Vice President of Engineering_t_',
            link: 'https://de.linkedin.com/in/kavehmz/',
            image: leaders_data.kaveh,
        },
        {
            name: 'Jeyavarthini Vairakanan',
            position: '_t_Vice President of Customer Support_t_',
            link: 'https://www.linkedin.com/in/jeyavarthini-vairakanan-812b7a121/',
            image: leaders_data.jeya,
        },
        {
            name: 'Gary Ross Vytialingam',
            position: '_t_Chief Audit Executive_t_',
            link: 'https://www.linkedin.com/in/gary-ross-vytialingam-37a729106/',
            image: leaders_data.gary,
        },
        {
            name: 'Jennice Lourdsamy',
            position: '_t_Head of Accounts_t_',
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
