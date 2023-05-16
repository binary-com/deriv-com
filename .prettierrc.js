module.exports = {
    ...require('prettier-config-deriv-beta'),
    overrides: [
        {
            files: ['crowdin/messages.json', 'src/translations/*.json'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
