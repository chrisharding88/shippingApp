import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        }


    }

    handleFormChange = () => {
        const { fName, lName, address, city, state, zip } = event.target
        this.setState({
            firstName: fName.value,
            lastName: lName.value,
            address: address.value,
            city: city.value,
            state: state.value,
            zip: zip.value,
        })
    }


    render() {
        return (

            <form>
                <div className="form-row">
                    <div className="col">
                        <label for="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.handleFormChange} placeholder="First Name">
                    </div>
                        <div className="col">
                            <label for="lastName">Last Name</label>
                            <input type="text" class="form-control" id="lastName" value={this.state.lastName} onChange={this.handleFormChange} placeholder="Last Name">
                        </div>
               </div>
                        <div class="form-row">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" value={this.state.address} onChange={this.handleFormChange} placeholder="Address">
                        </div>

                            <div class="form-row">
                                <div className="col">
                                    <label for="City">City</label>
                                    <input type="text" class="form-control" id="city" value={this.state.city} onChange={this.handleFormChange} placeholder="Password">
                                </div>
                                    <div class="col">
                                        <label for="State">State</label>
                                        <input type="text" class="form-control" id="state" value={this.state.state} onChange={this.handleFormChange} placeholder="State">
                                    </div>
                                        <div class="col">
                                            <label for="Zip">Zip</label>
                                            <input type="number" class="form-control" id="zip" value={this.state.zip} onChange={this.handleFormChange} placeholder="Zip">
                                         </div>
                             </div>

                                        <button type="submit" class="btn btn-primary">Submit</button>
           </form>


                    )
                                            
            }             
        }
                            
export default Form