import React from 'react'
import { Container, ContentContainer, ImageWrapper, TextWrapper, Title } from '../style/_why-deriv'
import { Quil5Image, WhyDerivImage } from '../images/_why-deriv'
import { localize } from 'components/localization'

const WhyDeriv = () => (
    <Container>
        <ContentContainer>
            <ImageWrapper src={WhyDerivImage} alt="deriv employee" grid_area="employee-image" />
            <div>
                <Title>{localize('Why Deriv?')}</Title>
                <TextWrapper grid_area="text-1" margin_m="8px 0 24px" margin="8px 0 0">
                    {localize(
                        'A tech powerhouse, Deriv has succeeded in bringing together technology and finance to meet the needs of a global client base for over 20 years. Our products include derivative trading platforms and synthetic markets, delivered to our clients via trading apps and websites. Our teams consist of talented professionals based in 7 countries: Malaysia (Cyberjaya, Labuan, Melaka, and Ipoh), Malta, the United Arab Emirates, Paraguay, Rwanda, Cyprus, and Belarus.',
                    )}
                </TextWrapper>
            </div>
            <TextWrapper grid_area="text-2" margin_m="40px 0 24px" margin="auto 0">
                {localize(
                    'At Deriv, you can learn from our talented IT teams of dedicated innovators and receive international exposure by collaborating with the overseas offices on challenging and exciting projects. Work with state-of-the-art electronic devices and enjoy the facilities of Deriv’s prestigious new headquarters at Quill 5 in Cyberjaya, where a floor has been dedicated to our BeSquare programme.',
                )}
            </TextWrapper>
            <ImageWrapper src={Quil5Image} alt="quil5 building" grid_area="quil5-image" />
        </ContentContainer>
    </Container>
)

export default WhyDeriv
