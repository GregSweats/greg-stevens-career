---
created: 2022-06-26T13:05:13-06:00
updated: 2022-06-26T13:05:13-06:00
---
# 2022-03-31 SSL Renewal #howto 

#howto #polished

## Online Version @ `kb.parkland.cloud`

https://kb.parkland.cloud/daily-notes/2022-03-31+SSL+Renewal+howto
```
pkwt21$
```

> *The kb.parkland.cloud system is a paid service, that I pay personally for, and will be going away in the next few months.*
> *All notes are still accessible in the GitHub repo though, usable through the more powerful [[Obsidian]] desktop app.*
> 
> *-- 2022-03-31, [[Greg Stevens @gsteve3]]*







## Contents




---

-   [Online Version @ `kb.parkland.cloud`](#Online%20Version%20@%20%60kb.parkland.cloud%60)
-   [Contents](#Contents)
-   [Overview](#Overview)
-   [Special Notes](#Special%20Notes)
    -   [dashboard2 (UptimeRobot)](#dashboard2%20(UptimeRobot))
        -   [SSLMate Account Configuration](#SSLMate%20Account%20Configuration)
-   [Screen Recording](#Screen%20Recording)
    -   [Local Path on Greg's Desktop (for posterity)](#Local%20Path%20on%20Greg's%20Desktop%20(for%20posterity))
    -   [OneDrive Share (from @dalyle.io)](#OneDrive%20Share%20(from%20@dalyle.io))
        -   [Sent 2nd Link to the entire "Screenshots" folder, with more usable `.mov` file](#Sent%202nd%20Link%20to%20the%20entire%20%22Screenshots%22%20folder,%20with%20more%20usable%20%60.mov%60%20file)
    -   [Added Jay & Greg W. to Dalyle.io PKWT SharePoint](#Added%20Jay%20&%20Greg%20W.%20to%20Dalyle.io%20PKWT%20SharePoint)
-   [After Renewal and Activation Tests](#After%20Renewal%20and%20Activation%20Tests)
    -   [Qualys SSL Labs](#Qualys%20SSL%20Labs)
        -   [dot ca](#dot%20ca)
        -   [dot com](#dot%20com)
-   [Shell History](#Shell%20History)
    -   [dot ca](#dot%20ca)
    -   [dot com](#dot%20com)
    -   [Output of `ls -la` for US (dot com) Site](#Output%20of%20%60ls%20-la%60%20for%20US%20(dot%20com)%20Site)
    -   [Output of `sslmate download ridgelinelubricants.com` for US (dot com) Site](#Output%20of%20%60sslmate%20download%20ridgelinelubricants.com%60%20for%20US%20(dot%20com)%20Site)
        -   [`sslmate renew DOMAIN_NAME` - `Error: the certificate for ridgelinelubricants.com is not about to expire.`](#%60sslmate%20renew%20DOMAIN_NAME%60%20-%20%60Error:%20the%20certificate%20for%20ridgelinelubricants.com%20is%20not%20about%20to%20expire.%60)

> Above output pasted from dynamic TOC using a markdown code fence with language=`toc`, like below:
> ```md
> ```toc-disabled
> *Remove the `-disabled` from that to generate TOC in Obsidian Desktop App*
> ```
> ```

## Overview
- Wrote by [[Greg Stevens @gsteve3]] for [[Jay Peterson - jpeterson - Infrastructure]] (primary audience), as well as [[Greg Wills - Infrastructure @gwills]] (secondary audience) on 2022-03-31.
- Work done on [[legacy1.parkland.cloud]] #PROD 
- These are the notes to go along with the raw Screen Recording of SSL Renewal for [[RidgelineLubricants.ca]].
- Shows renewal process using [[SSLMate]] on [[legacy1.parkland.cloud]].
	- Only server that uses that, other sites, within the [[Linode Manager]] / [[RunCloud.io]] environment, use Let's Encrypt.
	- Those sites, outside of `legacy`, should keep automatically renewing their SSL certificates.
	- SSL for newer environment is all managed via [[RunCloud.io]]
		- [[Trevor Wong]] has access.
	- Long-term goal is for Jay and Greg W. to use [[Let's Encrypt & certbot]]



--- 



## Special Notes

- SSL cert was bought under a Media Dog account previously.
	- Cert is still owned by Parkland, private key, CRT, all on the server.
	- Can always replace cert, which is the goal with [[Let's Encrypt & certbot]]
- Both domains (.ca and .com) are **valid until April 1, 2023**
- SSL Certs can be updated by regular users, no ~~`sudo`~~ needed b/c `/srv/www` has ACLs setup
	- Run `getfacl /srv/www` to see them.
	- Allows any user in the `mediadog` group to read/write anything within that directory.
		- Sorry for the naming, if you can change easily, go for it, be sure to try on dev first.
	- ***Jay, your user will be a  part of that group, which also grants NOPASSWD `sudo ...` access***



### dashboard2 (UptimeRobot)
- [`dashboard2.parkland.cloud`](https://dashboard2.parkland.cloud/)
- [[Trevor Wong]] has access to UptimeRobot.com
	- UptimeRobot username is `trevor.wong@parkland.ca`
	- Dalyle (Greg) 1Password `PKWT Shared` - https://start.1password.com/open/i?a=LES3D2WSRZDS7LMVRJJ7VLNNNI&v=4uypngpnogg5qwsl2ux3t5n5fy&i=xgb4ym53u3ugwcavznw6jeacli&h=dalyleio.1password.com



#### SSLMate Account Configuration
- If Parkland wants to continue using SSLMate, instead of [[Let's Encrypt & certbot]], we should setup an account there.
- As of 2022-03-31 I, [[Greg Stevens @gsteve3]], do not see a reason for an account, because...
	- Switch to Let's Encrypt soon
	- Certificates are downloaded on server, not tied to an account that will expire.
	- As sites come up for renewal, or before, certbot can be used instead of SSLMate.
	- Parkland can always install any `.crt` and `.key`
		- Updating the existing files, then restarting apache (`systemctl restart httpd`)
		- or, reconfiguring the site VirtualHost config in `/etc/httpd/sites-enabled/*`, pretty standard `CentOS7, Apache` setup.


> The sslmate command is configured by the global config file, `/etc/sslmate.conf`, 
> 
> as well as your personal config file, `.sslmate` in your home directory.
> 
> Options in your personal config file override options in the global config file.
>
> *-- [sslmate.com/help/... Configure SSLMate cmdline](https://sslmate.com/help/cmdline/config)*  


---



## Screen Recording

### Local Path on Greg's Desktop (for posterity)

```shell
C:\Users\gsteve\Dalyle\PKWT Web Team - Documents
\Screencasts\good-ones
\2022-03-31 13-00-47 pkwt SSL Renewal on legacy1 for RidgelineLubricants ca and dot com.mkv
```

Turned into .mp4 and moved into SharePoint `pkwt@dalyle.io` (NOT a Parkland service, Owned by Greg@Dalyle).

### OneDrive Share (from @dalyle.io)
- Shared with [[Jay Peterson - jpeterson - Infrastructure]] 2022-03-31 at 14:37:01
- Ask me, [[Greg Stevens @gsteve3]], and I can give access to more people.
- File should be downloadable from the link.
- [ ] #todo(@Jay?) Download the SSL Renewal Screencast, and/or all files, from pkwt@dalyle.io SharePoint/OneDrive and place it into a Parkland owned spot.



#### Sent 2nd Link to the entire "Screenshots" folder, with more usable `.mov` file
- Previous link was to OBS raw `.mp4` file, which doesn't play nicely with a lot of things.
- [Link to Screencasts, sent 2022-03-31 at 16:16:30](https://dalyle.sharepoint.com/:f:/s/pkwt/EkpnK0W4CFxOt5_v5COJLPIBkeD1smoohPy4PcXylhBlGw?e=RzujlV)
- [Link to Entire PKWT Sharepoint @ Dalyle.io, sent 2022-03-31 at 16:16:30]()
- Links sent to Jay and Greg (with PROPER email addresses, sorry Jay, missed the `@parklandusa.com` part for the first invite).
- 



### Added Jay & Greg W. to Dalyle.io PKWT SharePoint
- Jay and Greg may be interested in everything that's there.
- [[Greg Stevens @gsteve3]] isn't even sure what is in there, likely very raw stuff.
- Please download everything so you have a copy at Parkland.
- Kind of a mess.
- `Screencasts/good-ones` is a good place to start.
- Used purely for shared file storage.
- [[Trevor Wong]] might be semi-familiar with it.
- #tip #help Trevor, Sylvain, and Amira, have all been a part of the pkwt@dalyle.io group for months, but not used/needed often.


![[20220331162105 pkwt@dalyle.io Add Jay and Greg to SharePoint.png|500]]
![[20220331162826 pkwt@dalyle.io Group All Members.png|500]]



---
---
---

## After Renewal and Activation Tests
### Verify SSL Cert and Configuration with [[Qualys SSL Labs]] 


#### dot ca

```ad-success
- Overall Rating   B
- Valid from 	Thu, 03 Mar 2022 00:00:00 UTC
- Valid until 	Sat, 01 Apr 2023 23:59:59 UTC (expires in 1 year)
```


> https://www.ssllabs.com/ssltest/analyze.html?d=www.ridgelinelubricants.com&hideResults=on&latest
> 
> ![[Pasted image 20220331134023.png|500]]





#### dot com

```ad-success
- Overall Rating   B
- Valid from 	Thu, 03 Mar 2022 00:00:00 UTC
- Valid until 	Sat, 01 Apr 2023 23:59:59 UTC (expires in 1 year)
```

> https://www.ssllabs.com/ssltest/analyze.html?d=www.ridgelinelubricants.com&hideResults=on&latest
> 
> ![[Pasted image 20220331133148.png|500]]



---

## Shell History
#cli #history



### dot ca
```shell
cd /srv/www/ridgeline
# follow steps in next section for the dot com
# update the commands/paths as needed
```

### dot com


```shell
cd /srv/www/ridgeline-us/ridgeline-us/sslmate/
ls -la
sslmate download ridgelinelubricants.com
sudo httpd -t && sudo systemctl restart httpd
```


### Output of `ls -la` for US (dot com) Site

```shell
legacy1:/srv/www/ridgeline-us/sslmate
$ ls -la
total 44
drwxrwxr-x+ 2 gregs mediadog 4096 Mar 31 13:27 .
drwxrwxr-x+ 7 root  root     4096 Apr  1  2021 ..
-rw-rw-r--+ 1 gregs mediadog 1222 Apr  1  2021 apache-ssl.inc.conf
-rw-r--r--+ 1 gregs mediadog 4135 Mar 31 13:27 ridgelinelubricants.com.chain.crt
-rw-r--r--+ 1 gregs mediadog 6391 Mar 31 13:27 ridgelinelubricants.com.chained.crt
-rw-r--r--+ 1 gregs mediadog 2256 Mar 31 13:27 ridgelinelubricants.com.crt
-rw-rw-r--+ 1 gregs mediadog 1704 Apr  1  2021 ridgelinelubricants.com.key
legacy1:/srv/www/ridgeline-us/sslmate
```


### Output of `sslmate download ridgelinelubricants.com` for US (dot com) Site

#### `sslmate renew DOMAIN_NAME` - `Error: the certificate for ridgelinelubricants.com is not about to expire.`
- Thank you SSLMate for warning us.
- Next step is to download the already up-to-date cert (must have been ordered previously, was a surprise to have active cert in account, late nights hacking though leave some things surprising in the mornings)

```shell
legacy1:/srv/www/ridgeline-us/sslmate
$ sslmate renew ridgelinelubricants.com
perl: warning: Setting locale failed.
perl: warning: Please check that your locale settings:
        LANGUAGE = (unset),
        LC_ALL = (unset),
        LANG = "C.UTF-8"
    are supported and installed on your system.
perl: warning: Falling back to the standard locale ("C").
Error: the certificate for ridgelinelubricants.com is not about to expire.
Tip: to reissue this certificate, run 'sslmate reissue ridgelinelubricants.com'.
Tip: use --force to override the above error.
legacy1:/srv/www/ridgeline-us/sslmate
$
```

---
*end*

---
