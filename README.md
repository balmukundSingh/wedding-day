# Wedding Day - Angular GitHub Pages Deployment

## Development Workflow

### 1️⃣ **Feature Branch Development**
- Always create a feature branch for new development:
  ```sh
  git checkout -b feature-branch
  ```
- Make your changes and commit:
  ```sh
  git add .
  git commit -m "Your commit message"
  ```
- Push the feature branch:
  ```sh
  git push origin feature-branch
  ```

### 2️⃣ **Local Testing on GitHub Pages**
To test the website locally on GitHub Pages before merging, run:
```sh
npm run local-prod-build
```
This command internally executes:
```sh
ng build --prod --base-href /wedding-day/ && npx angular-cli-ghpages --dir=dist/wedding-day --branch=gh-pages
```
Now check your changes at:  
🔗 [https://balmukundsingh.github.io/wedding-day/](https://balmukundsingh.github.io/wedding-day/)

### 3️⃣ **Merging to Main and Deploying**
Once development is complete:
- Merge your feature branch into `main`:
  ```sh
  git checkout main
  git merge feature-branch
  git push origin main
  ```
- Deploy the main branch to GitHub Pages:
  ```sh
  npm run prod-build
  ```
  This command internally executes:
  ```sh
  ng build --prod --base-href /wedding-day/ && npx angular-cli-ghpages --dir=dist/wedding-day
  ```

### 4️⃣ **Important Notes**
✔ Always **commit and push** changes before running deployment commands.  
✔ Ensure `gh-pages` branch exists and is set as the GitHub Pages source in repo settings.  
✔ Use `local-prod-build` for feature branch testing and `prod-build` for final deployment.  

🚀 **Happy Coding!**

ng build --output-path docs/v1 --base-href /wedding-day/v1/
ng build --output-path docs/v2 --base-href /wedding-day/v2/


