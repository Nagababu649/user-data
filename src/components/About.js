import React from "react";
// import Home from './Home';
import { Component } from "react/cjs/react.production.min";

const userdata = {
    name: "NAGABABU",
    address: "KAKINADA,AP-533002",
    dob: "05/05/2022"
}

class About extends Component {

    // UserGetData = () => {

    // }
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            dob: '',
            isSubmit:false
        }
        this.handleChangeNames = this.handleChangeNames.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);



    }
    handleChangeNames = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(' e.target.name - e.target.value : ',  e.target.name +" = "+ e.target.value )
    }
    handleSubmit = (e) => {
        // this.setState({ [e.target.name]: e.target.value });
        // console.log(' e.target.name - e.target.value : ',  e.target.name +" = "+ e.target.value )
        this.setState({isSubmit:true})

        //console.log(' e.target.name - e.target.value : ',  e.target.name +" = "+ e.target.value )


    }

    render() {
        return <div>
    <div className="form-group2">
                            <h3>About page</h3>
                        </div>

            <div style={{ display: 'flex', width: '100%', marginLeft: '5%', marginRight: '5%', marginBottom: '5%' }}>

                <div style={{ width: '30%', border: '2px solid #e6dede', paddingLeft: '15px', marginRight: '2%', marginBottom: '2%', paddingBottom: '2%' }}>
 

               
                    <form >
                       

                        <div className="form-group">
                            <label type="name"> <b>Name : </b></label>
                            <div >
                                {/* <input type="text" name="name" required value={userdata.name} /> */}
                                <span >{this.state.isSubmit ? this.state.name : ""}</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <label type="address"><b>Address : </b></label>
                            <div >
                                {/* <textarea type="text" name="address" required value={userdata.address} /> */}
                                <span>{this.state.isSubmit ? this.state.address : ""}</span>

                            </div>
                        </div>

                        <div className="form-group">

                            <label type="dob"> <b>Date of Birth : </b></label>

                            <div>
                                {/* <input type="text" name="dob" required value={userdata.dob} /> */}
                                <span>{this.state.isSubmit ? this.state.dob : ""}</span>

                            </div>
                        </div>



                    </form>
                </div>


                <div style={{ width: '30%', border: '2px solid #e6dede', paddingLeft: '15px', marginRight: '2%', marginBottom: '2%', paddingBottom: '2%' }}>
                    {/* <div>
                        <h3>About page</h3>
                    </div> */}


                    <div className="form-group">
                        <label type="name"> <b>Name : </b></label>
                        <div >
                            <input type="text" name="name" onChange={this.handleChangeNames} value={this.state.name}  required />
                        </div>
                    </div>


                    <div className="form-group">
                        <label type="name"><b>Address : </b></label>
                        <div >
                            <textarea type="text" name="address" onChange={this.handleChangeNames}  value={this.state.address} required />
                        </div>
                    </div>

                    <div className="form-group">

                        <label type="name"> <b>Date of Birth : </b></label>

                        <div>
                            <input type="text" name="dob" onChange={this.handleChangeNames}  value={this.state.dob}  required />
                            <input type="submit" onClick={this.handleSubmit}/>
                        </div>

                    </div>

                </div>


            </div>



        </div>
    }
}
export default About;

