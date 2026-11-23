
$(document).ready(function() {
	
	"use strict";
	
	FirstLoad();
	HeroSection();
	AjaxLoad();
	HideShowHeader();
	MasonryPortfolio();
	//VirtualScr();
	PageProgress();
	FooterAppear();
	Sliders();
	Lightbox();
	AppearIteam();
	BackToTop();
	ContactForm();
	TextRotator();
		
});



$(window).on( 'resize', function () {

});

// Reveal the page as soon as the HTML is ready instead of waiting for every image
// and third-party script (window "load"), which made first loads feel very slow.
$(function() {
	LazyLoad();
});


/*--------------------------------------------------
Function Firs tLoad
---------------------------------------------------*/	

	function FirstLoad() {
		
		$("html,body").animate({scrollTop: 0}, 1);
		
		$('.item-image').each(function() {
			var image = $(this).data('src');
	
			$(this).css({
				'background-image': 'url(' + image + ')'
			});
		});
		
		$('#menu-burger, #nav-container, #black-fade').on('click', function() {
			$('#menu-burger').toggleClass('open');
		});	
		
		$('.project-next').on('click', function() {	
			$('#main').addClass('hidden');
			$('header').addClass('menu-open');
		});		
		
		$('a.ajax-link').on('click', function() {
			$(".page-overlay").addClass("from-bottom");
			$('#main').addClass('hidden');
			
		});	
		
		$('.nav-title').on('mouseenter', function() {
			$(".nav-project-title").addClass('hover');
		}).on('mouseleave', function() {
			$(".nav-project-title").removeClass('hover');
		});		
		
		$('#open-filters, .close-page-action, #open-search').on('click', function() {
			$('.page-action-overlay').toggleClass('active');
		});
		
		$("header, #main, #main-content, footer, #image-border-left, #image-border-right").css('background', function () {
			return $("#page-content").data('bgcolor')
		});	
		
		$(".flexnav li a.active, .flexnav li a, h1, h2, h3, h4, h5, h6, .hero-title, .socials-text li a, #open-filters, #open-share, #backtoworks, [data-tooltip], .light-content a.link, .post-title, .blog-numbers").css('color', function () {
			return $("#page-content").data('textcolor')
		});	
		
		$(".item-cat, .item-case, #filters li span").css('color', function () {
			return $("#page-content").data('portfoliocolor')
		});	
		
		$(".arrow-top").css('border-color', function () {
			return $("#page-content").data('textcolor')
		});	
		
		$(".arrow-top-line").css('background-color', function () {
			return $("#page-content").data('textcolor')
		});
		
		if( jQuery('.tooltip-hover').length > 0 ){			
				
			var tooltips = document.querySelectorAll('.item-overlay');
	
			window.onmousemove = function (e) {
				var x = (e.clientX + 20) + 'px',
					y = (e.clientY + 20) + 'px';
				for (var i = 0; i < tooltips.length; i++) {
					tooltips[i].style.top = y;
					tooltips[i].style.left = x;
				}
			};
			
		}	
		
		
	}// End First Load
	
/*--------------------------------------------------
Function Hero Section
---------------------------------------------------*/
	
	function HeroSection() {
		
		
		var HeroCaption = document.getElementById('hero-caption');		
		var windowScrolled;
		
		
		window.addEventListener('scroll', function windowScroll() {
			windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
			// look the caption up each time: after an AJAX page change the old one may be gone
			HeroCaption = document.getElementById('hero-caption');
			if (!HeroCaption) return;
			if ($('#hero-styles').hasClass("scale-onscroll")) {
				HeroCaption.style.transform = 'scale('+(100 - windowScrolled/100)/100+')';
			}
			if ($('#hero-styles').hasClass("parallax-onscroll")) {
				HeroCaption.style.transform = 'translate3d(0, ' + windowScrolled / -2.5 + 'px, 0)';
			}
			if ($('#hero-styles').hasClass("opacity-onscroll")) {
				HeroCaption.style.opacity =  (1 - (windowScrolled/20) / 20);
			}
			
			if( $('#hero-image').length > 0 ){
				var HeroImageborderleft = document.getElementById('image-border-left');	
				var HeroImageborderright = document.getElementById('image-border-right');	
				HeroImageborderleft.style.transform = 'translate3d(' + windowScrolled / - 3 + 'px, 0, 0)';
				HeroImageborderright.style.transform = 'translate3d(' + windowScrolled / + 3 + 'px, 0, 0)';
						if($(this).scrollTop() >= $('#hero-image').offset().top) {
						$("#hero-image").addClass("bgrelative");
					} else {
						$("#hero-image").removeClass("bgrelative");
					}
			}
		});	
		if ($('#hero-styles').hasClass("normal-onscroll")) {
			$('#hero').addClass('normal');
			$('#hero-height').addClass('hidden');
		}
		
		$('.hero-title').each(function(){
			var words = $(this).text().split(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		})
		
		$('.hero-subtitle').each(function(){
			var words = $(this).text().split(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		})
	
	}//End Hero Section	
	
	

/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

	function LazyLoad() {		
		
		setTimeout(function(){
			$('body').removeClass('hidden');
		} , 100 );
		
		if( $('#portfolio').length > 0 ){
		
			// Lift the loading curtain once the thumbnails are ready, or after 1.2s at most
			var gridDone = false;
			setTimeout( function(){
				if( gridDone ) return; gridDone = true;
				HeroColor();
				$(".page-overlay").addClass("from-bottom-end");
				setTimeout( function(){
					$(".page-overlay").removeClass("from-bottom");
					$(".page-overlay").removeClass("from-bottom-end");
				} , 800 );
			} , 1200 );
			$('body').waitForImages({
				finished: function() {
					if( gridDone ) return; gridDone = true;
					HeroColor();					
					setTimeout( function(){
						$(".page-overlay").addClass("from-bottom-end");
						setTimeout( function(){
							$(".page-overlay").removeClass("from-bottom");
							$(".page-overlay").removeClass("from-bottom-end");
						} , 800 );
					} , 100 );
				},
				waitForAll: true
			});
		
		} else if( $('#hero-image').length > 0 ){
		
			// Lift the loading curtain once the hero image is ready, or after 1.2s at most
			var heroDone = false;
			var revealHero = function() {
				if( heroDone ) return; heroDone = true;
				HeroColor();
				setTimeout( function(){
					$(".page-overlay").addClass("from-bottom-end");
					setTimeout( function(){
						$(".page-overlay").removeClass("from-bottom");
						$(".page-overlay").removeClass("from-bottom-end");
					} , 800 );
				} , 100 );
			};
			setTimeout( revealHero, 1200 );
			$('#hero-image').waitForImages({
				finished: function() {
					if( heroDone ) return; heroDone = true;
					HeroColor();
					setTimeout( function(){
						$(".page-overlay").addClass("from-bottom-end");
						setTimeout( function(){
							$(".page-overlay").removeClass("from-bottom");
							$(".page-overlay").removeClass("from-bottom-end");
						} , 800 );
					} , 100 );
				},
				waitForAll: true
			});
		
		} else {
		
			setTimeout( function(){
				HeroColor();
				$(".page-overlay").addClass("from-bottom-end");
				setTimeout( function(){
					$(".page-overlay").removeClass("from-bottom");
					$(".page-overlay").removeClass("from-bottom-end");
				} , 800 );
			} , 100 );
		}
	
	}// End Lazy Load	
	
	
	
/*--------------------------------------------------
Function Ajax Load
---------------------------------------------------*/	

	function AjaxLoad() {		
		
		jQuery(document).ready(function(){
		  var isAnimating = false,
			newLocation = '';
			firstLoad = false;
		  
		  //trigger smooth transition from the actual page to the new one 
		  $('main').on('click', '[data-type="page-transition"]', function(event){
			// Opened straight from disk (file://): browsers block AJAX there, so let the link load normally
			if( window.location.protocol === 'file:' ) return;
			event.preventDefault();
			//detect which page has been selected
			var newPage = $(this).attr('href');
			//if the page is not already being animated - trigger animation
			if( !isAnimating ) changePage(newPage, true);
			firstLoad = true;
		  });
		
		  //detect the 'popstate' event - e.g. user clicking the back button
		  $(window).on('popstate', function() {
			if( firstLoad ) {
			  /*
			  Safari emits a popstate event on page load - check if firstLoad is true before animating
			  if it's false - the page has just been loaded 
			  */
			  var newPageArray = location.pathname.split('/'),
				//this is the url of the page to be loaded 
				newPage = newPageArray[newPageArray.length - 1];
		
			  if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
			}
			firstLoad = true;
			});
		
			function changePage(url, bool) {
			isAnimating = true;
			// trigger page animation
			$('body').addClass('page-is-changing');
			$('.cd-cover-layer').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				loadNewContent(url, bool);
			  newLocation = url;
			  $('.cd-cover-layer').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
			});
			//if browser doesn't support CSS transitions
			if( !transitionsSupported() ) {
			  loadNewContent(url, bool);
			  newLocation = url;
			}
			}
		
			function loadNewContent(url, bool) {
				url = ('' == url) ? 'index.html' : url;
			
			var section = $('<div class="cd-main-content "></div>');
					
				
			section.load(url+' .cd-main-content > *', function(response, status){
			  // If the page can't be fetched with AJAX, fall back to a normal page load
			  if( status === 'error' ) { window.location.href = url; return; }
			  // load new content and replace <main> content with the new one
			  
			  $('main').html(section);
			  
				$('header').addClass('initial');
				$('html, body').scrollTop(0);
			  
			  //if browser doesn't support CSS transitions - dont wait for the end of transitions
			  var delay = ( transitionsSupported() ) ? 30 : 0;
			  setTimeout(function(){
				//wait for the end of the transition on the loading bar before revealing the new content				
				$('body').removeClass('page-is-changing');
				$('.cd-cover-layer').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				  isAnimating = false;
				  $('.cd-cover-layer').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				});				
				
				FirstLoad();
				HeroSection();
				LazyLoad();				
				MasonryPortfolio();
				HideShowHeader();
				PageProgress();
				FooterAppear();
				Sliders();
				Lightbox();
				AppearIteam();
				BackToTop();
				ContactForm();
				TextRotator();
				
				
				
				if( !transitionsSupported() ) isAnimating = false;
			  }, delay);			  
			  if(url!=window.location && bool){
				window.history.pushState({path: url},'',url);
			  }
				});
		  }
		
		  function transitionsSupported() {
			return $('html').hasClass('csstransitions');
		  }
		});
			
		
	}// End Ajax Load
	
	
/*--------------------------------------------------
Function Hide Show Header
---------------------------------------------------*/
	
	function HideShowHeader() {
			
			var didScroll;
			var lastScrollTop = 0;
			var delta = 50;
			var navbarHeight = 250;
			var navbarHideAfter = navbarHeight
			
			$(window).scroll(function(event){
				didScroll = true;
			});			
			
			if( $('.scroll-hide').length > 0 ){
				
				setInterval(function() {
					if (didScroll) {
						hasScrolled();
						didScroll = false;
					}
				}, 100);
			
			}
		
			return false;
			
			function hasScrolled() {
				var st = $(this).scrollTop();
				
				if(Math.abs(lastScrollTop - st) <= delta)
					return;
				
				if (st > lastScrollTop && st > navbarHideAfter){
					if( $('.scroll-hide').length > 0 ){
					$('header').addClass('nav-hide');
					}
				} else {
					if( $('.scroll-hide').length > 0 ){
					if(st + $(window).height() < $(document).height()) {
						$('header').removeClass('nav-hide');
					}
					}
				}
				
				lastScrollTop = st;
			}
			
			
	}//End Hide Show Header			
	



/*--------------------------------------------------
Function Header Color
---------------------------------------------------*/	


	function HeroColor() {
		$('#hero').waitForImages({
			finished: function() {
		if( $('#hero-height').length > 0 ){
			
			
			if ($('#hero-bg-image').hasClass("light-content")) {
				$('#hero-styles').addClass('light-content').addClass('animate');
				setTimeout(function(){
					$('header').addClass('light-content');
				} , 650 );
			}
			setTimeout(function(){
				$('#hero-caption').addClass('animate');
				$('#hero-height').removeClass('hidden');
			} , 250 );			
			
		}
		},
			waitForAll: true
		});	
			
		

	}// End Header Color
	
	
	
	
/*--------------------------------------------------
Function Masonry Portfolio
---------------------------------------------------*/	
		
	function MasonryPortfolio() {	
	
		if( $('#portfolio-wrap').length > 0 ){
			
		
			var $container = $('#portfolio');
		
			$container.isotope({
				layoutMode: 'packery',
			  itemSelector: '.item',
			  gutter:0,
			  transitionDuration: "0.5s"
			});
			
			$('#filters a').on('click', function() {
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$container.isotope({ filter: selector });		
				return false;
			});
			
			$(window).on( 'resize', function () {
			
				var winWidth = window.innerWidth;
				columnNumb = 1;			
				var attr_col = $('#portfolio').attr('data-col');
					
				 if (winWidth >= 1466) {
					
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 150 + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() - 240 + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					if (typeof attr_col !== typeof undefined && attr_col !== false) {
						columnNumb = $('#portfolio').attr('data-col');
					} else columnNumb = 3;
					
					postHeight = window.innerHeight
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						
						
						
						if ( $('#portfolio').attr('data-col') == '3' ) {						
							if( $('.squares-items').length > 0 ){
								$('.item').css( { 
									width : postWidth * 1.5 - 100 + 'px',
									height : postWidth * 1.5 - 20  + 'px',
									margin : 50 + 'px', 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1.5 + 'px',
									height : postWidth * 1.6 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 1.5 - 100 + 'px',
									height : postWidth * 1.5 - 20 + 'px',
									margin : 50 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 1.5  + 'px',
									height : postWidth * 1.6 + 'px',
									margin : 0 + 'px'  
								});									
							} else if( $('.large-items').length > 0 ){
								$('.item').css( { 
									width : postWidth * 3 - 100 + 'px',
									height : postWidth * 1.5 + 'px',
									margin : 50 + 'px', 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 3 + 'px',
									height : postWidth * 1.5 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 3 - 100 + 'px',
									height : postWidth * 1.5 + 'px',
									margin : 50 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 3  + 'px',
									height : postWidth * 1.5 + 'px',
									margin : 0 + 'px'  
								});									
							} else if( $('.classic-items').length > 0 ){
								$('.item').css( { 
									width : postWidth * 1.5 - 100 + 'px',
									height : postWidth * 0.91 + 'px',
									margin : 50 + 'px', 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1.5 + 'px',
									height : postWidth * 0.91 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 1.5 - 100 + 'px',
									height : postWidth * 0.91 + 'px',
									margin : 50 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 1.5 + 'px',
									height : postWidth * 0.91 + 'px',
									margin : 0 + 'px'  
								});									
							} else {
								$('.item').css( { 
									width : postWidth * 1 - 100 + 'px',
									height : postWidth * 1.3 - 100 + 'px',
									margin : 50 + 'px' 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1 + 'px',
									height : postWidth * 1.4 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 2 - 100 + 'px',
									height : postWidth * 1.3 - 100 + 'px',
									margin : 50 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 1.4 + 'px',
									margin : 0 + 'px'  
								});	
							}
						} 
						
					});
					
					
				} else if (winWidth > 1024) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 80 + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() - 150  + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 3;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						if( $('.squares-items').length > 0 ){
								$('.item').css( { 
									width : postWidth * 1.5 - 70 + 'px',
									height : postWidth * 1.5 - 20  + 'px',
									margin : 35 + 'px', 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1.5 + 'px',
									height : postWidth * 1.6 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 1.5 - 70 + 'px',
									height : postWidth * 1.5 - 20 + 'px',
									margin : 35 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 1.5  + 'px',
									height : postWidth * 1.6 + 'px',
									margin : 0 + 'px'  
								});									
							} else if( $('.large-items').length > 0 ){
								$('.item').css( { 
									width : postWidth * 3 - 70 + 'px',
									height : postWidth * 1.5 + 'px',
									margin : 35 + 'px', 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 3 + 'px',
									height : postWidth * 1.5 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 3 - 70 + 'px',
									height : postWidth * 1.5 + 'px',
									margin : 35 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 3  + 'px',
									height : postWidth * 1.5 + 'px',
									margin : 0 + 'px'  
								});									
							} else if( $('.classic-items').length > 0 ){
								$('.item').css( { 
									width : postWidth * 1.5 - 70 + 'px',
									height : postWidth * 0.9 + 'px',
									margin : 35 + 'px', 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1.5 + 'px',
									height : postWidth * 0.9 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 1.5 - 70 + 'px',
									height : postWidth * 0.9 + 'px',
									margin : 35 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 1.5 + 'px',
									height : postWidth * 0.9 + 'px',
									margin : 0 + 'px'  
								});									
							} else {
								$('.item').css( { 
									width : postWidth * 1 - 70 + 'px',
									height : postWidth * 1.3 - 70 + 'px',
									margin : 35 + 'px' 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1 + 'px',
									height : postWidth * 1.4 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 2 - 70 + 'px',
									height : postWidth * 1.3 - 70 + 'px',
									margin : 35 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 1.4 + 'px',
									margin : 0 + 'px'  
								});	
							}
					});
					
					
				}else if (winWidth > 767) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 50 + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() - 100  + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 3;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						if( $('.squares-items').length > 0 ){
								$('.item').css( { 
									width : postWidth * 1.5 - 50 + 'px',
									height : postWidth * 1.5 - 50  + 'px',
									margin : 25 + 'px', 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1.5 + 'px',
									height : postWidth * 1.6 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 1.5 - 50 + 'px',
									height : postWidth * 1.5 - 50 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 1.5  + 'px',
									height : postWidth * 1.6 + 'px',
									margin : 0 + 'px'  
								});									
							} else if( $('.large-items').length > 0 ){
								$('.item').css( { 
									width : postWidth * 3 - 50 + 'px',
									height : postWidth * 1.5 + 'px',
									margin : 25 + 'px', 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 3 + 'px',
									height : postWidth * 1.5 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 3 - 50 + 'px',
									height : postWidth * 1.5 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 3  + 'px',
									height : postWidth * 1.5 + 'px',
									margin : 0 + 'px'  
								});									
							} else if( $('.classic-items').length > 0 ){
								$('.item').css( { 
									width : postWidth * 1.5 - 50 + 'px',
									height : postWidth * 0.9 + 'px',
									margin : 25 + 'px', 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1.5 + 'px',
									height : postWidth * 0.9 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 1.5 - 50 + 'px',
									height : postWidth * 0.9 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 1.5 + 'px',
									height : postWidth * 0.9 + 'px',
									margin : 0 + 'px'  
								});									
							} else {
								$('.item').css( { 
									width : postWidth * 1.5 - 50 + 'px',
									height : postWidth * 1.5 - 50  + 'px',
									margin : 25 + 'px', 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1.5 + 'px',
									height : postWidth * 1.6 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 1.5 - 50 + 'px',
									height : postWidth * 1.5 - 50 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 1.5  + 'px',
									height : postWidth * 1.6 + 'px',
									margin : 0 + 'px'  
								});		
							}
					});
					
					
				}	else if (winWidth > 479) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 40 + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() -80 + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 1;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						if( $('.hover-visible-text').length > 0 ){
							$('.item').css( { 
								width : postWidth * 1 - 40 + 'px',
								height : postWidth * 0.8  + 'px',
								margin : 20 + 'px' 
							});
							$('.no-gutter .item').css( {
								width : postWidth + 'px',
								height : postWidth * 0.8  + 'px',
								margin : 0 + 'px' 
							});
							$('.item.wide').css( { 
								width : postWidth * 1 - 40 + 'px',
								height : postWidth * 0.9 + 'px',
								margin : 20 + 'px' 
							});
							$('.no-gutter .item.wide').css( { 
								width : postWidth * 1  + 'px',
								height : postWidth * 0.9 + 'px',
								margin : 0 + 'px'  
							});
						} else {
							$('.item').css( { 
								width : postWidth * 1 - 40 + 'px',
								height : postWidth * 0.65 - 40 + 'px',
								margin : 20 + 'px' 
							});
							$('.no-gutter .item').css( {
								width : postWidth + 'px',
								height : postWidth * 0.65 + 'px',
								margin : 0 + 'px' 
							});					
							$('.item.wide').css( { 
								width : postWidth * 1 - 40 + 'px',
								height : postWidth * 0.65 - 40 + 'px',
								margin : 20 + 'px' 
							});
							$('.no-gutter .item.wide').css( {
								width : postWidth + 'px',
								height : postWidth * 0.65 + 'px',
								margin : 0 + 'px' 
							});	
						}
					});
					
					
				}
				
				else if (winWidth <= 479) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 30 + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() - 60 + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 1;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						if( $('.hover-visible-text').length > 0 ){
							$('.item').css( { 
								width : postWidth * 1 - 30 + 'px',
								height : postWidth * 0.8  + 'px',
								margin : 15 + 'px' 
							});
							$('.no-gutter .item').css( {
								width : postWidth + 'px',
								height : postWidth * 0.8  + 'px',
								margin : 0 + 'px' 
							});
							$('.item.wide').css( { 
								width : postWidth * 1 - 30 + 'px',
								height : postWidth * 0.9 + 'px',
								margin : 15 + 'px' 
							});
							$('.no-gutter .item.wide').css( { 
								width : postWidth * 1  + 'px',
								height : postWidth * 0.9 + 'px',
								margin : 0 + 'px'  
							});
						} else {
							$('.item').css( { 
								width : postWidth * 1 - 30 + 'px',
								height : postWidth * 0.65 - 30 + 'px',
								margin : 15 + 'px' 
							});
							$('.no-gutter .item').css( {
								width : postWidth + 'px',
								height : postWidth * 0.65 + 'px',
								margin : 0 + 'px' 
							});					
							$('.item.wide').css( { 
								width : postWidth * 1 - 30 + 'px',
								height : postWidth * 0.65 - 30 + 'px',
								margin : 15 + 'px' 
							});
							$('.no-gutter .item.wide').css( {
								width : postWidth + 'px',
								height : postWidth * 0.65 + 'px',
								margin : 0 + 'px' 
							});	
						}
					});
					
					
				}		
				return columnNumb;
				
			
			}).resize();
		
			$("#all").trigger('click');
			
			
			$(".item").addClass('in-view');
			setTimeout( function(){				
				
				var $animation_elements = $('.item');
				var $window = $(window);
				
				function check_if_in_view() {
				  var window_height = $window.height();
				  var window_top_position = $window.scrollTop() + 50;
				  var window_bottom_position = (window_top_position + window_height - 50);
				
				  $.each($animation_elements, function() {
					var $element = $(this);
					var element_height = $element.outerHeight();
					var element_top_position = $element.offset().top;
					var element_bottom_position = (element_top_position + element_height);
				
				//check to see if this current container is within viewport
				if ((element_bottom_position >= window_top_position) &&
				  (element_top_position <= window_bottom_position)) {
				  $element.addClass('in-view');
				} else {
				  $element.removeClass('in-view');
				}
				});
				}
				
				$window.on('scroll resize', check_if_in_view);
			} , 1000 );					
		}
	
	}//End MasonryPortfolio
	



/*--------------------------------------------------
Function Virtual Scroll
---------------------------------------------------*/

	function VirtualScr() {		
		
		new SmoothScroll();

		function SmoothScroll(el) {
		var t = this, h = document.documentElement;
		el = el || window;
		t.rAF = false;
		t.target = 0;
		t.scroll = 0;
		t.animate = function() {
		t.scroll += (t.target - t.scroll) * 0.1;
		if (Math.abs(t.scroll.toFixed(5) - t.target) <= 0.47131) {
		cancelAnimationFrame(t.rAF);
		t.rAF = false;}
		if (el == window) scrollTo(0, t.scroll);
		else el.scrollTop = t.scroll;
		if (t.rAF) t.rAF = requestAnimationFrame(t.animate);};
		el.onmousewheel = function(e) {
		e.preventDefault();
		e.stopPropagation();
		var scrollEnd = (el == window) ? h.scrollHeight - h.clientHeight : el.scrollHeight - el.clientHeight;
		t.target += (e.wheelDelta > 0) ? -100 : 100;
		if (t.target < 0) t.target = 0;
		if (t.target > scrollEnd) t.target = scrollEnd;
		if (!t.rAF) t.rAF = requestAnimationFrame(t.animate);};
		el.onscroll = function() {
		if (t.rAF) return;
		t.target = (el == window) ? pageYOffset || h.scrollTop : el.scrollTop;
		t.scroll = t.target;};
		}
			
		
	}// End First Load
	
	
	
	
/*--------------------------------------------------
Function Page Progress
---------------------------------------------------*/	
	
	function PageProgress() {
  
		var progressPath = document.querySelector('.progress-page path');
		if (!progressPath) return;
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		
 }//End Page Progress	
 
 

/*--------------------------------------------------
Function FooterAppear
---------------------------------------------------*/	
	
	function FooterAppear() {
		
		if( $('#page-content').length > 0 ){
			$(window).scroll(function() {    
				var scroll = $(window).scrollTop();
			
				if (scroll >= 300) {					
					$(".progress-page, #page-action-holder").addClass('is-active');					
				} else {								
					$(".progress-page, #page-action-holder").removeClass('is-active');
				}
			});
		}
		
		var lastScroll = 0;
	
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
			if (scroll > lastScroll) {
				$(".progress-page, #page-action-holder").addClass("is-visible");
			} else if (scroll < lastScroll) {
				$(".progress-page, #page-action-holder").removeClass("is-visible");
			}
			lastScroll = scroll;
		});
  
  }//End FooterAppear
  
  

  
  
/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/
	
	function Sliders() {
		
		$('.slider').owlCarousel({
			loop:true,
			margin:0,
			autoHeight:false,
			nav:true,
			navSpeed: 600,
			items:1,			
		});
		
		$('.carousel').owlCarousel({
			loop:true,
			margin:20,
			autoHeight:false,
			navSpeed: 600,
			responsive:{
				0:{
					items:1
				},
				479:{
					items:2
				},
				1024:{
					items:3
				},
				1466:{
					items:3
				}
			}
		});
		
		if( $('.text-carousel').length > 0 ){		
			$(".text-carousel").owlCarousel({	
				loop:true,
				dots:true,
				dotsEach: 1,
				items:1,
				autoplay:true,
				smartSpeed: 750,
				autoplayHoverPause:true
			});		  
		}
		
	
	}//End Sliders
	
	
	
/*--------------------------------------------------
Function Lightbox
---------------------------------------------------*/
	
	function Lightbox() {
		
		$('.image-link').magnificPopup({
		  	type: 'image',
			mainClass: 'mfp-with-zoom',	
			gallery: {
			  enabled:true
			},		
			zoom: {
				enabled: true, 			
				duration: 300, 
				easing: 'ease-in-out', 
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}			
		});
			
	}//End Lightbox	 
	
	

	
/*--------------------------------------------------
Function AppearIteam
---------------------------------------------------*/	
		
	function AppearIteam() {		
		
		$('.has-animation').each(function() {	
			$(this).appear(function() {				
				$(this).delay($(this).attr('data-delay')).queue(function(next){
					$(this).addClass('animate-in');
					next();
				});				 		
			});		
		});		
	
	}//End AppearIteam					 	
  
  
  
/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/
	
	function BackToTop() {
		
		$('.scrolltotop').on('click', function() {
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
		
		$(".flexnav").flexNav({ 'animationSpeed' : 0 });
	
	}//End BackToTop
	
	
	
/*--------------------------------------------------
Function Contact Formular
---------------------------------------------------*/	
		
	function ContactForm() {	
	
		if( jQuery('#contactform').length > 0 ){
			$('#contactform').off('submit').on('submit', function(e){
				e.preventDefault();
				var form = $(this), action = form.attr('action');
				$("#message").slideUp(750,function() {
					$('#message').hide();
					$('#submit').attr('disabled','disabled');		
					
					$.ajax({
						url: action,
						method: 'POST',
						headers: {
							'Accept': 'application/json'
						},
						data: form.serialize(),   // sends every field (topic, name, email, phone, message)
						dataType: 'json',
						success: function() {
							document.getElementById('message').innerHTML = "<div class='success-msg' style='color: #4CAF50; margin-bottom: 20px; font-weight: bold;'>Thank you! Your message has been sent successfully.</div>";
							$('#message').slideDown('slow');
							$('#submit').removeAttr('disabled');
							$('#contactform')[0].reset();
							setTimeout(function() { $('#message').slideUp('slow'); }, 5000);
						},
						error: function() {
							document.getElementById('message').innerHTML = "<div class='error-msg' style='color: #F44336; margin-bottom: 20px; font-weight: bold;'>Oops! There was a problem submitting your form.</div>";
							$('#message').slideDown('slow');
							$('#submit').removeAttr('disabled');
							setTimeout(function() { $('#message').slideUp('slow'); }, 5000);
						}
					});	
				});		
				return false;		
			});		
		}

	}//End ContactForm		
	
	

/*--------------------------------------------------
Function Text Rotator: cycles the highlighted headline phrase
(<span class="lp-rotate" data-words="one|two|three">), fading between them
---------------------------------------------------*/

	function TextRotator() {
		if( window.lpRotateTimer ) { clearInterval(window.lpRotateTimer); window.lpRotateTimer = null; }
		var el = document.querySelector('.lp-rotate');
		if( !el || !el.getAttribute('data-words') ) return;
		if( window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ) return;
		var words = el.getAttribute('data-words').split('|'), i = 0;
		// Reserve the height of the longest phrase so the headline doesn't jump when a word wraps
		var head = el.closest('h1,h2') || el.parentNode;
		function reserve(){
			if( !document.body.contains(el) ) { window.removeEventListener('resize', reserve); return; }
			var cur = el.textContent, max = 0;
			head.style.minHeight = '';
			words.forEach(function(w){ el.textContent = w; max = Math.max(max, head.offsetHeight); });
			el.textContent = cur;
			head.style.minHeight = max + 'px';
		}
		reserve();
		window.removeEventListener('resize', window.lpRotateReserve || function(){});
		window.lpRotateReserve = reserve;
		window.addEventListener('resize', reserve);
		if( document.fonts && document.fonts.ready ) document.fonts.ready.then(reserve);
		window.lpRotateTimer = setInterval(function(){
			if( !document.body.contains(el) ) { clearInterval(window.lpRotateTimer); return; }
			el.classList.add('is-out');
			setTimeout(function(){
				i = (i + 1) % words.length;
				el.textContent = words[i];
				el.classList.remove('is-out');
			}, 450);
		}, 2800);
	}// End Text Rotator


/*--------------------------------------------------
Lollypop-style full-screen menu (.lp-burger / .lp-menu)
Delegated on document so it keeps working after AJAX page changes.
---------------------------------------------------*/

	(function(){
		function menuEl(){ return document.getElementById('lp-menu'); }
		function setMenu(open){
			var m = menuEl(); if( !m ) return;
			m.classList.toggle('is-open', open);
			m.setAttribute('aria-hidden', open ? 'false' : 'true');
			document.body.classList.toggle('lp-menu-open', open);
			var b = document.querySelector('.lp-burger');
			if( b ) b.setAttribute('aria-expanded', open ? 'true' : 'false');
			if( open ){ var c = m.querySelector('.lp-menu-close'); if( c ) setTimeout(function(){ c.focus(); }, 650); }
			else if( b ) b.focus();
		}
		document.addEventListener('click', function(e){
			if( e.target.closest('.lp-burger') ){ e.preventDefault(); setMenu(true); return; }
			if( e.target.closest('.lp-menu-close') ){ e.preventDefault(); setMenu(false); return; }
			var a = e.target.closest('.lp-menu a');
			if( a ){
				var href = a.getAttribute('href') || '';
				if( href.charAt(0) === '#' ){
					e.preventDefault(); setMenu(false);
					var t = document.querySelector(href);
					if( t ) setTimeout(function(){ window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 40, behavior: 'smooth' }); }, 350);
				} else {
					var m = menuEl(); if( m ){ m.classList.remove('is-open'); document.body.classList.remove('lp-menu-open'); }
				}
			}
		});
		function onScroll(){ document.body.classList.toggle('lp-scrolled', window.pageYOffset > 120); }
		window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
		document.addEventListener('keydown', function(e){
			if( e.key === 'Escape' && menuEl() && menuEl().classList.contains('is-open') ) setMenu(false);
		});
	})();


/*--------------------------------------------------
Case study sticky section menu (.lp-cs-tabs) — scroll-spy + smooth jump.
Delegated / re-queried so it keeps working after AJAX page changes.
---------------------------------------------------*/

	(function(){
		var ticking = false;
		function nav(){ return document.querySelector('.lp-cs-tabs'); }
		function offset(n){ return (n ? n.getBoundingClientRect().height : 0) + 20 + 32; }
		function update(){
			ticking = false;
			var n = nav(); if( !n ){ document.body.classList.remove('lp-tabs-pinned'); return; }
			// while the menu is pinned, keep the site header tucked away so it doesn't cover the menu
			var spy = n.parentElement, sr = spy.getBoundingClientRect(), nr = n.getBoundingClientRect();
			document.body.classList.toggle('lp-tabs-pinned', nr.top <= 22 && sr.bottom > nr.height + 40);
			var links = n.querySelectorAll('a[href^="#"]'), line = offset(n) + 10, current = null;
			for( var i = 0; i < links.length; i++ ){
				var t = document.querySelector(links[i].getAttribute('href'));
				if( t && t.getBoundingClientRect().top <= line ) current = links[i];
			}
			// before Discover nothing is highlighted (the brief, challenge and role come first)
			for( var j = 0; j < links.length; j++ ){
				var on = links[j] === current;
				if( on !== links[j].classList.contains('is-active') ){
					links[j].classList.toggle('is-active', on);
					if( on ){
						links[j].setAttribute('aria-current', 'true');
						var ul = n.querySelector('ul');   // keep the active tab visible on phones (scrolls the row sideways only)
						if( ul && ul.scrollWidth > ul.clientWidth ){
							var l = links[j].offsetLeft - 20;
							ul.scrollTo ? ul.scrollTo({ left: l, behavior: 'smooth' }) : (ul.scrollLeft = l);
						}
					} else links[j].removeAttribute('aria-current');
				}
			}
		}
		window.addEventListener('scroll', function(){ if( !ticking ){ ticking = true; requestAnimationFrame(update); } }, { passive: true });
		window.addEventListener('resize', update);
		document.addEventListener('click', function(e){
			var a = e.target.closest('.lp-cs-tabs a[href^="#"]'); if( !a ) return;
			var t = document.querySelector(a.getAttribute('href')); if( !t ) return;
			e.preventDefault();
			function go(){ window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - offset(nav()) + 2, behavior: 'smooth' }); }
			go();
			// images loading on the way can move the target; once scrolling settles, nudge into place (max 3 times)
			var tries = 0, last = -1, timer = setInterval(function(){
				var y = window.pageYOffset;
				if( y !== last ){ last = y; return; }
				var off = t.getBoundingClientRect().top - offset(nav()) + 2;
				if( Math.abs(off) > 6 && tries++ < 3 ){ last = -1; go(); } else clearInterval(timer);
			}, 200);
		});
		// run after first load and after every AJAX page change
		update();
		new MutationObserver(function(){ if( nav() ) update(); }).observe(document.body, { childList: true, subtree: false });
		setInterval(function(){ if( nav() && !document.querySelector('.lp-cs-tabs a.is-active') ) update(); }, 1000);
	})();
