var fs = require('fs')

const toHashFormat = string => string.replace(/\s+/g, '-').toLowerCase()

const raw_data = [
    // INSERT RAW XLSX DATA
]

const mapped_data = raw_data.map(item => {
    const split_description = item['Description'].split('\n\n')
    const split_responsibilities = item['Responsibilities'].split('\n\n')
    const split_min_qualification = item['Minimum qualifications'].split('\n\n')
    const split_preference =
        item['Preferred qualifications'] && item['Preferred qualifications'].split('\n\n')
    return {
        title: item['Job title'] + ' translate',
        keywords: [item['Job title'] + ' translate'],
        location:
            item['Location'] === 'Cyberjaya'
                ? 'Cyberjaya, Malaysia' + ' translate'
                : item['Location'] + ' translate',
        type: item['Type (Full time, part time, internship)'] + ' translate',
        team: toHashFormat(item['Team']),
        description: split_description.map(de => de + ' translate'),
        responsibilities: split_responsibilities.map(rp => rp + ' translate'),
        qualifications: split_min_qualification.map(rp => rp + ' translate'),
        preferences: split_preference
            ? split_preference.map(rp => rp + ' translate')
            : split_preference,
    }
})

var json = JSON.stringify(mapped_data)

fs.writeFile('_try.json', json, 'utf8', function readFileCallback(err, data) {
    if (err) {
        console.error(err)
    } else {
        // eslint-disable-next-line no-console
        console.log('successs' + data)
    }
})
