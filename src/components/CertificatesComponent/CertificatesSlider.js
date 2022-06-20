import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import CertificateItem from "./CertificatesItem";
import CertificatesData from "./CertificatesData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard, EffectFlip } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "./CertificatesSlider.css";

export default function CertificatesSlider() {
  return (
    <Fragment>
      <div className="w-100 my-3">
        <Row className="col-11 mx-auto" id="certificates-section-container">
          <div id="certificate-heading" className="py-3">
            <p
              className="mb-1 certificate-slider-heading"
              id="certificate-slider-large-heading"
            >
              Don't just listen to us,
            </p>
            <p
              className="mb-1 certificate-slider-heading"
              id="certificate-slider-small-heading"
            >
              Listen to those who have completed our courses.
            </p>
          </div>
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            autoHeight={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            effect={"flip"}
            className="mySwiper"
            modules={[Autoplay, Pagination, Keyboard, EffectFlip]}
          >
            {CertificatesData.map((data) => {
              return (
                <SwiperSlide
                  key={data.id}
                  style={{
                    boxShadow: "rgba(37, 117, 252, 0.4) 0px 0px 4px 0px",
                    borderRadius: "5px",
                  }}
                >
                  <CertificateItem data={data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </div>
    </Fragment>
  );
}
