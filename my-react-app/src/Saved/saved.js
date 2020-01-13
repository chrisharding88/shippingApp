  
import React, {Component} from "react";
import API from "../../Utils/API"
import {Col, Row, Container} from "../../Components/Grid";
import Form from "../../Components/BookList"
import {Link} from "react-router-dom";
import DeleteBtn from "../../Components/Button"
import ShippingBarrel from "../Components/ShippingBarrel/shippingBarrel";


class Saved extends Component {

state = {
   firstName:"",
   lastName:"",
   address:"",
   city:"",
   state:"",
   zip:"",
   barrelQuantity: "",
   barrelType: [],
   country: [],
   barrelPrice: [],
   shippingPrice: []

}

componentDidMount() {
    this.getJobInfo();
}

getJobInfo = () => {
    DB.getJobInfo()
}




render(){
    return(




    )






}








}

export default Saved;