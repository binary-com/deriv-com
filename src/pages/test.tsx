import React, { ReactElement } from 'react'
import { WithIntl } from 'components/localization'
import {
    SectionContainer,
    Flex,
    Desktop,
    Mobile,
    EU,
    UK,
    ROW,
    NonEU,
    NonUK,
} from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'

const TestPage = (): ReactElement => {
    return (
        <Layout>
            <Mobile>
                <SectionContainer direction="row">
                    <Flex>
                        <Header type="heading-3" width="fit-content">
                            Mobile (Default: 768px)
                        </Header>
                    </Flex>
                </SectionContainer>
            </Mobile>
            <Desktop>
                <SectionContainer direction="row">
                    <Flex>
                        <Header type="heading-3" width="fit-content">
                            Desktop (Default: 768px)
                        </Header>
                    </Flex>
                </SectionContainer>
            </Desktop>

            <Mobile breakpoint={512}>
                <SectionContainer direction="row">
                    <Flex>
                        <Header type="heading-3" width="fit-content">
                            Mobile (Breakpoint 512px)
                        </Header>
                    </Flex>
                </SectionContainer>
            </Mobile>
            <Desktop breakpoint={512}>
                <SectionContainer direction="row">
                    <Flex>
                        <Header type="heading-3" width="fit-content">
                            Desktop (Breakpoint 512px)
                        </Header>
                    </Flex>
                </SectionContainer>
            </Desktop>

            <Mobile breakpoint={1024}>
                <SectionContainer direction="row">
                    <Flex>
                        <Header type="heading-3" width="fit-content">
                            Mobile (Breakpoint 1024px)
                        </Header>
                    </Flex>
                </SectionContainer>
            </Mobile>
            <Desktop breakpoint={1024}>
                <SectionContainer direction="row">
                    <Flex>
                        <Header type="heading-3" width="fit-content">
                            Desktop (Breakpoint 1024px)
                        </Header>
                    </Flex>
                </SectionContainer>
            </Desktop>

            <EU>
                <SectionContainer direction="row">
                    <Flex>
                        <Header type="heading-3" width="fit-content">
                            You are using EU IP
                        </Header>
                    </Flex>
                </SectionContainer>
            </EU>

            <UK>
                <SectionContainer direction="row">
                    <Flex>
                        <Header type="heading-3" width="fit-content">
                            You are using UK IP
                        </Header>
                    </Flex>
                </SectionContainer>
            </UK>
            <ROW>
                <SectionContainer direction="row">
                    <Flex>
                        <Header type="heading-3" width="fit-content">
                            You are using neither UK nor EU IP
                        </Header>
                    </Flex>
                </SectionContainer>
            </ROW>
            <NonEU>
                <SectionContainer direction="row">
                    <Flex>
                        <Header type="heading-3" width="fit-content">
                            You are using NON EU IP
                        </Header>
                    </Flex>
                </SectionContainer>
            </NonEU>
            <NonUK>
                <SectionContainer direction="row">
                    <Flex>
                        <Header type="heading-3" width="fit-content">
                            You are using NON UK IP
                        </Header>
                    </Flex>
                </SectionContainer>
            </NonUK>
        </Layout>
    )
}

export default WithIntl()(TestPage)
