---
created: 2021-11-08T09:56:21-07:00
updated: 2022-06-26T13:05:11-06:00
version: 1.0.0-dev.1
---

# HOWTO Access the Linux Shell of a PK Web Server	


## Shell?
Linux servers typicall (99.999%) of the time do not have a GUI like Windows or Mac, or like Linux desktops with Gnome, KDE, or, Manjaro's custom one (Cinnamon?).



### SSH provides a "Secure Shell Connection"

- Port 22
	- Often changed to something else, but with many people working on these servers, during times when they may be down, alternate port sux.
	- Firewall restricted to [[Allowed Admin IP Addresses]].
- Traffic is encrypted


### "SSH Tunneling"

> SSH tunneling, also known as SSH port forwarding, is a technique that enables a user to open a secure tunnel between a local host and a remote host.

SSH port forwarding redirects network traffic to a particular port/IP address so that a remote host is made directly accessible by applications on the local host. The destination may be on the remote SSH server, or that server may be configured to forward to yet another remote host.

SSH tunnels are powerful tools for IT administrators, as well as malicious actors, because they can transit an enterprise firewall undetected. As a result, there are tools available to prevent unauthorized use of SSH tunnels through a corporate firewall.

-- From *[What is SSH (Secure Shell)? Definition from SearchSecurity (techtarget.com)](https://searchsecurity.techtarget.com/definition/Secure-Shell)*

Also see [SSH port forwarding/tunneling use cases and concrete examples. Client command, server configuration. Firewall considerations.](https://www.ssh.com/academy/ssh/tunneling/example)

- SSH is often used for `SSH Tunneling`
	- a.k.a. `SSH Jump Host`
	- a.k.a. `SSH Gateway`
	- #vocabulary #lexicon 
	- [[000 - README - Lexicon - PKWEBS (this vault)]]




## Resources

[SSH port forwarding/tunneling use cases and concrete examples. Client command, server configuration. Firewall considerations.](https://www.ssh.com/academy/ssh/tunneling/example)


[Obsidian Markdown Reference | Markdown Guide](https://www.markdownguide.org/tools/obsidian/)

[The Markdown Guide Book | Markdown Guide](https://www.markdownguide.org/book/)
