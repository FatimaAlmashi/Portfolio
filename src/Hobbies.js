import React, { Component } from "react";

class Hobbies extends Component {
  render() {
    return (
      <section id="first" class="main special">
        <header class="major">
          <h2>الإهتمامات والهوايات</h2>
        </header>
        <ul class="features">
          <li>
            <span class="icon major style1 fa-code" />
            <h3>البرمجة</h3>
            <p>
              احب البرمجة وإصلاح الأخطاء البرمجية ،وأرى البرمجة أنها نافذة
              الدخول إلى العالم الرقمي القادم
            </p>
          </li>
          <li>
            <span class="icon major style3 fa-copy" />
            <h3>البحث والقراءة</h3>
            <p>
              الأبحاث العلمية وسيلتي لمواجهة أي غموض أو صعوبات علمية أو تقنية
              ،أحب القراءة حول كل ما يطور مهاراتي البرمجية
            </p>
          </li>
          <li>
            <span class="icon major style5 fa-diamond" />
            <h3>تصميم الجرافيكس</h3>
            <p>
              احب التصميم بصفة عامة ، تصميم الشعارات ،والتصميم الجرافيكي بشكل
              خاص
            </p>
          </li>
        </ul>
      </section>
    );
  }
}
export default Hobbies;
