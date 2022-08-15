---
created: 2021-12-23T16:31:06-07:00
updated: 2022-06-26T13:05:12-06:00
result_url: https://github.com/parkland-websites/nfn-mobileapp
---
# github repo setup for nfn-mobileapp

```ad-success
https://github.com/parkland-websites/nfn-mobileapp
```

- Different, separate, than the [[parkland-locations]] repo.
- Found while testing API monitoring with checkly. 
	- [[API Monitoring at Checkly for NFN Mobile App Data]]
- See older note - [[002 - HOWTO use gh cli to create repos and more]]
- Creating repo here.
- [[nfn-mobileapp]]



## Diary


![[002 - HOWTO use gh cli to create repos and more#Create Repo gh repo create]]

```shell
gh repo create --private --confirm parkland-websites/nfn-mobileapp
```

### Result - so easy!
![[Pasted image 20211223163352.png]]


```powershell
C:\WINDOWS\system32> gh repo create --private --confirm parkland-websites/nfn-mobileapp                                 ✓ Created repository parkland-websites/nfn-mobileapp on GitHub                                                          Initialized empty Git repository in C:/Windows/System32/nfn-mobileapp/.git/                                             ✓ Initialized repository in "nfn-mobileapp"                                                                                                                                                                                                                                                                                                                             A new release of gh is available: 2.2.0 → v2.4.0                                                                        https://github.com/cli/cli/releases/tag/v2.4.0                                                                                                                                                                                                  C:\WINDOWS\system32>         
```



### GitHub.com
https://github.com/parkland-websites/nfn-mobileapp


## Push Existing Local Repo to New GitHub Enterprise Repo

```shell
       

greg@blacklap MINGW64 ~ 
$ cd /c/www/nfn-mobileapp/ 
 
greg@blacklap MINGW64 /c/www/nfn-mobileapp (master) 
$ git remote -v 
origin ssh://gregs@mdpdev.ca:/projects/git-repos/nfn-mobileapp.git (fetch) 
origin ssh://gregs@mdpdev.ca:/projects/git-repos/nfn-mobileapp.git (push) 
prod ssh://gregs@parkland.mdphosting.ca:/srv/www/nfn-mobileappapi/nfn-mobilea
pp.git/ (fetch) 
prod ssh://gregs@parkland.mdphosting.ca:/srv/www/nfn-mobileappapi/nfn-mobilea
pp.git/ (push) 
 
greg@blacklap MINGW64 /c/www/nfn-mobileapp (master) 
$ git remote rename origin git-repos 
 
greg@blacklap MINGW64 /c/www/nfn-mobileapp (master) 
$ git remote^C 
 
greg@blacklap MINGW64 /c/www/nfn-mobileapp (master) 
$ git remote add origin https://github.com/parkland-websites/nfn-mobileapp.git 
 
greg@blacklap MINGW64 /c/www/nfn-mobileapp (master) 
$ git branch -M main 
 
greg@blacklap MINGW64 /c/www/nfn-mobileapp (main) 
$ git push -u origin main 
Enumerating objects: 224, done. 
Counting objects: 100% (224/224), done. 
Delta compression using up to 12 threads 
Compressing objects: 100% (217/217), done. 
Writing objects: 100% (224/224), 14.91 MiB | 3.31 MiB/s, done. 
Total 224 (delta 90), reused 0 (delta 0) 
remote: Resolving deltas: 100% (90/90), done. 
To https://github.com/parkland-websites/nfn-mobileapp.git 
 * [new branch]      main -> main 
Branch 'main' set up to track remote branch 'main' from 'origin'. 
 
greg@blacklap MINGW64 /c/www/nfn-mobileapp (main) 
$
```

![[Pasted image 20211223163635.png]]




![[Pasted image 20211223163708.png]]





