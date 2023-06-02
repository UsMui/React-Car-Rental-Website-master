import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Brand" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="text" placeholder="Type" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="text" placeholder="Qty Seat" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="text" placeholder="Model" required />
        </FormGroup>
        <FormGroup className="form__group">
          <p></p>
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};
export default FindCarForm;
