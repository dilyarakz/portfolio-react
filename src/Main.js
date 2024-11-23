import React from 'react'

export default function Main() {
  return (
    <div class="is-preload">

			<nav id="nav">
				<ul class="container">
					<li><a href="#top">About</a></li>
					<li><a href="#portfolio">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>


			<article id="top" class="wrapper style1">
				<div class="container">
					<div class="row">
						<div class="col-4 col-5-large col-12-medium">
							<span class="image fit"><img src="images/aboutSelfImg1-1.jpeg" alt="" /></span>
						</div>
						<div class="col-8 col-7-large col-12-medium">
							<header>
								<h1>Hi, I'm <strong>Dilyara Tulegenova</strong>.</h1>
							</header>
							<p> , a Junior Software Developer based in the United States.
							  I’m passionate about coding and solving complex problems.
							  With an interest in both front-end and back-end development,
							  I enjoy working on projects that challenge my skills and foster growth.
							  Outside of tech, I love traveling, skiing, skating, and hiking—activities
							  that keep me energized and inspired.</p>
						</div>
					</div>
				</div>
			</article>

			<article id="portfolio" class="wrapper style3">
				<div class="container">
					<header>
						<h2>These are a few projects I worked on some time ago: </h2>
						<p></p>
					</header>
					<div class="row protfItemText">
						<div class="col-4 col-6-medium col-12-small">
							<article class="box style2">
								<a href="https://622f2ba2a04abd0b3fdaf465--sleepy-jones-e0b133.netlify.app/" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
								<h3><a href="https://622f2ba2a04abd0b3fdaf465--sleepy-jones-e0b133.netlify.app/">Movie Search App</a></h3>
								<p><strong>Technologies: </strong> React, JavaScript, Redux, CSS, HTML</p>
								<div class="protfItemText">
									<a href="https://github.com/dilyarakz/moviedb">Code</a> <a href="https://622f2ba2a04abd0b3fdaf465--sleepy-jones-e0b133.netlify.app/">Live</a> 
								</div>
							</article>
						</div>
						<div class="col-4 col-6-medium col-12-small">
							<article class="box style2">
								<a href="https://github.com/dilyarakz/netflix-clone-page" class="image featured"><img src="images/pic02.jpg" alt="" /></a>
								<h3><a href="https://github.com/dilyarakz/netflix-clone-page">NetFlix Webpage Copy</a></h3>
								<p><strong>Technologies: </strong> React, JavaScript, CSS, HTML</p>
								<div class="protfItemText">
									<a href="https://github.com/dilyarakz/netflix-clone-page">Code</a> <a href="https://exquisite-boba-5b1bef.netlify.app/">Live</a> 
								</div>
							</article>
						</div>
						<div class="col-4 col-6-medium col-12-small">
							<article class="box style2">
								<a href="https://github.com/dilyarakz/register-flights-rest-api" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
								<h3><a href="https://github.com/dilyarakz/register-flights-rest-api">REST API (back-end)</a></h3>
								<p><strong>Technologies: </strong> Spring Boot, Java, JUnit, Mockito</p>
								<div class="protfItemText">
									<a href="https://github.com/dilyarakz/register-flights-rest-api">Code</a> 
								</div>
							</article>
						</div>
						
					</div>
				</div>
			</article>
        <article id="top" class="wrapper style1">
				<div class="container">
					<div class="row">
						
						<div class="col-8 col-7-large col-12-medium">
						
						</div>
					</div>
				</div>
			</article> 

		
			<article id="contact" class="wrapper style4">
				<div class="container medium">
					<header>
						<h2>dilyara.tulegenova@gmail.com</h2>
			
						<a href="/assets/resume.pdf" download>Download Resume</a>
					</header>
					<div class="row">
						
						<div class="col-12">

							<h3>Find me on ...</h3> 
							<ul class="social">
							
					
								<li><a href="https://www.linkedin.com/in/dilyara-tulegenova/" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
							
								<li><a href="https://github.com/dilyarakz" class="icon brands fa-github"><span class="label">Github</span></a></li>
								
								
							</ul>
						
						</div>
					</div>
			
				</div>
			</article>

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</div>
  )
}
