const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')

const json = []

const source_path = path.join(__dirname, 'data', 'payment-methods.csv')
const output_path = path.join(
    __dirname,
    '..',
    'src',
    'pages',
    'payment-methods',
    'payment_methods.json',
)
const translation_output_path = path.join(
    __dirname,
    '..',
    'src',
    'pages',
    'payment-methods',
    'payment-methods-translation.js',
)
const column_filters = {
    currencies: {
        type: 'double_array',
        delimeter: ',',
        textcase: 'uppercase',
    },
    countries: {
        filter: 'includeExclude',
        type: 'custom',
    },
    locale: {
        type: 'array',
        delimeter: ',',
        textcase: 'lowercase',
    },
}

const replaceAll = (string, search, replacement) => string.split(search).join(replacement)

const cleanArray = (arr) => arr.map((a) => a.trim())

const filterArray = (arr) => arr.filter((e) => e)

const escapeStr = (str) => replaceAll(str.toLowerCase(), ' ', '_')

const sentencizeStr = (str, delimeter) => str.split(delimeter).join(' ')

const ucWord = (str) =>
    str
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join('')

const caseArray = (arr, c) => {
    let array_result = []

    switch (c) {
        case 'uppercase':
            array_result = arr.map((e) => e.toUpperCase())
            break
        case 'lowercase':
            array_result = arr.map((e) => e.toLowerCase())
            break
        default:
            array_result = arr
            break
    }

    return array_result
}

const filterFunctions = {
    includeExclude: (value) => {
        const items = cleanArray(value.split(','))

        const content = {
            included: [],
            excluded: [],
        }

        items.map((i) => {
            if (i.includes('-')) {
                content.excluded.push(replaceAll(i, '-', ''))
            } else {
                content.included.push(i)
            }
        })

        return content
    },
    sanitize: (data) => {
        // Handle data anomalies
        const { countries, key } = data

        const { included, excluded } = countries

        if (included.length && excluded.length) {
            throw new Error(
                `Invalid data for payment method (${key}). Can't have both included and excluded countries.`,
            )
        }
    },
    multipleEntries: (data) => {
        const keys = {}
        const multi_entries = [
            {
                name: 'min_deposit',
                type: 'string',
                delimeter: '|',
            },
            {
                name: 'max_deposit',
                type: 'string',
                delimeter: '|',
            },
            {
                name: 'min_withdrawal',
                type: 'string',
                delimeter: '|',
            },
            {
                name: 'max_withdrawal',
                type: 'string',
                delimeter: '|',
            },
            {
                name: 'currencies',
                type: 'array',
            },
        ]

        const filtered_keys = []

        data.map((d, index) => {
            const { key } = d

            if (!keys[key]) {
                keys[key] = index
            } else {
                const parent_index = keys[key]
                const parent = data[parent_index]

                multi_entries.forEach((entry) => {
                    const { name, type, delimeter } = entry

                    const added_value = d[name]
                    const current_value = parent[name]

                    if (added_value !== '') {
                        let final_data = null

                        if (type === 'array') {
                            added_value.map((a) => {
                                current_value.push(a)
                            })

                            final_data = current_value
                        } else {
                            const new_data = current_value.toString().split(delimeter)

                            new_data.push(added_value)

                            final_data = new_data.join(delimeter)
                        }
                        data[parent_index][name] = final_data
                    }
                })

                filtered_keys.push(index)
            }
        })

        filtered_keys.forEach((k) => {
            delete data[k]
        })

        return data.filter((e) => e)
    },
    flatten: (data) => {
        const excludes = ['link_binary', 'platform']

        return filterFunctions.multipleEntries(
            data.map((d) => {
                filterFunctions.sanitize(d)

                const { key, platform, reference } = d

                const details = {}

                // Exclude unnecessary properties
                Object.keys(d).forEach((dk) => {
                    if (!excludes.includes(dk)) {
                        details[dk] = d[dk]
                    }
                })

                if (platform.toLowerCase().includes('deriv') || platform.trim() === '') {
                    return {
                        ...details,
                        logo: ucWord(sentencizeStr(key, '-')),
                        reference
                    }
                }
                return null
            }),
        )
    },
}

fs.createReadStream(source_path)
    .pipe(
        csv({
            mapHeaders: ({ header }) => {
                const headings = {}

                let header_text = escapeStr(header)

                header_text = headings[header_text] ? headings[header_text] : header_text

                return header_text
            },
            // eslint-disable-next-line
            mapValues: ({ header, index, value }) => {
                let final_value = value.trim();

                const filter_option = column_filters[header]

                if (filter_option) {
                    const { delimeter, type, filter, textcase } = filter_option

                    switch (type) {
                        case 'array':
                            final_value = caseArray(
                                filterArray(cleanArray(value.split(delimeter))),
                                textcase,
                            )
                            break
                        case 'double_array':
                            final_value = [
                                caseArray(
                                    filterArray(cleanArray(value.split(delimeter))),
                                    textcase,
                                ),
                            ]
                            break
                        case 'custom':
                            final_value = filterFunctions[filter](value)

                            break
                        default:
                            break
                    }
                }
    
                return final_value
            },
        }),
    )
    .on('data', (data) => {
        json.push(data)
    })
    .on('end', () => {
        console.log(`Payment methods are being generated, and page is going to be updated. For more info visit payment-methods.md file. 

        Icon Directory: ('src/images/svg/payment-methods/index.js')
        PDF Directory: ('static/payment-methods/index.js')
        
        `)
        
        const parsed_json = filterFunctions.flatten(json)
        const final_json = JSON.stringify(parsed_json, null, 2)

        fs.writeFile(output_path, final_json, 'utf8', () =>{ 
            console.log(`${Object.keys(parsed_json).length} payment methods found. ${output_path} has been generated`)

        })
         

        const dataToTranslate = parsed_json.map(({ name,
            category,
            description,
            min_deposit,
            max_deposit,
            deposit_proccessing_time,
            min_withdrawal,
            max_withdrawal,
            withdrawal_processing_time })=>{
                return ([
                    `\n localize("${name}")`,
                    `\n localize("${description}")`,
                    `\n localize("${category}")`,
                    `\n localize("${min_deposit}")`,
                    `\n localize("${max_deposit}")`,
                    `\n localize("${deposit_proccessing_time}")`,
                    `\n localize("${min_withdrawal}")`,
                    `\n localize("${max_withdrawal}")`,
                    `\n localize("${withdrawal_processing_time}")`
                ])
            })
        const page_content = 
        `import React from 'react'
        import { localize } from 'components/localization'

        const content = [${dataToTranslate}]

        const paymentMethodsTranslation = ()=> {
             return (
                     <>{content}</>
                    )
        }

         export default paymentMethodsTranslation`
                            
        fs.writeFile(translation_output_path, page_content, 'utf8', () => console.log(`\n Translation file generated at ${translation_output_path}`))

    
    })
