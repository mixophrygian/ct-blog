#Project Roadmap

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

* set up github organization for opensourcing

* Basic Accessibility pass (start this early!)

* Make past entries collapse and toggle-able (to expand)

* Rethink UI - try wire-framing main page?

* Set up SEO tags

* Thorough device / browser pass

* robots.txt?

* Branding / favicon?

* Set up a testing suite - basic testing

###Short-Term Goals

* Make mobile layout with stacked columns

* Find a good domain - cbt - feeling good, automatic thought jot, and nab it for future hosting

* Add some cool transitions / animations / snazz

* Add a linter to gulp task(done!)

* Update gulp task to auto-reload page after watch task

