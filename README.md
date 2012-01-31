* Really Simple JQuery Pagination (RSJP)

** What is it?
This is a jQuery plugin that makes it easy to paginate a single html document.  It automatically creates a pagination menu, splitting up a number of <section> tags inside of a div to create individual pages.

The package uses the pagination menu from the Bootstrap from Twitter project. 

** What is Included?
there are currently two files included:

	1. jquery.rsjp.js -- the jquery library that makes the magic happen
	2. rsjp.css -- css file defining styles for the navigation toolbar

** How do I use it?
simply include the jquery.rsjp.js file into your html document, and then call the following:

$(document).ready(function(){
	$(<selector>).paginate();
});

where <selector> is the div containing the element where the elements you want to paginate are located

** Configuration

the library includes the following configuration parameters:
	1. startpage -- the index of the starting page for the pagination. default is 0 (e.g. the first page)
	2. navAtTop -- boolean, specifies if the navigation menu should be at the top or the bottom

** TODO
	1. Truncate menu if it gets longer than a configurable number of elements, dynamically moving them as a user moves through the list
	2. Allow for top and bottom menus simultaneously
	3. Allow for arbitrary elements to be paginated (e.g. not just sections)
	4. Allow for an arbitrary number of elements to appear on a single page

