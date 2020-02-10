import React, { useRef, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import InputForm from '../components/InputForm'
import Footer from '../components/Footer'
import spnoibat from '../assets/image/spnoibat.png'
import { Animated } from "react-animated-css";

function About(props) {


  useEffect(() => {
    return () => {
    };
  }, []);
  const About = () => {

    return (

      <div style={{ paddingBottom: 30 }} class="container">
        <div class="row justify-content-md-center">
          <div style={{ backgroundColor: '#1B1162', marginTop: 10 }} className="row ">
            <div className="col-lg-6 ">
              <p style={{ paddingTop: 10, paddingBottom: 10 }} style={{ color: '#ccc' }} className="text-justify">Công ty Cổ phần Giải pháp KYC thành lập vào ngày 15/05/2018. Mang trong mình sứ mệnh của một startup trẻ đẩy năng lượng và nhiệt huyết, KYC đã và đang nỗ lực mang đến những giải pháp mới ưu việt nhất về công nghệ và marketing phục vụ công tác quản lý nhà nước, vận hành bộ máy Marketing doanh nghiệp. Với sức trẻ, tư duy đột phá cùng sự sáng tạo không giới hạn, KYC hứa hẹn sẽ là người bạn đồng hành tin cậy của quý đối tác.</p>
            </div>
            <div className="col-lg-6">
              <img style={{ paddingTop: 10, paddingBottom: 10 }} className="img-fluid" src={spnoibat}></img>
            </div>
          </div>
          <div style={{ marginTop: 10 }} className="row ">
            <div className="col-lg-6">
              <img style={{ paddingTop: 10, paddingBottom: 10 }} className="img-fluid" src={spnoibat}></img>
            </div>
            <div className="col-lg-6 ">
              <p className="text-justify">Với các chuyên gia hàng đầu cùng quy trình làm việc nhanh chóng, chuyên nghiệp, KYC luôn không ngừng trau dồi, học hỏi để đối mới, sáng tạo và bứt phá.  Ý  thức được sứ mệnh của mình, chúng tôi không ngừng lắng nghe những ý kiến đóng góp, tiếp thu những lời góp ý, phê bình của quý đối tác để có thể ngày một nâng cao chất lượng phục vụ, năng lực cạnh tranh, đồng thời, cải tiến quy trình quản lý và cải thiện chất lượng phục vụ theo phương châm “Không ngừng học hỏi, sáng tạo”	</p>
            </div>
          </div>



          <div style={{ backgroundColor: '#1B1162', marginTop: 10, marginBottom: 40 }} className="row ">
            <div className="col-lg-6 ">
              <p style={{ paddingTop: 10, paddingBottom: 10 }} style={{ color: '#ccc' }} className="text-justify">Công ty Cổ phần Giải pháp KYC thành lập vào ngày 15/05/2018. Mang trong mình sứ mệnh của một startup trẻ đẩy năng lượng và nhiệt huyết, KYC đã và đang nỗ lực mang đến những giải pháp mới ưu việt nhất về công nghệ và marketing phục vụ công tác quản lý nhà nước, vận hành bộ máy Marketing doanh nghiệp. Với sức trẻ, tư duy đột phá cùng sự sáng tạo không giới hạn, KYC hứa hẹn sẽ là người bạn đồng hành tin cậy của quý đối tác.</p>
            </div>
            <div className="col-lg-6">
              <img style={{ paddingTop: 10, paddingBottom: 10 }} className="img-fluid" src={spnoibat}></img>
            </div>
          </div>
          <div style={{ marginTop: 10, marginBottom: 40 }} className="row ">
            <div className="col-lg-6">
              <img style={{ paddingTop: 10, paddingBottom: 10 }} className="img-fluid" src={spnoibat}></img>
            </div>
            <div className="col-lg-6 ">
              <p className="text-justify">Là một doanh nghiệp luôn đề cao chữ TÍN và chữ TÂM, KYC luôn trân trọng cơ hội được hợp tác quý đối tác. Không có khó khăn nào có thể ngăn cản chúng tôi mạng lại những giá trị tiện ích phù hợp với mong muốn và lợi ích của quý đối tác. Cơ hội đó chính là giá trị nền tảng cho sự phát triển bền vững của KYC. Chúng tôi tin tưởng rằng với đội ngũ KYC đoàn kết, sáng tạo, dám bứt phá cùng sự ủng hộ của quý đối tác và quý khách hàng, KYC chắc chắn sẽ gặt hái được nhiều thành công hơn nữa, khẳng định và vươn tầm trở thành đơn vị hàng đầu mang đến những giải pháp giá trị cho quý tổ chức và doanh nghiệp.
	        		</p>
            </div>
          </div>
          <InputForm col={'col-lg-4'}></InputForm>
        </div>
      </div>
    )
  }

  return (
    <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
      <div className='Main'>
        <About></About>
        <Footer ></Footer>
      </div>
    </Animated>
  )
}
export default About