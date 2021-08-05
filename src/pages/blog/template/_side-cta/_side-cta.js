import React from 'react'
import {
    CtaContainer,
    LinkButtonWrapper,
    DownloadPdfIcon,
    ImageWrapper,
    BookImage,
    StyledHeader,
    StyledLinkButton,
} from './_style'
import DownloadPdf from './_images/download-pdf.svg'
import { pdf_data } from './_data'
import { WithIntl } from 'components/localization'
import { Header } from 'components/elements'
import { Flex } from 'components/containers'

const SideCta = () => {
    return (
        <Flex
            mt="40px"
            laptop={{ mb: '40px' }}
            tabletL={{ max_width: '992px', width: '100%', mt: '0' }}
            jc="flex-start"
            tablet_jc="center"
        >
            <CtaContainer>
                <DownloadPdfIcon src={DownloadPdf} />
                <StyledHeader as="h3" type="subtitle-1">
                    {pdf_data.title}
                </StyledHeader>
                <Header as="p" type="paragraph-2" weight="normal">
                    by {pdf_data.author}
                </Header>

                <LinkButtonWrapper>
                    <StyledLinkButton tertiary to="/landing/ebooks/stocks/">
                        Claim free ebook
                    </StyledLinkButton>
                </LinkButtonWrapper>

                <ImageWrapper>
                    <BookImage src={pdf_data.image}></BookImage>
                </ImageWrapper>
            </CtaContainer>
        </Flex>
    )
}

export default WithIntl()(SideCta)
