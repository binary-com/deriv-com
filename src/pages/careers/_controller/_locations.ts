type LocationObj = {
    name: string
    display_name: string
    country: string
}

export const getDisplayLocation = ({ name, country, display_name }: LocationObj): string => {
    if (name !== 'malta') {
        return `${display_name}, ${country}`
    }
    return display_name
}
