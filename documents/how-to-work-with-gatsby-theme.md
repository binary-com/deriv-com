## Directory introduction

Now, deriv-com is a monorepo. We have two workspaces. In one, we have our **themes**. Right now, we only have one theme called *gatsby-theme-deriv*. All of our code is here. And all our sites are another workspaces called sites. There, we now have two **sites** *row* and *eu*.

We installed our theme to sites and from there we are passing our build options and recieving those options in our theme then those options are passed to pages after that based on those option we are building our sites and displaying content 


## Essential Commands

* `npm run develop:row` will run development command for **ROW**. *http://localhost:8000/* will be the development url
* `npm run develop:eu` will run development command for **EU**. *http://localhost:7000/* will be the development url
* `npm run clean:row` will clean the .cache and public direction from `sites/row`. Use this instead of `gatsby clean`
* `npm run clean:eu` will clean the .cache and public direction from `sites/eu`. Use this instead of `gatsby clean`
* `npm run build:row` will run build command for **ROW**
* `npm run build:eu` will run build command for **EU**
* `npm run serve:row` will run the build version for **ROW**. *http://localhost:9000/* will be the build url
* `npm run serve:eu` will run build command for **EU**.  *http://localhost:5000/* will be the build url


```bash
npm install date-fns --workspace @deriv/eu 
# Install date-fns into @deriv/eu
npm uninstall lodash --workspace @deriv/row 
# Uninstall lodash from @deriv/row
npm install date-fns --workspace gatsby-theme-deriv 
# Install date-fns into gatsby-theme-deriv
npm install moment 
# Install moment in root. It can be used from all packages.
```

## Create page

```javascript
const Home = ({ pageContext }: TGatsbyHead) => {
    const {region} = pageContext
    return <HomePage region={region}/>
}
```

First receive `pageContext` props in page compoment. It will have a `region` property. Then, we have to pass it `Layout` component. That will pass it **build variant** context. Now, we can receive this `region` value through `useBuildVariant` hook. Then, we can use the `region` to show our `row` and `eu` content. 

```javascript
import useBuildVariant from 'features/hooks/use-build-variant'

const Hero = () => {
    const { region } = useBuildVariant()

    if(region === "row") return <div>Row content</div>
    if(region === "eu") return <div>Eu content</div>
}

```

**Basically, use this hook instead of `useRegion` hook and the we can use `region==="row"` instead of `is_row` and `region==="eu"` instead of`is_eu`**


## Learn more about gatsby theme

* [https://www.gatsbyjs.com/docs/themes/](https://www.gatsbyjs.com/docs/themes/)
* [https://www.youtube.com/watch?v=vf2Dy_xKUno](https://www.youtube.com/watch?v=vf2Dy_xKUno)
* [https://www.digitalocean.com/community/tutorials/how-to-use-themes-in-gatsby](https://www.digitalocean.com/community/tutorials/how-to-use-themes-in-gatsby)