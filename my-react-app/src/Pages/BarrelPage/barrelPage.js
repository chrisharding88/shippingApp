import React, {Component} from 'react';
import numberInput2 from '../../Components/PurchaseBarrel'
import dropdownBarrels from '../../Components/PurchaseBarrel'
import barrelPrice from '../../Components/PurchaseBarrel'
import Submit from '../../Components/ShippingBarrel/shippingBarrel'


class barrelPage extends Component{

state = {
    barrelQuantity: "",
    barrelTypes: [],
    selectedBarrel: ""
}

componentDidMount(){
    fetch()
    .then((Response) => {
        Response.barrelPrices.json()
    })
    .then(data => {
        let barrelsfromAPI = data.map(barrelType => {
            return {value: barrelType, display: barrelType}
        });
        this.setState({
            barrelTypes:[{value: '', display: '(Select a Barrel)'}]
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

render(){
    return(
        <div>
            <numberInput2
                value={this.state.barrelQuantity}
                onChange={this.handleInputChange}
            />
            <dropdownBarrels
            value={this.state.selectedBarrel} 
            onChange={(event)=> this.setState({selectedBarrel:event.target.value})}
            {...this.state.barrelTypes.map ((barrelType) => <option key={barrelType.value} value={barrelType.value}>{barrelType.display}</option>)}
            />
            <barrelPrice/>
            <Submit/>
        </div>
    )



}




}

export default barrelPage;