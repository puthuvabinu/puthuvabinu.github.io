/* Logo knot animation (js/lp-knot.js), loaded after scripts.js on every main page.
   The red scribble (complex ideas) spins and collapses into a point, and the site's short
   red bar (structure) draws out under "Binu". Uses the real logo artwork split in two
   (images/logo-bj-text.png + images/logo-bj-scribble.png), so it is always crisp and exact.
   Plays once per visit when the site first opens, and on logo hover / keyboard focus. */

	(function(){
		if( window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ) return;
		function setup(a){
			if( a.__knot ) return a.__knot;
			var img = a.querySelector('img.black-logo'); if( !img ) return null;
			var wrap = document.createElement('span');
			wrap.className = 'lp-knot'; wrap.setAttribute('aria-hidden', 'true');
			wrap.innerHTML = '<img class="txt" src="images/logo-bj-text.png" alt=""><img class="scr" src="images/logo-bj-scribble.png" alt=""><i class="bar"></i>';
			a.appendChild(wrap);
			var st = { a: a, img: img, wrap: wrap, timer: 0 };
			a.__knot = st; return st;
		}
		function place(st){
			var i = st.img, w = st.wrap;
			w.style.left = i.offsetLeft + 'px'; w.style.top = i.offsetTop + 'px';
			w.style.width = i.offsetWidth + 'px'; w.style.height = i.offsetHeight + 'px';
		}
		function pull(st){
			clearTimeout(st.timer); place(st);
			st.a.classList.add('lp-knot-on');
			requestAnimationFrame(function(){ requestAnimationFrame(function(){ st.wrap.classList.add('is-pulled'); }); });
		}
		function release(st){
			st.wrap.classList.remove('is-pulled');
			clearTimeout(st.timer);
			st.timer = setTimeout(function(){ if( !st.wrap.classList.contains('is-pulled') ) st.a.classList.remove('lp-knot-on'); }, 900);
		}
		var played = false;
		try { played = sessionStorage.getItem('lpKnotPlayed') === '1'; } catch(e) {}
		function scan(){
			var a = document.querySelector('.lp #logo a'); if( !a ) return;
			var st = setup(a); if( !st || st.bound ) return;
			st.bound = true;
			a.addEventListener('mouseenter', function(){ st.hover = true; pull(st); });
			a.addEventListener('mouseleave', function(){ st.hover = false; release(st); });
			a.addEventListener('focus', function(){ pull(st); });
			a.addEventListener('blur', function(){ release(st); });
			if( !played ){
				played = true; try { sessionStorage.setItem('lpKnotPlayed', '1'); } catch(e) {}
				setTimeout(function(){ pull(st); setTimeout(function(){ if( !st.hover ) release(st); }, 1900); }, 1600);
			}
		}
		scan(); setInterval(scan, 700);
	})();
