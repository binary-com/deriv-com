import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { Container, SectionContainer } from 'components/containers'
import device from 'themes/device'

interface Props {
    firstColumnBackground: string
    secondColumnBackground: string
    firstColumnWidth: string
    secondColumnWidth: string
}

const StyledSectionContainer = styled(SectionContainer)`
    color: white;
    display: flex;
    width: 100%;
    height: 100%;
    background: #414652;
    padding: 0 !important;
    margin-top: 20px;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const Column = styled.div<{ background: string; width: string }>`
    background: ${(props) => props.background};
    width: ${(props) => props.width};
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        width: ${(props) => props.width};
    }

    @media (max-width: 767px) {
        width: 100%;
        height: 200px;
    }
`

const FirstColumn = styled(Column)`
    padding-right: 50px;

    @media (max-width: 767px) {
        padding-right: 0;
    }
`

const SecondColumn = styled(Column)`
    background-image: url(${(props) => props.background});
    background-size: cover;
    width: ${(props) => props.width};
    position: relative;
    left: -90px;
    padding-left: 90px;

    @media (max-width: 767px) {
        left: 0;
        padding-left: 0;
    }
`

const StyledHeader = styled(Header)`
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: white;

    @media ${device.tablet} {
        text-align: center;
        max-width: 80vw;
        margin-bottom: 8px;
        font-size: 24px;
        line-height: 30px;
    }
`

const MultiWidthColumn: React.FC<Props> = ({
    firstColumnBackground,
    secondColumnBackground,
    firstColumnWidth,
    secondColumnWidth,
    children,
}) => {
    return (
        <StyledSectionContainer>
            <FirstColumn background={firstColumnBackground} width={firstColumnWidth}>
                <Container justify="center" ai="flex-start">
                    {/* <StyledHeader as="h2" type="section-title" align="center" mb="1.2rem" lh="1.25"> */}
                    {children[0]}
                    {/* </StyledHeader> */}
                </Container>
            </FirstColumn>

            <SecondColumn background={secondColumnBackground} width={secondColumnWidth}>
                <StyledHeader as="h2" type="section-title" align="center" mb="1.2rem" lh="1.25">
                    {children[1]}
                </StyledHeader>
            </SecondColumn>
        </StyledSectionContainer>
    )
}

export default MultiWidthColumn
