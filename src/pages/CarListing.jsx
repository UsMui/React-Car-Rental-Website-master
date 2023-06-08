import React, { useState,useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import {get} from "../sevices/car.service";
import carData from "../assets/data/carData";

const CarListing = (props) => {
  const[cars,setCars]= useState([]);
  const getCars = async()=>{
    const cars = await get();
    setCars(cars);
  }
  useEffect(()=>{
    getCars();
  },[]);


  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>
            { cars.map((item)=>(
              <CarItem item = {item} key={item.id}/>
              
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
