import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { useOutsideClick } from 'components/hooks/outside-click'
import { QueryImage, Text } from 'components/elements'
import Chevron from 'images/svg/chevron-bottom.svg'
import device from 'themes/device'

const Container = styled.div`
    position: relative;
`

const Display = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2.4rem;
    cursor: pointer;

    @media ${device.mobileL} {
        margin-right: 0.4rem;
    }
    @media ${device.mobileM} {
        margin: 0 0.2rem;
    }
`

const Arrow = styled(Chevron)`
    & path {
        fill: var(--color-white);
    }
    @media ${device.mobileL} {
        display: none;
    }
`

const Absolute = styled.div`
    position: absolute;
    z-index: -1;
    top: 5.5rem;
    left: -22rem;
    height: auto;
    background-color: var(--color-white);
    transition: all 0.35s ease-in-out;
    cursor: default;
    border-radius: 4px;
`

const FadeInDown = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`
const FadeOutUp = keyframes`
    from {
        opacity:1;
    }
    to {
        opacity:0;
    }
`
const ItemContainer = styled.div`
    background-color: var(--color-white);
    padding: 2.4rem;
    position: relative;
    width: 29.8rem;
    display: ${(props) => (props.is_open ? 'grid' : 'none')};
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4.8rem;
    grid-row-gap: 1.6rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    animation-name: ${(props) => (props.is_open ? FadeInDown : FadeOutUp)};
    animation-fill-mode: both;
    animation-duration: 0.3s;

    &::after {
        content: '';
        position: absolute;
        width: 1px;
        background: var(--color-grey-8);
        height: 22.4rem;
        top: 0;
        left: 50%;
        margin-top: 2.4rem;
        margin-bottom: 2.4rem;
    }
`

const Item = styled.div`
    display: flex;
    align-items: center;
    pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

    &:hover {
        ${Text} {
            color: var(--color-red);
        }
    }
`

const ResponsiveText = styled(Text)`
    @media ${device.mobileL} {
        display: none;
    }
`

const query = graphql`
    query {
        en: file(relativePath: { eq: "flags/en.png" }) {
            ...fadeIn
        }
        es: file(relativePath: { eq: "flags/es.png" }) {
            ...fadeIn
        }
        fr: file(relativePath: { eq: "flags/fr.png" }) {
            ...fadeIn
        }
        id: file(relativePath: { eq: "flags/id.png" }) {
            ...fadeIn
        }
        it: file(relativePath: { eq: "flags/it.png" }) {
            ...fadeIn
        }
        pl: file(relativePath: { eq: "flags/pl.png" }) {
            ...fadeIn
        }
        pt: file(relativePath: { eq: "flags/pt.png" }) {
            ...fadeIn
        }
        ru: file(relativePath: { eq: "flags/ru.png" }) {
            ...fadeIn
        }
        vi: file(relativePath: { eq: "flags/vi.png" }) {
            ...fadeIn
        }
        zh: file(relativePath: { eq: "flags/zh.png" }) {
            ...fadeIn
        }
        ac: file(relativePath: { eq: "flags/en.png" }) {
            ...fadeIn
        }
    }
`

const Dropdown = ({ default_option, onChange, option_list }) => {
    const [is_open, setOpen] = React.useState(false)
    const dropdown_ref = React.useRef(null)

    const data = useStaticQuery(query)
    useOutsideClick(dropdown_ref, () => setOpen(false))

    const toggleVisibility = () => setOpen(!is_open)

    const closeList = () => {
        setOpen(false)
    }

    const handleSelect = (value) => {
        onChange({ target: { id: value } })
        closeList()
    }

    return (
        <>
            <Container ref={dropdown_ref}>
                <Display onClick={toggleVisibility}>
                    <QueryImage width="24px" height="24px" data={data['en']} alt="english" />
                    <ResponsiveText color="white" ml="0.8rem" weight="bold" mr="0.4rem">
                        {default_option}
                    </ResponsiveText>
                    <Arrow />
                </Display>

                <Absolute>
                    <ItemContainer is_open={is_open}>
                        {option_list.map((option, idx) => {
                            const abbreviation = option.path.substring(0, 2)
                            const current_option = default_option.toLowerCase() === option.path
                            return (
                                <Item
                                    disabled={current_option}
                                    id={option.value}
                                    onClick={() => handleSelect(option.value)}
                                    key={idx}
                                >
                                    <QueryImage
                                        width="24px"
                                        height="24px"
                                        data={data[abbreviation]}
                                        alt={option.text}
                                    />
                                    <Text ml="0.8rem" color={current_option ? 'red' : 'black'}>
                                        {option.text}
                                    </Text>
                                </Item>
                            )
                        })}
                    </ItemContainer>
                </Absolute>
            </Container>
        </>
    )
}

Dropdown.propTypes = {
    default_option: PropTypes.string,
    onChange: PropTypes.func,
    option_list: PropTypes.array,
}

export default Dropdown
