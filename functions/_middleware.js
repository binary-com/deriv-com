const cookieName = "aa-test-cookie"
const Variant1SearchParam = "dtv=a"
const throttle = 50 // 50% of traffic

const abTest = async ({ request, next, env }) => {
    const url = new URL(request.url)

    // url is not on the homepage
    if (url.pathname !== "/") {
        return next();
    }

    const cookie = request.headers.get("cookie")

    // client is in the `variant_1` test
    if (cookie && cookie.includes(`${cookieName}=variant_1`)) {
        url.search = Variant1SearchParam
        return env.ASSETS.fetch(url)
    }

    // client is in the `old` test
    if (cookie && cookie.includes(`${cookieName}=control`)) {
        return next()
    }

    // client is not in a test
    const percentage = Math.floor(Math.random() * 100)
    const version = percentage < throttle ? 'variant_1' : 'control';

    if (version === 'variant_1') {
        url.search = Variant1SearchParam
    }

    const asset = await env.ASSETS.fetch(url)
    const response = new Response(asset.body, asset)

    response.headers.append("Set-Cookie", `${cookieName}=${version}; path=/`)

    return response
};

export const onRequest = [abTest];
