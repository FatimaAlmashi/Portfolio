import React, { Component } from "react";
import pic01 from "./images/pic01.jpg";

class MainSection extends Component {
  render() {
    return (
      <section id="intro" class="main">
        <div class="spotlight">
          <div class="content">
            <header class="major">
              <h2>الرؤية و الأهداف</h2>
            </header>
            <h3>
              أحاول جاهدة و أسعى لتسخير كل ما أملك من علم ومعرفة في مجالات
              التقنية والبرمجة والخبرات المختلفة في خدمة ديني وأمتي وخدمة هذا
              الوطن وسبيلي إلى هذا بعد عون الله تعالى التطوير المستمر لمهاراتي
              واستثمار الوقت والجهد.
            </h3>
          </div>
          <span class="image">
            <img src={pic01} alt="" />
          </span>
        </div>
      </section>
    );
  }
}

export default MainSection;
