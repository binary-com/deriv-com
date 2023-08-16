# Development Guidelines

## Do:

-   Keep all files immediately relevant to a component inside the given component directory.
-   Make it dead simple to import the component from elsewhere.
-   Feel free to create sub-directories for relevant utils or helpers
    if it helps to keep things tidy
-   Keep components small, focused, and easy to test, breaking up complex components into smaller components
-   Try to create new, reusable components instead of "sub-components"
    (i.e. prefer not to create sub-directories that contain more components)
-   **Be consistent** — however, you choose to lay things out
-   Please pass the **key** to the right element and make sure that it is **unique**!

```js
// bad practice

{
    items.map(({ translation_text, translation_components }) => (
        <div>
            <ListItem key={translation_text} />
        </div>
    ))
}

// best practice

{
    items.map(({ translation_text, translation_components }) => (
        <div key={translation_text}>
            <ListItem />
        </div>
    ))
}
```

## Don't:

-   Mix concerns (files, modules) that should really belong to other components

-   Don't miss **thead** and **tbody** when you are using the **Table** element! If you don't include the **thead** and **tbody** elements on your table, React will give you a hydration error. Those elements are optional, so normally aren't required in HTML, but they are required when doing SSR / SSG with React. The reason for that is that the two elements will be added by browsers to the DOM if they are missing, but client-side rendering doesn't add them to React's shadow DOM. This gives a mismatch of the table data between the static HTML data DOM and client side render, resulting in a hydration error.

**Note:** we are not allowed to use **div** element inside the **tr**, **th** and **td**

-   Repeating your code won't return the same result, For example generating a random number can't be replicated. The code has to return the same thing when it is run on build time and on client-side. A fix for this is to either make the code repeatable or make it only run on client-side.

-   Don't miss **closing tag** for an element, If you forget to close an element, it can give a hydration error.

-   Don't use invalid HTML structure, invalid HTML structure can give a hydration error. For example this is incorrect HTML:

```js
<p>
    <h1>This is a heading</h1>
</p>
```

What makes that invalid is the fact that headings can't be placed inside paragraphs.
Another common mistake is accidentally double quoting paragraphs, **this is invalid**:

```js
<p>
    <p>Paragraph</p>
</p>
```

**Note:** since we are using **Localize** components we are using this bad practice in many places for example we are passing a **Localize** inside our **p** element and we are passing a **div** as a component to the **Localize**

```js
// bad practice: because we are using Header as p inside p

content: {
    text: '_t_Our GitHub repositories: <0>github.com/binary-com</0>_t_',
    components: [<Header key={0} type="paragraph-2" weight="normal" as="p" />],
}

<Header as="p">
    <Localize translated_text={content.text} components={content.components} />
</Header>

// best practice
content: {
    text: '_t_Our GitHub repositories: <0>github.com/binary-com</0>_t_',
    components: [<br key={0} />],
}

<Header as="p">
    <Localize translated_text={content.text} components={content.components} />
</Header>

```

-   **React.useEffect** doesn't work like this in the _React 18_

```js
// You will get destroy is not a function error!
useEffect(() => setSelected(default_step), [items, default_step])

// Instead you should use it like this:
useEffect(() => {
    setSelected(default_step)
}, [items, default_step])
```
