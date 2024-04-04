import { StrapiImage } from '../who-we-are/_types'
import { TString } from '../../types/generics'

type THeroContactUs = { hero: { header: TString; sub_header: TString } }

type TSupport = {
    support_section: {
        header: TString
        sub_header: TString
        image: StrapiImage
        link_title: TString
        link_url: string
        item_name: string
        alt_image: string
        button_type: string
    }[]
}

type TOurOffices = { our_offices: TString }

type TOfficeAddress = {
    office_address: {
        continent: TString
        country: {
            country_icon: StrapiImage
            country_name: TString
            map_url: string
            map_image: StrapiImage
            address: string
            city_name: string
        }[]
    }[]
}

type TBusinessPartnership = {
    business_partnership: {
        header: TString
        sub_header: TString
        live_chat_title: TString
    }
}

type TContactUs = {
    data: {
        strapiContactUs: THeroContactUs &
            TSupport &
            TOurOffices &
            TOfficeAddress &
            TBusinessPartnership
    }
}

export { THeroContactUs, TSupport, TOurOffices, TOfficeAddress, TBusinessPartnership, TContactUs }
