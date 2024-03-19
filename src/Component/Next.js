import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { FaHtml5, FaInstalod } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagramSquare } from "react-icons/fa";
import {FaInvision} from "react-icons/fa";
import CardImg from "../images/Ellipse 752.png";
import CardImgs from "../images/Ellipse 752 (1).png";
import CardImgse from "../images/Ellipse 752 (2).png";
import CardImgse1 from "../images/Rectangle 4307.png";

function Next() {
  return (
    <>
      <div className="container">
        <div className="APP ">
          <div className="main">
            <div className="row">
              <div className="col-md-6 mt-4 order-2 order-md-1">
                <div className="content">
                  <span className="fw-bold " style={{ color: "#10a3d4" }}>
                    CONSTRUCTION
                  </span>
                  <h1 className="mt-5 fw-bold">
                    <span style={{ color: "#10a3d4" }}> Master</span> of
                    <br /> consistency <br />
                    and<span style={{ color: "#10a3d4" }}> Quality.</span>
                  </h1>
                  <span style={{ color: "#10a3d4" }}>
                    ...................................................................................................................................
                  </span>
                  <p className="fs-6 mt-2" style={{ fontSize: "2px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Dolorum nulla doloremque, velit dolores possimus.
                  </p>
                  <div className="button">
                    <Row className=" mt-4">
                      <Col md={6} className="">
                        <Button className="btn shadow-lg ">
                          <span className="text-light">Explore</span>
                        </Button>
                      </Col>
                      <Col md={6} className="">
                        <Button className="bg-transparent btn1">
                          <span >Contact us</span>
                        </Button>
                      </Col>
                    </Row>
                  </div>
                  <div className=" mt-5">
                    <div className="row mt-5">
                      <div className="col-md-4 mt-5">
                        <span className="fw-bold num ">25,356</span>
                        <br />
                        <p className="mt-2">Project Done</p>
                      </div>
                      <div className="col-md-4 mt-5">
                        <span className="fw-bold">15,200</span>
                        <br />
                        <p className="mt-2">Building Done</p>
                      </div>
                      <div className="col-md-4 mt-5">
                        <span className="fw-bold">350+</span>
                        <br />
                        <p className="mt-2">Total Emplayees</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4 order-1 order-md-2 mage">
                <div className="img rounded-top">
                  <ul className="nav">
                    <li className="fw-bolder">Home</li>
                    <li className="mx-3">About Us</li>
                    <li className="mx-2"> Service</li>
                    <li className="mx-2">Project</li>
                  </ul>
                </div>
              </div>
            </div>
            <Row>
              <Col className=" mt-5">
                <div className="cent rounded-pill p-5">
                  <Row   className="colr align-items-center justify-content-between text-center ">
                    <Col className=" ">
                      Chase
                      <FaInstalod />
                    </Col>
                    <Col className="">
                      <FaInstalod />
                      asana
                    </Col>
                    <Col className="">Buzzfeed</Col>
                    <Col className=" ">
                      <FaInstalod />
                      toggel
                    </Col>
                    <Col className="">
                    <FaInstalod />
                      Walmart
                    </Col>
                  </Row>
                </div>
              </Col>

              {/* <Col>
             
            </Col> */}
            </Row>
            <Row className="mt-5">
              <Col md={6} className="mt-5">
              <p className="fs-6 mt-2" style={{ fontSize: "2px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Dolorum nulla doloremque, velit dolores possimus.
                  </p>

                  <Button className="btn mt-4 btn shadow-lg  ">
                          <span className="text-light">Explore</span>
                        </Button>

              </Col>
              <Col md={6} className="mt-5">
                <h1 className="">Why choose us for<br/> best construction <br/>experience. </h1>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col md={6} className="mt-5">
              <div className="img1 rounded-bottom">
                </div>
              </Col>
              <Col md={6}  className="mt-5">
                <div className="side d-flex gap-5 mt-5">
                  <div className="tex"><h1>01</h1></div>
                  <p className=""> <span className=""> Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <br />
                    Dolorum nulla doloremque, velit dolores possimus.
                    <br />
                    Dolorum nulla doloremque, velit dolores possimus.
                    </p>
                </div>
                <div className="side d-flex mt-5 gap-5 mt-5">
                  <div className="tex"><h1>02</h1></div>
                  <p className=""> <span className=""> Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <br />
                    Dolorum nulla doloremque, velit dolores possimus.
                    <br />
                    Dolorum nulla doloremque, velit dolores possimus.
                    </p>
                </div>

                <div className="side d-flex mt-5 gap-5 mt-5">
                  <div className="tex"><h1>03</h1></div>
                  <p className=""> <span className=""> Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <br />
                    Dolorum nulla doloremque, velit dolores possimus.
                    <br />
                    Dolorum nulla doloremque, velit dolores possimus.
                    </p>
                </div>
              </Col>
            </Row>
            <Row className="mt-5 text-center">
              <Col md={12}  className="mt-5">
                <h1>Our Bust Engineer</h1>
                <p className="mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                consectetur adipisicing elit.
                </p>
              </Col>
            </Row>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
  <div class="col">
    <div class="card h-100 shadow  bg-body-tertiary rounded">
    <div className="card-inn  d-flex justify-content-center mt-5">
      <img src={CardImg} class="card-img-top " alt="..." className="inner-img rounded-circle"  
/>
</div>
      <div class="card-body text-center">
        <h5 class="card-title">Chris Evans</h5>
        <p class="card-text mt-2 ">Michaign.TX</p>
        <h4 className="mt-2">92083460052</h4>
        <p className="mt-2" style={{ color:'#34ebde' }}>kashifsaif055@gmail.com</p>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100  shadow  bg-body-tertiary rounded">
    <div className="card-inn  d-flex justify-content-center mt-5">
      <img src={CardImgs} class="card-img-top " alt="..." className="inner-img rounded-circle"  
/>
</div>
      <div class="card-body text-center">
        <h5 class="card-title">Alison kairo</h5>
        <p class="card-text mt-2 ">Michaign.TX</p>
        <h4 className="mt-2">92083460052</h4>
        <p className="mt-2" style={{ color:'#34ebde' }}>kashifsaif055@gmail.com</p>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100  shadow  bg-body-tertiary rounded">
    <div className="card-inn  d-flex justify-content-center mt-5">
      <img src={CardImgse} class="card-img-top " alt="..." className="inner-img rounded-circle"  
/>
</div>
<div class="card-body text-center">
        <h5 class="card-title">Adam Gates</h5>
        <p class="card-text mt-2 ">Michaign.TX</p>
        <h4 className="mt-2">92083460052</h4>
        <p className="mt-2" style={{ color:'#34ebde' }}>kashifsaif055@gmail.com</p>
      </div>
      
    </div>
  </div>
</div>
{/* arrow section....................... */}
   <Row className="mt-5">
    <Col md={12} className="justify-content-center d-flex mt-5">
      <div className="box  align-center justify-content-center d-flex">
      <div className="div mt-3 d-flex gap-4"> 
      <div className="icon-right">
      <FaLongArrowAltRight/>
      </div>
     <div className="icon-left text-light text-center ">  <FaLongArrowAltLeft/></div>
   
     </div> 
      </div>
    </Col>
   </Row>
   {/* pira section................................. */}
   <Row>
    <Col  className="mt-5 d-flex flex-column  bg-danger align-item-center">
      <div className="foot-uppes mt-5  ">
      <img src={CardImgse1} class="card-img-top " alt="..." className="foot-upper"/>
      <div className="con  d-flex flex-column text-light  w-50 justify-content-center align-item-center">
       <h1 className="text-center mt-5">Massege from CEO</h1>
       {/* <p className=" p-4 text-light xx-small pira "> */}
       {/* <small> */}
       <span className="fw-bold fs-1 ">''</span>
       
       <p className="text-center p-4 ">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Obcaecati<br/> delectus cumque fugiat, pariatur a laboriosam modi labore et 
       veritatis<br/> ipsum accusantium quod quidem expedita illo
        aliquam deserunt<br/> maiores sint cupiditate.
        veritatis ipsum accusantium quod deserunt<br/>
        <br/>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Obcaecati<br/> delectus cumque fugiat, pariatur a laboriosam modi labore et 
       veritatis<br/> ipsum accusantium quod quidem expedita illo
        aliquam deserunt<br/> maiores sint cupiditate.
        veritatis ipsum accusantium quod deserunt<br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Obcaecati<br/> delectus cumque fugiat, pariatur a laboriosam modi labore et 
       veritatis<br/> ipsum accusantium quod quidem expedita illo
        aliquam deserunt<br/> maiores sint cupiditate.
        veritatis ipsum accusantium quod deserunt<br/>
        </p>
        {/* </small> */}
      <h1 className="text-end fw-bold fs-1">''</h1>
        {/* </p> */}
       </div>
       


      </div>
    </Col>
   </Row>

    <Row className="mt-5 text-center">
              <Col md={12}  className="mt-5">
                <h1>Contact Us</h1>
                <p className="mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                consectetur adipisicing elit.
                </p>
              </Col>
            </Row>
            
            <Row>
              <Col md={6}>
            <div className="form text-md-start">
              <input type="text" placeholder="Maya" className="w-50"/>

              <br/> <br/>
              <input type="text" placeholder="Email" className="w-50"/>

              <br/> <br/>
              <input type="text" placeholder="Subject" className="w-50"/><br/> <br/>
              <textarea rows="4" cols="80" name="comment" form="usrform" className="w-50"/>

            </div>

            <Button className="btn mt-4 btn shadow-lg  ">
                          <span className="text-light">Explore</span>
                        </Button>
              </Col>
              <Col md={6}>
              <div className="MAP">
              
                </div>
              </Col>
            </Row>

            <Row className="mt-5 text-center">
              <Col md={12}  className="mt-5">
                <h1>Latest Bloges</h1>
                <p className="mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                consectetur adipisicing elit.
                </p>
              </Col>
            </Row>
 {/* .....2 pick section................... */}
 <Row className="mt-5">
  <Col md={6} className="text-md-start">
  <div className="MAP1 justify-content-center align-items-center d-flex">
  <div className="pic-content1 text-light text-center mt-5">
                <h6 className="">Unlash your Creativity</h6>
                <p><small>Your life is your hand you change it.</small></p>
              </div>
              </div>
            
  </Col>
  <Col md={6} className="text-md-end">
  <div className="MAP2 justify-content-center align-items-center d-flex"> 
  <div className="pic-content2 text-light text-center mt-5">
                <h6 className="">Unlash your Creativity</h6>
                <p><small>Your life is your hand you change it.</small></p>
                <Button className="bg-transparent text-light  border-white btn1">
                          <span >Contact us</span>
                        </Button>
              </div>         
              </div>
             
             
            
  </Col>
 </Row>

 <Row className="mt-5 text-center">
              <Col md={12}  className="mt-5">
                <h1>Subcribe to Our<br/> Newsletter</h1>
                <p className="mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                consectetur adipisicing elit.
                </p>

                <Button className="btn mt-4 btn shadow-lg  ">
                          <span className="text-light">Explore</span>
                        </Button>
              </Col>
             
            </Row>
            {/* ...Upper footer section...... */}
            <Row className="mt-5 ">
              <Col md={3}>
              <span className="fw-bold" style={{ color: "#10a3d4" }}>
                    CONSTRUCTION
                  </span>
                  <p> <small>Every thing  possible in world<br/>but hard work </small></p>
                  <div className=" ican">
                  <FaFacebookSquare />
            <FaInstagramSquare className=""/>
            <FaInvision/>
                  </div>
                 

              </Col>
              <Col md={3}>
              <h5>Resources</h5>
              <p><small>Our Agents</small></p>
              <p><small>Member stories</small></p>
              <p><small>video</small></p>
              <p><small>Free Traiel</small></p>
              
              </Col>
              <Col md={3}><h5>Company</h5>
              <p><small>Our Agents</small></p>
              <p><small>Member stories</small></p>
              <p><small>video</small></p>
              <p><small>Free Traiel</small></p>
              </Col>
              <Col md={3}><h5>Get in tech</h5>
              <p><small>Our Agents</small></p>
              <p><small>Member stories</small></p>
              <p><small>video</small></p>
              <p><small>Free Traiel</small></p>
              </Col>
             
            </Row>
            {/* .....footer section.............. */}
            <Container>
            <hr className="mt-5  mx-4"/>
            <p className="mt-5 text-center"><small>Copyright construction.com All right resurved</small></p>
           
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Next;
