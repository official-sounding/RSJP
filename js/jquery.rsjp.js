(function($){
 
	// juicy juicy state
	var pagecount = 0;
	
    //Attach this new method to jQuery
    $.fn.paginate = function(options){
			
			
            var defaults = {
                startpage: 0,
				navAtTop: true,
            }
                 
            var options =  $.extend(defaults, options);
            //Iterate over the current set of matched elements
			return $(this).each(function() {
           
				var o = options;
				var obj = $(this);
				var pageid,entry,link,nav,prev,next;
				
				var currentpage = o.startpage;
				nav = $(document.createElement('nav')).addClass('rsjp-nav').append(document.createElement('ul'));
				obj.append($(document.createElement('div')).attr('id','currentpage').html(currentpage).css('display','none'));

				//for each section tag inside of the rsjp-pagination div...
				obj.children('section').each(function(index){
					//get the identifier for each page
					pageid = $(this).attr('title');
					
					//if the identifier is not present, assign it a numeric identifier
					if(pageid == undefined || pageid == ""){
						$(this).attr('title', index+1);
						pageid = ""+(index+1);
					}
					$(this).attr('id',index);
					
					//create the entry for the nagivation menu
					entry = $(document.createElement('li'));
					if(index != currentpage){
						$(this).css('display', 'none');
					}else{
						entry.addClass('active')
					}
					link = $(document.createElement('a')).attr('title',index).attr('href','#').html(pageid)
					//must be wrapped in an anonymous function so that the arguments get passed properly
					link.click(function(){gotoPage($(this).attr('title'))});
					
					entry.append(link);
					nav.children('ul').append(entry);
					pagecount++;
				});
		
				//build previous and next buttons
				prev = $(document.createElement('li')).addClass('prev disabled');
				prev.append($(document.createElement('a')).attr('title','prev').attr('href','#').html("&larr; Previous"));
				
				next = $(document.createElement('li')).addClass('next');
				next.append($(document.createElement('a')).attr('title','next').attr('href','#').html("Next &rarr;"));
				
				prev.click(function(){
					var currentpage = Number($('#currentpage').html());
					if(!$(this).hasClass('disabled')){
						gotoPage(currentpage-1);
					}
				});
				next.click(function(){
					var currentpage = Number($('#currentpage').html());
					if(!$(this).hasClass('disabled')){
						gotoPage(currentpage+1);
					}
				});
				
				//add the next and previous buttons to the navigation div, and add it to the DOM
				nav.children('ul').prepend(prev).append(next);
				if(o.navAtTop)
					obj.prepend(nav);
				else
					obj.append(nav);

			});
    }
	
	function gotoPage(pageindex){
		var currentpage = Number($('#currentpage').html());
		$('.disabled').removeClass('disabled');
		$('.active').removeClass('active');
		
		$("#"+currentpage).css('display', 'none');
		$("#"+pageindex).css('display', 'block');
		
		$('#currentpage').html(pageindex);
		$('a[title='+pageindex+']').parent().addClass('active');
		
		//bounds checking, to ensure that next and previous buttons are properly disabled
		if(pageindex <= 0){
			$(".prev").addClass('disabled');
		}else if (pageindex >= pagecount-1){
			$(".next").addClass('disabled');
		}
	}
})(jQuery);
    
//pass jQuery to the function,
//So that we will able to use any valid Javascript variable name
//to replace "$" SIGN. But, we'll stick to $ (I like dollar sign: ) )      

