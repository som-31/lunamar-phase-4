import React from 'react';

function AboutUs(){
    return (
        <>
    

	<div className="section">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1>About Us</h1>
				</div>
            
				<div className="content">
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
					<div className="social">
                        <a href="https://www.facebook.com/" target="_blank"><img src="assets/images/facebook.png" alt="facebook" width="30" height="30" /></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src="assets/images/instagram.png" alt="instagram" width="30" height="30" /></a>
                        <a href="https://twitter.com/" target="_blank"><img src="assets/images/twitter.png" alt="twitter" width="30" height="30" /></a>
                    </div>
				</div>
				
			</div>
			<div className="image-section">
                <img src="assets/images/Logo.png" alt="buildings image" />
			</div>
		</div>
	</div>

        </>
    );
}

export default AboutUs;