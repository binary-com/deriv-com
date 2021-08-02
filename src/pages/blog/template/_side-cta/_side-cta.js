import React from 'react'
import {
    CtaContainer,
    LinkButtonWrapper,
    DownloadPdfIcon,
    ImageWrapper,
    BookImage,
    StyledHeader,
} from './_style'
import DownloadPdf from './_images/download-pdf.svg'
import { pdf_data } from './_data'
import { WithIntl } from 'components/localization'
import { Header } from 'components/elements'
import { Flex } from 'components/containers'
import { LinkButton } from 'components/form'

const SideCta = () => {
    return (
        <Flex
            pt="32px"
            laptop={{ pt: '56px', pb: '40px' }}
            tabletL={{ max_width: '992px', width: '100%' }}
            jc="flex-start"
            tablet_jc="center"
        >
            <CtaContainer>
                <DownloadPdfIcon src={DownloadPdf} />
                <StyledHeader as="h3" type="subtitle-1" mb="5px">
                    {pdf_data.title}
                </StyledHeader>
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
    )
}

export default WithIntl()(SideCta)
