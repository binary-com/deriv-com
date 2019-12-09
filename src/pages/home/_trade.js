import React from 'react'
// import { OtherPlatform } from 'components/custom/other-platforms.js'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { SectionContainer, Container } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

const StyledContainer = styled(Container)`
    @media ${device.laptop} {
        width: 100%;
    }
`
const CardContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 4rem;

    div {
        margin:0 1rem;
    }

    @media ${device.tabletL} {
        flex-direction: column;
        align-items: center;

        div {
            margin: 1rem 0;
        }
    }
`
const StyledSection = styled(SectionContainer)`
    text-align: center;

    div {
        ${Header} {
            margin: 0 auto;
            max-width: 67.6rem;
        }
    }
`
const Card = styled.div`
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0 16px 20px 0;
    background-color: #ffffff;
    min-height: 22.4rem;
    width: 32.8rem;
    border-radius: 4px;
    padding: 4rem;
    display: flex;
    flex-direction: column;
`
export const Trade = () => (
    // TODO: after home page rebuild, uncomment these codes
    // <OtherPlatform
    //     header={localize('Trade the way you like')}
    //     subHeader={localize(
    //         'Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love.',
    //     )}
    //     exclude=""
    // />
    <StyledContainer>
        <StyledSection>
            <div>
                <Header as='h2' align='center'>
                    {localize('Trade the way you like')}
                </Header>
            </div>
            <div>
                <Header as='h4' align='center' weight='500'>
                    {localize('Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love.')}
                </Header>
            </div>
            <CardContainer>
                <Card></Card>
            </CardContainer>
        </StyledSection>
    </StyledContainer>
)
