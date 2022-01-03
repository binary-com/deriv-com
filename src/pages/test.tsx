import React, { ReactElement } from 'react'
import { WithIntl } from 'components/localization'
import { SectionContainer, Flex, Desktop, Mobile } from 'components/containers'
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
        </Layout>
    )
}

export default WithIntl()(TestPage)
