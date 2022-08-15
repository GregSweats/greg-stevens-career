---
date_created: 2021-11-03
created: 2021-12-16T15:53:36-07:00
updated: 2022-06-26T13:05:11-06:00
---
# 002 - HOWTO use gh cli to create repos and more

Also see [[2021-11-01]]
- [002 HOWTO use gh cli](#002-howto-use-gh-cli)
- [Create Repo (`gh repo create`)](#create-repo-gh-repo-create)
  - [Example: `pkwebdocs-obsidian-vault`](#example-pkwebdocs-obsidian-vault)
    - [Result](#result)

---

# Create Repo (`gh repo create`)

```shell
gh repo create --private --confirm parkland-websites/REPLACE_WITH_REPO_NAME
```


## Example: `pkwebdocs-obsidian-vault`

```shell
gh repo create --private --confirm parkland-websites/pkwebdocs-obsidian-vault
```

### Result

```shell

C:\Users\gsteve>gh repo create --private --confirm parkland-websites/pkwebdocs-obsidian-vault
✓ Created repository parkland-websites/pkwebdocs-obsidian-vault on GitHub
Initialized empty Git repository in C:/Users/gsteve/pkwebdocs-obsidian-vault/.git/
✓ Initialized repository in "pkwebdocs-obsidian-vault"

C:\Users\gsteve>date
The current date is: 2021-11-03
Enter the new date: (yy-mm-dd)
C:\Users\gsteve>time
The current time is: 19:16:53.18
Enter the new time:
C:\Users\gsteve>
```



