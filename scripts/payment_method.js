const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

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
        filter: 'multipleEntries',
        type  : 'custom',
    },
    countries: {
        filter: 'includeExclude',
        type  : 'custom',
    },
    locale: {
        type  : 'array',
        delimeter: ',',
        textcase: "lowercase"
    }
};

const replaceAll = (string, search, replacement) =>
    string.split(search).join(replacement);

const cleanStr = (str) => replaceAll(str.toLowerCase(), ' ', '');

const cleanArray = (arr) => arr.map((a) => a.trim());

const filterArray = (arr) => arr.filter( (e) => e );

const escapeStr = (str) => replaceAll(str.toLowerCase(), ' ', '_');

const sentencizeStr = (str,delimeter) => str.split(delimeter).join(" ");

const ucWord = (str) => str.split(" ").map((s) =>  s.charAt(0).toUpperCase() + s.slice(1)).join("");

const caseArray = (arr,c) => {
    let array_result = [];

    switch(c){
        case 'uppercase':
            array_result = arr.map(e => e.toUpperCase());
            break;
        case 'lowercase':
            array_result = arr.map(e => e.toLowerCase());
            break;
        default:
             array_result = arr;
            break;
    }
    
    return array_result
}

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
    multipleEntries: (value) => {
        const items = cleanArray(value.split('|'));

        const final_items = [];

        items.map(e => {
            const data = filterArray(cleanArray(e.split(',')));
            final_items.push(data);
        })

        return final_items;
    },
    flatten: (data) => {
        return data.map((d) => {
          const { key,platform,reference } = d;
          const file_name = escapeStr(key);

          if(platform.toLowerCase().includes("deriv") || platform.trim()===''){
 
           return {
            ...d,
            logo: ucWord(sentencizeStr(key,'-')),
            reference: reference === "yes"  ? file_name : "",
          };
        }
        }).filter(e => e);
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
                    const { delimeter, type, filter,textcase } = filter_option;

                    switch (type) {
                        case 'array':
                            final_value = caseArray(filterArray(cleanArray(value.split(delimeter))),textcase);
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
        const parsed_json = filterFunctions.flatten(json);
        const final_json = JSON.stringify(parsed_json, null, 2);

        fs.writeFile(output_path, final_json, 'utf8', () => `${output_path} has been generated`);
    });
