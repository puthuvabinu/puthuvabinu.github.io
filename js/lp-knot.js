/* Logo knot animation — see the comment below. Loaded after scripts.js on every main page. */


/*--------------------------------------------------
Logo knot: the red scribble (complex ideas) pulls tight into the site's short red bar (structure).
Plays once per visit when the site first opens, and on logo hover. The resting logo stays the PNG;
an SVG copy of the scribble is laid over it only while animating. Re-attaches after AJAX page changes.
---------------------------------------------------*/

	(function(){
		if( window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ) return;
		var P = [171.5,154.3,165.0,157.2,158.3,155.8,153.8,150.4,151.6,143.6,150.8,136.6,150.8,129.5,151.6,122.4,152.9,115.5,154.6,108.6,156.8,101.8,159.3,95.2,162.2,88.7,165.3,82.4,168.8,76.2,172.7,70.2,176.8,64.4,181.2,58.9,185.9,53.6,190.9,48.6,196.3,43.9,202.0,39.7,208.1,36.0,214.5,33.1,221.3,31.1,228.4,30.4,235.3,31.6,241.5,35.1,246.0,40.5,248.6,47.1,249.8,54.1,249.7,61.2,248.8,68.2,247.1,75.1,244.9,81.9,242.3,88.4,239.2,94.8,235.7,101.0,231.9,107.0,227.9,112.8,223.5,118.4,218.9,123.8,214.0,129.0,208.9,133.9,203.5,138.5,197.9,142.9,192.0,146.9,185.9,150.5,179.5,153.5,172.9,156.0,166.0,157.6,158.9,157.9,152.0,156.2,146.4,152.0,143.2,145.7,142.1,138.7,142.6,131.7,144.1,124.7,146.3,118.0,149.0,111.4,152.2,105.1,155.7,98.9,159.4,92.9,163.5,87.1,167.8,81.4,172.2,75.9,176.9,70.6,181.8,65.4,186.9,60.5,192.2,55.8,197.8,51.3,203.5,47.2,209.6,43.5,216.0,40.6,222.9,38.8,229.8,40.1,233.6,45.9,233.9,52.9,232.7,59.9,230.6,66.7,228.0,73.3,225.0,79.8,221.7,86.0,218.2,92.2,214.5,98.2,210.5,104.1,206.3,109.8,201.9,115.4,197.3,120.8,192.5,126.0,187.4,131.0,182.0,135.6,176.3,139.8,170.1,143.3,163.4,145.6,156.4,145.6,150.4,142.1,146.8,136.0,145.3,129.0,145.0,122.0,145.6,114.9,146.7,107.9,148.4,101.0,150.4,94.2,152.9,87.5,155.7,81.0,158.8,74.7,162.3,68.5,166.2,62.5,170.4,56.8,175.0,51.4,180.1,46.5,185.8,42.2,192.0,38.9,198.9,37.4,205.8,38.9,210.9,43.7,213.7,50.2,214.9,57.2,214.9,64.3,214.2,71.3,212.8,78.3,211.0,85.2,208.7,91.9,206.0,98.4,202.9,104.9,199.6,111.1,195.9,117.2,191.9,123.0,187.5,128.6,182.9,134.0,177.8,139.0,172.4,143.5,166.4,147.4,159.9,150.1,152.9,150.2,147.6,145.8,145.9,139.0,146.4,131.9,148.0,125.0,150.2,118.3,153.0,111.7,156.1,105.4,159.6,99.2,163.3,93.1,167.3,87.3,171.5,81.6,176.0,76.0,180.6,70.6,185.5,65.5,190.6,60.6,196.0,56.0,201.8,51.9,208.1,48.7,214.6,49.5,214.8,56.5,212.3,63.1,209.1,69.4,205.4,75.5,201.5,81.4,197.4,87.2,193.2,92.9,188.7,98.4,184.2,103.9,179.5,109.2,174.7,114.5,169.8,119.6,164.7,124.5,159.5,129.3,154.0,133.9,148.3,138.0,141.7,140.6,139.8,134.8,142.1,128.1,145.1,121.6,148.5,115.4,152.0,109.2,155.7,103.2,159.6,97.2,163.6,91.3,167.7,85.6,172.0,79.9,176.4,74.4,181.1,69.0,186.2,64.1,192.2,60.5,195.8,65.3,194.7,72.3,192.6,79.0,190.0,85.6,186.9,92.0,183.5,98.2,179.7,104.3,175.6,110.0,171.1,115.5,166.1,120.5,160.4,124.8,154.1,128.0,147.1,128.9,140.8,125.9,137.0,120.0,135.2,113.2,134.7,106.1,135.0,99.0,136.1,92.0,137.6,85.1,139.7,78.3,142.1,71.6,144.9,65.1,148.0,58.7,151.6,52.6,155.5,46.7,160.0,41.1,165.0,36.2,170.8,32.1,177.6,30.2,184.2,32.4,188.8,37.7,191.6,44.2,193.4,51.1,194.5,58.1,195.0,65.2,195.2,72.3,195.0,79.4,194.5,86.4,193.6,93.5,192.4,100.5,190.9,107.4,188.8,114.2,186.0,120.7,182.0,126.5,175.6,128.9,169.9,125.0,166.1,119.0,163.3,112.5,161.2,105.7,159.5,98.8,158.2,91.9,157.2,84.8,156.5,77.8,156.2,70.7,156.1,63.6,156.3,56.5,156.9,49.4,157.9,42.4,159.4,35.5,161.4,28.6,164.1,22.1,167.7,16.0,172.5,10.8,178.7,7.3,185.7,6.7,192.4,8.8,198.3,12.7,203.4,17.7,207.7,23.4,211.3,29.5,214.3,35.9,216.9,42.5,218.9,49.3,220.5,56.2,221.6,63.2,222.2,70.3,222.3,77.4,221.9,84.5,220.9,91.5,219.3,98.4,216.9,105.1,213.8,111.5,209.8,117.3,204.7,122.2,198.6,125.9,191.8,127.6,184.7,127.2,178.1,124.8,172.2,120.8,167.3,115.8,163.2,110.0,160.0,103.6,157.5,97.0,155.7,90.1,154.6,83.1,154.1,76.1,154.2,69.0,154.9,61.9,156.2,54.9,158.1,48.1,160.6,41.5,163.7,35.1,167.6,29.2,172.2,23.8,177.6,19.2,183.9,16.0,190.9,14.8,197.7,16.4,203.5,20.5,207.7,26.2,210.6,32.7,212.6,39.5,213.7,46.5,214.2,53.6,214.3,60.7,213.8,67.7,213.0,74.8,211.9,81.8,210.4,88.7,208.7,95.6,206.6,102.4,204.3,109.1,201.6,115.7,198.6,122.1,195.2,128.4,191.2,134.2,186.3,139.3,179.8,141.2,175.1,136.1,173.0,129.4,171.8,122.4,171.2,115.3,170.8,108.2,170.7,101.1,170.8,94.0,171.0,86.9,171.2,79.8,171.6,72.7,172.1,65.7,172.6,58.6,173.2,51.5,173.9,44.4,174.7,37.4,175.5,30.3,176.6,23.3,177.9,16.4,180.0,9.6,184.8,9.9,187.4,16.4,189.5,23.2,191.3,30.1,193.0,37.0,194.6,43.9,196.2,50.8,197.7,57.7,199.2,64.7,200.7,71.6,202.1,78.6,203.5,85.5,204.9,92.5,206.3,99.5,207.7,106.4,209.0,113.4,210.2,120.4,211.4,127.4,212.4,134.4,213.2,141.5,213.5,148.5,210.2,152.6,205.7,147.1,202.0,141.0,198.7,134.7,195.6,128.4];
		var N = P.length/2, BAR = [4,131,102,131], SW = 2.8, BW = 8, STAG = 0.65;
		function clamp(x){ return x < 0 ? 0 : x > 1 ? 1 : x; }
		function inout(x){ x = clamp(x); return x < .5 ? 4*x*x*x : 1 - Math.pow(-2*x + 2, 3)/2; }
		function pathFor(p){
			var d = '', k = p*(1 + STAG);
			for( var i = 0; i < N; i++ ){
				var f = i/(N - 1), l = inout(k - STAG*f);
				var x = P[2*i] + (BAR[0] + (BAR[2] - BAR[0])*f - P[2*i])*l;
				var y = P[2*i + 1] + (BAR[1] - P[2*i + 1])*l;
				d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
			}
			return d;
		}
		function setup(a){
			if( a.__knot ) return a.__knot;
			var img = a.querySelector('img.black-logo'); if( !img ) return null;
			var wrap = document.createElement('span');
			wrap.className = 'lp-knot'; wrap.setAttribute('aria-hidden', 'true');
			wrap.innerHTML = '<img src="images/logo-bj-text.png" alt=""><svg viewBox="0 0 393 172" preserveAspectRatio="none"><path fill="none" stroke="#FD2E35" stroke-linecap="round" stroke-linejoin="round"/></svg>';
			a.appendChild(wrap);
			var path = wrap.querySelector('path'), st = { p: 0, draw: 1, raf: 0, a: a, img: img, wrap: wrap, path: path, len: 0 };
			path.setAttribute('d', pathFor(0)); path.setAttribute('stroke-width', SW);
			a.__knot = st; return st;
		}
		function place(st){
			var i = st.img, w = st.wrap;
			w.style.left = i.offsetLeft + 'px'; w.style.top = i.offsetTop + 'px';
			w.style.width = i.offsetWidth + 'px'; w.style.height = i.offsetHeight + 'px';
		}
		function show(st, on){ place(st); st.a.classList.toggle('lp-knot-on', on); }
		function render(st){
			st.path.setAttribute('d', pathFor(st.p));
			st.path.setAttribute('stroke-width', (SW + (BW - SW)*st.p).toFixed(2));
			if( st.draw < 1 ){
				if( !st.len ) st.len = st.path.getTotalLength();
				st.path.style.strokeDasharray = st.len; st.path.style.strokeDashoffset = st.len*(1 - st.draw);
			} else { st.path.style.strokeDasharray = ''; st.path.style.strokeDashoffset = ''; }
		}
		function tween(st, key, to, ms, done){
			cancelAnimationFrame(st.raf);
			var from = st[key], t0 = performance.now();
			(function step(now){
				var k = Math.min(1, (now - t0)/ms);
				st[key] = from + (to - from)*k; render(st);
				if( k < 1 ) st.raf = requestAnimationFrame(step); else if( done ) done();
			})(t0);
		}
		function pull(st){ show(st, true); tween(st, 'p', 1, 900 * (1 - st.p) + 150); }
		function release(st){ tween(st, 'p', 0, 750 * st.p + 100, function(){ show(st, false); }); }
		function intro(st){
			st.draw = 0; st.p = 0; render(st); show(st, true);
			setTimeout(function(){
				tween(st, 'draw', 1, 1000, function(){
					setTimeout(function(){ tween(st, 'p', 1, 1100, function(){
						setTimeout(function(){ if( !st.hover ) release(st); }, 900);
					}); }, 250);
				});
			}, 50);
		}
		var played = false;
		try { played = sessionStorage.getItem('lpKnotPlayed') === '1'; } catch(e) {}
		function scan(){
			var a = document.querySelector('.lp #logo a'); if( !a ) return;
			var st = setup(a); if( !st || st.bound ) return;
			st.bound = true;
			a.addEventListener('mouseenter', function(){ st.hover = true; st.draw = 1; pull(st); });
			a.addEventListener('mouseleave', function(){ st.hover = false; release(st); });
			a.addEventListener('focus', function(){ st.draw = 1; pull(st); });
			a.addEventListener('blur', function(){ release(st); });
			if( !played ){
				played = true; try { sessionStorage.setItem('lpKnotPlayed', '1'); } catch(e) {}
				setTimeout(function(){ intro(st); }, 1500);
			}
		}
		scan(); setInterval(scan, 700);
	})();
