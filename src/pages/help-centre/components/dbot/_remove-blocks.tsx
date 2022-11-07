import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
import DeleteImage from 'images/common/help-centre/dbot-delete.png'

const Wrapper = styled.div`
    margin-top: 2.4rem;
    margin-left: 7rem;
`

const Image = styled.img`
    width: 7.4rem;

    @media ${device.mobileL} {
        width: 10rem;
    }
`

const RemoveBlocks = () => (
    <Header size="16px" weight="normal" mt="1.7rem">
        <Localize translate_text="_t_Just click on the block you want to remove and press 'Delete' on your keyboard. You can also drag the block to the recycle bin icon at the lower right corner of the workspace._t_" />
        <Wrapper>
            <Image src={DeleteImage} alt="Remove block" loading="lazy" />
        </Wrapper>
    </Header>
)

export default RemoveBlocks
