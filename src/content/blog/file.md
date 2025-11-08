---
title: Creating Github-Page is a Pain
description: My method of getting this site to work.
pubDate: 2025-05-19
author: RMondGP
image: '/images/home.jpg'
tags: ['git', 'obsidian', 'vault', 'howto']
---

# Getting Started

Ever wished you could easily share your Obsidian notes as a simple website? Good news – you can! By combining the power of Obsidian, Git, and GitHub Pages, you can publish your thoughts, knowledge base, or project notes online with minimal fuss.

While diving deep might require a sprinkle of web development know-how (think a little CSS or HTML if you want to get fancy), you can absolutely get a basic site up and running without being a coding guru.

Ready to get started? Let's go!

The first thing you may need to do is get a [GitHub](https://github.com/) account. They have a free account and the GitHub pages is free. Note: GitHub pages must be public.
## Step 1. Create a GitHub repository

First things first, you'll need a [GitHub account](https://github.com/). Don't worry, a free one works perfectly!

Once you're signed in, create a new repository:

1. Click the **`+`** in the top-right corner and select **New repository**.
2. **Crucially**, name your repository exactly like this: **`username.github.io`** (replace `username` with _your actual GitHub username_). This special naming is what tells GitHub to turn it into a website.
3. Make sure the repository is **Public**. GitHub Pages works on public repos for free accounts.
4. Hit **Create repository**.

>**Mind you my repository name is just the Th3Malwar3Club**

## Step 2: Download Obsidian

If you don't have it already, head over to the [Obsidian website](https://obsidian.md/) and download the version for your operating system. Install it like any other application.
## Step 3: Setting up a Vault

Think of an Obsidian "vault" as just a folder where all your notes and files live. **Note: you do not have use obsidian to create the folder, you can just navigate to the location where you would like the folder to exist and create it manually**

1. Choose a spot on your computer for this folder. A good idea is to name it the same as your GitHub repo (`yourusername.github.io`) for consistency.
2. Open Obsidian. Instead of creating a new vault, choose **Open folder as vault**.
3. Navigate to and select the folder you just created. Now Obsidian is ready to work with your files in that location.
## Step 4: Installing GIT

Git is the tool that connects your local files to your GitHub repository. There are various methods to using Git and I began this `Git for Windows` and later moved to using Windows Subsystem for Linux or `WSL` because it was more effective. 
### Using WSL for Git

1. Installing WSL via Powershell

```powershell
wsl --install -d Ubuntu
```
This enable WSL and installs a virtualized default Ubuntu distribution.
2. Reboot before installation is complete
3. Once back, type WSL in Windows search
4. A terminal with start a virtualized ubuntu session
5. In terminal window update and install git

```bash
sudo apt update
sudo apt install git

#enter the password you create the Ubuntu system with
```

Now that Git is installed in your WSL environment, navigate to your Obsidian vault folder _from_ the WSL terminal. Windows drives are mounted under `/mnt/`.
## Step 5: Initializing GIT and Obsidian

Using WSL navigate to the folder created for your vault

```bash
cd /mnt/<drive letter>/<path to vault>

#example cd /mnt/d/Th3Malwar3Club
```

Once inside the vault, let's link it to your Github repository:
**Note: these commands should be on the main page once you create your repo**

```bash
git remote add origin https://github.com/RMondGP/Th3Malwar3Club.git
git branch -M main
git push -u origin main

#if an error occurs here I had to research it's because there is no .git 
git init

#additional errors might occur, so try to setup it appropiately 
git config --global user.name <"your github username">
git config --global user.email <"email address for github">

#error might have stopped here and you may not need that third command push main but try

git push --force origin main

#else move to using obsidian and it should correct itself

```

After running these commands successfully in your WSL terminal, your local folder is now a Git repository connected to GitHub! You've done the heavy lifting.
## Step 6: Sync with Obsidian's Git Plugin

To make future syncing super easy, install the Git plugin within Obsidian:
1. Open up Obsidian
2. Click Open folder as Vault
3. Click the folder you created for the vault `username.github.io`
4. Once opened,  go to settings by clicking the gear to the right of your folder

<img src='images/Pasted_image_20250513195037.png'>
5. Navigate to community plugins where it should be restricted, accept the risk
6. Browse for plugins
 
<img src="/images/Pasted_image_20250513195307.png">

6. Search for the Git plugin and install
<img src='images/Pasted_image_20250513195454.png'>

7. Once installed, head back to your settings and there should be a section for community plugins with Git displayed, toggle it on, if not already on
<img src='images/Pasted_image_20250513195951.png'>

8. Exit out of settings and now obsidian should be ready for anything. You'll now see a Git icon <img src="/images/Pasted_image_20250513200120.png"> in the left sidebar. Click it to open the Git Source Control panel on the right. This panel lets you pull changes from GitHub, commit your local edits, and push them back to your repo – all without touching the command line! .
<img src='images/Pasted_image_20250513200310.png'>
9. Alternatively, use the command palette <img src='images/Pasted_image_20250513200407.png'>  or (`Ctrl/Cmd + P`) and type "Git Push", "Git Pull", or "Git Commit" for quick actions.
<img src='images/Pasted_image_20250513200540.png'>

That's it! Your Obsidian vault is now linked to GitHub, and you can use the plugin to easily sync your notes. Publish your brilliant thoughts to the web with just a few clicks!

Happy note-taking and publishing!

---
<a href="https://creativecommons.org">2025-05-04-Creating a GitHub-Page is a Pain</a> © 2025 by <a href="https://creativecommons.org">Rmondgp</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;">

