import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    ButtonWrapper,
    ContentContainer,
    FollowUsContainer,
    IconWrapper,
    ImageWrapper,
    Link,
    FooterSection,
    TextContainer,
    TextWrapper,
    Title,
} from './style/footer'
import { besquare_signup_url } from 'common/constants'
import { Header } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import Linkedin from 'images/svg/be-square/linkedin.svg'
import Twitter from 'images/svg/be-square/twitter.svg'
import Facebook from 'images/svg/be-square/facebook.svg'
import Instagram from 'images/svg/be-square/instagram.svg'
import { DerivStore } from 'store'
const query = graphql`
    query {
        footer_image: file(relativePath: { eq: "be-square/footer-image.png" }) {
            ...fadeIn
        }
    }
`

const BeSquareFooter = () => {
    const social_media_content = [
        {
            src: Linkedin,
            alt: 'Linkedin',
            link_to: 'https://www.linkedin.com/showcase/besquarebyderiv',
        },
        {
            src: Facebook,
            alt: 'Facebook',
            link_to: 'https://www.facebook.com/BeSquareByDeriv',
        },
        {
            src: Instagram,
            alt: 'Instagram',
            link_to: 'https://www.instagram.com/besquarebyderiv',
        },
        {
            src: Twitter,
            alt: 'Twitter',
            link_to: 'https://twitter.com/besquarebyderiv',
        },
    ]

    const data = useStaticQuery(query)
    const { is_eu_country } = React.useContext(DerivStore)
    return (
        <React.Fragment>
            <FooterSection color="black" is_eu_country={is_eu_country}>
                <ContentContainer>
                    <ImageWrapper
                        data={data['footer_image']}
                        alt="Fresh graduates discussing with their laptops"
                    />
                    <TextContainer>
                        <Title as="h3">Next intake: January 2023</Title>
                        <TextWrapper
                            max_width={['510px', '328px']}
                            font_size={['20px', '16px']}
                            line_height={['30px', '24px']}
                            margin={['-24px 49px 0 0']}
                        >
                            <Header weight="normal" color="white" size="2rem">
                                Submit your application before 31 December 2022
                            </Header>

                            <Localize
                                translate_text="<1>If you have any questions, email us at </1><2>info@besquare.my</2>"
                                components={[
                                    <br key={0} />,
                                    <TextWrapper
                                        key={1}
                                        max_width={['510px', '328px']}
                                        font_size={['16px', '12px']}
                                        display={'inline'}
                                        line_height={['24px', '18px']}
                                    />,
                                    <Link
                                        font_size={['16px', '12px']}
                                        line_height={['24px', '18px']}
                                        href="mailto:info@besquare.my"
                                        key={2}
                                    />,
                                ]}
                            />
                        </TextWrapper>
                        <div>
                            <ButtonWrapper
                                secondary
                                to={besquare_signup_url}
                                external
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {localize('Apply now')}
                            </ButtonWrapper>
                        </div>
                        <FollowUsContainer>
                            <TextWrapper
                                max_width={['68px']}
                                font_size={['16px']}
                                line_height={['24px']}
                                grid_area={'follow-us'}
                                padding={'15px 0 0'}
                            >
                                {localize('Follow us')}
                            </TextWrapper>
                            {social_media_content.map(({ alt, link_to, src }, index) => (
                                <LocalizedLink
                                    key={index}
                                    external
                                    to={link_to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconWrapper
                                        src={src}
                                        alt={`${alt} icon`}
                                        width="26.67"
                                        height="26.67"
                                    />
                                </LocalizedLink>
                            ))}
                        </FollowUsContainer>
                    </TextContainer>
                </ContentContainer>
            </FooterSection>
        </React.Fragment>
    )
}

export default BeSquareFooter
