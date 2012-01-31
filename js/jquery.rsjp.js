(function($){
 
	// juicy juicy state
	var currentpage = 0;
	var pagenames = new Array();
	
    //Attach this new method to jQuery
    $.fn.paginate = function(options){
			
			
            var defaults = {
                startpage: 0,
				navPosition: 'top',
				paginationClass: '.rsjp-pagination'
            }
                 
            var options =  $.extend(defaults, options);
            //Iterate over the current set of matched elements
			return $(this).each(function() {
           
				var o = options;
				var pageid,entry,link,nav,prev,next;
				
				currentpage = o.startpage;
				nav = $(document.createElement('div')).addClass('rsjp-nav').append(document.createElement('ul'));
		

				//for each section tag inside of the rsjp-pagination div...
				$(o.paginationClass).children('section').each(function(index){
					//get the identifier for each page
					pageid = $(this).attr('id');
					
					//if the identifier is not present, assign it a numeric identifier
					if(pageid == undefined || pageid == ""){
						$(this).attr('id', index+1);
						pageid = ""+(index+1);
					}
					
					pagenames.push(pageid);
					
					//create the entry for the nagivation menu
					entry = $(document.createElement('li'));
					if(index != currentpage){
						$(this).css('display', 'none');
					}else{
						entry.addClass('active')
					}
					link = $(document.createElement('a')).attr('title',pageid).attr('href','#').html(pageid)
					//must be wrapped in an anonymous function so that the arguments get passed properly
					link.click(function(){currentpage = gotoPage(pagenames.indexOf($(this).attr('title')))});
					
					entry.append(link);
					nav.children('ul').append(entry);
				});
		
				//build previous and next buttons
				prev = $(document.createElement('li')).addClass('prev disabled');
				prev.append($(document.createElement('a')).attr('title','prev').attr('href','#').html("&larr; Previous"));
				
				next = $(document.createElement('li')).addClass('next');
				next.append($(document.createElement('a')).attr('title','next').attr('href','#').html("Next &rarr;"));
				
				prev.click(function(){
					if(!$(this).hasClass('disabled')){
						gotoPage(currentpage-1);
					}
				});
				next.click(function(){
					if(!$(this).hasClass('disabled')){
						gotoPage(currentpage+1);
					}
				});
				
				//add the next and previous buttons to the navigation div, and add it to the DOM
				nav.children('ul').prepend(prev).append(next);
				$(o.paginationClass).prepend(nav)

			});
    }
	
	function gotoPage(pageindex){
		$('.disabled').removeClass('disabled');
		$('.active').removeClass('active');
		
		$("#"+pagenames[currentpage]).css('display', 'none');
		$("#"+pagenames[pageindex]).css('display', 'block');
		
		currentpage = pageindex;
		$('a[title='+pagenames[pageindex]+']').parent().addClass('active');
		
		//bounds checking, to ensure that next and previous buttons are properly disabled
		if(pageindex <= 0){
			$(".prev").addClass('disabled');
		}else if (pageindex == pagenames.length-1){
			$(".next").addClass('disabled');
		}
	}
})(jQuery);
    
//pass jQuery to the function,
//So that we will able to use any valid Javascript variable name
//to replace "$" SIGN. But, we'll stick to $ (I like dollar sign: ) )      

