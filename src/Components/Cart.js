import { Div, Button, SideDrawer, Icon, Text, Row, Col, Anchor } from 'atomize';
import React, { useContext, useState } from 'react'
import { ShopperContext } from '../Context/ShopContext';

function Cart() {

    const { isCartOpen, closeCart, checkout, updateItemsToCheckout } = useContext(ShopperContext);

    const [Edit, setEdit] = useState(false)

    const toggle = React.useCallback(
        () => setEdit(!Edit),
        [Edit, setEdit],
    );

    // useEffect(() => {
    //     setEdit(!Edit)
    //     return () => {

    //     }
    // }, [ setEdit])

    return (

        <SideDrawer isOpen={isCartOpen} onClose={closeCart}>
            <Text textAlign="center" textSize="display3">Cart</Text>
            <Div d="flex" flexDir="column" m={{ b: "4rem" }}>
                {checkout.lineItems && checkout.lineItems.map(item => (
                    <Row key={item.id}>
                        <Col size="3">
                            <Div bgImg={item.variant.image.src} bgSize="cover" bgPos="center center" h="5rem" w="4rem"></Div>
                        </Col>
                        <Col>
                            <Text>Title: {item.title}</Text>
                        </Col>
                        <Col size="4">
                            <Text textAlign="center" textSize="subheader">Quantity: <br />
                                {Edit && <span><Icon name="Add" size="25px" m={{ r: "5px" }} onClick={() => updateItemsToCheckout(item.id, item.quantity + 1)} /></span>}
                                {item.quantity}
                                {Edit && <span><Icon name="CBIndetermine" size="25px" m={{ l: "5px" }} onClick={() => updateItemsToCheckout(item.id, item.quantity - 1)} /> </span>}
                            </Text>
                            <Text>Price: ${item.variant.price}</Text>
                        </Col>
                    </Row>
                ))}
            </Div>
            <Div
                d="flex"
                justify="space-between"
            >
                <Anchor
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    href={checkout.webUrl}
                    textColor="gray100"
                    bg="info700"
                    hoverBg="info600"
                    rounded="circle"
                    p={{ r: "1rem", l: "1rem", b: "1rem", t: "1rem" }}
                    shadow="5"
                    hoverShadow="2"
                    transition="0.3s">
                    Checkout
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
                    onClick={toggle}
                >Edit
            </Anchor>
            </Div>

        </SideDrawer >

        // onClick={() => updateItemsToCheckout(checkout.lineItems[0].id, 2)}
    )
}

export default Cart
