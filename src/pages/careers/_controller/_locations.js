export const getDisplayLocation = location_obj => {
    if (location_obj.name !== 'malta') {
        return `${location_obj.display_name}, ${location_obj.country}`
    }
    return location_obj.display_name
}
