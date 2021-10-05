# Contribution Guidlines
First of all thank you for considering contributing, it means a lot as it reduces some burden of mine.

## How to contribute :question:

### Step :one: Fork the project 

### Step :two: Clone the forked project to your local desktop :computer:
> git clone "URL_TO_GITHUB_REPO"

### Step :three: Create a new branch :fleur_de_lis:
> git checkout -b "branch-name"

### Step :four: Make changes to the code :pencil:
By adding new code, or making changes to old one

### Step :five: Commit your code :heavy_plus_sign:
> git add .

> git commit -m "Commit message"

### Step :six: Pusing code to repo :heavy_exclamation_mark:
1: Checkout to master(main branch) and pull all the changes from original repository(that one you've forked the project from) to your main branch

> git checkout remoteName mainBranchName

> git pull remoteName mainBranchName

2: Once you've pulled the changes, checkout to your development_branch ( The branch you created earlier) 

> git checkout remoteName developmentBranchName

And pull changes to your development_branch from your main branch 

> git pull remoteName branchName

And then push changes of development_branch to remote repository

> git push origin "branch_name_you_want_to_push"

### Step :seven: Create a pull request :chains:
Go to your forked repo on github, select `Pull Request` and open a new one.

Type a title and description for your pull request.

### Step :eight: All done ✔

Your changes will be reviewed soon. Keep an eye on your pull request!
