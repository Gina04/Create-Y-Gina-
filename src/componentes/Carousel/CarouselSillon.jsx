import "./Carousel.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../assets/img/HenningLthrChairSOSSF23.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CarouselSillon() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="h-[400px]">
      <Carousel.Item className="h-[300px] w-full max-w-[1400px] relative overflow-hidden">
        <div className="slider flex h-full transition-all duration-500">
          <div className="flex flex-col flex-none w-full md:w-[calc(100%/3)] p-2">
            <img
              src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240305_DeliveryCarousel_Sofas?wid=896&qlt=80&op_sharpen=1"
              alt="First slide"
              className="w-full h-[400px] object-cover object-center rounded"
            />
            <p
              style={{
                textAlign: "center",
                padding: "20px 0",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link
                to="/furniture/living-room/sofa-and-sectional-collections"
                style={{ color: "black", textDecoration: "none" }}
              >
                Sofas Start at $1299{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ marginLeft: "5px" }}
                />
              </Link>
            </p>
          </div>

          <div className="flex flex-col flex-none w-full md:w-[calc(100%/3)] p-2">
            <img
              src="https://cb.scene7.com/is/image/Crate/ck_dHP_20240912_NACarousel_Pillows_v2?bfc=on&wid=448&qlt=70&op_sharpen=1"
              alt="First slide"
              className="w-full h-[400px] object-cover object-center rounded"
            />
            <p
              style={{
                textAlign: "center",
                padding: "20px 0",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link
                to="/furniture/living-room/sofa-and-sectional-collections"
                style={{ color: "black", textDecoration: "none" }}
              >
                Sofas Start at $1299{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ marginLeft: "5px" }}
                />
              </Link>
            </p>
          </div>

          <div className="flex flex-col flex-none w-full md:w-[calc(100%/3)] p-2">
            <img
              src="https://cb.scene7.com/is/image/Crate/ck_dHP_20240912_NACarousel_CoffeeTables?bfc=on&wid=448&qlt=80&op_sharpen=1"
              alt="First slide"
              className="w-full h-[400px] object-cover object-center rounded"
            />
            <p
              style={{
                textAlign: "center",
                padding: "20px 0",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link
                to="/furniture/living-room/sofa-and-sectional-collections"
                style={{ color: "black", textDecoration: "none" }}
              >
                Sofas Start at $1299{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ marginLeft: "5px" }}
                />
              </Link>
            </p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="h-[300px] w-full max-w-[1400px] relative overflow-hidden">
        <div className="slider flex h-full transition-all duration-500">
          <div className="flex flex-col flex-none w-full md:w-[calc(100%/3)] p-2">
            <img
              src="https://cb.scene7.com/is/image/Crate/ck_dHP_20240912_NACarousel_Pillows_v2?bfc=on&wid=448&qlt=70&op_sharpen=1"
              alt="First slide"
              className="w-full h-[400px] object-cover object-center rounded"
            />
            <p
              style={{
                textAlign: "center",
                padding: "20px 0",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link
                to="/furniture/living-room/sofa-and-sectional-collections"
                style={{ color: "black", textDecoration: "none" }}
              >
                Sofas Start at $1299{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ marginLeft: "5px" }}
                />
              </Link>
            </p>
          </div>

          <div className="flex flex-col flex-none w-full md:w-[calc(100%/3)] p-2">
            <img
              src="https://cb.scene7.com/is/image/Crate/ck_dHP_20240912_NACarousel_CoffeeTables?bfc=on&wid=448&qlt=80&op_sharpen=1"
              alt="First slide"
              className="w-full h-[400px] object-cover object-center rounded"
            />
            <p
              style={{
                textAlign: "center",
                padding: "20px 0",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link
                to="/furniture/living-room/sofa-and-sectional-collections"
                style={{ color: "black", textDecoration: "none" }}
              >
                Sofas Start at $1299{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ marginLeft: "5px" }}
                />
              </Link>
            </p>
          </div>

          <div className="flex flex-col flex-none w-full md:w-[calc(100%/3)] p-2">
            <img
              src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240305_DeliveryCarousel_Sofas?wid=896&qlt=80&op_sharpen=1"
              alt="First slide"
              className="w-full h-[400px] object-cover object-center rounded"
            />
            <p
              style={{
                textAlign: "center",
                padding: "20px 0",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link
                to="/furniture/living-room/sofa-and-sectional-collections"
                style={{ color: "black", textDecoration: "none" }}
              >
                Sofas Start at $1299{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ marginLeft: "5px" }}
                />
              </Link>
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSillon;
