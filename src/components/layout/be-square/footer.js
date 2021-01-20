import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    ButtonWrapper,
    ContentContainer,
    FollowUsContainer,
    ImageWrapper,
    Link,
    Section,
    TextContainer,
    TextWrapper,
    Title,
} from './style/footer'
import { localize, Localize } from 'components/localization'
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
    const data = useStaticQuery(query)
    return (
        <React.Fragment>
            <Section color="black">
                <ContentContainer>
                    <ImageWrapper data={data['footer_image']} alt="Deriv employee" />
                    <TextContainer>
                        <Title>{localize('Next intake: July 2021')}</Title>
                        <TextWrapper
                            max_width={['510px', '328px']}
                            font_size={['20px', '16px']}
                            line_height={['30px', '24px']}
                        >
                            <Localize
                                translate_text="If you have any questions, email us at <0>info@besquare.my</0>"
                                components={[
                                    <Link
                                        font_size={['20px', '16px']}
                                        line_height={['30px', '24px']}
                                        href="mailto:info@besquare.my"
                                        key={0}
                                    />,
                                ]}
                            />
                        </TextWrapper>
                        <ButtonWrapper type="submit" secondary="true" to="#">
                            {localize('Apply now')}
                        </ButtonWrapper>
                        <FollowUsContainer>
                            <TextWrapper
                                max_width={['68px']}
                                font_size={['16px']}
                                line_height={['24px']}
                            >
                                {localize('Follow us')}
                            </TextWrapper>
                            <img src={Linkedin} alt="Linkedin icon" width="26.67" height="26.67" />
                            <img src={Facebook} alt="Facebook icon" width="26.67" height="26.67" />
                            <img
                                src={Instagram}
                                alt="Instagram icon"
                                width="26.67"
                                height="26.67"
                            />
                            <img src={Twitter} alt="Twitter icon" width="26.67" height="26.67" />
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
                    &copy; {localize('2020 Deriv | All rights reserved')}
                </TextWrapper>
            </Section>
        </React.Fragment>
    )
}
export default BeSquareFooter
