# Git best practices

**In this document:

## GitHub Actions Workflow Guidelines

When configuring GitHub Actions workflows, consider the following guidelines and best practices:
- Define triggers for workflow execution, such as push or pull requests.
- Specify the operating system and runtime environment for the workflow.
- Install dependencies before running tests and builds.
- Use conditional statements to control workflow execution based on branch or commit messages.
- Troubleshooting common errors such as process completion, exit codes, and command failures.**

-   [Commit message guidelines](#commit-message-guidlines)
    -   [Type](#type)
-   [Changing base branch](#changing-base-branch)
-   [Get latest Changes](#get-latest-changes)
-   [Resolve translation conflict on message.json](#resolve-translation-conflict-on-message.json)

## GitHub Actions Workflow Guidelines

When configuring GitHub Actions workflows, consider the following guidelines and best practices:
- Define triggers for workflow execution, such as push or pull requests.
- Specify the operating system and runtime environment for the workflow.
- Install dependencies before running tests and builds.
- Use conditional statements to control workflow execution based on branch or commit messages.
- Troubleshooting common errors such as process completion, exit codes, and command failures.

## Collaborating on GitHub Actions Workflows

When collaborating on GitHub Actions workflows, it is important to coordinate changes effectively and ensure smooth workflow execution. Here are some recommendations for coordinating changes to GitHub Actions workflows among team members:
- Create feature branches for new workflow features or modifications.
- Use pull requests for proposing changes to the main workflow configuration.
- Conduct code reviews to ensure the quality and accuracy of workflow changes.

## Resolving GitHub Actions Errors

To troubleshoot and fix common errors encountered during GitHub Actions runs, follow these guidelines:
- Interpret error messages to identify the root cause of the error.
- Use debugging techniques to isolate and resolve issues.

We have a set of precise rules over how our git commit messages can be formatted. This leads to more **readable messages** that are easy to follow when looking through the **project history**.

Each commit message will consist of **type** and **subject**:

```sh
<type>|<...other_types>:<space><subject>
For example  "fix: hero image padding"
```

### Type

Must be one of the following:

-   **build**: Changes that affect the build system or external dependencies (example scopes: gatsby config, gatsby browser, gatsby node, or gatsby ssr)
-   **chore**: Add or Changes on packages or external dependencies
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

### Collaborating on GitHub Actions Workflows

When collaborating on GitHub Actions workflows, effective coordination is essential to ensure smooth workflow execution. Follow these recommendations for coordinating changes to GitHub Actions workflows among team members:
- Create feature branches for new workflow features or modifications.
- Use pull requests for proposing changes to the main workflow configuration.
- Conduct code reviews to ensure the quality and accuracy of workflow changes.

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
