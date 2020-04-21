const getSignupUrl = () =>
    '/signup/?t=QUERY_PARAM(t)&utm_source=QUERY_PARAM(utm_source)&utm_medium=QUERY_PARAM(utm_medium)&utm_campaign=QUERY_PARAM(utm_campaign)'

export default { getSignupUrl }
