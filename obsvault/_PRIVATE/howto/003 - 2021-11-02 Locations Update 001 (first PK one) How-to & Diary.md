---
created: 2022-06-26T13:05:11-06:00
updated: 2022-06-26T13:05:11-06:00
---
# Locations Update 001 How-to & Diary

- Documenting for Amira and reset of the team.
- Will move from OBS to Confluence.
- Continued on 2021-11-03 (am and pm - pm with recording).
- ***Leaving in root of vault due to image paths (TODO @gsteve3 2021-11-03)***


## Background
- Locations are stored in a database table named `mdpLocations`.
- A git rep was created to serve as the single source of truth for location data from spreadsheets, CSVs, etc. 
	- That was in roughly 2020.
	- Workflow created but not used often yet that will help our team.


 ## Assets (Resources?)
 
 ### Git Repo `parkland-locations`
 
 
 ### Databases (tricky part)
 Find, check, or confirm the database connection for a site.
 
 #### C5-Modern
 ###### Sites *(add as we go)*
 - parkland.ca - 2021-11-02

###### How-to Check (`application/config/database.php`)
```
application/config/database.php


```


 
 
 #### C5-Legacy
 
---

*Continued from last night*

# Location Update 2021-02-03 

https://dalyle.atlassian.net/wiki/spaces/PWT/pages/12288001/2021-11-02+Locations+Update+How-to+Diary


1. Ensure CSV is up-to-date with DB (99% should be)
2. Update CSV
3. `git commit`
	1. Mention ticket number for update (e.g. `PWT-6`)
4. `git push`
5. Import CSV into Database
	1. Example uses  `DBeaver` but any MySQL client should be able to import CSV.
	2. Replace database with data imported
		1. Ensures deletes are caught
		2. ![[Pasted image 20211103085447.png]]
	3. Check the CSV Column Mapping
		1. ![[Pasted image 20211103085710.png]]
	4. TRUNCATE TABLE OPTION - TOGGLE ON
		1. ![[Pasted image 20211103085734.png]]


## Check Update Worked
```
https://www.bluewaveenergy.ca/locations/
https://www.bluewaveenergy.ca/locations/peace-river
https://ridgelinelubricants.ca/locations/
```


### Bluewave (Site #1)
#### Bluewave Locations Listing
(https://www.bluewaveenergy.ca/locations/)
- [x] Location Shows Up


#### Bluewave: Peace River Detail Page
https://www.bluewaveenergy.ca/locations/peace-river)

- [x] Email address looks good

- [x] Listing
![[Pasted image 20211103090121.png]]

- [x] Detail
![[Pasted image 20211103085956.png]]


### RidgelineLubricants (Site #2)
```
https://ridgelinelubricants.ca/locations/

DB_Server: parkland-dedicated
DB_Name:   ridgeline_concrete
```

https://ridgelinelubricants.ca/locations/

#### No Detail Page, but there is a map
##### Before
![[Pasted image 20211103090541.png]]

##### After

![[Pasted image 20211103091202.png]]
![[Pasted image 20211103091247.png]]


