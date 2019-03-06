import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <section>
          <h2>بيانات التواصل</h2>
          <dl class="alt">
            <dt>Address</dt>
            <dd>المملكة العربية السعودية - مكة المكرمة</dd>
            <dt>Phone</dt>
            <dd>+966 555555555</dd>
            <dt>Email</dt>
            <dd>
              <a href="#">f.almashi@windowslive.com</a>
            </dd>
          </dl>
          <ul class="icons">
            <li>
              <a href="#" class="icon fa-twitter alt">
                <span class="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon fa-facebook alt">
                <span class="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon fa-instagram alt">
                <span class="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon fa-github alt">
                <span class="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon fa-dribbble alt">
                <span class="label">Dribbble</span>
              </a>
            </li>
          </ul>
        </section>
        <p class="copyright">
          &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
        </p>
      </footer>
    );
  }
}

export default Footer;
