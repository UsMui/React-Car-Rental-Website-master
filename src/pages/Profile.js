import React, { useEffect, useState } from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { auth_profile } from "../sevices/auth.service";

const Profile = (props)=>{
    const [user,setUser] = useState({});
    const getProfile = async ()=>{
        const u = await auth_profile();
        setUser(u);
    }
    useEffect(()=>{
        getProfile();
    },[]);
    return (
        <section style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
          <MDBRow> 
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />
                  <p className="text-muted mb-1">Your information</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.name}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.email}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Confirm</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Verified</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
<MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
           </MDBCard>  
                </MDBCol>
              </MDBRow>
        </MDBContainer>
    <MDBContainer>
        <h4>Transaction history</h4>
    <MDBTable className="col-lg-8">
    <MDBTableHead >
        <tr>
          <th>#</th>
          <th scope='col'>Contract</th>
          <th scope='col'>RentalName</th>
          <th scope='col'>Email</th>
          <th scope='col'>CCCD</th>
          <th scope='col'>Contents</th>
          <th scope='col'>Signing date </th>
          <th scope='col'>Rental date</th>
          <th scope='col'>Return date </th>
          <th scope='col'>Value </th>
          <th scope='col'>Deposits </th>
          <th scope='col'>Car Name </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody >
        <tr>
          <th scope='row'>1</th>
          <td>HD01</td>
          <td>Trần Văn Thành</td>
          <td>thanhatha@gmail.com</td>
          <td>1298313</td>
          <td>đi chơi</td>
          <td>2023-06-06</td>
          <td>2023-06-06</td>
          <td>2023-06-06</td>
          <td>300</td>
          <td>100</td>
          <td>Mec</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>HD01</td>
          <td>Trần Văn Thành</td>
          <td>thanhatha@gmail.com</td>
          <td>1298313</td>
          <td>đi chơi</td>
          <td>2023-06-06</td>
          <td>2023-06-06</td>
          <td>2023-06-06</td>
          <td>300</td>
          <td>100</td>
          <td>Mec</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>HD01</td>
          <td>Trần Văn Thành</td>
          <td>thanhatha@gmail.com</td>
          <td>1298313</td>
          <td>đi chơi</td>
          <td>2023-06-06</td>
          <td>2023-06-06</td>
          <td>2023-06-06</td>
          <td>300</td>
          <td>100</td>
          <td>Mec</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </MDBContainer>
      </section>
    )
}
export default Profile;