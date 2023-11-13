## 🤖  Automated Translation Pull Request 
This is an automated pull request to fetch the newly translated strings from `Crowdin` to ensure
that we do not overwrite the translations provided by the translation team before pushing our new strings.

## 📝 Note: 
- It is recommended to merge this PR immediately to minimize the risk of conflicts, although the likelihood of conflicts is very low.
- In the event of a missed merge and another PR is merged into the master branch, this PR will be automatically deleted, and a new one with the latest updates will be created.
- Prior to creating this PR, the translations from the master branch and Crowdin are synchronized and sent to Crowdin for the latest updates.
- This PR is essential for updating our codebase with the synchronized version sent to Crowdin, ensuring that both platforms have the same working copy.