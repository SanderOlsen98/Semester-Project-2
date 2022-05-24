export default function createFooter() {
  const footer = document.querySelector("footer");
  footer.innerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-wrapper-inner">
                <div style="width: 100%;">
                    <img src="../../img/merchiee-logo-blue.png" alt="merchiee logo">
                </div>
                <div class="footer-nav-wrapper">
                    <div>
                        <h1>Learn more about Merchiee</h1>
                        <nav>
                            <ul>
                                <li><a href="">About us</a></li>
                                <li><a href="">Media</a></li>
                                <li><a href="">Events</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h1>Need Help?</h1>
                        <nav>
                            <ul>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Payment info</a></li>
                                <li><a href="">Contact us</a></li>
                                <li><a href="">Terms and Conditions</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div>

                    <div>
                        <div>
                            <i class="fas fa-phone-volume"></i> +47123456789 <br />
                            <p>Every day 08:00 - 15:30</p>
                        </div>
                        <div>
                            <i class="fas fa-envelope"></i>
                            merchiee@merchiee.com <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
                Copyright © Merchie. All rights reserved.
            </div>
    </footer>`;
}
