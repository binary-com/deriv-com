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

## Don't:

-   Mix concerns (files, modules) that should really belong to other components
