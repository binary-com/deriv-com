export default !process.env.DIRECTUS_AUTH_TOKEN || false
// ! need to just to return value to boolean false. If server or someone who try to run app withou DIRECTUS_AUTH_TOKEN will not see our brands at all
