---
created: 2022-08-14T18:50:22-06:00
updated: 2022-08-14T18:50:22-06:00
---
### Installing PowerShellGet - PowerShell | Microsoft Docs
URL: https://docs.microsoft.com/en-us/powershell/scripting/gallery/installing-psget?view=powershell-7.2

> ```
> Install-PackageProvider -Name NuGet -Force
> Install-Module PowerShellGet -AllowClobber -Force
> Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
	Install-Module -Name PSWSMan
> ```



##

```
Disconnect-ExchangeOnline
```


> Note
> 
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command.
>
> -- https://docs.microsoft.com/en-us/powershell/exchange/connect-to-exchange-online-powershell?view=exchange-ps#connect-to-exchange-online-powershell-using-modern-authentication-with-or-without-mfa


> ```
> *   Update-Module -Name ExchangeOnlineManagement> ```

>
> -- https://docs.microsoft.com/en-us/powershell/exchange/exchange-online-powershell-v2?view=exchange-ps#code-try-13



---

#LinkDump 6/14/2022, 2:28:41 PM

- [OWA URL Parameters for Search Results](https://social.technet.microsoft.com/Forums/en-US/331d864a-cf28-4f4b-bb37-f2f0857a2507/owa-url-parameters-for-search-results?forum=exchangesvrclients)
- [Using Outlook Web App Web parts: Exchange 2013 Help | Microsoft Docs](https://docs.microsoft.com/en-us/exchange/using-outlook-web-app-web-parts-exchange-2013-help#outlook-web-app-web-parts-syntax)
- [ExchangePowerShell Module | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/exchange/?view=exchange-ps)
- [ExchangePowerShell search - Google Search](https://www.google.com/search?q=ExchangePowerShell+search&sxsrf=ALiCzsYd7t-QLnvS6O3X9uT_DDpmgVz_uA%3A1655237264630&ei=kOqoYoiPJv3H0PEPq46E6A8&ved=0ahUKEwiIl7Wp3634AhX9IzQIHSsHAf0Q4dUDCA4&uact=5&oq=ExchangePowerShell+search&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEA0yBAgAEA0yBAgAEA0yBAgAEA0yBAgAEA0yBAgAEA0yBAgAEA0yBAgAEA0yBggAEB4QFjIGCAAQHhAWOgcIABBHELADOgUIABCABDoGCAAQHhAKOgQIABAeOgYIABAeEA1KBAhBGABKBAhGGABQkgFYkQpgqAtoAXABeACAAWiIAYEFkgEDNi4xmAEAoAEByAEIwAEB&sclient=gws-wiz)
- [Connect to Exchange Online PowerShell | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/exchange/connect-to-exchange-online-powershell?view=exchange-ps)
- [Install-Module (PowerShellGet) - PowerShell | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/powershellget/install-module?view=powershell-7.2)
- [Exchange admin center](https://admin.exchange.microsoft.com/#/migrationbatch)




---




> # Search-Mailbox
> 
> *   Reference
> 
> Module:[ExchangePowerShell](https://docs.microsoft.com/en-us/powershell/module/exchange/?view=exchange-ps)Applies to:Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
> 
> This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
> 
> Use the Search-Mailbox cmdlet to search a mailbox and copy the results to a specified target mailbox, delete messages from the source mailbox, or both.
> 
> **Note**: In cloud-based environments, the Search-Mailbox cmdlet is being deprecated in favor of [New-ComplianceSearch](https://docs.microsoft.com/en-us/powershell/module/exchange/new-compliancesearch) and related eDiscovery cmdlets.
> 
> By default, Search-Mailbox is available only in the Mailbox Search or Mailbox Import Export roles, and these roles aren't assigned to _any_ role groups. To use this cmdlet, you need to add one or both of the roles to a role group (for example, the Organization Management role group). Only the Mailbox Import Export role gives you access to the DeleteContent parameter. For more information about adding roles to role groups, see [Add a role to a role group](https://docs.microsoft.com/en-us/Exchange/permissions/role-groups#add-a-role-to-a-role-group).
> 
> For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/en-us/powershell/exchange/exchange-cmdlet-syntax).
>
> -- https://docs.microsoft.com/en-us/powershell/module/exchange/search-mailbox?view=exchange-ps#article-header



