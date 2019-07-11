import styled from 'styled-components'
import device from 'themes/device'

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: ${props => (props.align ? props.align : 'center')};
    justify-content: ${props => (props.justify ? props.justify : 'center')};
    padding: 2rem 1rem;
    ${props => {
        let margins = ''
        if (props.margin) {
            Object.keys(props.margin).forEach(margin => {
                margins += `margin-${margin}: ${props.margin[margin]}`
            })
        }
        return margins
    }}
    ${props => {
        let paddings = ''
        if (props.padding) {
            Object.keys(props.padding).forEach(padding => {
                paddings += `padding-${padding}: ${props.padding[padding]}`
            })
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
