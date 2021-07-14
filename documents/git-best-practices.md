# Git best practices

**In this document:**

-   [Commit message guidelines](#commit-message-guidlines)
    -   [Type](#type)
-   [Changing base branch](#changing-base-branch)
-   [Get latest Changes](#get-latest-changes)
-   [Resolve translation conflict on message.json](#resolve-translation-conflict-on-message.json)

## Commit message guidelines

We have a set of precise rules over how our git commit messages can be formatted. This leads to more **readable messages** that are easy to follow when looking through the **project history**.

Each commit message will consist of **type** and **subject**:

```sh
<type>|<...other_types>: <subject>
```

### Type

Must be one of the following:

-   **build**: Changes that affect the build system or external dependencies (example scopes: gatsby config, gatsby browser, gatsby node, or gatsby ssr)
-   **chores**: Add or Changes on packages or external dependencies
-   **ci**: Changes to our CI configuration files and scripts (example scopes: Docker, nginx conf)
-   **docs**: Documentation only changes
-   **feat**: A new feature
-   **fix**: A bug fix
-   **perf**: A code change that improves performance
-   **refactor**: A code change that neither fixes a bug nor adds a feature
-   **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
-   **text**: Adding text or updating text only
-   **empty**: Rare cases for re-deploying when deployment server is down
-   **revert**: A commit reverts a previous commit

## Changing base branch

There are cases when you want to change the base branch because the PR that didn't have text changes is now having text changes, so, you need to convert the base branch from `master` to `crowdin`. The command to do that is as follows:

```sh
git rebase --onto crowdin master your_branch_name
```

or vice versa from `crowdin` to `master`

```sh
git rebase --onto master crowdin your_branch_name
```

## Get latest Changes

There are two ways to get the latest changes:

```sh
git pull upstream master|crowdin --rebase
```

or

```sh
git pull upstream master|crowdin
```

both of these will do the job. However, rebase won't add another commit to your PR where without rebase it will add commit history of merging the latest changes to your branch.

## Resolve translation conflict on message.json

There are cases when other developers also work on translation (crowdin) branch, and get merged first. This way, your branch will get conflict of the extracted message.json. To fix this:

-   Get the latest Crowdin changes

    ```sh
    git pull upstream crowdin
    ```

-   Accept incoming change from Crowdin

    ```sh
    git checkout --theirs crowdin/messages.json
    ```

-   Resolve other conflicts if any, or just commit your changes

-   Push to your origin branch to update the PR
