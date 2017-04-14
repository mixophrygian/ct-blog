#Project Roadmap

4/13 - next:
  -Add cognitive distortion check boxes that are toggle-able on touch

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


* Consider other secure, local options for persistence (localforage?)

* Option to download as a PDF or text file?

* Look into hosting on AWS or Google Cloud?

* Consider expanding to store user data in a cloud, behind authentication- HUGE task

* Local storage for single-browser persistence, only(done!)

###Medium Tasks

* Basic Accessibility pass (start this early!)

* Make past entries collapse and toggle-able (to expand)

* Rethink UI - try wire-framing main page?

* Set up SEO tags

* robots.txt?

* Branding / favicon?

* Set up a testing suite - basic testing

###Short-Term Goals

* Make mobile layout with stacked columns

* Find a good domain - cbt - feeling good, automatic thought jot, and nab it for future hosting

* Add some cool transitions / animations / snazz

* Add a linter to gulp task

* Update gulp task to auto-reload page after watch task

