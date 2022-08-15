---
created: 2021-12-22T13:40:47-07:00
updated: 2022-06-26T13:05:10-06:00
---
# Create Wildcard Apache VirtualHost for pkclone.dev2


```
*.dev2.parkland.cloud => dedicated-clone.parkland.cloud
```

e.g. `fasgasplus.dev2.parkland.cloud`



```
<VirtualHost *:80>
    ServerAlias *.example.com
    VirtualDocumentRoot /srv/www/%1/www
</VirtualHost>
```



## Wildcard SSL -- OR -- CloudFlare Proxy?

Proxy probably.
Just requires a little tiny bit of setup for each site.

Hmmm...



## Related
- [[parkland-dedicated]]
- [[MASTERISH LIST OF SITES IN OBS VAULT]]
-
