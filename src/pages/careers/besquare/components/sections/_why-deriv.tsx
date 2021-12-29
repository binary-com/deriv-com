import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Section, ContentContainer, ImageWrapper } from '../../static/style/_why-deriv'
import { TextWrapper, Title } from '../../static/style/_common'

const query = graphql`
    query {
        participant_img1: file(relativePath: { eq: "be-square/participant1.png" }) {
            ...fadeIn
        }
        participant_img2: file(relativePath: { eq: "be-square/participant2.png" }) {
            ...fadeIn
        }
    }
`

const WhyDeriv = () => {
    const text_wrapper = {
        max_width: ['486px', '328px'],
        font_size: ['20px', '14px'],
        line_height: ['30px', '20px'],
    }
    const data = useStaticQuery(query)
    return (
        <Section>
            <ContentContainer>
                <ImageWrapper
                    data={data['participant_img1']}
                    alt="BeSquare programme participants working on code"
                    grid_area="employee-image"
                />
                <div>
                    <Title as="h2" margin={[0, '0 auto']}>
                        Why Deriv?
                    </Title>
                    <TextWrapper
                        {...text_wrapper}
                        grid_area={['unset', 'text-1']}
                        margin={['8px 0 0', '8px 0 24px']}
                    >
                        A tech powerhouse, Deriv has succeeded in bringing together technology and
                        finance to meet the needs of a global client base for over 20 years. Our
                        products include derivative trading platforms and synthetic markets,
                        delivered to our clients via trading apps and websites. Our teams consist of
                        talented professionals based in 7 countries: Malaysia (Cyberjaya, Labuan,
                        Melaka, and Ipoh), Malta, the United Arab Emirates, Paraguay, Rwanda,
                        Cyprus, and Belarus.
                    </TextWrapper>
                </div>
                <TextWrapper
                    {...text_wrapper}
                    grid_area={['unset', 'text-2']}
                    margin={['-172px 0 0', '40px 0 24px']}
                >
                    At Deriv, you can learn from talented IT teams and receive international
                    exposure by collaborating with our overseas offices. You&apos;ll get the chance
                    to work on exciting projects with state-of-the-art technologies in an inspiring
                    environment.
                </TextWrapper>
                <ImageWrapper
                    data={data['participant_img2']}
                    alt="BeSquare participant guided by experienced developer"
                    grid_area="bpo-image"
                />
            </ContentContainer>
        </Section>
    )
}
export default WhyDeriv
