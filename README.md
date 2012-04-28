# Really Simple JQuery Pagination (RSJP)

## What is it?
This is a jQuery plugin that makes it easy to paginate a single html document.  It automatically creates a pagination menu, splitting up a number of &lt;section&gt; tags inside of a div to create individual pages.

The package uses the pagination menu from the Bootstrap from Twitter project. 

## What is Included?
there are currently two files included:

1. jquery.rsjp.js -- the jquery library that makes the magic happen
2. rsjp.css -- css file defining styles for the navigation toolbar
3. example.html -- a simple example file that shows how the plugin works
## How do I use it?
simply include the jquery.rsjp.js file into your html document, and then call the following:

	$(document).ready(function(){
		$(&lt;selector&gt;).paginate();
	});

where &lt;selector&gt; is the div containing the element where the elements you want to paginate are located

to give custom names to pages (other than just the page number), specify a tilte using the title attribute in the section tag
## Configuration

the library includes the following configuration parameters:

* startpage -- the index of the starting page for the pagination. default is 0 (e.g. the first page)
* navAtTop -- boolean, specifies if the navigation menu should be at the top or the bottom

## TODO
* Truncate menu if it gets longer than a configurable number of elements, dynamically moving them as a user moves through the list
* Allow for top and bottom menus simultaneously
* Allow for arbitrary elements to be paginated (e.g. not just sections)
* Allow for an arbitrary number of elements to appear on a single page


