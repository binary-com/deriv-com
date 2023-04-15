import React from 'react'
import styled from 'styled-components'
import { Container } from 'components/containers'
import device from 'themes/device'

interface Props {
    firstColumnBackground: string
    secondColumnBackground: string
    firstColumnWidth: string
    secondColumnWidth: string
    mobileBackgroundImage: string
}

const StyledSectionContainer = styled.section<{ mobileBG: string }>`
    color: white;
    display: flex;
    width: 100%;
    height: 100%;
    background: #414652;
    padding: 0;
    margin-top: 20px;
    flex-direction: row;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        width: 50%;
        height: 100%;
        background-color: #4c515c;
    }
    @media ${device.tabletL} {
        flex-direction: column;
        padding: 80px 0;
        background: url(${(props) => props.mobileBG});
        background-size: cover;
        &::before {
            content: none;
        }
    }
`

const Column = styled.div<{ background: string; width: string }>`
    background: ${(props) => props.background};
    width: ${(props) => props.width};
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.tabletL} {
        width: 100%;
        height: 250px;
        background: none;
    }
`

const FirstColumn = styled(Column)`
    padding-right: 50px;

    @media ${device.tabletL} {
        padding-right: 0;
    }
`
const StyledContainer = styled(Container)`
    margin: 0;
    width: 100%;
`

const SecondColumn = styled(Column)`
    background-image: url(${(props) => props.background});
    background-size: cover;
    width: ${(props) => props.width};
    position: relative;
    left: -100px;
    padding-left: 90px;
    display: flex;

    @media ${device.tabletL} {
        background-image: none;
        width: 100%;
        left: 0;
        padding-left: 0;
    }
`

const MultiWidthColumn: React.FC<Props> = ({
    firstColumnBackground,
    secondColumnBackground,
    firstColumnWidth,
    secondColumnWidth,
    mobileBackgroundImage,
    children,
}) => {
    return (
        <StyledSectionContainer mobileBG={mobileBackgroundImage}>
            <Container ai="stretch" justify="flex-start" tablet_direction="column">
                <FirstColumn background={firstColumnBackground} width={firstColumnWidth}>
                    <StyledContainer justify="center" ai="flex-start">
                        {children[0]}
                    </StyledContainer>
                </FirstColumn>

                <SecondColumn background={secondColumnBackground} width={secondColumnWidth}>
                    {children[1]}
                </SecondColumn>
            </Container>
        </StyledSectionContainer>
    )
}

export default MultiWidthColumn
