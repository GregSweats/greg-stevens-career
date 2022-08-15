---
created: 2021-11-11T13:18:29-07:00
updated: 2022-06-26T13:05:12-06:00
---
# Separate testing directory from parkland_ca git repo into new parkland_ca_testing repo - 2021-11-11

After chatting with [[Sylvain Theroux @stheroux1]] (@stheroux1) today, it made more sense to have the test repo separate.
Jr devs, QA, ... are going to be in this repo.
People unfamiliar with git.
Chances of breaking increase.

So, let's reduce the risk that they:

1. Git protection rules don't break and lead to accidental prod source writing/launching.
2. Accidental launches, or needles deploys, or complicated deploy scripts, required to avoid tests going live.
3. ....



## HOW?



```shell
git filter-branch --prune-empty --subdirectory-filter testing develop
```

*https://ao.ms/how-to-split-a-subdirectory-to-a-new-git-repository-and-keep-the-history/*


### Output

```shell
       

usage: git filter-branch [--setup ] [--subdirectory-filter ] [--env-filter ] 
 [--tree-filter ] [--index-filter ] 
 [--parent-filter ] [--msg-filter ] 
 [--commit-filter ] [--tag-name-filter ] 
 [--original ] 
 [-d ] [-f | --force] [--state-branch ] 
 [--] [...] 
 
greg@blacklap MINGW64 /c/www/parkland_ca_temp (develop) 
$ git filter-branch --prune-empty --subdirector-filter testing develop 
usage: git filter-branch [--setup ] [--subdirectory-filter ] [--env-filter ] 
 [--tree-filter ] [--index-filter ] 
 [--parent-filter ] [--msg-filter ] 
 [--commit-filter ] [--tag-name-filter ] 
 [--original ] 
 [-d ] [-f | --force] [--state-branch ] 
 [--] [...] 
 
greg@blacklap MINGW64 /c/www/parkland_ca_temp (develop) 
$ git filter-branch --prune-empty --subdirectory-filter testing develop 
.git-rewrite already exists, please remove it 
 
greg@blacklap MINGW64 /c/www/parkland_ca_temp (develop) 
$ rm .git-rewrite/ 
rm: cannot remove '.git-rewrite/': Is a directory 
 
greg@blacklap MINGW64 /c/www/parkland_ca_temp (develop) 
$ git status 
On branch develop 
Your branch is up to date with 'origin/develop'. 
 
nothing to commit, working tree clean 
 
greg@blacklap MINGW64 /c/www/parkland_ca_temp (develop) 
$ rm -rf .git-rewrite/ 
 
greg@blacklap MINGW64 /c/www/parkland_ca_temp (develop) 
$ git filter-branch --prune-empty --subdirectory-filter testing develop 
Rewrite c52a3077621d3201cbf7b6e9cbb9bde2a7816088 (2/4) (1 seconds passed, remaining 1 predicted) 
Ref 'refs/heads/develop' was rewritten
```



### As a `/script/` ala GitHub Scripts

- Read about this today, while reading about [[vscode.dev]], which lead to [[github.dev]], which lead to an article, which lead to ...

https://github.com/github/scripts-to-rule-them-all

- `script` (singular), NOT `scripts` (plural) 
- Noting because [[Greg Stevens @gsteve3]] debates all the time.




