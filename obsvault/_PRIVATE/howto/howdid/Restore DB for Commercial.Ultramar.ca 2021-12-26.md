---
created: 2021-12-26T14:45:34-07:00
updated: 2022-06-26T13:05:10-06:00
---
# Restore DB for Commercial.Ultramar.ca 2021-12-26

- [[Commercial.Ultramar.ca]]
- [[Restore DB for pk-credit 2021-12-26]]


## Diary
- [[DBeaver]]
- [[sql3]]



- Right click Database `ultramarcomm_c5`
- `Tools` -> `Restore Database`
- `C:\sql-dumps\pkwebs-sprint3\ultramarcomm_c5.sql1.prod.202112261348.sql`


### [[DBeaver]] Log

```shell
c:\xampp\mysql\bin\mysql.exe -u root --host=127.0.0.1 --port=47120 ultramarcomm_c5
Task 'MySQL restore' started at Sun Dec 26 14:45:38 MST 2021
Task 'MySQL restore' finished at Sun Dec 26 14:50:30 MST 2021
```
