import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    ButtonWrapper,
    ContentContainer,
    FollowUsContainer,
    IconWrapper,
    ImageWrapper,
    Link,
    Section,
    TextContainer,
    TextWrapper,
    Title,
} from './style/footer'
import { besquare_signup_url } from 'common/constants'
import { localize, Localize, LocalizedLink } from 'components/localization'
import Linkedin from 'images/svg/be-square/linkedin.svg'
import Twitter from 'images/svg/be-square/twitter.svg'
import Facebook from 'images/svg/be-square/facebook.svg'
import Instagram from 'images/svg/be-square/instagram.svg'

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
    return (
        <React.Fragment>
            <Section color="black">
                <ContentContainer>
                    <ImageWrapper
                        data={data['footer_image']}
                        alt="Fresh graduates discussing with their laptops"
                    />
                    <TextContainer>
                        <Title as="h3">{localize('Next intake: July 2021')}</Title>
                        <TextWrapper
                            max_width={['510px', '328px']}
                            font_size={['20px', '16px']}
                            line_height={['30px', '24px']}
                        >
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
                                secondary="true"
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
                                margin={'13px 0 0'}
                            >
                                {localize('Follow us')}
                            </TextWrapper>
                            {social_media_content.map(({ alt, link_to, src }, index) => (
                                <LocalizedLink
                                    key={index}
                                    external="true"
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
            </Section>
            <Section color="black-3">
                <TextWrapper
                    max_width={['100%']}
                    font_size={['14px']}
                    line_height={['19.6px']}
                    padding={['21px 120px', '19px 16px']}
                >
                    &copy; {localize('2021 Deriv | All rights reserved')}
                </TextWrapper>
            </Section>
        </React.Fragment>
    )
}
export default BeSquareFooter
