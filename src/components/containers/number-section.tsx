import React from 'react'
import { TString } from 'types/generics'
import CommonHeaderSection from 'components/elements/common-header-section'

type NumberSectionProps = {
    id?: number
    first_title?: TString
    first_subtitle?: TString
    second_title?: TString
    second_subtitle?: TString
    third_title?: TString
    third_subtitle?: TString
    fourth_title?: TString
    fourth_subtitle?: TString
    flex?: 'columns' | 'rows'
    rows?: number
    columns?: number
    gap?: string
}

const NumberSection = ({
    first_title,
    first_subtitle,
    second_title,
    second_subtitle,
    third_title,
    third_subtitle,
    fourth_title,
    fourth_subtitle,
    flex,
    rows,
    columns,
    gap,
}: NumberSectionProps) => {
    const flexDirection = flex === 'columns' ? 'column' : 'row'
    const items = [
        {
            title: first_title,
            subtitle: first_subtitle,
        },
        {
            title: second_title,
            subtitle: second_subtitle,
        },
        {
            title: third_title,
            subtitle: third_subtitle,
        },
        {
            title: fourth_title,
            subtitle: fourth_subtitle,
        },
    ]
    const styles = {
        container: {
            display: 'grid',
            flexDirection: flexDirection,
            flexWrap: 'wrap',
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: gap,
        },
    }

    return (
        <div style={styles.container as React.CSSProperties}>
            {items.map((item) => (
                <div key={item.title}>
                    <CommonHeaderSection
                        title={item.title}
                        subtitle={item.subtitle}
                        title_font_size="48px"
                        subtitle_font_size="20px"
                        bgcolor="white"
                        margin="1.5rem 0 0 0"
                    />
                </div>
            ))}
        </div>
    )
}

export default NumberSection
