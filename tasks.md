#Project Roadmap
8/14: 
  -did the are you sure modal styling
  -pick another design thing to do that's not done!
    -home page
    -entry view
    -entry edit
    
8/5: 
  -Finish implementing zeplin designs! - Either new entry or home page ( probably home page, right?)
  
6/17:
  -reconsider the security of a user accessing the db with the access_token and their username.  Should there be an additional piece of meta-data that includes their database id?
  
  -done: set up authenticated calls to database API with auth_token!
    -DRY'd up the user profile data gathering (was in the id_tokena all along)
    
- start looking into how to host a mysql db on Ec2 / to talk to an Ec2
        -Auth0 is gonna need new whitelisted domains and apis 
  -fix auth0 mismatched state bugs

    

6/15:
  -affiliate user id to auth0 account as meta data - google if this is how it's supposed to be done
      -set up authenticated calls to mysql api with auth_token for all of the calls that get made to the DB
      
      *milestone!*
      - start looking into how to host a mysql db on Ec2 / to talk to an Ec2
        -Auth0 is gonna need new whitelisted domains and apis 
  -fix auth0 mismatched state bugs

6/12:
  todo: 
    -revisit "isloadingAsync" in App.js and then continue down
    -add cancel to "new/edit entry" form - show will lose changes prompt
    -fix auth0 mismatched state bugs
    -affiliate user id to auth0 account as meta data - google if this is how it's supposed to be done
    -set up authenticated calls to mysql api with auth_token for all of the calls that get made to the DB
    
    *milestone!*
    - start looking into how to host a mysql db on Ec2 / to talk to an Ec2
      -Auth0 is gonna need new whitelisted domains and apis 
  
  done:
    -fixED emojis in database
    -fixED routing so that all routes go back to home, again....make sure it doesnt mess up authentication or mysql calls

6/7:
  -revisit "isloadingAsync" in App.js and then continue down
  -figure out why database can't save emojis even though set to utf8mb4 or whatever
  
  -all items below
  -learned today: 
    -I actually need the .env file (in addition to .env.dev) to run my db junx.  
    -if I nuke my db I have to run knex migrate:latest again 
    -mysql admin to set username and password
    -make sure brew services mysql is running
    -sequel pro needs that ^ first before it can get going, make sure the db created matches config file (cbt_test_db)

6/5:
  -Continue refactor-o-rama 
    -/src
    -/test
  -TODOS:
    -oh yeah fix the tests - some are broken now
    -fix server routing so /faq and /about can be hit - consider restoring * catchall?
    -all below not x'd off
    
6/3:
  -add cancel to "new/edit entry" form - show will lose changes prompt
  -fix auth0 mismatched state bugs
  -affiliate user id to auth0 account as meta data - google if this is how it's supposed to be done
  -set up authenticated calls to mysql api with auth_token for all of the calls that get made to the DB
  
  *milestone!*
  - start looking into how to host a mysql db on Ec2 / to talk to an Ec2
    -Auth0 is gonna need new whitelisted domains and apis 
  -Big goal: Push up big update to prototype site for Justin!
    Major adds: User account with own entries, absorbs unclaimed entries
  
  x-restore pagination
  x-show user a prompt when inheriting orphaned entries from localstorage
  x-fix redux saga warnings (see console)
  x-enforce entries are listed in chronological order


6/2:
-when user logs in, fetch their entries from db
-show user a prompt when inheriting orphaned entries from localstorage
-affiliate user id to auth0 account as meta data
-set up authenticated calls to mysql api with auth_token for all of the calls that get made to the DB


5/29:
when user logs in, fetch their entries from db
when they log out, remove from localstorage 

edge case: when they log in and there are existing entries in localstorage that are NOT on the db, save them to the dB.  Bonus: show user a prompt that will indicate that these entries are now affiliated with their account, but they can always delete them.

 -consider affiliating user id to auth0 account as meta data
 
 -set up authenticated calls to mysql api with auth_token for Create, Fetch, Save, Delete

5/28:
  -Delete entries from mysql

  -set up authenticated calls to mysql api with auth_token for
  	-create
  	-fetch
  	-save
  	-delete

  -consider affiliating user id to auth0 account as meta data

  -search all "TODO"s in app
  -check github issues 

3/20: 
  -see about deep linking on aws - why is it broken
  -see about webpack bundle prod - why does it break.
  -Try to fix deep linking on chrome for iOS - update router and all dependencies?
  -Modal for users blocking cookies / storage
  -Break apart edit entry flow into sections
  -consider integrating with AWS deployment on 'build prod' command

3/19:
  x Fix deep linking 
  -Modal for users blocking cookies / storage
  -Break apart edit entry flow into sections

 3/10:
  -fix view entry detail margin bullshit / mobile
  -Add slick af pre-onboarding animation. -small fade in with title / logo?
  -Add a modal for users who have "block all cookies" set on their phones or any other localstorage preventing settings - private mode - in the buttons!
  x - fix scrolling on rerouting issue
  x - try to restore the address bar collapse on scroll feature
  x - add prettier?
  
  -code splitting?
  
3/5: 
  TODO:
    -fix jest so "test-watch" works
    -figure out why the fuck saga tests break on 'saveEntries' and why it won't return a fulfilled promise
3/4:

TODO:
<<<<<<< HEAD
  -add new tests for new onboarding redux state - don't show splash when someone has been onboarded
  -consider replacing sidebar component with something better to restore scrolling
=======
  -fix existing broken tests
  -add new tests for new onboarding redux state - don't show splash when someones
onboarded
    -consider replacing sidebar component with something better to restore scrolling
>>>>>>> faf3c37... update tasks and npm
  -Add slick af pre-onboarding animation. -small fade in with title / logo?
  -fix view entry detail margin bullshit / mobile
  
  -Add a modal for users who have "block all cookies" set on their phones or any other localstorage preventing settings - private mode - in the buttons!
  -Restore smooth scrolling to long pages?
  -split "new entry" section
  -performance profiling?
  -code splitting!! Make the bundle smaller!

3/1: 
  -don't show onboarding after deleting the only entry...
    -maybe add an entry to localstorage that ticks whether or not the onboarding has been seen?
  -code splitting!! Make the bundle smaller!
  -view entry detail - content lives outside of the boxes for some reason
  -landscape mode is cancer - disable?

2/28:
  -bugs on mobile:
    -flash of onboarding screen when entry is there /s houldn't see it
    -landscape mode is cancer - disable?
    -view entry detail - content lives outside of the boxes for some reason

2/24:
  -Add a modal for users who have "block all cookies" set on their phones or any other localstorage preventing settings - private mode - in the buttons!
  -figure out why navitem button stays active? remove active?
  -Restore smooth scrolling to long pages?
  -try updating localforage to 1.5.7
  -Add slick af pre-onboarding animation. -small fade in with title / logo?
  -split "new entry" section
  -add "cancel" option per page?
  -continue investigating why page load is shit
  -nice to have: collapse / hide address bar on load
  -nice to have: set up s3 to deploy from 'npm run build-prod'
  or some other deploy script

2/22: 
  -can't create a new entry in mobile safari?
    -e.entries.find is undefined
    -error setting storage on safari
    -try updating localforage to 1.5.7
  -fix "new entry" button on top bar - not tappable
  -lock onboarding so no vertical scrolling can happen!  Marilyn monroe moment
lol
  -Restore smooth scrolling to long pages?
  -Try to hide safari bottom bar and top bar...
  -Add slick af pre-onboarding animation. -small fade in with title / logo?
  -split "new entry" section
  -add "cancel" option per page?
  -continue investigating why page load is shit

2/21:
  -Add cancel to every onboarding slide
  -Add slick af pre-onboarding animation. -small fade in with title / logo?
  -split "new entry" section
  -add "cancel" option per page?
  -continue investigating why page load is shit
  
1/22: 
  -continue investigating why page load is shit
  -split "new entry" section
  
1/20: 
  -Split out "new entry" section into one page -per section
    -use same carousel?
     -add "cancel" option per page?
  -test onboarding on desktop/tablet and other browsers

1/15:
  -Create onboarding flow (multiple screens with breadcrumbs, only visible when no entries exist)
  -Split out "new entry" section into one page -per section

12/3:
  -Complete balsamiq mobile wireframe
  -Start to plan tablet wireframe
  -Start to plan desktop wireframe
  -auto close menu when "new" button is hit 
  -Add "Cancel" button to new entry and hide hamburger
  -Validate new Entries
  -think about cool AF loading svg animations
  -consider typography / color

12/1: 
 -form validation for submitting a new entry
    -all fields need something, no blank Entries
  -New entry - needs a cancel button
  -start to do some research on what a decent blog looks like
  -What's the wow-factor as a portfolio piece?  Visually stunning?
  -Scope out whether or not its worth copying over into a new repo?
 
6/18:
  -fix scroll to Top functionality
  -make 'new entry' auto close nav bar
  -piwik for analytics
  -draft email requesting permission to reprint sections

6/17:
  -fix scroll to Top functionality
  -make 'new entry' auto close nav bar
  -Make desktop layout tolerable
  -stress test weird routes
  -piwik for analytics
  -host on s3
  -Send to Guiomar
  -draft email requesting permission to reprint sections

6/14:
  -fix scroll to Top functionality
  -Make tablet / desktop layout tolerable
  -Add in "About" section
  -Add in "cognitive distortions" section to sidebar
  -stress test weird routes
  -host on s3
  -piwik for analytics
  -draft email requesting permission to reprint sections

6/5:
  -stress test weird routes and deep links
  -make new routes scroll to top automatically
  -make 'new entry' auto close nav bar
   -force layout into mobile?
  -https://github.com/rafrex/spa-github-pages to make github pages work?
  -create "About" section explanation of project for project and Guiomar
  -Add "Cognitive Distortions" section to sidebar
  -host this somewhere private for sharing
  -piwik for analytics?
  -make list of todos before creating portfolio to share
  -Draft email requesting permission to reprint sections of Feeling Good for the app
  

6/5 next:
  -fix edit/add problem - editing entry instead goes to 'add'
  -force layout into mobile?
  -https://github.com/rafrex/spa-github-pages to make github pages work?
  -create "About" section explanation of project for project and Guiomar
  -Add "Cognitive Distortions" section to sidebar
  -host this somewhere private for sharing
  -piwik for analytics?
  -make list of todos before creating portfolio to share
  -Draft email requesting permission to reprint sections of Feeling Good for the app
  

6/4 next next:
  -fix githubpages /docs
  -fix prod build problem with entries.find (try in dev);
  -create "About" section explanation of project for project and Guiomar
  -Add "Cognitive Distortions" section to sidebar
  -host this somewhere private for sharing
  -piwik for analytics?
  -make list of todos before creating portfolio to share
  -Draft email requesting permission to reprint sections of Feeling Good for the app

6/4 next:
  -deal with "deleted every entry" state so that if zero entries are found there's an empty state or boilerplate (probs empty state)
  -make list of todos before creating portfolio to share
  -create "About" section explanation of project for project and Guiomar
  -Add "Cognitive Distortions" section to sidebar
  -Draft email requesting permission to reprint sections of Feeling Good for the app
  

6/3 next:
  -update api tests
  -Fix routing so that bogus / confused routes just return home 
  -make list of todos before creating portfolio to share
  -create "About" section explanation of project for project and Guiomar
  
6/1 next:
  -update api tests
  -css reset 
  -rip out bootstrap so offline mode works (try no internet and clearing cache)
  -Draft email requesting permission to reprint sections of Feeling Good for the app
  -Create email of screenshots and explanation for Guiomar that reflects what the app is/does.  Reusable screenshots for permission email.
  -create "About" section explanation of project for project and Guiomar
  -Fix routing so that bogus / confused routes just return home
  -some kind of warning for private browser users that their data wont persist -Add "Cognitive Distortions" section to sidebar
  -Fix sidebar css to get full height


5/25 next:
  -css reset
  -rip out bootstrap so offline mode works.  (Try no-internet and clearing cache.)
  -check out redux best practices - does the reducer's new state update the API? How should state and API relate. Seems silly to perform the same state chance twice, once for state and once for API.
  -all 5/22 and 5/24
  

5/24 next:
  -Draft email requesting permission to reprint sections of Feeling Good for the app
  -Create email of screenshots and explanation for Guiomar that reflects what the app is/does.  Reusable screenshots for permission email.
  -Add "Cognitive Distortions" section to sidebar
  - all of 5/22 next items
  

5/22 next:
  -write tests for API to compensate for pending tests in saga
  -create "About" section explanation of project for project and Guiomar
  -Fix routing so that bogus / confused routes just return home
  -some kind of warning for private browser users that their data wont persist
  -double check for entry.id redundancy between redux and component and api layer

4/29 next:
  -some kind of warning for private browser users that their data wont persist
  -Fix routing so that bogus / confused routes just return home
  -double check for entry.id redundancy between redux and component and api layer
  -Rough draft of 'about' section and what this is.

4/24 next: 
  -linter precommit hook
  -double check for entry.id redundancy between redux and component and api layer
  -Fix routing so that bogus / confused routes just return home
  -organize css into sane, separate pages so responsive styling isn't insane
  -make nav drawer full height
  -Rough draft of 'about' section and what this is.

4/23 next:
  -create pre-commit hook for linter?
  -double check my usage of Promises
  -double check for entry.id redundancy between redux and component and api layer
  -start writing some tests for sagas and api?
  -organize css into sane, separate pages so responsive styling isn't insane
  -make nav drawer full height
  -fit routing

4/20 next: 
  -add cognitive distortion UI to EntryView component.
  -style nav drawer to always be full height and fixed
  -Rough draft of 'about' section and what this is.
  -Fix routing so that bogus / confused routes just return home
  * bought a domain! automaticthoughtjournal.com 

4/17 next :
  -Add cognitive distortion check boxes that are toggle-able on touch
  -About section with explanation of blog and each cognitive distortion
  -Style nav drawer to always be full height and fixed to the top of the view port.
  
4/13 - next:
  -Add cognitive distortion check boxes that are toggle-able on touch
  -About section with explanation of blog and each cognitive distortion
  -Make text inputs expandable veritcally
  -Add "delete entry" button below the "view" section
  -Style nav drawer to always be full height and fixed to the top of the view port.
  -View entry screen - make sure the default zooming is OUT.
  -Make edit/delete buttons on entry list bigger for mobile and more spaced out so they're more finger-friendly.

4/10 - next:
  -get all fields hacked in (as simple forms)  - 
    -situation, emotional response, automatic thought, cognitive distortions, rational responses
  -Add the "cognitive distortion" check boxes

4/2 - next:
  -Fix janky sidebar z index bug
  -consider better UX for viewing single entries then returning home -> button?
  -actually add in correct form fields for both data and UI

4/1 - next:
  -Make tapping on an entry date/title take the user to the detailed view.  This should be similar but different from the edit view
  -Then flesh out the edit/detail view with stacked layout
  
3/23 - next:
  -fix delete and save (they don't update the UI and sometimes behave unpredictably, especially delete. Check to see how it's updating the 'db' - by id? correctly?)

3/12 - next:
-Get entry data format stubbed in at least, simple mobile UI
  -including cognitive distortions borrowed from dblog repo
  -Make mobile layout with stacked columns

3/10 - next:

-Get entry data format stubbed in at least, simple mobile UI
  -including cognitive distortions borrowed from dblog repo
-Try persisting entry data as part of localstorage (done 3/12!)


###Long-Term Goals

* Let's encrypt - SSL certs

* Option to download as a PDF or text file?

* Look into hosting on AWS or Google Cloud?

* Consider expanding to store user data in a cloud, behind authentication- HUGE task

* Local storage for single-browser persistence, only(done!)

* Consider other secure, local options for persistence (localforage?)(done!)

###Medium Tasks

* Draft email requesting permission to reprint sections of Feeling Good for the app

* Create email of screenshots and explanation for Guiomar that reflects what the app is/does.  Reusable screenshots for permission email.

* remove bootstrap :before and :after nonsense

*  some kind of warning for private browser users that their data wont persist -Add "Cognitive Distortions" section to sidebar

* set up github organization for opensourcing

* Basic Accessibility pass (start this early!)

* Set up SEO tags

* Thorough device / browser pass

* robots.txt?

* Branding / favicon?


###Short-Term Goals


* Add some cool transitions / animations / snazz

* Update gulp task to auto-reload page after watch task

