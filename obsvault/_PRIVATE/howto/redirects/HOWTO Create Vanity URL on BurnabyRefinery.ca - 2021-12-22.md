---
created: 2021-12-22T15:02:48-07:00
updated: 2022-06-26T13:05:12-06:00
---
# HOWTO Create Vanity URL on BurnabyRefinery.ca - 2021-12-22

## Overview

- No [[Concrete5 CMS]] Plugin for redirects, such as the newer, improved, shiny site, [[Sparlings.com]]


> [14:31] Amira Lazreg (Guest)
>
> You showed me how to create a vanity URL in sparlings, but for some reason I can't do that in burnabyrefinery and they need one today to print on a flyer



[[BurnabyRefinery.ca Website Inventory Item]]

![[BurnabyRefinery.ca Website Inventory Item#Website Overview BurnabyRefinery ca]]


## Test URLs

https://www.burnabyrefinery.ca/ParkPipelines
https://www.burnabyrefinery.ca/parkPipelines
https://www.burnabyrefinery.ca/pArKPipelINES


---

## Diary

- SSH to cp1...
	- Home IP changed, sigh, #todo upgrade home to business with static IP.
	- Using NordLayer `gorgeous gateway getaway` to get through IP restrictions.
	- `add failed: 70.75.125.28 is in already in the allow file /etc/csf/csf.allow`
	- Blarg, empty SSH tunnel in [[MobaXterm - SSH Client]] was breaking the connection.


### Edit `.htaccess`

#### Before

```shell
gs@cp1 ~> cd /home/burnabyrefinery/public_html
gs@cp1 /home/burnabyrefinery/public_html>
gs@cp1 /home/burnabyrefinery/public_html> cat .htaccess
RewriteOptions inherit
RewriteEngine On
# REDIRECTS

RewriteRule ^timbermart$ "/timbermart/en/" [R=302,L,NC]
RewriteRule ^timbermart-fr$ "/timbermart/fr/" [R=302,L,NC]

# -- concrete5 urls start --
        RewriteEngine On
        RewriteBase /
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME}/index.html !-f
        RewriteCond %{REQUEST_FILENAME}/index.php !-f
        RewriteRule . index.php [L]
# -- concrete5 urls end --

Header add Access-Control-Allow-Origin "*"
Header add Access-Control-Allow-Methods: "GET,POST,OPTIONS,DELETE,PUT"

# -- concrete5 urls start --
<IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME}/index.html !-f
        RewriteCond %{REQUEST_FILENAME}/index.php !-f
        RewriteRule . index.php [L]
</IfModule>
# -- concrete5 urls end --
gs@cp1 /home/burnabyrefinery/public_html>

```

#### After Edits

- Added Redirect
- Removed duplicate Concrete5 Rewrite block 

```apache
RewriteOptions inherit
RewriteEngine On
# REDIRECTS

RewriteRule ^timbermart$ "/timbermart/en/" [R=302,L,NC]
RewriteRule ^timbermart-fr$ "/timbermart/fr/" [R=302,L,NC]

# 2021-12-22 - Park-pipelines
RewriteRule ^park-pipelines$ "/en/community/refinery-projects/park-pipelines" [R=302,L,NC]
RewriteRule ^ParkPipelines$ "/en/community/refinery-projects/park-pipelines" [R=302,L,NC]
# /end 2021-12-22

# -- concrete5 urls start --
        RewriteEngine On
        RewriteBase /
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME}/index.html !-f
        RewriteCond %{REQUEST_FILENAME}/index.php !-f
        RewriteRule . index.php [L]
# -- concrete5 urls end --

Header add Access-Control-Allow-Origin "*"
Header add Access-Control-Allow-Methods: "GET,POST,OPTIONS,DELETE,PUT"

```




Use of the **[NC] flag** causes the RewriteRule to be matched in a case-insensitive manner. That is, it doesn't care whether letters appear as upper-case or lower-case in the matched URI. In the example below, any request for an image file will be proxied to your dedicated image server.

[  

### RewriteRule Flags - Apache HTTP Server Version 2.4

> Use of the [NC] flag causes the `[RewriteRule](https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewriterule)` to be matched in a case-insensitive manner. That is, it doesn't care whether letters appear as upper-case or lower-case in the matched URI.
> 
> In the example below, any request for an image file will be proxied to your dedicated image server. The match is case-insensitive, so that `.jpg` and `.JPG` files are both acceptable, for example.
> 
> `RewriteRule "(.*\.(jpg|gif|png))$" "http://images.example.com$1" [P,NC]``
> 
> Source: https://httpd.apache.org/docs/2.4/rewrite/flags.html#flag_nc





## Commit? git or bzr?
[[git]] or [[bzr]]

```shell
gs@cp1 /home/burnabyrefinery/public_html> vim .htaccess
gs@cp1 /home/burnabyrefinery/public_html> ls -la .
total 336
drwxrwx---+ 11 burnabyrefinery burnabyrefinery   4096 Dec 22 15:34 ./
drwx--x--x+ 15 burnabyrefinery burnabyrefinery   4096 Sep 28 19:07 ../
drwsrws---+  8 burnabyrefinery burnabyrefinery   4096 Aug 12 13:32 .git/
-rwSrws---+  1 burnabyrefinery burnabyrefinery    163 Nov  6  2020 .gitignore*
-rw-rwx---+  1 burnabyrefinery burnabyrefinery    680 Dec 22 15:50 .htaccess*
-rw-rwx---+  1 root            root               822 Dec 22 15:34 .htaccess.bak.2021-12-22*
drwxrwx---+  2 gs              gs                4096 Dec 10 19:26 .ssl/
drwsrws---+  3 burnabyrefinery burnabyrefinery   4096 Nov  9  2020 .well-known/
-rwSrws---+  1 burnabyrefinery burnabyrefinery   1093 Nov  6  2020 LICENSE.TXT*
drwsrws---+  4 burnabyrefinery burnabyrefinery   4096 Nov  6  2020 _sandbox/
drwsrws---+  2 burnabyrefinery burnabyrefinery   4096 Nov  6  2020 _tests/
drwsrws---+  9 burnabyrefinery burnabyrefinery   4096 Nov  6  2020 application/
-rwSrws---+  1 burnabyrefinery burnabyrefinery   1824 Nov  6  2020 composer.json*
-rwSrws---+  1 burnabyrefinery burnabyrefinery 225130 Nov  6  2020 composer.lock*
drwsrws---+ 23 burnabyrefinery burnabyrefinery   4096 Nov  6  2020 concrete/
-rw-rwx---+  1 burnabyrefinery burnabyrefinery  30989 Dec 21 12:37 error_log*
-rwSrws---+  1 burnabyrefinery burnabyrefinery   1238 Nov  6  2020 favicon.ico*
-rwSrws---+  1 burnabyrefinery burnabyrefinery     45 Nov  6  2020 index.php*
drwsrws---+  3 burnabyrefinery burnabyrefinery   4096 Nov  6  2020 launch-temp/
drwsrws---+  7 burnabyrefinery burnabyrefinery   4096 Aug 10 13:03 packages/
-rwSrws---+  1 burnabyrefinery burnabyrefinery    549 Nov  6  2020 robots.txt*
-rwSrwsr--+  1 burnabyrefinery burnabyrefinery   3636 Nov  9  2020 sitemap.xml*
gs@cp1 /home/burnabyrefinery/public_html> git status
On branch master
Your branch is ahead of 'origin/master' by 11 commits.
  (use "git push" to publish your local commits)
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   .htaccess
        modified:   application/config/database.php
        modified:   concrete/bin/concrete5

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .htaccess.bak.2021-12-22
        .ssl/
        .well-known/
        error_log
        launch-temp/
        packages/formidable_full/
        sitemap.xml

no changes added to commit (use "git add" and/or "git commit -a")
gs@cp1 /home/burnabyrefinery/public_html>


```