import { localize } from 'components/localization'
import {
    address_cyberjaya,
    address_dubai,
    address_asuncion,
    address_labuan,
    address_malta,
} from 'common/contact-details'

export const cyberjaya = {
    name: 'cyberjaya',
    link: '/careers/locations/cyberjaya',
    display_name: localize('Cyberjaya'),
    country: localize('Malaysia'),
    thumbnail: 'thumbnail_cyberjaya',
    header_p: localize(
        'Established in 1997, Cyberjaya is the heartbeat of the Multimedia Super Corridor — a government-designated zone that aims to accelerate Malaysia’s push to become a modern, knowledge-based society.',
    ),
    first_p: localize(
        'Cyberjaya is a green township designed for sustainable living. It has an urban environment with almost half of its total development area reserved for public amenities and greenery. Cyberjaya is built upon a low carbon city framework, making it a model for sustainable future cities.',
    ),
    first_img: 'living_in_cyberjaya',
    grid_images: ['cyberjaya_grid_1', 'cyberjaya_grid_2', 'cyberjaya_grid_3', 'cyberjaya_grid_4'],
    map: 'map_cyberjaya',
    map_text: localize(
        'Our office in Cyberjaya is located in iTech Tower, a 20-storey office building in the vibrant Shaftsbury Square. Easily accessible via major highways, it takes just 30 minutes to get to Cyberjaya from downtown Kuala Lumpur.',
    ),
    address: address_cyberjaya,
    google_map_link: 'https://g.page/r/CQODFgzIJPYtEAE',
}

export const malta = {
    name: 'malta',
    link: '/careers/locations/malta',
    display_name: localize('Malta'),
    country: localize('Malta'),
    thumbnail: 'thumbnail_malta',
    header_p: localize(
        'The Republic of Malta is an island country in Southern Europe located approximately 80km south of Italy. Its rich, colourful history can be traced back thousands of years to the Neolithic period.',
    ),
    first_p: localize(
        `Life in Malta moves at a slower pace with a number of colourful festivities and religious holidays that you can look forward to every year. Malta has no shortage of museums, archaeological sites, and other places of interest if you’re looking for a culture fix.`,
    ),
    first_img: 'living_in_malta',
    grid_images: ['malta_grid_1', 'malta_grid_2', 'malta_grid_3', 'malta_grid_4'],
    map: 'map_malta',
    map_text: localize(
        'Our Malta office is located at W Business Centre in Triq Dun Karm, a strategically central location easily accessible from Malta International Airport and just a few minutes from other scenic cities like Valetta, Sliema, Swatar, and St Julians.',
    ),
    address: address_malta,
    google_map_link: 'https://g.page/r/CRyKELlnWQ3iEAE',
}

export const dubai = {
    name: 'dubai',
    link: '/careers/locations/dubai',
    display_name: localize('Dubai'),
    country: localize('United Arab Emirates'),
    thumbnail: 'thumbnail_dubai',
    header_p: localize(
        'Dubai is an independent city-state and one of the seven emirates that make up the United Arab Emirates. Dubai is the largest and most advanced emirate; it has rapidly evolved from a humble port city into a global metropolis well-known for its futuristic architecture.',
    ),
    first_p: localize(
        `Dubai offers an excellent quality of life. From safety and education to childcare and healthcare, Dubai is known as a global, modern city with sunny weather all year round. Expats make up over 90% of Dubai’s total population, and English is the language most commonly spoken.`,
    ),
    first_img: 'living_in_dubai',
    grid_images: ['dubai_grid_1', 'dubai_grid_2', 'dubai_grid_3', 'dubai_grid_4'],
    map: 'map_dubai',
    map_text: localize(
        'Our Dubai office is located at the prestigious Jumeirah Business Centre (JBC), a self-contained high-rise business tower set in the pristine DMCC free zone in Jumeirah Lake Towers (JLT). The tower is conveniently positioned between two metro stations — Damac and DMCC — and is easily accessible via major highways.',
    ),
    address: address_dubai,
}

export const labuan = {
    name: 'labuan',
    link: '/careers/locations/labuan',
    display_name: localize('Labuan'),
    country: localize('Malaysia'),
    thumbnail: 'thumbnail_labuan',
    header_p: localize(
        `Labuan is a federal territory made up of the main island, Labuan Island, and six other small islands off the coast of Sabah. Its name comes from the Malay word, 'labuhan' which means harbour. Formerly a part of the Brunei Sultanate, it was ceded to the British Crown in 1846, before joining Malaysia in 1963.`,
    ),
    first_p: localize(
        'Labuan is one of those rare gems that have yet to undergo excessive commercialisation, thus retaining its small-town charm and tight-knit community vibe. Despite its tiny size of just 92 km², Labuan has much to offer. Wreck diving sites, unspoilt beaches and World War II military attractions make it among Borneo’s most underrated destinations.',
    ),
    first_img: 'living_in_labuan',
    grid_images: ['labuan_grid_1', 'labuan_grid_2', 'labuan_grid_3', 'labuan_grid_4'],

    map: 'map_labuan',
    map_text: localize(
        'In Labuan, we are at the Paragon Labuan, a modern commercial and residential complex. This brand-new development offers a convenient variety of restaurants, cafes, and shopping.',
    ),
    address: address_labuan,
}

export const asuncion = {
    name: 'asuncion',
    link: '/careers/locations/asuncion',
    display_name: localize('Asunción'),
    country: localize('Paraguay'),
    thumbnail: 'thumbnail_asuncion',
    header_p: localize(
        `Asunción is the capital city of Paraguay and one of the oldest settlements in South America. In the past, colonial expeditions departed from Asunción to establish other important cities, leading to its nickname as the ‘Mother of Cities'.`,
    ),
    first_p: localize(
        `Asunción has one of the lowest costs of living in the world, being ranked 386th out of 441 cities by Numbeo, the world's largest database of crowdsourced consumer data. International schools with a bilingual curriculum (Spanish and English) are popular among foreigners with children. You'll also have easy access to quality healthcare with well-equipped private hospitals staffed with English-speaking doctors.`,
    ),
    first_img: 'living_in_asuncion',
    grid_images: ['asuncion_grid_1', 'asuncion_grid_2', 'asuncion_grid_3', 'asuncion_grid_4'],
    map: 'map_asuncion',
    map_text: localize(
        'In Paraguay, our office is located at Edificio Australia, a picturesque building in the financial centre area of Asunción, the capital of Paraguay. Buses are the main mode of public transportation in this metropolitan city.',
    ),
    address: address_asuncion,
}

export const locations = {
    cyberjaya: `${cyberjaya.display_name}, ${cyberjaya.country}`,
    malta: `${malta.display_name}`,
    dubai: `${dubai.display_name}, ${dubai.country}`,
    labuan: `${labuan.display_name}, ${labuan.country}`,
    asuncion: `${asuncion.display_name}, ${asuncion.country}`,
}
