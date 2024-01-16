new line(s) to replace
    border-radius: 10px;
    height: 35rem;
    background-image: url(${banner}), url(${bannerBG});
    background-repeat: no-repeat, no-repeat;
    background-size: 48.6rem 28rem, cover;
    background-position: bottom right;
    @media ${device.laptopM} {
        height: 360px;
    }
    @media (max-width: 1100px) {
        height: 330px;
    }
    @media ${device.laptopM} {
        background-size: 433px 305px, cover;
    }
    @media ${device.tabletL} {
        height: 536px;
        max-width: 360px;
        background-size: 296px 180px, cover;
        background-position: bottom center;
    }
    @media (max-width: 355px) {
        height: 580px;
    }
`
new line(s) to replace
    font-weight: bold;
    color: white;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 16px;

    @media ${device.tabletL} {
        max-width: 378px;
    }
`

const Subtitle = styled(Header)`
    min-width: 58.8rem;

    @media (max-width: 1100px) {
        min-width: 264px;
        margin-bottom: 24px;
    }
    @media (max-width: 355px) {
        min-width: calc(100% - 16px);
    }
`

const StyledLinkButton = styled(LinkButton)`
    width: fit-content;

    @media ${device.tabletL} {
        padding-bottom: 30px;
    }
`

const P2PBanner = () => {
    return (
        <StyledSection>
            <MainWrapper>
                <LeftWrapper>
                    <LeftChild>
                        <StyledH3>
                            <Localize translate_text="_t_Looking for Deriv P2P instead?_t_" />
                        </StyledH3>
                        <Subtitle as="h4" type="subtitle-1" weight="none" color="white" mb="24px">
                            <Localize
                                translate_text="_t_We offer a <0>peer-to-peer payment service</0> where you can make deposits and withdrawals in minutes via exchanges with fellow traders._t_"
                                components={[
                                    <Header key={0} as="span" type="subtitle-1" color="red" />,
                                ]}
                            />
                        </Subtitle>
                        <StyledLinkButton
                            secondary
                            external
                            to="/p2p/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Localize translate_text="_t_Learn more_t_" />
                        </StyledLinkButton>
                    </LeftChild>
                </LeftWrapper>
            </MainWrapper>
        </StyledSection>
    )
}
export default P2PBanner
