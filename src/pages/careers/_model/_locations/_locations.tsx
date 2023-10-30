import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {
    address_cyberjaya,
    address_dubai,
    address_ciudad,
    address_asuncion,
    address_labuan,
    address_georgetown,
    address_malta,
    address_ipoh,
    address_melaka,
    address_cyprus,
    address_rwanda,
    address_france,
    address_guernsey,
    address_roadtown,
    address_jordan,
    address_singapore,
    address_vanuatu,
    address_hongkong,
    address_reading,
    address_berlin,
} from './_contact-details'
import { LocationsType } from './_locations.types'
import MalaysiaFlagIcon from 'images/svg/careers/flag_malaysia.svg'
import ParaguayFlagIcon from 'images/svg/careers/flag_paraguay.svg'
import UAEFlagIcon from 'images/svg/careers/flag_uae.svg'
import MaltaFlagIcon from 'images/svg/careers/flag_malta.svg'
import CyprusFlagIcon from 'images/svg/careers/flag_cyprus.svg'
import CaymanFlagIcon from 'images/svg/careers/flag_cayman.svg'
import RwandaFlagIcon from 'images/svg/careers/flag_rwanda.svg'
import BVIFlagIcon from 'images/svg/careers/flag_bvi.svg'
import UKFlagIcon from 'images/svg/careers/flag_uk.svg'
import FranceFlagIcon from 'images/svg/careers/flag_france.svg'
import ChannelIslandsFlagIcon from 'images/svg/careers/flag._channel_islands.svg'
import GermanyFlagIcon from 'images/svg/careers/flag_germany.svg'
import VanuatuFlagIcon from 'images/svg/careers/flag_vanuatu.svg'
import JordanFlagIcon from 'images/svg/careers/flag_jordan.svg'
import SingaporeFlagIcon from 'images/svg/careers/flag_singapore.svg'
import { localize } from 'components/localization'
import HongKong from 'images/svg/careers/flag_hongkong.svg'

export const cyberjaya: LocationsType = {
    name: 'cyberjaya',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/cyberjaya.png"
            alt={localize('_t_Cyberjaya bridge and lake view_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'Cyberjaya',
    continent: 'asia',
    display_continent: 'Asia',
    link: '/careers/locations/cyberjaya/',
    display_name: 'Cyberjaya',
    display_thumbnail_name: 'Cyberjaya',
    display_title_name: 'Cyberjaya',
    img_alt: 'Cyberjaya bridge and lake view',
    map_office_name: 'Services Sdn Bhd',
    country: 'Malaysia',
    flagIcon: MalaysiaFlagIcon,
    thumbnail: 'thumbnail_cyberjaya',
    first_p:
        "Deriv Group's operational headquarters is located in Cyberjaya and is home to a majority of teams such as Back-end and Front-end, IT Operations, Customer Support, Compliance, Marketing, Trading, Business Intelligence, and Human Resources, to name a few. Our teams’ efforts are focused on delivering a comprehensive suite of digital trading solutions with agile customer support.",
    first_img: 'living_in_cyberjaya',
    first_img_alt: 'Group of ladies at shopping outlets',
    grid_images: ['cyberjaya_grid_1', 'cyberjaya_grid_2', 'cyberjaya_grid_3', 'cyberjaya_grid_4'],
    grid_img_alt: [
        'Man working on desktop ',
        'People working at office',
        'Welcome entrance ',
        'Boys playing foosball',
    ],
    map: 'ChIJQyOushS3zTER-d3unGdC7P0',
    badge: 'malaysia_great_place_to_work_badge',
    badge_alt: 'Malaysia Great Place to Work 2022 Certification Badge',
    map_text:
        'We believe in fostering an environment that allows a balanced lifestyle between work responsibilities and personal commitments. Every project is exciting, keeping you intellectually challenged. If you want to be inspired every day, join our team in Cyberjaya.',
    address: address_cyberjaya,
    google_map_link: 'https://goo.gl/maps/taw811vL1Wht9z4YA',
    has_iframe: true,
}

export const malta: LocationsType = {
    name: 'malta',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/malta.jpg"
            alt={localize('_t_Malta Senglea Church_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'Birkirkara',
    continent: 'europe',
    display_continent: 'Europe',
    link: '/careers/locations/malta/',
    display_name: 'Malta',
    display_thumbnail_name: 'Malta',
    display_title_name: 'Malta',
    img_alt: 'Malta Senglea Church',
    map_office_name: '(Europe) Ltd',
    country: 'Malta',
    flagIcon: MaltaFlagIcon,
    thumbnail: 'thumbnail_malta',
    first_p: `Opened in 2000, Deriv (Europe) Ltd is Deriv Group's first office. Our Compliance, Customer Support, and Payment Operations teams based here offer innovative and simplified digital solutions and provide stellar client support, which is a longstanding top priority for Deriv.`,
    first_img: 'living_in_malta',
    first_img_alt: 'Beach and boats in Malta',
    grid_images: ['malta_grid_1', 'malta_grid_2', 'malta_grid_3', 'malta_grid_4'],
    grid_img_alt: [
        'Two people working on a laptop',
        'Girl working on a laptop',
        'Discussion in a group',
        'Group playing foosball',
    ],
    map: 'ChIJN3l6prJaDhMRHIoQuWdZDeI',
    badge: 'malta_great_place_to_work_badge',
    badge_alt: 'Malta Great Place to Work 2022 Certification Badge',
    map_text:
        'Deriv (Europe) Ltd has a dynamic work culture. We perform a wide range of tasks crucial to the company’s sustainability and ambition. If work challenges excite you and being completely hands-on thrills you, join our team in Malta.',
    address: address_malta,
    google_map_link: 'https://g.page/r/CRyKELlnWQ3iEAE',
    has_iframe: true,
}

export const dubai: LocationsType = {
    name: 'dubai',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/dubai.jpg"
            alt={localize('_t_Dubai Skyscrappers_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'Dubai',
    continent: 'middle_east',
    display_continent: 'Middle East',
    link: '/careers/locations/dubai/',
    display_name: 'Dubai',
    display_thumbnail_name: 'Dubai',
    display_title_name: 'Dubai',
    img_alt: 'Dubai Skyscrappers',
    map_office_name: 'DMCC',
    country: 'United Arab Emirates',
    flagIcon: UAEFlagIcon,
    thumbnail: 'thumbnail_dubai',
    first_p: `At Deriv DMCC, our diverse and experienced Marketing, Quality Assurance, Customer Support, and Compliance teams combine their knowledge and experience to provide digital solutions and establish a sustainable relationship with our clients.`,
    first_img: 'living_in_dubai',
    first_img_alt: 'Crowd gathering',
    grid_images: ['dubai_grid_1', 'dubai_grid_2', 'dubai_grid_3', 'dubai_grid_4'],
    grid_img_alt: [
        'People having lunch in tables',
        'Group meetings',
        'Team picture',
        'Group discussions',
    ],
    map: 'ChIJoXO3yRZtXz4RPzg6AXRz1iU',
    map_text:
        'Deriv DMCC provides limitless opportunities to grow. Here, you can work on remarkable projects that showcase your mettle on a global scale. You will have the scope to expand your career horizontally and vertically. If you are keen on learning and enjoy a fulfilling career journey, join our team in Dubai.',
    address: address_dubai,
    google_map_link: 'https://goo.gl/maps/xx4q4ui1NhgVtE8J7',
    has_iframe: true,
    badge: 'dubai_great_place_to_work_badge',
    badge_alt: 'Dubai Great Place to Work 2022 Certification Badge',
}

export const labuan: LocationsType = {
    name: 'labuan',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/labuan.jpg"
            alt={localize('_t_Labuan clock tower_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'Labuan',
    continent: 'asia',
    display_continent: 'Asia',
    link: '/careers/locations/labuan/',
    display_name: 'Labuan',
    display_thumbnail_name: 'Labuan',
    display_title_name: 'Labuan',
    img_alt: 'Labuan clock tower',
    map_office_name: '(FX) Ltd',
    country: 'Malaysia',
    flagIcon: MalaysiaFlagIcon,
    thumbnail: 'thumbnail_labuan',
    first_p:
        'Deriv (FX) Ltd is home to a highly skilled workforce comprising of Customer Support, Accounts & Payments, and Compliance teams. Customer satisfaction, the company’s financial health, and compliance with regulations are the main targets of our Labuan team.',
    first_img: 'living_in_labuan',
    first_img_alt: 'Hot air balloons',
    grid_images: ['labuan_grid_1', 'labuan_grid_2', 'labuan_grid_3', 'labuan_grid_4'],
    grid_img_alt: [
        'Discussion between two girls',
        'Girl have a call using headphones',
        'Man explaining the presentation',
        'Round table discussion',
    ],
    map: 'ChIJufrjrbsZIzIRXIqlV1KLS14',
    badge: 'malaysia_great_place_to_work_badge',
    badge_alt: 'Malaysia Great Place to Work 2022 Certification Badge',
    map_text:
        'Our people drive our growth and success. We are expanding our business, which offers exciting work engagements. We provide an inclusive and rewarding work culture that encourages employee development and work-life balance. If you are as passionate about your future as we are, join our team in Labuan.',
    address: address_labuan,
    google_map_link: 'https://goo.gl/maps/HGEKsJfUXHrTAj299',
    has_iframe: true,
}

export const asuncion: LocationsType = {
    name: 'asuncion',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/asuncion.png"
            alt={localize('_t_Palace of the Lopez - Asuncion_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
            style={{ width: '100%' }}
        />
    ),
    job_location: 'Asuncion',
    continent: 'latam',
    display_continent: 'Latam',
    link: '/careers/locations/asuncion/',
    display_name: 'Asunción',
    display_thumbnail_name: 'Asunción',
    display_title_name: 'Asunción',
    img_alt: 'Palace of the Lopez - Asuncion',
    map_office_name: 'Paraguay S.A.',
    country: 'Paraguay',
    flagIcon: ParaguayFlagIcon,
    thumbnail: 'thumbnail_asuncion',
    first_p: `Deriv Paraguay S.A. supports the Latin American market with Marketing, Customer Support, Accounts & Payments, and Back-end teams. The teams are constantly working on activities best suited for brand awareness, empowering customers with solutions, taking care of accounting responsibilities, and strengthening our IT infrastructure.`,
    first_img: 'living_in_asuncion',
    first_img_alt: 'Taxi and bikes parked nearby road',
    badge: 'asuncion_great_place_to_work_badge',
    badge_alt: 'Asuncion Great Place To Work Badge',
    grid_images: ['asuncion_grid_1', 'asuncion_grid_2', 'asuncion_grid_3', 'asuncion_grid_4'],
    grid_img_alt: [
        'Man teaching a group of people',
        'Girl working in her cubicle',
        'Man working in his laptop',
        'Bunch of desks and tables',
    ],
    map: 'ChIJJee11ZCpXZQRmP9o0jGMz98',
    map_text:
        'The office culture in Paraguay S.A. is lively and inspires collaboration. The team is young, and they move fast while delivering responsibilities with a focus on impact. The team work together closely and enjoy fun team bonding sessions. If you are on the lookout for a dynamic work environment that fuels career growth, join our team in Asunción.',
    address: address_asuncion,
    google_map_link: 'https://goo.gl/maps/uq2GzB97tLumihfN6',
    has_iframe: true,
}

export const melaka: LocationsType = {
    name: 'melaka',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/melaka.jpg"
            alt={localize('_t_Dutch square of Melaka_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'Melaka',
    continent: 'asia',
    display_continent: 'Asia',
    link: '/careers/locations/melaka/',
    display_name: 'Melaka',
    display_thumbnail_name: 'Melaka',
    display_title_name: 'Melaka',
    img_alt: 'Dutch square of Melaka',
    map_office_name: 'Services Sdn Bhd',
    country: 'Malaysia',
    flagIcon: MalaysiaFlagIcon,
    thumbnail: 'thumbnail_melaka',
    first_p:
        "Opened in 2020, our Melaka office houses the Accounts & Payments and Customer Support teams. These teams work hard to fulfil the company's financial obligations and meet customer expectations.",
    first_img: 'living_in_melaka',
    first_img_alt: 'Houses nearby water canal',
    grid_images: ['melaka_grid_1', 'melaka_grid_2', 'melaka_grid_3', 'melaka_grid_4'],
    grid_img_alt: [
        'Customer support team smiling',
        'Girl presenting pie chart',
        'Online call with teams',
        'Man playing pool',
    ],
    map: 'ChIJk1cT0pTx0TERIAdpj9tM6KM',
    badge: 'malaysia_great_place_to_work_badge',
    badge_alt: 'Malaysia Great Place to Work 2022 Certification Badge',
    map_text:
        'We are proud to be working with some of the best minds in the industry. We nurture a learning culture to enable our people to unlock growth opportunities. If you wish to learn and gain experience with the best talent in the industry, join our team in Melaka.',
    address: address_melaka,
    google_map_link: 'https://goo.gl/maps/n2bm52JrWy9M2ARV9',
    has_iframe: true,
}

export const ipoh: LocationsType = {
    name: 'ipoh',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/ipoh.jpg"
            alt={localize('_t_White architecture building in Ipoh_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'Ipoh',
    continent: 'asia',
    display_continent: 'Asia',
    link: '/careers/locations/ipoh/',
    display_name: 'Ipoh',
    display_thumbnail_name: 'Ipoh',
    display_title_name: 'Ipoh',
    img_alt: 'White architecture building in Ipoh',
    map_office_name: 'Services Sdn Bhd',
    country: 'Malaysia',
    flagIcon: MalaysiaFlagIcon,
    thumbnail: 'thumbnail_ipoh',
    first_p: `Deriv Services Sdn Bhd is home to two teams: Customer Support, which focuses on effective, efficient, and customer-oriented delivery, and Accounts & Payments, which is responsible for the company's financial health.`,
    first_img: 'living_in_ipoh',
    first_img_alt: 'People shopping and clicking picture',
    grid_images: ['ipoh_grid_1', 'ipoh_grid_2', 'ipoh_grid_3', 'ipoh_grid_4'],
    grid_img_alt: [
        'Girl focused while working',
        'Man focused while working',
        'People working on their laptops',
        'Girls having a coffee break',
    ],
    map: 'ChIJOadQ93_tyjERnNrpdgyMd48',
    badge: 'malaysia_great_place_to_work_badge',
    badge_alt: 'Malaysia Great Place to Work 2022 Certification Badge',
    map_text:
        'Our work culture integrates values such as diversity and inclusion, customer focus, and innovation. Our people have a curious mindset with a determination to grow. If you like to see the world differently and love to work in a creative work environment, join our team in Ipoh.',
    address: address_ipoh,
    google_map_link: 'https://goo.gl/maps/mFhCyN4gPksudC156',
    has_iframe: true,
}

export const cyprus: LocationsType = {
    name: 'cyprus',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/cyprus.jpg"
            alt={localize('_t_Buildings near beach side - Limassol_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'Limassol',
    continent: 'europe',
    display_continent: 'Europe',
    link: '/careers/locations/cyprus/',
    display_name: 'Limassol',
    display_thumbnail_name: 'Limassol',
    display_title_name: 'Limassol',
    img_alt: 'Buildings near beach side - Limassol',
    map_office_name: 'Operations (Cyprus) Ltd',
    country: 'Cyprus',
    flagIcon: CyprusFlagIcon,
    thumbnail: 'thumbnail_cyprus',
    first_p:
        "Opened in 2020, Deriv Operations (Cyprus) Ltd houses Back-end Development, Marketing, and Trading teams. The workforce's energetic and can-do attitude helps complete fast-paced projects and achieve the company's business goals. ",
    first_img: 'living_in_cyprus',
    first_img_alt: 'Palm trees on road side',
    grid_images: ['cyprus_grid_1', 'cyprus_grid_2', 'cyprus_grid_3', 'cyprus_grid_4'],
    grid_img_alt: [
        'Group of man discussing',
        'Man looking on his desktop screen with charts',
        'Girl having a call online',
        "Deriv's office location in Limassol,Cyprus",
    ],
    map: 'ChIJa2t-XPkz5xQRSW5oufRJk-8',
    badge: 'cyprus_great_place_to_work_badge',
    badge_alt: 'Cyprus Great Place to Work 2022 Certification Badge',
    map_text:
        'We give our people the freedom to solve problems and work together to get things done without hierarchy. The workplace encourages open communication, transparency, and a free flow of ideas. If you take pride in your work and are interested in working with the best global talent,  join our team in Limassol.',
    address: address_cyprus,
    google_map_link: 'https://goo.gl/maps/qrHm4Bz5A84kUAzb8',
    has_iframe: true,
}

export const rwanda: LocationsType = {
    name: 'rwanda',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/rwanda.jpg"
            alt={localize('_t_Blue sky and buildings - Kigali_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'Kigali',
    continent: 'africa',
    display_continent: 'Africa',
    link: '/careers/locations/rwanda/',
    display_name: 'Kigali',
    display_thumbnail_name: 'Kigali',
    display_title_name: 'Kigali',
    img_alt: 'Blue sky and buildings - Kigali',
    map_office_name: '(RW) Ltd',
    country: 'Rwanda',
    flagIcon: RwandaFlagIcon,
    thumbnail: 'thumbnail_rwanda',
    first_p:
        'Our Kigali office opened in the year 2020 to support our African clients. The Marketing, Customer Support, and Front-end Development teams work together towards the company’s continued rapid business growth in the region.',
    first_img: 'living_in_rwanda',
    first_img_alt: 'Kigali city view',
    grid_images: ['rwanda_grid_1', 'rwanda_grid_2', 'rwanda_grid_3', 'rwanda_grid_4'],
    grid_img_alt: [
        'Man standing and explaining to the team',
        'Group discussion with team',
        "Deriv's office location in Kigali, Rwanda",
        'Girl sitting on a chair',
    ],
    map: 'ChIJwc77Waml3BkRKuYdzjsIu7c',
    map_text:
        'We are a group of positive team players who are always eager to roll up our sleeves and work together to overcome challenges and achieve common goals. If you want to be a part of a young, dynamic and growing team, join our team in Kigali.',
    address: address_rwanda,
    badge: 'rwanda_great_place_to_work_badge',
    badge_alt: 'Rwanda Great Place to Work 2022 Certification Badge',
    map_img: 'rwanda_map',
    google_map_link: 'https://goo.gl/maps/wJgnX1W846t5FAbK7',
    has_iframe: true,
}

export const paris: LocationsType = {
    name: 'paris',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/paris.jpg"
            alt={localize('_t_paris_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'Paris',
    continent: 'europe',
    display_continent: 'Europe',
    link: '/careers/locations/paris/',
    display_name: 'Paris',
    display_thumbnail_name: 'Paris',
    display_title_name: 'Paris',
    img_alt: 'Eiffel Tower - Paris',
    map_office_name: '(France) SAS',
    country: 'France',
    flagIcon: FranceFlagIcon,
    thumbnail: 'thumbnail_paris',
    first_p:
        "Deriv (France) SAS is a wholly-owned subsidiary of the Deriv Group dedicated to research and development. It brings together a diverse range of expertise, from blockchain professionals to mathematicians and quantitative analysts. The goal of this team is to develop Deriv's future-proof products and services.",
    first_img: 'living_in_paris',
    first_img_alt: 'Deriv staff having a discussion with their laptops',
    grid_images: ['paris_grid_1', 'paris_grid_2', 'paris_grid_3', 'paris_grid_4'],
    map: 'ChIJHzsdKOdv5kcRCRcM_lUIW14',
    map_text:
        'Deriv (France) SAS is the heart of our research and development. We have an elite think tank in this centre that helps create our next generation of online trading products. If you’re looking for new fintech challenges to embrace, join our team in Paris.',
    address: address_france,
    map_img: 'paris_map',
    google_map_link: 'https://goo.gl/maps/gXhpCta6AsV7bT7y8',
    has_iframe: true,
    has_map: true,
}

export const guernsey: LocationsType = {
    name: 'guernsey',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/guernsey.jpg"
            alt={localize('_t_Guernsey alt img_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
            style={{ width: '100%' }}
        />
    ),
    job_location: 'Guernsey',
    continent: 'europe',
    display_continent: 'Europe',
    link: '/careers/locations/guernsey/',
    display_name: 'Guernsey',
    display_thumbnail_name: 'Guernsey',
    display_title_name: 'Guernsey',
    img_alt: 'Guernsey alt img',
    map_office_name: '(Guernsey) Ltd',
    country: 'Channel Islands',
    flagIcon: ChannelIslandsFlagIcon,
    thumbnail: 'thumbnail_guernsey',
    first_p:
        'Our focus at Guernsey is on compliance. We’re forming a team of experts in legislative and regulatory requirements to provide Deriv offices worldwide with compliance oversight. With their knowledge in corporate law, anti-money laundering, and other related legislations, the Guernsey team anticipate and mitigate regulatory risks.',
    first_img: 'living_in_guernsey',
    first_img_alt: 'living_in_guernsey alt img',
    grid_images: ['guernsey_grid_1', 'guernsey_grid_2', 'guernsey_grid_3', 'guernsey_grid_4'],
    grid_img_alt: ['guernsey grid 1', 'guernsey grid 2', 'guernsey grid 3', 'guernsey grid 4'],
    map: 'ChIJc-QshyFzDUgRy9q1rkkXFqs',
    map_text:
        'Deriv (Guernsey) Ltd can be an ideal work environment for those who have strong attention to detail, motivation, and interest in law. Joining us at Guernsey gives you the opportunity to analyse regulatory policies, predict changes in fintech regulations, and formulate plans to ensure the efficiency of Deriv Group’s compliance strategies.',
    address: address_guernsey,
    map_img: 'guernsey_map',
    google_map_link: 'https://goo.gl/maps/jX1D5CmysqtbMJeh6',
    has_map: true,
    has_iframe: true,
}

export const berlin: LocationsType = {
    name: 'berlin',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/berlin.png"
            alt={localize('_t_Deriv’s Germany office at Berlin_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
            style={{ width: '100%' }}
        />
    ),
    job_location: 'Berlin',
    continent: 'europe',
    display_continent: 'Europe',
    link: '/careers/locations/berlin/',
    display_name: 'Berlin',
    display_thumbnail_name: 'Berlin',
    display_title_name: 'Berlin',
    img_alt: ' Deriv’s Germany office at Berlin ',
    map_office_name: 'Services GmbH',
    country: 'Germany',
    flagIcon: GermanyFlagIcon,
    thumbnail: 'thumbnail_berlin',
    first_p:
        'Deriv Services GmbH is our office at the heart of the European Union. Home to tech professionals, this agile office helps the Deriv Group with its most ambitious technological challenges to create future-proof online trading solutions.',
    first_img: 'living_in_berlin',
    first_img_alt: 'Working with Deriv’s Berlin team',
    grid_images: ['guernsey_grid_1', 'guernsey_grid_2', 'guernsey_grid_3', 'guernsey_grid_4'],
    grid_img_alt: ['guernsey grid 1', 'guernsey grid 2', 'guernsey grid 3', 'guernsey grid 4'],
    map: 'ChIJkzgDakBRqEcR_2nTpFNTjUQ',
    address: address_berlin,
    google_map_link: 'https://maps.app.goo.gl/hPyVpLLrynCf6NmEA',
    map_text:
        'At Deriv Services GmBH, collaboration among seasoned professionals drives success. Our team comprises enthusiastic and driven individuals who possess a wealth of expertise and a can-do attitude, making them capable of transforming innovative ideas into reality. If you share the same values, we invite you to join our team in Berlin.',
    has_iframe: true,
    has_map: true,
}

export const reading: LocationsType = {
    name: 'reading',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/reading.jpg"
            alt={localize('_t_Deriv’s Reading office at United Kingdom_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'Reading',
    continent: 'europe',
    display_continent: 'Europe',
    link: '/careers/locations/reading/',
    display_name: 'Reading',
    display_thumbnail_name: 'Reading',
    display_title_name: 'Reading',
    img_alt: 'Deriv’s Reading office at United Kingdom ',
    map_office_name: 'Technologies Ltd',
    country: 'UK',
    flagIcon: UKFlagIcon,
    thumbnail: 'thumbnail_reading',
    address: address_reading,
    first_p:
        'Deriv Technologies Ltd serves as a software development centre as well as a general service provider for the Deriv Group, tapping into a wealth of regional talent. The tech professionals in our UK team deliver future-proof online trading solutions in collaboration with their colleagues around the world.',
    first_img: 'living_in_reading',
    first_img_alt: 'Working at Deriv Technologies Ltd',
    grid_images: ['reading_grid_1', 'reading_grid_2', 'reading_grid_3', 'reading_grid_4'],
    grid_img_alt: ['reading_grid_1', 'reading_grid_2', 'reading_grid_3', 'reading_grid_4'],
    map: 'ChIJlfOm_xebdkgRgITDVJhzsMw',
    map_text:
        "Our UK base is a hub for Deriv fintech talent. Taking on exciting projects, this team play a key role in ideating, designing, and developing Deriv's next-generation trading products, as well as cutting-edge applications and technical systems. If software technology is what you live and breathe, join our UK team.",
    google_map_link: 'https://goo.gl/maps/hYvX7SUgPaTcf1uj6',
    has_iframe: true,
    has_map: true,
}

export const vanuatu: LocationsType = {
    name: 'vanuatu',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/vanuatu.png"
            alt={localize('_t_Vanuatu alt img_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'Port-Vila',
    continent: 'oceania',
    display_continent: 'Oceania',
    link: '/careers/locations/vanuatu/',
    display_name: 'Vanuatu',
    display_thumbnail_name: 'Port Vila',
    display_title_name: 'Port Vila',
    img_alt: 'Vanuatu alt img',
    map_office_name: 'Operations (V) Ltd',
    country: 'Vanuatu',
    flagIcon: VanuatuFlagIcon,
    thumbnail: 'thumbnail_vanuatu',
    first_p:
        'By leveraging the regional talent pool, Deriv Operations (V) Ltd is able to attract and retain top-tier professionals. The services provided by the Port Villa office assist Deriv Group to develop and maintain high-quality online trading platforms and services, as well as offer excellent customer support to its clients worldwide.',
    first_img: 'living_in_vanuatu',
    first_img_alt: 'Deriv’s Vanuatu office at Port Vila',
    grid_images: ['guernsey_grid_1', 'guernsey_grid_2', 'vanuatu_grid_3', 'guernsey_grid_4'],
    grid_img_alt: ['Working with Deriv’s Vanuatu team'],
    map: 'ChIJNY-kpulhiW4RqoqGd8cKHz8',
    address: address_vanuatu,
    map_text:
        'The Vanuatu office brings experts together to provide the best trading solutions and services for our customers. Join our team at Vanuatu for a rewarding career.',
    google_map_link: 'https://goo.gl/maps/3A4mFkHzTfWQc9Kz9',
    has_iframe: true,
    has_map: true,
}

export const georgetown: LocationsType = {
    name: 'georgetown',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/georgetown.png"
            alt={localize('_t_Deriv’s Cayman Islands office at George Town_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'George-Town',
    continent: 'caribbean',
    display_continent: 'Caribbean',
    link: '/careers/locations/georgetown/',
    display_name: 'Cayman Islands',
    display_thumbnail_name: 'George Town',
    display_title_name: 'the Cayman Enterprise City',
    img_alt: ' Deriv’s Cayman Islands office at George Town ',
    map_office_name: 'Group SEZC',
    country: 'Cayman Islands',
    flagIcon: CaymanFlagIcon,
    thumbnail: 'thumbnail_georgetown',
    first_p:
        ' Deriv Group SEZC is in the Cayman Commodities and Derivatives City of the Cayman Enterprise City. This office serves as a centre for compliance, corporate governance, and operational risk management for the Deriv Group. It also assists with trading support for the North American time zone.',
    first_img: 'living_in_georgetown',
    first_img_alt: 'Deriv’s office in the Cayman Islands',
    grid_images: ['guernsey_grid_1', 'guernsey_grid_2', 'cayman_map', 'guernsey_grid_4'],
    grid_img_alt: ['guernsey grid 1', 'guernsey grid 2', 'cayman map', 'guernsey grid 4'],
    map: 'ChIJs5fO51eGJY8RKFew8LoGSxU',
    map_text:
        "Our office in the Cayman Islands is a hub for compliance, operational risk, and quants talent. Join us at this office to analyse changes in regulatory policies, formulate and implement efficient risk management plans, and ensure the efficiency of the Deriv Group's compliance and trading strategies.",
    address: address_georgetown,
    google_map_link: 'https://goo.gl/maps/7ZjSzDqSEteSANqD8',
    has_map: true,
}

export const roadtown: LocationsType = {
    name: 'roadtown',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/roadtown.jpg"
            alt={localize('_t_Deriv’s British Virgin Islands office at Road Town_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'British-Virgin-Islands',
    continent: 'caribbean',
    display_continent: 'Caribbean',
    link: '/careers/locations/roadtown/',
    display_name: 'Road Town',
    display_thumbnail_name: 'Road Town',
    display_title_name: 'Road Town',
    img_alt: 'Deriv’s British Virgin Islands office at Road Town',
    map_office_name: '(BVI) Ltd',
    country: 'British Virgin Islands',
    flagIcon: BVIFlagIcon,
    thumbnail: 'thumbnail_roadtown',
    first_p:
        'Experts in regulatory and legislative requirements work together at Deriv (BVI) to provide compliance guidance in our British Virgin Islands licensed operations. Their expertise in corporate law, anti-money laundering, and other legislation enables them to anticipate and mitigate regulatory risks. ',
    first_img: 'living_in_roadtown',
    first_img_alt: 'Road Town, British Virgin Islands',
    grid_images: ['guernsey_grid_1', 'guernsey_grid_2', 'bvi_grid_3', 'guernsey_grid_4'],
    grid_img_alt: ['Deriv’s British Virgin Islands team', '', 'Boss explaining to team members'],
    map: 'ChIJpZcftYkqgk4R0hiTkAwsZB4',
    map_text:
        'Being part of our British Virgin Islands team gives you the chance to analyse regulatory policies, predict changes in fintech regulations, and formulate plans to make sure our BVI compliance strategies are effective. If you have a passion for law and look for worthy challenges in your career, join us at Deriv (BVI) Ltd.',
    google_map_link: 'https://goo.gl/maps/nNq43TGQNZRRJgar5 ',
    address: address_roadtown,
    has_iframe: true,
    has_map: true,
}

export const jordan: LocationsType = {
    name: 'jordan',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/jordan.jpg"
            alt={localize('_t_Jordan alt img_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'Amman',
    continent: 'middle_east',
    display_continent: 'Middle East',
    link: '/careers/locations/jordan/',
    display_name: 'Amman',
    display_thumbnail_name: 'Amman',
    display_title_name: 'Amman',
    img_alt: 'Jordan alt img',
    map_office_name: 'Group Ltd Jordan LLC (Exempt)',
    country: 'Jordan',
    flagIcon: JordanFlagIcon,
    thumbnail: 'thumbnail_jordan',
    first_p:
        'Deriv Group Ltd Jordan (Exempt) taps into the regional talent pool, recruiting skilled professionals capable of delivering high-quality software solutions. This office also offers general services that are beneficial to the overall success of the Deriv Group.',
    first_img: 'living_in_jordan',
    first_img_alt: 'living_in_jordan alt img',
    grid_images: ['guernsey_grid_1', 'guernsey_grid_2', 'jordan_grid_3', 'guernsey_grid_4'],
    grid_img_alt: ['jordan grid 3'],
    map_text:
        'Software developers, technical engineers, software testers, and IT specialists at our Amman office work together to build state-of-the-art applications, trading platforms, and other technical systems. Join our Jordan team for a thriving tech career.',
    address: address_jordan,
    map: 'ChIJHaZseXGgHBUROYIYmKL-Po4',
    google_map_link: 'https://goo.gl/maps/Bc8aa4XsXfH6PdVH9',
    has_iframe: true,
    has_map: true,
}

export const singapore: LocationsType = {
    name: 'singapore',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/singapore.png"
            alt={localize('_t_Marina Bay Sands - Singapore_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
            style={{ width: '100%' }}
        />
    ),
    job_location: 'Singapore',
    continent: 'asia',
    display_continent: 'Asia',
    link: '/careers/locations/singapore/',
    display_name: 'Singapore',
    display_thumbnail_name: 'Singapore',
    display_title_name: 'Singapore',
    img_alt: 'Marina Bay Sands - Singapore',
    map_office_name: '(SG) Pte Ltd',
    country: 'Singapore',
    flagIcon: SingaporeFlagIcon,
    thumbnail: 'thumbnail_singapore',
    first_p:
        "Deriv (SG) Pte Ltd is strategically situated in the regional financial hub. The company's specialised focus on developing innovative derivative trading solutions, particularly for CFDs, showcases its commitment to providing clients with cutting-edge trading tools and services.",
    first_img: 'living_in_singapore',
    first_img_alt: 'Deriv’s Singapore office',

    grid_images: ['singapore_grid', 'guernsey_grid_2', 'singapore_grid_3', 'guernsey_grid_4'],
    grid_img_alt: ['Working with Deriv’s Singapore team'],
    map: 'ChIJtcz6IO4Z2jERVa-frIastZU',
    map_text:
        'Our Singapore office is home to a team of bright trading minds who make Deriv everyone’s first choice for trading CFDs. Start a thriving career at Deriv in Singapore to influence the trading experience of over two million clients around the globe.',
    map_img: 'singapore_map',
    address: address_singapore,
    google_map_link: 'https://goo.gl/maps/mZv5nwRBA2a2p56LA',
    has_iframe: true,
    has_map: true,
}

export const ciudad: LocationsType = {
    name: 'ciudad',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/ciudad.jpg"
            alt={localize('_t_Paraguay office at Ciudad del Este_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'Ciudad-del-Este',
    continent: 'latam',
    display_continent: 'Latam',
    link: '/careers/locations/ciudad/',
    display_name: 'Ciudad del Este',
    display_thumbnail_name: 'Ciudad del Este',
    display_title_name: 'Ciudad del Este',
    img_alt: 'Paraguay office at Ciudad del Este',
    map_office_name: 'Paraguay S.A.',
    country: 'Paraguay',
    flagIcon: ParaguayFlagIcon,
    thumbnail: 'thumbnail_ciudad',
    address: address_ciudad,
    first_p:
        'Our second office in Paraguay is in the border city of Ciudad del Este. Located in the World Trade Center, this office taps into the local talent pool to build Marketing and Customer Support teams to cater to the growing market demands in South America. ',
    first_img: 'living_in_ciudad',
    first_img_alt: 'Deriv’s Ciudad del Este office in Paraguay',
    grid_images: ['guernsey_grid_1', 'guernsey_grid_2', 'cayman_map', 'guernsey_grid_4'],
    grid_img_alt: [
        'guernsey grid 1',
        'guernsey grid 2',
        'Deriv’s Ciudad del Este office location',
        'guernsey grid 4',
    ],
    map: 'ChIJ8wOKkS-F9pQRIdgDbSjs_6A',
    map_text:
        'As Deriv’s popularity grows rapidly with LATAM traders, the Customer Support and Marketing teams based at our office in Ciudad del Este have increasing opportunities to showcase their talent. Join this office if you have a passion for assisting customers and affiliates, planning and executing marketing campaigns, and creating an engaging brand image.',
    map_img: 'ciudad_map',
    google_map_link: 'https://goo.gl/maps/pmQU7QwfoY6YSR5LA',
    has_map: true,
    has_iframe: true,
}

export const hongkong: LocationsType = {
    name: 'hongkong',
    hero_image: (
        <StaticImage
            src="../../../../images/common/careers/hongkong.jpg"
            alt={localize('_t_HongKong_t_')}
            formats={['avif', 'webp', 'auto']}
            loading="eager"
        />
    ),
    job_location: 'Hong-Kong',
    continent: 'asia',
    display_continent: 'Asia',
    link: '/careers/locations/hongkong/',
    display_name: 'Hong Kong',
    display_thumbnail_name: 'Hong Kong',
    display_title_name: 'Hong Kong',
    map_office_name: '(HK) Ltd',
    country: 'Hong Kong',
    flagIcon: HongKong,
    thumbnail: 'thumbnail_hongkong',
    grid_images: ['guernsey_grid_1', 'guernsey_grid_2', 'guernsey grid 3', 'guernsey_grid_4'],
    grid_img_alt: ['guernsey grid 1', 'guernsey grid 2', 'guernsey grid 3', 'guernsey grid 4'],
    first_p:
        'With risk management and compliance at its core, Deriv (HK) Ltd brings together a highly skilled workforce that focuses on our clients’ safety and the organisation’s adherence to regulatory policies. Various functional teams work together in a dynamic and collaborative environment to foster a culture of compliance throughout the company.',
    first_img: 'living_in_hongkong',
    first_img_alt: 'Living in Hong Kong',
    map: 'ChIJb6MEJ_ojP0ERFA9bhdSH07g',
    map_text:
        "Our Hong Kong office offers a dynamic work environment with exciting opportunities to advance your career. If you're interested in showcasing and growing your innovative mindset, join our team in Hong Kong.",
    address: address_hongkong,
    google_map_link: 'https://goo.gl/maps/qi8uce4u3pMsar3d6 ',
    has_iframe: true,
}

export const all_offices: LocationsType[] = [
    paris,
    malta,
    cyprus,
    guernsey,
    berlin,
    reading,
    cyberjaya,
    ipoh,
    melaka,
    labuan,
    singapore,
    hongkong,
    vanuatu,
    dubai,
    jordan,
    rwanda,
    asuncion,
    ciudad,
    georgetown,
    roadtown,
]
export const locations = {
    berlin: `${berlin.display_name}, ${berlin.country}`,
    reading: `${reading.display_name}, ${reading.country}`,
    cyberjaya: `${cyberjaya.display_name}, ${cyberjaya.country}`,
    malta: `${malta.display_name}`,
    dubai: `${dubai.display_name}, ${dubai.country}`,
    labuan: `${labuan.display_name}, ${labuan.country}`,
    ciudad: `${ciudad.display_name}, ${ciudad.country}`,
    asuncion: `${asuncion.display_name}, ${asuncion.country}`,
    melaka: `${melaka.display_name}, ${melaka.country}`,
    ipoh: `${ipoh.display_name}, ${ipoh.country}`,
    cyprus: `${cyprus.display_name}, ${cyprus.country}`,
    rwanda: `${rwanda.display_name}, ${rwanda.country}`,
    france: `${paris.display_name}, ${paris.country}`,
    guernsey: `${guernsey.display_name}, ${guernsey.country}`,
    vanuatu: `${vanuatu.display_name}, ${vanuatu.country}`,
    jordan: `${jordan.display_name}, ${jordan.country}`,
    singapore: `${singapore.display_name}, ${singapore.country}`,
    hongkong: `${hongkong.display_name}, ${hongkong.country}`,
    georgetown: `${georgetown.display_name}, ${georgetown.country}`,
    roadtown: `${roadtown.display_name}, ${roadtown.country}`,
}

export const allContinents = {
    all: all_offices,
    europe: [],
    asia: [],
    oceania: [],
    middle_east: [],
    africa: [],
    latam: [],
    caribbean: [],
}

all_offices.forEach((office) => {
    const continentList = allContinents[office.continent]
    if (continentList == undefined) {
        allContinents[office.continent] = [office]
    } else {
        allContinents[office.continent].push(office)
    }
})

export const all_countries: string[] = [...new Set(all_offices.map((office) => office.country))]
