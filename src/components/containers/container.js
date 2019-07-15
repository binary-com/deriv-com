import styled from 'styled-components'
import device from 'themes/device'

const Container = styled.div`
    display: flex;
    align-items: ${props => (props.align ? props.align : 'center')};
    justify-content: ${props => (props.justify ? props.justify : 'center')};
    width: 80%;
    ${props => {
        let margins = ''
        if (props.margin) {
            Object.keys(props.margin).forEach(margin => {
                margins += `margin-${margin}: ${props.margin[margin]}`
            })
        } else {
            margins = 'margin: 0 auto;'
        }

        return margins
    }}
    ${props => {
        let paddings = ''
        if (props.padding) {
            Object.keys(props.padding).forEach(padding => {
                paddings += `padding-${padding}: ${props.padding[padding]};`
            })
        } else {
            paddings = 'padding: 2rem 1rem;'
        }

        return paddings
    }}

    @media ${device.desktop} {
        max-width: 1024px;
    }

    @media ${device.desktopL} {
        max-width: 1400px;
    }
`

export default Container
