import React from 'react'
import    "./Calender"

const Calender = () => {
  return (
    <div>
     <div id="Navigation" className="Navigation">
        <div>
            <a href="home.html"><img src="https://clockify.me/assets/images/clockify-logo.svg" alt="logo"/></a>
        </div>
        <div className="disappear">
            <a href="features.html">Features</a>
        </div>
        <div className="disappear">
            <a href="desktopapp.html">Download</a>
        </div>
        <div className="Navigation__spacer">
        </div>
        <div className="disappear">
            <a href="log-in.html">Log In</a>
        </div>
        <div className="disappear">
            <a  href="Sign_Up.html"><button className="Light__btn">Sign Up</button></a>
        </div>
        <a href="javascript:void(0);" id="navIcon" className="Navigation__toggle" onclick="navToggler()">
            <i className="fas fa-bars"></i>
        </a>
     </div>
   {/* -- --------------------- Navigation End -----------------------------> */}
     <div id="Header" className="Header">
        <div>
            <h1>The most popular free time tracker for teams</h1>
            <div className="Header__desc"><p>Time tracking software used by millions. Clockify is a simple time tracker and timesheet app that lets you and your team track work hours across projects. Unlimited users, free forever.</p></div>
            <button className="Dark__btn">Get Started - It's Free!</button>
            <i className="fas fa-users"><span/>76,318 people signed up last month</i>
        </div>
        <div className="Header__hero">
            <div className="Header__hero__image">
                <img className="Header__showcase" src="/images/customers-light-gray-3.svg" alt="icon-showcase"/>
                <img id="mode" src="images/herolight.svg" alt="hero"/>
                <img src="/images/play-button.svg" alt="play button"/>
            </div>
            <label className="Header__hero__toggle">
                <input id="checker" type="checkbox"/> <span className="slider round"></span>
            </label>
        </div>
     </div>
{/* <!-- --------------------- Header End -----------------------------> */}

     <div className="Features">
        <div>
            <h1 className="Heading__Two">Time management features</h1>
            <div className="Features__desc"><p>Track productivity, attendance, and billable hours with a simple time tracker and timesheet.</p></div>
        </div>
        <div className="Features__showcase">
            <div className="Features__showcase__section">
                <div className="Features__showcase__section__content">
                    <p>Timekeeping</p>
                    <li><span>✓</span><span>Track hours using a timer</span></li>
                    <li><span>✓</span><span>Log time in a timesheet</span></li>
                    <li><span>✓</span><span>Categorize time by project</span></li>
                    <li><span>✓</span><span>Mark time as billable</span></li>
                </div>
                <div className="Features__showcase__one__image">
                    <img src="images/feature1.svg" alt="feature image"/>
                </div>
            </div>
            <div className="Features__showcase__section">
                <div className="Features__showcase__section__content">
                    <p>Reporting</p>
                    <li><span>✓</span><span>Visual time breakdown</span></li>
                    <li><span>✓</span><span>Customizable reports</span></li>
                    <li><span>✓</span><span>Share reports with others</span></li>
                    <li><span>✓</span><span>Export as PDS, CSV, and Excel</span></li>
                </div>
                <div className="Features__showcase__one__image">
                    <img src="images/feature2.svg" alt="feature image"/>
                </div>
            </div>
            <div className="Features__showcase__section">
                <div className="Features__showcase__section__content">
                    <p>Team Activity</p>
                    <li><span>✓</span><span>Invite whole team</span></li>
                    <li><span>✓</span><span>Set employee hourly rates</span></li>
                    <li><span>✓</span><span>See current activity</span></li>
                    <li><span>✓</span><span>See who worked on what</span></li>
                </div>
                <div className="Features__showcase__one__image">
                    <img src="images/feature3.svg" alt="feature image"/>
                </div>
            </div>
            <button className="Dark__btn">Get Started - It's Free!</button>
        </div>
     </div>
     {/* <!-- --------------------- Features End -----------------------------> */}
     <div className="Platforms">
        <div>
            <h1 className="Heading__Two">Time tracking apps</h1>
            <div className="Platforms__desc"><p>Clockify works across devices. Track time from anywhere — all data is synced online.</p></div>
        </div>
         <div className="Platforms__apps">
            <div className="Platforms__apps__section">
                <div>
                    <img src="images/laptop.png" alt="apps"/>
                </div>
                <div>
                    <h4>Desktop App</h4>
                    <button className="Light__btn">Windows</button>
                    <button className="Light__btn">Mac</button>
                    <button className="Light__btn">Linux</button>
                </div>
            </div>
            <div className="Platforms__apps__section">
                <div>
                    <img src="images/mobile.png" alt="apps"/>
                </div>
                <div>
                    <h4>Mobile App</h4>
                    <button className="Light__btn">Android</button>
                    <button className="Light__btn">iOS</button>
                </div>
            </div>
            <div className="Platforms__apps__section">
                <div>
                    <img src="images/web.png" alt="apps"/>
                </div>
                <div>
                    <h4>Web App</h4>
                    <button className="Light__btn">Firefox</button>
                    <button className="Light__btn">Chrome</button>
                </div>
            </div>
         </div>
     </div>
     {/* <!-- --------------------- Platforms End -----------------------------> */}
     <div className="Usp">
        <div>
            <h1 className="Heading__Two">Why track time with Clockify</h1>
            <div className="Usp__cards">
                <div className="left Usp__cards__section">
                    <i className="fas fa-user-tie"></i>
                    <b>Get an accurate loot at your workweek</b>
                    <p>Track time you spend working on activites,see exactly where the time goes, and improve your productivity.</p>
                    <span>Productivity →</span>
                </div>
                <div className="right Usp__cards__section">
                    <i className="fas fa-money-bill-wave-alt"></i>
                    <b>Improve project profitability</b>
                    <p>Track time on projects so you can see how much time projects really take and see if you charge enough.</p>
                    <span>Project profitability →</span>
                </div>
                <div className="left  Usp__cards__section">
                    <i className="far fa-clock"></i>
                    <b>Show clients how much you've worked</b>
                    <p>Mark time records as billable and Clockify will apply your hourly rates,send reports to clients for review.</p>
                    <span>Client billing →</span>
                </div>
                <div className="right  Usp__cards__section">
                    <i className="fas fa-users"></i>
                    <b>See what your team works on</b>
                    <p>Employees can quickly log time so you can track attendance and see who worked on what at a glance.</p>
                    <span>Team management →</span>
                </div>
            </div>
        </div>
        <div className="clear"></div>
     </div>
     {/* <!-- --------------------- Usp Ends -----------------------------> */}
     <div className="Free">
         <div>
            <img src="images/free.svg" alt="Free Image"/>
         </div>
         <div>
             <h2>Free</h2>
             <span>Forever!</span>
             <li><span>✓</span><span>Unlimited users</span></li>
             <li><span>✓</span><span>Unlimited tracking</span></li>
             <li><span>✓</span><span>Unlimited projects</span></li>
             <p>Optional Upgrades →</p>
            </div>
     </div>
     {/* <!-- ---------------------Free Ends -----------------------------> */}
     <div className="Testimonials">
        <h1 className="Heading__Two">Join millions who track time with Clockify</h1>
        <img src="/images/stars.svg" alt="rating"/>
        <span className="Testimonials__rating">4.7 customer rating</span>
        <span>1,400+ Reviews</span>
        <div className="Testimonials__cards">
            <div className="Testimonials__cards__section">
                <p>Best time tracking software!</p>
                <p>★★★★★</p> 
                <p>I use Clockify for work, but it also lets me know exactly what I am doing in my day!</p>
                <p>— Marc Wolfe, Marketing Manager</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Best timesheet software on the market</p>
                <p>★★★★★</p> 
                <p>Easy to use. Quick to maneuver. Excellent reporting and administration.</p>
                <p>— Anurag K, Database Engineer,</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Wonderful tool for tracking productivity</p>
                <p>★★★★★</p> 
                <p>I enjoy it so much I use outside of work to track my own personal self-development.</p>
                <p>— Jessup S, Operations Associate</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>I feel more productive!</p>
                <p>★★★★★</p> 
                <p>It's really encouraging to look back and see how much I've accomplished!</p>
                <p>— Kristen Eisentrager, Creative Coordinator</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Best time tracking software!</p>
                <p>★★★★★</p> 
                <p>I use Clockify for work, but it also lets me know exactly what I am doing in my day!</p>
                <p>— Marc Wolfe, Marketing Manager</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Best timesheet software on the market</p>
                <p>★★★★★</p> 
                <p>Easy to use. Quick to maneuver. Excellent reporting and administration.</p>
                <p>— Anurag K, Database Engineer,</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Wonderful tool for tracking productivity</p>
                <p>★★★★★</p> 
                <p>I enjoy it so much I use outside of work to track my own personal self-development.</p>
                <p>— Jessup S, Operations Associate</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>I feel more productive!</p>
                <p>★★★★★</p> 
                <p>It's really encouraging to look back and see how much I've accomplished!</p>
                <p>— Kristen Eisentrager, Creative Coordinator</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Best time tracking software!</p>
                <p>★★★★★</p> 
                <p>I use Clockify for work, but it also lets me know exactly what I am doing in my day!</p>
                <p>— Marc Wolfe, Marketing Manager</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Best timesheet software on the market</p>
                <p>★★★★★</p> 
                <p>Easy to use. Quick to maneuver. Excellent reporting and administration.</p>
                <p>— Anurag K, Database Engineer,</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Wonderful tool for tracking productivity</p>
                <p>★★★★★</p> 
                <p>I enjoy it so much I use outside of work to track my own personal self-development.</p>
                <p>— Jessup S, Operations Associate</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>I feel more productive!</p>
                <p>★★★★★</p> 
                <p>It's really encouraging to look back and see how much I've accomplished!</p>
                <p>— Kristen Eisentrager, Creative Coordinator</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Best time tracking software!</p>
                <p>★★★★★</p> 
                <p>I use Clockify for work, but it also lets me know exactly what I am doing in my day!</p>
                <p>— Marc Wolfe, Marketing Manager</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Best timesheet software on the market</p>
                <p>★★★★★</p> 
                <p>Easy to use. Quick to maneuver. Excellent reporting and administration.</p>
                <p>— Anurag K, Database Engineer,</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Wonderful tool for tracking productivity</p>
                <p>★★★★★</p> 
                <p>I enjoy it so much I use outside of work to track my own personal self-development.</p>
                <p>— Jessup S, Operations Associate</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>I feel more productive!</p>
                <p>★★★★★</p> 
                <p>It's really encouraging to look back and see how much I've accomplished!</p>
                <p>— Kristen Eisentrager, Creative Coordinator</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Best time tracking software!</p>
                <p>★★★★★</p> 
                <p>I use Clockify for work, but it also lets me know exactly what I am doing in my day!</p>
                <p>— Marc Wolfe, Marketing Manager</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Best timesheet software on the market</p>
                <p>★★★★★</p> 
                <p>Easy to use. Quick to maneuver. Excellent reporting and administration.</p>
                <p>— Anurag K, Database Engineer,</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Wonderful tool for tracking productivity</p>
                <p>★★★★★</p> 
                <p>I enjoy it so much I use outside of work to track my own personal self-development.</p>
                <p>— Jessup S, Operations Associate</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>I feel more productive!</p>
                <p>★★★★★</p> 
                <p>It's really encouraging to look back and see how much I've accomplished!</p>
                <p>— Kristen Eisentrager, Creative Coordinator</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Best time tracking software!</p>
                <p>★★★★★</p> 
                <p>I use Clockify for work, but it also lets me know exactly what I am doing in my day!</p>
                <p>— Marc Wolfe, Marketing Manager</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Best timesheet software on the market</p>
                <p>★★★★★</p> 
                <p>Easy to use. Quick to maneuver. Excellent reporting and administration.</p>
                <p>— Anurag K, Database Engineer,</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>Wonderful tool for tracking productivity</p>
                <p>★★★★★</p> 
                <p>I enjoy it so much I use outside of work to track my own personal self-development.</p>
                <p>— Jessup S, Operations Associate</p>
            </div>
            <div className="Testimonials__cards__section">
                <p>I feel more productive!</p>
                <p>★★★★★</p> 
                <p>It's really encouraging to look back and see how much I've accomplished!</p>
                <p>— Kristen Eisentrager, Creative Coordinator</p>
            </div>
            <img src="images/showcase2.svg" alt="icon showcase"/>
        </div>
    </div>
    {/* <!-- --------------------- Navigation End -----------------------------> */}
    <div className="Footer">
        <div>
            <h1 className="Heading__Two">Start tracking time with the Clockify</h1>
            <div className="Footer__list">
                <li>Unlimited users</li>
                <li>•</li>
                <li>Cancel anytime</li>
                <li>•</li>
                <li>Free forever</li>
            </div>
            <button className="Dark__btn">Get Started - It's Free!</button>
            <i className="fas fa-users"><span/>76,318 people signed up last month</i>
        </div>
        <div className="Footer__section">
            <div>
                <a href="#"><img src="https://clockify.me/assets/images/clockify-logo.svg" alt="logo"/></a>
                <p><a href="#">Log In</a></p>
                <p><a href="#">Sign up</a></p>
            </div>
            <div></div>
            <div>
                <b><p>Product</p></b>
                <p>Features</p>
                <p>Download</p>
                <p>Integrations</p>
                <p>Extras</p>
            </div>
            <div>
                <b><p>Solution</p></b>
                <p>Time clock</p>
                <p>Timesheet</p>
                <p>Time calculator</p>
                <p>Self-hosting</p>
            </div>
            <div>
                <b><p>Company</p></b>
                <p>About us</p>
                <p>Customers</p>
                <p>Resources</p>
                <p>Blog</p>
            </div>
            <div>
                <b><p>Support</p></b>
                <p>Help</p>
                <p>API</p>
                <p>Contact</p>
                <p><i className="fab fa-twitter"></i><i className="fab fa-youtube"></i></p>
            </div>
        </div>
        <div className="Footer__navigation">
            <div>
                <p>&copy 2020 Clockify</p>
            </div>
            <div></div>
            <div>
                <p>Cookies</p>
            </div>
            <div>
                <p>Terms</p>
            </div>
            <div>
                <p>Privacy</p>
            </div>
            <div>
                <p>Security</p>
            </div>
        </div>
     </div>

     <script src="home.js"></script>

    </div>
  )
}

export default Calender