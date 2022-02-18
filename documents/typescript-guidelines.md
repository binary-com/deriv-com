# TS Conventions in Deriv-com (Work-in-progress)

Good reads:

-   https://www.sitepoint.com/react-with-typescript-best-practices/
-   https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example

### When to use .tsx over .ts

-   A general rule of thumb would be that if the file either imports `react` or uses `jsx` syntax, use `.tsx`.
-   If not, `.ts` will do.

### ⚠️ Avoid typing the return type

-   We can allow Typescript to infer the return types of React components for us.

### Unions Over Enums

> Unlike most TypeScript features, [enum] is not a type-level addition to JavaScript but something added to the language and runtime. Because of this, it’s a feature which you should know exists, but maybe hold off on using unless you are sure.
> —TypeScript Handbook

Union types and enums tend to occupy the same space in React in that they both enforce that a particular prop must be one value of a given set. However, we recommend union types over enums for a number of reasons:

-   They are compiler-only constructs, so they won't end up in your application's JS bundle.
-   They are extensible to other union types.
-   They are less verbose.

```jsx
// Avoid enums:
enum ButtonKind {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

// Prefer union types:
type ButtonKind = "primary" | "secondary";

// Extensible to other union types:
type ExtendedButtonKind = ButtonKind | "tertiary";
```

### Type vs. Interface

Use type when you might need a union or intersection:

```jsx
type Foo = number | { someProperty: number }
```

Use interface when you want extends or implements e.g.

```jsx
interface Foo {
    foo: string;
}
interface FooBar extends Foo {
    bar: string;
}
class X implements FooBar {
    foo: string
    bar: string
}
```

> Use **Type** until you need an **Interface**

### ⚠️ Type naming conventions

-   When typing props, it should follow the component name in PascalCase along with a `Props` at the end of it, e.g. `type ContainerProps`
-   If it's anything else, it should follow the variable name in PascalCase along with a `Type` at the end of it, e.g. `type TradingType`

### Extending Native HTML Elements

TypeScript ships with tons of helper types that cut down boilerplate for common React idioms. These types are particularly useful when extending native HTML elements like `button` or `input`, where you’ll want to maintain the component's original props to ensure extensibility.

Start by implementing a `Button` component in the two most important use-cases: clicking the button and defining its text. When typing everything manually, you get the following result:

```jsx
import React from 'react'

interface Props {
    children: React.ReactNode;
    onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
    return <button onClick={onClick}>{children}</button>
}
```

We can use the helper type `React.PropsWithChildren` here, which automatically adds the children prop to the component:

```jsx
import React from 'react'

type Props = React.PropsWithChildren<{
    onClick: () => void,
}>

const Button = ({ children, onClick }: Props) => {
    return <button onClick={onClick}>{children}</button>
}
```

`ComponentPropsWithoutRef` is a generic type that supplies props for built-in React handlers and native HTML attributes. By passing in `"button"` as the template, you specify that the component is extending the HTML `button` element.

```jsx
import React from 'react'

type Props = React.ComponentPropsWithoutRef<'button'>

const Button = ({ children, onClick, type }: Props) => {
    return (
        <button onClick={onClick} type={type}>
            {children}
        </button>
    )
}
```

If additional props are needed, swap the `type` for an `interface`:

```jsx
import React from 'react'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
    specialProp: number;
}

const Button = ({ children, onClick, type, specialProp }: Props) => {
    // ...
}
```
