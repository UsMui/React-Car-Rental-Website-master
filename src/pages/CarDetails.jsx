
import React, { useContext, useEffect, useState } from "react";
import { Form, FormGroup } from "reactstrap";
import carData from "../assets/data/carData";
import { Container, Row, Col, NavbarBrand } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import PaymentMethod from "../components/UI/PaymentMethod";
import UserContext from "../store/context";
import { find } from "../sevices/car.service";
import "../styles/booking-form.css";
import { auth_profile } from "../sevices/auth.service";

const CarDetails = (props) => {
  // const [car,setCar] = useState({});
  const [car,setCar] = useState({});
  const [brand,setBrand] = useState({});
  const[typeCar,setTypeCar]= useState({});
  const[user,setUser] = useState({});
  const [contract,setContract] = useState({numberContract:"",name:"",address:"",email:"",tel:"",thumbnail:"",CCCD:"",contents:"",ngaykihopdong:"",ngaythue:"",ngaytra:"",giatrihopdong:"",giatridatcoc:"",cars_id:"",users_id:""});
  const {id} = useParams();
  const {state,dispatch} = useContext(UserContext);
    const getProfile = ()=>{
        
        setUser(state.userlogin);
    }
  const findCar = async ()=>{
    const c = await find(id);
    setCar(c);
    setBrand(c.brand);
    setTypeCar(c.typeCar);
  } 
    const handleInput = (event)=>{
        contract[event.target.numberContract] = event.target.value;
        contract[event.target.name] = event.target.value;
        contract[event.target.address] = event.target.value;
        contract[event.target.email] = event.target.value;
        contract[event.target.tel] = event.target.value;
        contract[event.target.thumbnail] = event.target.value;
        contract[event.target.CCCD] = event.target.value;
        contract[event.target.contents] = event.target.value;
        contract[event.target.ngaykihopdong] = event.target.value;
        contract[event.target.ngaythue] = event.target.value;
        contract[event.target.ngaytra] = event.target.value;
        contract[event.target.giatrihopdong] = event.target.value;
        contract[event.target.giatridatcoc] = event.target.value;
        contract[event.target.cars_id] = event.target.value;
        contract[event.target.users_id] = event.target.value;
        setContract(contract); 
    }
  useEffect(()=>{
    findCar() ; getProfile();
  },[]);
  
return (
    <Helmet title={car.name}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={car.thumbnail} alt="" className="w-100" />
            </Col>
            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{car.name}</h2>
                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${car.giathue1ngay}.00 / Day
                  </h6>
<span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({"singleCarItem.rating"} ratings)
                  </span>
                </div>
                <p className="section__description">
                  {car.description}
                </p>
                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {car.name}
                  </span>
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {brand.name}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                     {car.bienso}
                  </span>
                </div>
                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {car.sochongoi}
                  </span> 
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {typeCar.name}
                  </span>
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-map-pin-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {car.namsanxuat}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
<h5 className="mb-4 fw-bold ">Booking Information</h5>
    <Form >
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
              <input type="text" onChange={handleInput}  name = "numberContract"  placeholder="Number Contract" />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
              <input type="text" onChange={handleInput}  name = "name"  placeholder="Name Rental" />
            </FormGroup>

            <FormGroup className="booking__form d-inline-block me-4 mb-4">
              <input type="text" onChange={handleInput}  name = "address"placeholder="Address" />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
              <input type="email" onChange={handleInput}  name ="email"placeholder="Email" />
            </FormGroup>

            <FormGroup className="booking__form d-inline-block me-4 mb-4">
              <input type="text" onChange={handleInput} name="tel" placeholder="Phone Number" />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
              <input type="text"onChange={handleInput}  name="thumbnail" placeholder="avatar" />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
              <input type="text" onChange={handleInput} name="CCCD" placeholder="CCCD" />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
              <input type="text" onChange={handleInput} name="contents" placeholder="Content" />
            </FormGroup>

            <FormGroup className="booking__form d-inline-block me-4 mb-4">
              <input type="date" onChange={handleInput} name="ngaykihopdong" placeholder="Contract signing date" />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
              <input type="date" onChange={handleInput} name="ngaythue" placeholder="Date of hire" />
            </FormGroup>

            <FormGroup className="booking__form d-inline-block me-4 mb-4">
              <input type="date"  onChange={handleInput} name="ngaytra"placeholder="Return date" />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
              <input type="int" onChange={handleInput} name="giatrihopdong" placeholder="Contract value" />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
              <input type="int" onChange={handleInput}  name="giatridatcoc"placeholder="Contract deposits" />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
              <input type="int"onChange={handleInput}  name="cars_id"placeholder="carsId" value= {car.id} />
            
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
<input type="int" onChange={handleInput}  name="users_id" placeholder="usersId" value={user.id}/>
            </FormGroup>
            <FormGroup>
              <textarea rows={5} type="textarea" className="textarea" placeholder="Node"></textarea>
            </FormGroup>
            <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
