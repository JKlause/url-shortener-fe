# Front End for Url-Shortener

### Author: Joe Klause

### Links and Resources
* [submission PR](https://github.com/JKlause/url-shortener-be/pull/2)
* [travis](https://travis-ci.com/JKlause/url-shortener-be)
* [deployed on AWS](http://shorten-you-rl.s3-website-us-west-2.amazonaws.com/) 


User can sign in, sign out, and sign up.
No duplicate users.

Users can choose to make a custom short URL or go with a mongoID generated short URL.

Users can add their url to the end of the front end URL to be redirected to the URL they chose.

Users can click on the detail page to see a collection of when and where their chosen URL slug was used.
Users can delete a URL slug.


TO DO:
1. delete activates a confirm... needs to refetch? 
2. rework error so that it throws correct error from backend, and you can just pass it directly to the front end
3. toggle to sign up sign in gets rid of error message on front end... change redux handling of error to create set session error true or set session error false?
do css

