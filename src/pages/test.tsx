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
                            Mobile
                        </Header>
                    </Flex>
                </SectionContainer>
            </Mobile>
            <Desktop>
                <SectionContainer direction="row">
                    <Flex>
                        <Header type="heading-3" width="fit-content">
                            Desktop
                        </Header>
                    </Flex>
                </SectionContainer>
            </Desktop>
        </Layout>
    )
}

export default WithIntl()(TestPage)
