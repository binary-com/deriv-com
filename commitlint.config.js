module.exports = {
     extends: ['@commitlint/config-conventional'],

     rules: {
        'type-enum': [2, 'always', ['build', 'chores', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'style', 'text', 'empty','revert']],
    },
};
