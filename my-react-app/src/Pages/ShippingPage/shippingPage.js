import React, {Component} from 'react';
import numberInput from '../../Components/ShippingBarrel/shippingBarrel';
import dropdownCountries from '../../Components/ShippingBarrel/shippingBarrel'
import shipPrice from '../../Components/ShippingBarrel/shippingBarrel'
import Submit from '../../Components/ShippingBarrel/shippingBarrel'
import API from '../../API'
class shippingPage extends Component{

state = {
    shippingQuantity: "",
    countries: [],
    selectedCountry: ""
}

componentDidMount(){
    fetch()
      .then((Response) => {
          Response.shippingBarrelPrices.json()
      })
      .then(data => {
          let countriesfromAPI = data.map(country => {
              return {value: country, display: country}
          });
          this.setState({
              countries:[{value: '', display: '(Select a Country)'}]
          })
      }).catch(error => {
          console.log(error)
      })
}

handleInputChange = () =>{
    const { number, value } = event.target;
    this.setState({
      [number]: value
    });
}

handleShipSubmit = () =>{

}

render () {
    return(
        <div>
            <numberInput
                value={this.state.shippingQuantity}
                onChange={this.handleInputChange}
            />
            <dropdownCountries
                value={this.state.selectedCountry} 
                onChange={(event)=> this.setState({selectedCountry:event.target.value})}
                {...this.state.countries.map ((country) => <option key={country.value} value={country.value}>{country.display}</option>)}/>
            <shipPrice/>
            <Submit/>
        </div>




    )





}


}

export default shippingPage;