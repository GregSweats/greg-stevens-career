---
created: 2021-12-21T10:41:31-07:00
updated: 2022-06-26T13:05:09-06:00
---
# HOWTO Allow Admin IPs on parkland-dedicated Server


```
firewall-cmd --permanent --zone=admins --add-source=198.53.248.102
firewall-cmd --permanent --zone=admins --add-source=68.145.254.154
firewall-cmd --reload
```


```
198.53.248.102
68.145.254.154
```

![[Allowed Admin IP Addresses]]