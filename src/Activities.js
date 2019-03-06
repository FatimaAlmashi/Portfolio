import React, { Component } from "react";
import qiyas from "./images/qiyas.png";
import adl from "./images/adl.jpg";
import qurashi from "./images/qurashi.png";

class Activities extends Component {
  render() {
    return (
      <section id="second" class="main special">
        <header class="major">
          <h2>الأنشطة والخبرات</h2>
        </header>
        <table>
          <tbody>
            <tr id="first_row">
              <td>
                <img src={qiyas} alt="" height="50" />
              </td>
              <td>
                العمل كمشرفة إختبارات وطنية بالمركز الوطني للتقويم العالي : قياس
              </td>
            </tr>
            <tr id="second_row">
              <td>
                <img src={adl} alt="" height="50" />
              </td>
              <td>العمل بوظيفة الدعم الفني لشبكات السيسكو بوزارة العدل</td>
            </tr>
            <tr id="thired_row">
              <td>
                <img src={qurashi} alt="" height="50" />
              </td>
              <td>
                رئيسة اللجنة الثقافية بشركة محمد عبدالله القرشي لخدمة حجاج
                الداخل{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default Activities;
