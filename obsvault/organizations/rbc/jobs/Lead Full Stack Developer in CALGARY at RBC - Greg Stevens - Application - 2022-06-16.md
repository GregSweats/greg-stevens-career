---
aliases: [rbc3]
created: 2022-08-14T18:50:24-06:00
updated: 2022-08-14T18:50:24-06:00
---

![[header-footer.include]]

### Lead Full Stack Developer in CALGARY, Alberta, Canada - Technology - Analytics - Research at RBC - Jobs at RBC

Original Job Detail URL:
https://jobs.rbc.com/ca/en/job/R-0000011356/Lead-Full-Stack-Developer


---


Dear RBC,

This is my third attempt at writing something to submit to you.

This time, I wrote a web scraper in Excel, utilizing Power Query, to scrape the far-too-hidden / un-dommmable / probably bad for SEO,
elements from the job site.

This led to the last six hours.

It is now 3 AM Local Time, Mountain Time.
I have been at this since probably 5 P.M. and a few hours on other things last couple nights.

That can be see in the below two early drafts:

1. [[RBC Cover Letter 2022-06-14|rbc]]
2. [[RBC Cover Letter 2022-06-14 v2  - With Attitude|rbc2]]


Now the better work can be seen here (career.stevens.pro/rbc3) and below:

> [!LINK] GitHub Repo
> https://github.com/gsteve3/rbc-jobs-scraper

> [!LINK] YouTube Screencast - Making Of...
> https://www.youtube.com/playlist?list=PLqKgLp9aiBB-f4XBylmTZ3OoWkg0laq8W
> 
> *Videos may not be up until afternoon of Thursday, June 16, sorry, uploading and copyright issues.*

---

Below is a copy of the job posting, plus some quick comments regarding each point.

More importantly is that work in the GitHub Repo, and github.com/trxn8r/trxn8r

It shows exactly how I go about text parsing, data transformations, APIs.


- I used [[Insomnia and inso CLI|Insomnia]] to get the JSON data back from a POST request I intercepted in Chrome/Edge/Firefox Dev Tools.
- Then loaded that into PowerQuery, and used new-to-me `Web.Contents` and `Web.Page` functions.
- Then drilled dopwn and got all the data from `PhApp` - whatever that is.
- Figured out the link between `Workday` and `RBC`
	- Searching all on Workday, API calls, then back to RBC with custom URLs, I am guessing?
- Then calculated the "DaysUntilDone" to figure out what jobs to apply for.
	- I just missed two others!
- Oh my....so cool!


Please call me, repeatedly one-after-another if need be - 403.498.6809

Best,

Greg

- [[Contact Greg]]
- https://www.linkedin.com/in/gsteve3
- https://github.com/trxn8r/trxn8r
- www.stevens.pro

---



> Lead Full Stack Developer


> # Lead Full Stack Developer
>
> CALGARY, Alberta, Canada
>
> Platform: Technology and Operations
>
> Sub Category: Technology
>
> Type: Full time
>
> Application Deadline: 06/17/2022
>
> Req ID: R-0000011356
>
> -- https://jobs.rbc.com/ca/en/job/R-0000011356/Lead-Full-Stack-Developer#main-content






---

## Workday

https://rbc.wd3.myworkdayjobs.com/RBCGLOBAL1/job/CALGARY-Alberta-Canada/Lead-Full-Stack-Developer_R-0000011356-1

- Parsed thanks to Power Query.
- [ ] GitHub Repo Linking Coming Soon!


#todo

![[image-2022-06-16-02-25-46-796.png]]



---

## Job Title

Lead Full Stack Developer


## Job Description


###  What is the opportunity?
>
> The DevOps team in RBC designs and develops the enterprise platform for software delivery that is used by over 1000 apps in the organization. It is continuously improved to increase speed and reduce lead time as well as improve user experience and reliability of the pipeline. The successful candidate will be joining a diverse and inclusive lab that leverages data insights to build platforms that can improve pipelines service availability and resiliency. The candidate would be responsible with development, execution and adoption of a strategy to ensure the team uses appropriate engineering practices. The candidate should be familiar with technology stacks such as Django, Elasticsearch, Apache Kafka and Spark. The ideal candidate should also have ML/AI Knowledge and have prior experiences with NLP projects.


---

## What will you do?
>
> -   Designing and coding application programs; performing testing for developed applications.
>
> -   Reviewing, analyzing, and modifying programming systems, including encoding, testing, debugging and installing for a large-scale system.
>
> -   Ensuring the operating efficiency of existing application systems. Maintaining records for the documentation of systems development and revisions.
>
> -   Conducting analyses of organizational needs and goals for the development and implementation of application systems.
>
> -   Working with stakeholders including data, design, product and executive teams and assisting them with data-related technical issues 
>
> -   Working with stakeholders including the Executive, Product, Data and Design teams to support their data infrastructure needs while assisting with data-related technical issues

---

## What do you need to succeed?


---

### Must-have
>
> - Minimum 5+ years of proven experience in development along with a Bachelor Degree degree in Computer Science or equivalent

- Ya...hoping experience will cover for the post-secondary I never came back for after the first semester 🙈
- 23 years of Linux
- 17.5 years of those with [[Media Dog Productions Inc.]], most as Director of Technology (IT Director, Tech Director, etc.).
- 12+ years attacking PM, Testing, 24/7 On-Call for Corporate, high-demand Public-Sector Web Hosting.
- 2017/2018 [[DevOps]]


---

> [!LINK] Flashy (Child Says No-Good) TimelineJS
> [TimelineJS - Click to Open in New Window](https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Y_XfKgUDm62LcP_4N269iVEe_LJHCmd_gFCXjUMk-gQ&font=Default&lang=en&initial_zoom=2)

![[image-2022-06-16-02-48-35-346.png]]



---

> - 2+ years of experience developing cloud applications
>
> - Working knowledge of the Python programming language and supporting frameworks such as Django
>
> - Excellent understanding of the Web based technologies. Hands on development experience of the REST APIs and Web services
>
> - Experience/Understanding of event streaming platforms (Apache Kafka)

- I recently read/watched [Gently Down the Stream](https://www.gentlydownthe.stream/)
- Really helped clear things up.
- Between that, and [[TRXN8R]], my mind is all about transforming data.
- With ColdFusion, there is a data type called a `query`, which really compiles down into a [[Java]] HashMap.
- I used the underlying java calls with queries for performance benefits when trying to find strings in a query column. Using `.indexOf(...)` way faster than a query-of-a-query!
- Yes...I am more qualified for this than I even know.


> - Experience/Understanding of Automated Build/Deploy process through Jenkins, UCD and familiar or experience with the DevOps / Agile Methodology

- Git Hooks (setup push-to-deploy with post-receive hooks from private [[SSH Servers]], before going [[GitHub]], [[Bitbucket]], [[]])
- GitHub Actions
- RunCloud.io, including Atomic Deployment
- Buddy.works
- Whatever you like. Jenkins is cool.


> [!TLDR] 
SUPER FAMILIAR / LIVE THE DEVOPS AND AGILE LIFES.

---


> - ✅⭐😱💪 Experience with source code management through GIT

- Was involved in the whole git, bzr, hg (Mercurial) back when it came out.,
- Was using SVN and setting up workflows and oh my gosh was it so great to have [[DVCS]] come into the world!
- Liked bzr because of better Windows support out of the gate, and [[Python]] ! Ooooh.



>
> - Experience/Understanding with cloud platforms (PCF, Open Shift, Cloud Foundry)
>
> - Experience with non-relational database technologies such as Redis, Elastic and MongoDB


- Theoretically and in-lab yes, in prod no.
- Cloud Platforms are no problem.
- They made things so much easier than hand cobbling servers, services, etc.

---

>
> - ✅ Experience with relational databases such as SQL Server, Oracle, Postgresql

- 23 years developing with MySQL.
- On and off in there with SQL Server
	- One PROD site still in service I crated with ColdFusion and SQL Server.
	- Benefits Portal for a Group Health Insurance Provider.


>
> - ✅ Experience with Linux and Windows; DB2 client/server

YES....SO MUCH...

### Experience with Linux and Windows

- Windows Servers for 20+ years.
- Windows for 25+ years.
- Linux for 23+ years.

### DB2 client/server

- Similar setups including Verity, Lucene, www.algolia.com, MySQL Full Text Search Indexing, and more.
- Managing old ColdFusion ODBC Data Sources
- Access Data Sources
- MySQL / MariaDB / PerconaDB
- Running into issues with DigitalOcean Hosted MySQL 8.0+ and legacy CMS sites and obscure PHP connectors.
	- Went with an Ansible deployed Ubuntu MariaDB server instead. Cheaper, faster too, benchmarks in my notes.
	- Old Notion notes at that time (circa 2018).
	- Now using www.Obsidian.md
	- Or... is it using me? 💉

---


## Nice-to-have
>
> - Have experiences with Data Pipelines frameworks like Apache Airflow

- Expertise with DevOps Pipelines.
- Checked into Apache Airflow quickly and, like Kafka, all sounds good 👍


---


### Kafka and Spark; ML/AI python libraries like scikit-learn, PyTorch and Pandas

>
> - Have experiences with Kafka and Spark
>
> - Worked with ML/AI python libraries like scikit-learn, PyTorch and Pandas

- I have so much similar experience I don't worry about this Nice-to-have.
- I look so forward to learning it!
- Impressing someone.
- Being employed.
- Not just typing away at my computer at 3 a.m. feeling like I am doing sales pitches again, except then I did those with a team/partner, during the day :)



---


## What’s in it for you?


- Whatever, we'll discuss it =)
- A smile is in it for me :) Plus mortgage and bills, some savings, you know... your the financial people, you let me know, hehe.
- I am dumb, passion for tech > passion for money to point of going broke over doing work for nothing to have the project wrapped up,. problem fixed, colleague helped, etc.


>
> We thrive on the challenge to be our best, progressive thinking to keep growing, and working together to deliver trusted advice to help our clients thrive and communities prosper. We care about each other, reaching our potential, making a difference to our communities, and achieving success that is mutual.
>
> -   A comprehensive Total Rewards Program including bonuses and flexible benefits, competitive compensation, commissions, and stock where applicable
>
> -   Leaders who support your development through coaching and managing opportunities
>
> -   Work in a dynamic, collaborative, progressive, and high-performing team
>
> -   Ability to make a difference and lasting impact
>
> -   Opportunities to do challenging work
>
> -   Access to a variety of job opportunities across business and geographies
>
>
> CALGARY, Alberta, CanadaCAN-AB-CALGARYCanada37.5Full timeRegularSalaried2022-05-20-07:002022-06-17-07:00


---
---


![[header-footer.include]]