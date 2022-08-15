---
created: 2021-12-26T15:31:29-07:00
updated: 2022-06-26T13:05:10-06:00
---
# Create DNS Record for sql3



```
172.105.16.196
sql3.prod2

sql3.prod2.parkland.cloud
```

https://dash.cloudflare.com/88582e394a116d202be97871168e869d/parkland.cloud/dns


![[Pasted image 20211226153147.png]]


- [ ] Update [[parkland.ca]] DB Conf


'server' => '172.105.16.196',


'server' => 'sql3.prod2.parkland.cloud',


```php
<?php

return [
    'default-connection' => 'concrete',
    'connections' => [
        'concrete' => [
            'driver' => 'c5_pdo_mysql',

            'server' => 'sql3.prod2.parkland.cloud',
            'database' => 'parkland_ca_c5',
            'username' => 'parkland_ca_sqlusr1',
            'password' => '+6_pbJNxGwZML5*UNZ^@9^oZ,b1{uD^*',
            
            'charset' => 'utf8',
        ],
    ],
];
```