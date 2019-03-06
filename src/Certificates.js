import React, { Component } from "react";
import guinness from "./images/guinness.png";
import hajj from "./images/hajj.png";
import fourth from "./images/fourth.jpg";
import cisco from "./images/cisco.jpg";

class Certificates extends Component {
  render() {
    return (
      <section id="second" class="main special">
        <header class="major">
          <h2>الشهادات</h2>
        </header>
        <table>
          <tbody>
            <tr id="first_row">
              <td>
                <img src={hajj} alt="" height="50" />
              </td>
              <td>شهادة المشاركة في هاكاثون الحج</td>
            </tr>
            <tr id="second_row">
              <td>
                <img src={guinness} alt="" height="50" />
              </td>
              <td>شهادة جينيس للمشاركة في أكبر هاكاثون في العالم</td>
            </tr>
            <tr id="thired_row">
              <td>
                <img src={fourth} alt="" height="50" />
              </td>
              <td>
                الفوز بالمركز الثاني بمحور الابحاث العلمية بالمؤتمر العلمي
                الرابع لطلاب وطالبات الدراسات العليا
              </td>
            </tr>
            <tr id="fourth_row">
              <td>
                <img src={cisco} alt="" height="50" />
              </td>
              <td>شهادة CCNA المقدمة من CISCO</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default Certificates;
