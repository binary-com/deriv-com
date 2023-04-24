module.exports = {
    ...require('prettier-config-deriv'),
    overrides: [
        {
            files: ['crowdin/messages.json', 'src/translations/*.json'],
            options: {
                tabWidth: 2,
            },
        },
    ],
}
