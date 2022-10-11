import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/slider.scss";

export default function Slider() {
  function getWindowSize() {
    if (typeof window !== "undefined") {
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
    }
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    console.log(windowSize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      {windowSize?.innerWidth >= 1235 ? (
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          fadeEffect={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    Interior Design
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Advice on interior layout</li>
                    <li>2D or 3D interior design plans</li>
                    <li>Selection of furnitures</li>
                    <li>Project timelines</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Interior Design</p>
                    <p className="card__price-value">
                      Our main goal is to improve the effectiveness,
                      accessibility, functionality and aesthetic appeal of an
                      environment in a way that ensures the safe and optimal
                      occupation and use of the interior space.
                    </p>
                    <p className="card__price-value">
                      We will consider the intended function of a space to
                      curate an environment that is fit for purpose, as well as
                      understand how an interior design scheme can positively
                      impact the end-user.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    Permit
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    Design
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                    <p className="card__price-value">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--4">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--4">
                    Renders
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-4">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--5">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--5">
                    Renovations
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--6">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--6">
                    New Builds
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : windowSize?.innerWidth <= 813 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          fadeEffect={true}
          modules={[Pagination]}
          className="mySwiper1"
        >
          <SwiperSlide>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    Interior Design
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Advice on interior layout</li>
                    <li>2D or 3D interior design plans</li>
                    <li>Selection of furnitures</li>
                    <li>Project timelines</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Interior Design</p>
                    <p className="card__price-value">
                      Our main goal is to improve the effectiveness,
                      accessibility, functionality and aesthetic appeal of an
                      environment in a way that ensures the safe and optimal
                      occupation and use of the interior space.
                    </p>
                    <p className="card__price-value">
                      We will consider the intended function of a space to
                      curate an environment that is fit for purpose, as well as
                      understand how an interior design scheme can positively
                      impact the end-user.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    Permit
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    Design
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                    <p className="card__price-value">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--4">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--4">
                    Renders
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-4">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--5">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--5">
                    Renovations
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--6">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--6">
                    New Builds
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          fadeEffect={true}
          modules={[Pagination, Navigation]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    Interior Design
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Advice on interior layout</li>
                    <li>2D or 3D interior design plans</li>
                    <li>Selection of furnitures</li>
                    <li>Project timelines</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Interior Design</p>
                    <p className="card__price-value">
                      Our main goal is to improve the effectiveness,
                      accessibility, functionality and aesthetic appeal of an
                      environment in a way that ensures the safe and optimal
                      occupation and use of the interior space.
                    </p>
                    <p className="card__price-value">
                      We will consider the intended function of a space to
                      curate an environment that is fit for purpose, as well as
                      understand how an interior design scheme can positively
                      impact the end-user.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    Permit
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    Design
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                    <p className="card__price-value">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--4">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--4">
                    Renders
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-4">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--5">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--5">
                    Renovations
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--6">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--6">
                    New Builds
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Hello</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
}
