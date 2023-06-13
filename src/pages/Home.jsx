import React, { useState,useContext,useEffect } from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import { search } from "../sevices/car.service";
import UserContext from "../store/context";

import BlogList from "../components/UI/BlogList";
import { Form } from "reactstrap";
import { FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

const Home = (props) => {
    const {state,dispatch} = useContext(UserContext);
    const [car,setCar] = useState({type:"",brand:"",name:""});
    const [cars,setCars]= useState([]);
    const handleInput = (event)=>{
        car[event.target.name] = event.target.value;
        setCar(car);
    }
    const findCar = async (e)=>{
      e.preventDefault();
        const cars = await search(car);
        setCars(cars);
    }
   
    useEffect(()=>{
      findCar();
    },[]);
    console.log(cars);
    
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <Form onSubmit={findCar} method="post" className="form">
                <div className=" d-flex align-items-center justify-content-between flex-wrap">
                  <FormGroup className="form__group">
                    <input onChange={handleInput} name="brand"  type="text" placeholder="Brand" />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input onChange={handleInput} name="type" type="text" placeholder="Type"  />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input onChange={handleInput} name="name" type="text" placeholder="Model"  />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <p></p>
                    <button type="submit" className="btn find__car-btn">Find Car</button>
                  </FormGroup>
                </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section>
        <Container>
          <Row>
            
            { cars.map((item)=>(
               <Col lg="4" md="4" sm="6" className="mb-5">
               <div className="car__item">
                 <div className="car__img">
                   <img src={item.thumbnail} alt="" className="w-100" />
                 </div>
         
                 <div className="car__item-content mt-4">
                   <h4 className="section__title text-center">{item.name}</h4>
                   <h6 className="rent__price text-center mt-">
                     ${item.giathue1ngay}.00 <span>/ Day</span>
                   </h6>
         
                   <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                     <span className=" d-flex align-items-center gap-1">
                       <i class="ri-car-line"></i> {item.namsanxuat}
                     </span>
                     <span className=" d-flex align-items-center gap-1">
                       <i class="ri-settings-2-line"></i> {item.sochongoi}
                     </span>
                     <span className=" d-flex align-items-center gap-1">
                       <i class="ri-timer-flash-line"></i> {item.bienso}
                     </span>
                   </div>
         
                   
         
                   <button className=" w-50 car__item-btn car__btn-details">
                     <Link to={"/otos/"+item.id}>Details</Link>
                   </button> 
                 </div>
               </div>
             </Col>
            ))}
          </Row>
        </Container>
      </section>
     
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {/* {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))} */}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
