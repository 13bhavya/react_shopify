import { Anchor, Div } from 'atomize'
import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <Div
                d="flex"
                justify="space-between"
            >
                <Anchor
                    style={{ textDecoration: "none" }}
                    target="_blank"
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
            </Anchor>
                <Anchor
                    style={{ textDecoration: "none" }}
                    target="_blank"
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
            </Anchor>
            </Div>
        )
    }
}

export default Login
