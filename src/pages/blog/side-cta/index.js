import React from 'react'
import {
    CtaContainer,
    ClaimButton,
    LinkButtonWrapper,
    DownloadPdfIcon,
    ImageWrapper,
    BookImage,
} from './_style'
import DownloadPdf from './images/download-pdf.svg'
import { pdf_data } from './_data'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { Header } from 'components/elements'
import { Flex } from 'components/containers'

const SideCta = () => {
    return (
        <Layout>
            <Flex p="20px" jc="flex-start" tablet_jc="center">
                <CtaContainer>
                    <DownloadPdfIcon src={DownloadPdf} />
                    <Header as="h3" type="subtitle-2" mb="5px">
                        {pdf_data.title}
                    </Header>
                    <Header as="p" type="paragraph-2">
                        by {pdf_data.author}
                    </Header>

                    <LinkButtonWrapper>
                        <ClaimButton tertiary to="/blog/articles/">
                            Claim free ebook
                        </ClaimButton>
                    </LinkButtonWrapper>

                    <ImageWrapper>
                        <BookImage src={pdf_data.image}></BookImage>
                    </ImageWrapper>
                </CtaContainer>
            </Flex>
        </Layout>
    )
}

export default WithIntl()(SideCta)
