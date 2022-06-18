import React from "react";
import { Row } from "react-bootstrap";
import CertificateItem from "./CertificateItem";
import CertificatesData from "./CertificateData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard, EffectFlip } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip";

import "./CertificateItem.css";

export default function CertificateSlider() {
  return (
    <>
      <div className="w-100 my-3">
        <Row className="col-11 mx-auto">
          <div id="certificate-heading" className="text-center py-4">
            See Our Learner's Certificate on LinkedIn
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
            className="p-1 mySwiper"
            modules={[Autoplay, Pagination, Keyboard, EffectFlip]}
            style={{ maxWidth: "750px" }}
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
    </>
  );
}
