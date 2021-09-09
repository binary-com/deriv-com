import React, { Children, useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'

const Navigation = styled(Flex)`
    margin: 80px 0 0 0;
`

const LineNavigation = styled.div`
    width: ${(props) => props.width ?? '8rem'};
    height: ${(props) => props.height ?? '0.4rem'};
    background-color: ${(props) => props.background ?? 'var(--color-grey-7)'};
    margin: 0 ${(props) => props.margin ?? '0.8rem'} 0 0;
    cursor: pointer;

    &.active {
        background-color: ${(props) => props.activeBackground ?? 'var(--color-grey-5)'};
        cursor: default;
    }
`

const renderNavigations = (count, selected_index, setSelected, style) => {
    const items = Array.from(Array(count).keys())
    const is_tabbable = count > 1

    if (is_tabbable > 1) {
        return (
            <Navigation width="100%" jc="center" height="10px">
                {items.map((_, index) => (
                    <LineNavigation
                        activeBackground={style && style.activeBackground}
                        background={style && style.background}
                        height={style && style.height}
                        margin={style && style.margin}
                        width={style && style.width}
                        className={index === selected_index ? 'active' : ''}
                        key={`navig-${index}`}
                        onClick={() => {
                            setSelected(index)
                        }}
                    />
                ))}
            </Navigation>
        )
    }

    return <React.Fragment />
}

const LineTab = ({ children, default_selected = 0, navigation_style }) => {
    const [selected, setSelected] = useState(default_selected)
    const children_array = Children.toArray(children)

    useEffect(() => {
        setSelected(default_selected)
    }, [default_selected])

    const navigations = renderNavigations(
        children_array.length,
        selected,
        setSelected,
        navigation_style,
    )

    return (
        <Flex direction="column">
            <React.Fragment>
                {children_array.map((child, child_key) => {
                    if (child_key == selected) {
                        return child
                    }
                })}
            </React.Fragment>
            {navigations}
        </Flex>
    )
}

LineTab.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    default_selected: PropTypes.number,
    navigation_style: PropTypes.shape({
        activeBackground: PropTypes.string,
        background: PropTypes.string,
        height: PropTypes.string,
        margin: PropTypes.string,
        width: PropTypes.string,
    }),
}

export default LineTab
