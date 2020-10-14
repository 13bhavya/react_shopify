import React, { Component } from 'react'
import { Input, Icon, Text, Col, Row, Anchor, Div, Button, Image } from "atomize";
import shopping from "../../Assets/shopping.gif"

const validEmailRegex =
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Profile extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showPass: false,
      password: '',
      first: '',
      last: '',
      userName: '',
      email: '',
      password: '',
      errors: {
        first: '',
        last: '',
        userName: '',
        email: '',
        password: '',
      }
    }
  }

  showPassword = () => {
    this.setState({
      showPass: !this.state.showPass
    })
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'first':
        errors.first =
          value.length < 5
            ? 'Full Name must be characters!'
            : '';
        break;
      case 'last':
        errors.last =
          value.length < 5
            ? 'Full Name must!'
            : '';
        break;
      case 'userName':
        errors.userName =
          value.length < 5
            ? 'Full Name must 5!'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({
      errors, [name]: value
    }, () => {
      console.log(errors)
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <Div>
        <Div
          pos="absolute"
          top="20%"
          left="10%"
          transform={{ xs: 'translate(-5%)', md: 'translate(-10%, -10%)' }}
        >
          <Image
            src={shopping} w="40vw" minW={{ xs: '30rem', md: '40rem' }} maxW="50rem"
            size="cover"
          />
        </Div>
        <form onSubmit={this.handleSubmit} >
          <Div
            pos="absolute"
            top="50%"
            left="60%"
            transform={{ xs: 'translate(-70%, -70%)', md: 'translate(-50%, -55%)' }}
          ><Text
            textSize="display1"
            textAlign="center"
            m={{ b: "1rem" }}
          >
              Login
        </Text>

            <Input
              placeholder="First Name"
              name="first"
              w="20rem"
              p={{ x: "2.5rem" }}
              prefix={
                <Icon
                  name="User"
                  color="warning800"
                  size="16px"
                  pos="absolute"
                  top="50%"
                  left="0.75rem"
                  transform="translateY(-50%)"
                />
              }
              value={this.state.first}
              onChange={this.handleChange}
            />
            {errors.first.length > 0 &&
              <span className='error'>{errors.first}</span>}
            <Input
              placeholder="Last Name"
              name="last"
              w="20rem"
              m={{ t: "1rem" }}
              p={{ x: "2.5rem" }}
              prefix={
                <Icon
                  name="User"
                  color="warning800"
                  size="16px"
                  pos="absolute"
                  top="50%"
                  left="0.75rem"
                  transform="translateY(-50%)"
                />
              }
              value={this.state.last}
              onChange={this.handleChange}
            />
            {errors.last.length > 0 &&
              <span className='error'>{errors.last}</span>}
            <Input
              placeholder="User Name"
              name="userName"
              w="20rem"
              m={{ t: "1rem" }}
              p={{ x: "2.5rem" }}
              prefix={
                <Icon
                  name="UserSolid"
                  color="warning800"
                  size="16px"
                  pos="absolute"
                  top="50%"
                  left="0.75rem"
                  transform="translateY(-50%)"
                />
              }
              value={this.state.userName}
              onChange={this.handleChange}
            />
            {errors.userName.length > 0 &&
              <span className='error'>{errors.userName}</span>}
            <Input
              placeholder="Email"
              name="email"
              w="20rem"
              m={{ t: "1rem" }}
              p={{ x: "2.5rem" }}
              prefix={
                <Icon
                  name="Email"
                  color="warning800"
                  size="16px"
                  pos="absolute"
                  top="50%"
                  left="0.75rem"
                  transform="translateY(-50%)"

                />
              }
              value={this.state.email}
              onChange={this.handleChange}
            />
            {errors.email.name > 0 &&
              <span className='error'>{errors.email}</span>}
            <Input
              placeholder="Password"
              name="password"
              w="20rem"
              m={{ t: "1rem" }}
              type={this.state.showPass ? "text" : "password"}
              suffix={
                <Button
                  pos="absolute"
                  onClick={this.showPassword}
                  // onClick={() => this.setState({ password: !this.state.password })}
                  bg="transparent"
                  w="3rem"
                  top="0"
                  right="0"
                  rounded={{ r: "md" }}
                >
                  <Icon
                    name={this.state.showPass ? "EyeSolid" : "Eye"}
                    color={this.state.showPass ? "danger800" : "success800"}
                    size="16px"
                  />
                </Button>
              }
              value={this.state.password}
              onChange={this.handleChange}
            />
            {errors.password.length > 0 &&
              <span className='error'>{errors.password}</span>}
            <Div
              d="flex"
              justify="space-between"
            >
              <Button
                style={{ outline: "none" }}
                textColor="gray100"
                bg="info700"
                hoverTextColor="gray100"
                hoverBg="info600"
                rounded="circle"
                p={{ r: "1rem", l: "1rem", b: "1rem", t: "1rem" }}
                shadow="5"
                hoverShadow="2"
                transition="0.3s">
                Register
            </Button>
              <Button
                type="submit"
                style={{ outline: "none" }}
                textColor="gray100"
                bg="info700"
                hoverTextColor="gray100"
                hoverBg="info600"
                rounded="circle"
                m={{ r: "0" }}
                p={{ r: "1rem", l: "1rem", b: "1rem", t: "1rem" }}
                shadow="5"
                hoverShadow="2"
                transition="0.3s"
              >Login
            </Button>
            </Div>
          </Div>
        </form>
      </Div >
    )
  }
}

export default Profile
