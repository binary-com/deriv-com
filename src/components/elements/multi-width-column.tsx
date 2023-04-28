import React from 'react'
import styled from 'styled-components'
import { Container } from 'components/containers'
import { useIsRtl } from 'components/hooks/use-isrtl'
import device from 'themes/device'
//TODO: (deriv-rebranding) to make this section more reusable .

interface Props {
    firstColumnBackground: string
    secondColumnBackground: string
    firstColumnWidth: string
    secondColumnWidth: string
    mobileBackgroundImage: string
    secondColumnMobileMargin?: string
    mobilePadding?: string
}

const StyledSectionContainer = styled.section<{ mobileBG: string; mobilePadding: string }>`
    color: white;
    display: flex;
    width: 100%;
    height: 100%;
    background: #414652;
    padding: 0;
    margin-top: 20px;
    flex-direction: row;
    direction: ltr;
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
        padding: ${(props) => (props.mobilePadding ? props.mobilePadding : `80px 0`)};
        background: url(${(props) => props.mobileBG});
        background-size: cover;
        background-position: center;

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

const FirstColumn = styled(Column)<{ is_rtl: boolean }>`
    padding-right: ${(props) => (props.is_rtl ? '80px' : '50px')};
    @media ${device.tabletL} {
        padding-right: 0;
    }
`
const StyledContainer = styled(Container)`
    margin: 0;
    width: 100%;
`

const SecondColumn = styled(Column)<{ secondColumnMobileMargin: string }>`
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
        margin: ${(props) => props.secondColumnMobileMargin};
    }
`

const MultiWidthColumn: React.FC<Props> = ({
    firstColumnBackground,
    secondColumnBackground,
    firstColumnWidth,
    secondColumnWidth,
    mobileBackgroundImage,
    children,
    secondColumnMobileMargin,
    mobilePadding,
}) => {
    const is_rtl = useIsRtl()

    return (
        <StyledSectionContainer mobileBG={mobileBackgroundImage} mobilePadding={mobilePadding}>
            <Container ai="stretch" justify="flex-start" tablet_direction="column">
                <FirstColumn
                    background={firstColumnBackground}
                    width={firstColumnWidth}
                    is_rtl={is_rtl}
                >
                    <StyledContainer justify="center" ai="flex-start">
                        {children[0]}
                    </StyledContainer>
                </FirstColumn>

                <SecondColumn
                    background={secondColumnBackground}
                    width={secondColumnWidth}
                    secondColumnMobileMargin={secondColumnMobileMargin}
                >
                    {children[1]}
                </SecondColumn>
            </Container>
        </StyledSectionContainer>
    )
}

export default MultiWidthColumn
