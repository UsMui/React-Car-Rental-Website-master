import React, { useState,useContext } from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { search } from "../../sevices/car.service";
import UserContext from "../../store/context";





const FindCarForm = (props) => {
  const {state,dispatch} = useContext(UserContext);
  const [car,setCar] = useState({typeCar:"",brand:"",name:""});
  const handleInput = (event)=>{
      car[event.target.name] = event.target.value;
      setCar(car);
  }
  const findCar = async (e)=>{
      e.preventDefault();
      const c = await search(car);
  }
  

  return (
    <Form onSubmit={findCar} method="post" className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input onChange={handleInput} name="brand"  type="text" placeholder="Brand" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input onChange={handleInput} name="typeCar" type="text" placeholder="Type" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input onChange={handleInput} name="name" type="text" placeholder="Model" required />
        </FormGroup>
        <FormGroup className="form__group">
          <p></p>
          <button type="submit" className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};
export default FindCarForm;
