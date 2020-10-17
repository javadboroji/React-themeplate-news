import React, { useState,useEffect } from 'react';
import "./Header.css";
import Data from "../../data.json"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
]
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const[Search,setSearch]=useState("");
  const[Submit,setSubmit]=useState("")



  const searchHandler=e=>{
    setSearch(e.target.value);
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    setSubmit(Search)
  }

  useEffect(()=>{
   const result=Data.BodyNews.filter(news=> news.description.toLocaleLowerCase().includes(Search))
   console.log(result);
  },[Submit])
  return (
    <>
      <Navbar color="light" light  expand="md">
       
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink href="#"> صفحه اصلی</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">ورزشی</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">سیاسی</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">فرهنگی</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">اقتصادی</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">فن آوری</NavLink>
            </NavItem>
            <NavItem className="pr-3">
              <form  onSubmit={submitHandler}>
              <div className="input-group mb-3">
              <div className="input-group-prepend">
                <input className="btn btn-outline-secondary" type="submit" value="جستجو"/>
              </div>
              <input type="text"  className="form-control" placeholder="جستجو.."  aria-describedby="basic-addon1" value={Search} onChange={searchHandler}/>
            </div>
              </form>
            
            </NavItem>
          
            
          </Nav>
         
        </Collapse>
        <NavbarBrand href="/">سایت <span className="text-danger">خبری</span></NavbarBrand>
      </Navbar>
    </>
  );
}

  
export default Header;
