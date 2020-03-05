export const getDisplayLocation = location_obj => {
    if (location_obj.name === 'cyberjaya') {
        return `${location_obj.country}, ${location_obj.display_name}`
    }
    return location_obj.display_name
}
