import React, { Component } from 'react';


export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phone: '',
            gender: '',
            dob: '',
            city: '',
            about: '',
            firstnameError: '',
            lastnameError: '',
            emailError: '',
            passwordError: '',
            phoneError: '',
            genderError: '',
            dobError: '',
            cityError: '',
            aboutError: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validateForm();

        if (isValid) {
            const formData = {
                firstrname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                gender: this.state.gender,
                dob: this.state.dob,
                city: this.state.city,
                about: this.state.about
            };
            console.log(formData);


            this.resetState();
        }
    }

    validateForm = () => {
        let firstnameError = '';
        let lastnameError = '';
        let emailError = '';
        let passwordError = '';
        let phoneError = '';
        let genderError = '';
        let dobError = '';
        let cityError = '';
        let aboutError = '';


        if (!this.state.firstname.match(/[A-Za-z]{5,10}/)) {
            firstnameError = 'firstname is not valid';
        }

        if (!this.state.lastname.match(/[A-Za-z]{5,10}/)) {
            lastnameError = 'lastname is not valid';
        }


        if (!this.state.email.match(/^[a-zA-Z0-9]{3,20}@+[a-z]+[.][a-z]{2,6}$/)) {
            emailError = 'email is not valid';
        }

        if (!this.state.password.match(/[a-zA-Z0-9]{6,8}/)) {
            passwordError = 'password  is not valid';
        }

        if (!this.state.phone.match(/[0-9]{10}/)) {
            phoneError = ' phone number is not valid';
        }

        if (!this.state.gender) {
            genderError = 'Select your gender ';
        }

        if (!this.state.dob.match(/[dd-mm-yyyy]/)) {
            dobError = '1 your date of birth is not valid';
        }

        if (!this.state.city) {
            cityError = 'Select your city';
        }

        if (!this.state.about) {
            aboutError = 'Enter some description about you.';
        }

        if (firstnameError || lastnameError || emailError || passwordError || phoneError || genderError || dobError || cityError || aboutError) {
            this.setState({
                firstnameError, lastnameError, emailError, passwordError, phoneError, genderError, dobError, cityError, aboutError
            });
            return false;
        }
        return true;
    }

    resetState = () => {
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phone: '',
            gender: '',
            dob: '',
            city: '',
            about: '',

        });
    }


    render() {
        return (
            <div className="container">
                <div className="row justify-content-between pt-5">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 m-auto">
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="card shadow">
                                <div className="card-header pt-3">
                                    <h5 className="card-title">React form and validation</h5>
                                </div>

                                <div className="card-body px-4 py-4">
                                    <div className="form-group py-2">
                                        First Name:
                                        <input type="text" onChange={this.handleChange} name="firstname"
                                         placeholder="Fiest Name" className={"form-control " + (this.state.firstnameError ? "is-invalid" : "")}
                                         value={this.state.firstname} />
                                        <span className="text-danger">{this.state.firstnameError ? this.state.firstnameError : ''}</span>
                                    </div>
                                    <div className="form-group py-2">
                                        Last Name:
                                        <input type="text" onChange={this.handleChange} name="lastname" placeholder="Last Name"   className={"form-control " + (this.state.lastnameError ? "is-invalid" : "")} value={this.state.lastname} />
                                        <span className="text-danger">{this.state.lastnameError ? this.state.lastnameError : ''}</span>
                                    </div>

                                    <div className="form-group py-2">
                                        Email:
                                        <input type="email" onChange={this.handleChange} name="email"
                                        placeholder="Email"  className={"form-control " + (this.state.emailError ? "is-invalid" : "")} value={this.state.email} />
                                        <span className="text-danger">{this.state.emailError ? this.state.emailError : ''}</span>
                                    </div>

                                    <div className="form-group py-2">
                                        Password:
                                        <input type="password" onChange={this.handleChange} name="password" placeholder="Password"  className={"form-control " + (this.state.passwordError ? "is-invalid" : "")} value={this.state.password} />
                                        <span className="text-danger">{this.state.passwordError ? this.state.passwordError : ''}</span>
                                    </div>

                                    <div className="form-group py-2">
                                        Phone:
                                        <input type="text" onChange={this.handleChange} maxLength="10" name="phone" placeholder="Phone number"   className={"form-control " + (this.state.phoneError ? "is-invalid" : "")} value={this.state.phone} />
                                        <span className="text-danger">{this.state.phoneError ? this.state.phoneError : ''}</span>
                                    </div>

                                    <div className="row py-2">
                                        Gender:
                                        <div className={"form-group " + (this.state.genderError ? "is-invalid" : "")} >
                                            <div className="col-xl-8" name="gender" onChange={this.handleChange} checked={this.state.gender}>

                                                <input type="radio" value="Male" name="gender" className="mx-2" /> Male
                                                <input type="radio" value="Female" name="gender" className="mx-2" /> Female
                                                <input type="radio" value="Other" name="gender" className="mx-2" /> Other
                                            </div>
                                        </div>
                                        <span className="text-danger">{this.state.genderError ? this.state.genderError : ''}</span>
                                    </div>

                                    <div className="form-group py-2">
                                        DOB:
                                        <input type="date" name="dob" onChange={this.handleChange} className={"form-control " + (this.state.dobError ? "is-invalid" : "")} value={this.state.dob} />
                                        <span className="text-danger">{this.state.dobError ? this.state.dobError : ''}</span>
                                    </div>

                                    <div className="form-group py-2">

                                        City:<select value={this.state.city} onChange={this.handleChange} name="city" className={"form-control " + (this.state.cityError ? "is-invalid" : "")}>
                                            <option disabled value="">City</option>
                                            <option value="ranchi">Ranchi</option>
                                            <option value="new delhi">New Delhi</option>
                                            <option value="gurgaon">HN</option>
                                            <option value="hyderabad">Hyderabad</option>
                                        </select>
                                        <span className="text-danger">{this.state.cityError ? this.state.cityError : ''}</span>
                                    </div>

                                    <div className="form-group py-2">
                                        <textarea placeholder="About You" onChange={this.handleChange} name="about" className={"form-control " + (this.state.aboutError ? "is-invalid" : "")} value={this.state.about}></textarea>
                                        <span className="text-danger">{this.state.aboutError ? this.state.aboutError : ''}</span>
                                    </div>
                                </div>

                                <div className="card-footer px-4">
                                    <button type="submit" className="btn btn-success">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
