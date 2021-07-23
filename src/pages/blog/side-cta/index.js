import React from 'react'
import { CtaContainer, LinkButtonWrapper, DownloadPdfIcon, ImageWrapper, BookImage } from './_style'
import DownloadPdf from './images/download-pdf.svg'
import { pdf_data } from './_data'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { Header } from 'components/elements'
import { Flex } from 'components/containers'
import { LinkButton } from 'components/form'

const SideCta = () => {
    return (
        <Layout>
            <Flex p="20px" jc="flex-start" tablet_jc="center">
                <CtaContainer>
                    <DownloadPdfIcon src={DownloadPdf} />
                    <Header as="h3" type="subtitle-2" mb="5px">
                        {pdf_data.title}
                    </Header>
                    <Header as="p" type="paragraph-2" weight="normal">
                        by {pdf_data.author}
                    </Header>

                    <LinkButtonWrapper>
                        <LinkButton tertiary to="/landing/ebooks/stocks/">
                            Claim free ebook
                        </LinkButton>
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
