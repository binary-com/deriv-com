## Avoid minified error

When we updated our React version to the latest we had many console errors which was related to React Hydration

React rehydration errors (`uncaught error: minified React error #423 and #418`) happen when the client render doesn't match the server render. This can happen when using SSR or SSG, often done with Gatsby or Next.js.

### Most common causes of hydration error:

#### Table element is missing <thead> and <tbody>
    
I have found out that if you don't include the `<thead>` and `<tbody>` elements on your table, React will give you a hydration error. Those elements are optional, so normally aren't required in HTML, but they are required when doing SSR / SSG with React. The reason for that is that the two elements will be added by browsers to the DOM if they are missing, but client-side rendering doesn't add them to React's shadow DOM. This gives a mismatch of the table data between the static HTML data DOM and client side render, resulting in a hydration error.

Note: we are not allowed to use div element inside tr, th, td

#### Repeating your code won't return the same result

For example generating a random number can't be replicated. The code has to return the same thing when it is run on build time and on client-side. A fix for this is to either make the code repeatable or make it only run on client-side.

#### Missing closing tag for an element

If you forget to close an element, it can give a hydration error.

#### Invalid HTML structure

Invalid HTML structure can give a hydration error. For example this is incorrect HTML: `<p><h1>This is a heading</h1></p>`. What makes that invalid is the fact that headings can't be placed inside paragraphs.

Another common mistake is accidentally double quoting paragraphs, this is invalid: `<p><p>Paragraph</p></p>`

since we are using `Localize` components we are using this bad practice in many places for example we are passing a Localize inside our `p` element and we are passing a div as a component to the Localize :sweat_smile:

```javascript
// bad practice

content: {
    text: '_t_Our GitHub repositories: <0>github.com/binary-com</0>_t_',
    components: [<Header key={0} type="paragraph-2" weight="normal" as="p" />],
},
```

Please pass the key to the right element :sweat_smile: and make sure that the key is unique

```javascript
// bad practice

{items.map(({ translation_text, translation_components, sub_items, img }) => (
    <>
       <ListItem
            key={translation_text}
            margin_top={margin_top}
            first_child_margin_top={first_child_margin_top}
            size={size || '1.6rem'}
    </>
 ))}
```

#### React.useEffect doesn't work like this in the React 18

```javascript
    useEffect(() => setSelected(default_step), [items, default_step])
```

You will get destroy is not a function error!

Instead you should use it like this:

```javascript
    useEffect(() => {
        setSelected(default_step)
    }, [items, default_step])
```

#### Content Change based on region

The regional conditions for EU and ROW content have changed. First, we adjust a local state, and subsequently update the content based on that state.

**This will give error:**

```javascript
    const { is_eu } = useRegion()
    return (
        <NavigationBlock
            renderButtons={MainNavigationButtons}
            renderLogo={MainNavigationLogo}
            items={is_eu ? mainEuNavItems : mainRowNavItems}
        />
    )
```

**Do this insted:**

```javascript
    const { is_eu } = useRegion()
    const [items, setItems] = useState(mainRowNavItems)

    useEffect(() => {
        if (is_eu) setItems(mainEuNavItems)
    }, [is_eu])

    return (
        <NavigationBlock
            renderButtons={MainNavigationButtons}
            renderLogo={MainNavigationLogo}
            items={items}
        />
    )
```

**Or do this:**

```javascript
    const { is_eu } = useRegion()
    const [show_digital_options, setShowDigitalOptions] = useState(true)

    useEffect(() => {
        if (is_eu) {
            setShowDigitalOptions(false)
        }
    }, [is_eu])

    return (
        <AvailableTrades
            DigitalOptions={
                show_digital_options && <p>Digital options content</p>
            }
        />
    )
```