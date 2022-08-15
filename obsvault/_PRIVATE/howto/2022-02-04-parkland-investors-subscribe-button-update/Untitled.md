---
created: 2022-02-04T15:38:15-07:00
updated: 2022-06-26T13:05:11-06:00
---
# Untitled

[C:\src\pkwebdocs-obsidian-vault\howto\2022-02-04-parkland-investors-subscribe-button-update\test-new-iframe.html](file:///C:/src/pkwebdocs-obsidian-vault/howto/2022-02-04-parkland-investors-subscribe-button-update/test-new-iframe.html)





```shell
$ curl "https://parkland.mediaroom.com/email-alerts?pagetemplate=iframe&iframe=true" -I
HTTP/2 200
date: Fri, 04 Feb 2022 22:48:47 GMT
content-type: text/html; charset=UTF-8
x-frame-options: SAMEORIGIN
set-cookie: PHPSESSID=po0secri2icirgpdbhmu49g4g5; path=/; secure; HttpOnly
strict-transport-security: max-age=31536000; includeSubDomains
cache-control: public, no-cache
cf-cache-status: DYNAMIC
expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
set-cookie: __cf_bm=QXW.eFg1orMzWZHICgsbbAMgG12nc8rRb2y.rfR8w_U-1644014927-0-AWZCba4iVhDPzad9jBY9AzzHd2FwRHCPpsPz/J3GrWgAmvh4iE5wi9g4tgwIromg9hcatYxHetZuS2bJ9XZovo4=; path=/; expires=Fri, 04-Feb-22 23:18:47 GMT; domain=.mediaroom.com; HttpOnly; Secure; SameSite=None
set-cookie: __cfruid=9c1cab99220c28ff5ca785733586b3bbe3e1ea1b-1644014927; path=/; domain=.mediaroom.com; HttpOnly; Secure; SameSite=None
server: cloudflare
cf-ray: 6d8772ccad8f8411-YVR
```

The problem is the HTTP Header `x-frame-options: SAMEORIGIN`.
That is returned from the `parkland.mediaroom.com` server.
Nothing we can control, but, maybe a `mediaroom.com` rep can help fixit?

