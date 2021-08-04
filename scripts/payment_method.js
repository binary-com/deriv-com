const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');


const json = [];

const source_path = path.join(__dirname, 'data', 'payment-methods.csv');
const output_path = path.join(
    __dirname,
    '..',
    'src',
    'pages',
    'payment-methods',
    'payment_methods.json'
);

const column_filters = {
    currencies: {
        delimeter: ',',
        type     : 'array',
    },
    withdrawal: {
        filter: 'descriptionMinMax',
        type  : 'custom',
    },
    deposit: {
        filter: 'descriptionMinMax',
        type  : 'custom',
    },
    countries: {
        filter: 'includeExclude',
        type  : 'custom',
    },
};

const replaceAll = (string, search, replacement) =>
    string.split(search).join(replacement);

const cleanStr = (str) => replaceAll(str.toLowerCase(), ' ', '');

const cleanArray = (arr) => arr.map((a) => a.trim());

const escapeStr = (str) => replaceAll(str.toLowerCase(), ' ', '_');

const sentencizeStr = (str,delimeter) => str.split(delimeter).join(" ");

const ucWord = (str) => str.split(" ").map((s,k) =>  s.charAt(0).toUpperCase() + s.slice(1)).join("");

const filterFunctions = {
    descriptionMinMax: (value) => {
        const data = value.split('|');

        let description, min, max;

        if (data.length) {
            description = data[0] ? data[0] : '';

            const min_max_parts = data[1] ? data[1].split('-') : [];

            if (min_max_parts.length) {
                min = cleanStr(replaceAll(min_max_parts[0], 'min', ''));
                max = cleanStr(replaceAll(min_max_parts[1], 'max', ''));
            }
        }

        return {
            description,
            min,
            max,
        };
    },
    includeExclude: (value) => {
        const items = cleanArray(value.split(','));

        const content = {
            included: [],
            excluded: [],
        };

        items.map((i) => {
            if (i.includes('-')) {
                content.excluded.push(replaceAll(i, '-', ''));
            } else {
                content.included.push(i);
            }
        });

        return content;
    },
    categorize: (data) => {
        const categories = {};

        data.map((d) => {
            const { category, key } = d;
            const file_name = escapeStr(key);

            if (category) {
                d.logo = ucWord(sentencizeStr(key,'-'));
                d.reference = `${file_name}.pdf`;
                d.is_crypto =  category.includes('Crypto');
                d.is_fiat_onramp = category.includes('Fiat');

                if (categories[category] === undefined) {
                    categories[category] = [];
                }

                delete d.category;
                delete d.key;

                categories[category].push({ ...d });
            }
        });

        return categories;
    },
};

fs.createReadStream(source_path)
    .pipe(
        csv({
            mapHeaders: ({ header }) => {
                const headings = {};

                let header_text = escapeStr(header);

                header_text = headings[header_text]
                    ? headings[header_text]
                    : header_text;

                return header_text;
            },
            // eslint-disable-next-line
      mapValues: ({ header, index, value }) => {
                let final_value = value;

                const filter_option = column_filters[header];

                if (filter_option) {
                    const { delimeter, type, filter } = filter_option;

                    switch (type) {
                        case 'array':
                            final_value = cleanArray(value.split(delimeter));

                            break;
                        case 'custom':
                            final_value = filterFunctions[filter](value);

                            break;
                        default:
                            break;
                    }
                }

                return final_value;
            },
        })
    )
    .on('data', (data) => {
        json.push(data);
    })
    .on('end', () => {
        const parsed_json = filterFunctions.categorize(json);
        const final_json = JSON.stringify(parsed_json, null, 2);

        fs.writeFile(output_path, final_json, 'utf8', () => `${output_path} has been generated`);
    });
