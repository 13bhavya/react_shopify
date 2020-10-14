import React, { useContext, useEffect } from 'react';
import SmoothImage from 'react-smooth-image'
import { Text, Div, Row, Col, Container, Icon } from "atomize";
import { Link } from 'react-router-dom'
import { ShopperContext } from '../Context/ShopContext';


const HomePage = () => {
    const { fetchAllProducts, products } = useContext(ShopperContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {
            // cleanup
        };
    }, [fetchAllProducts])

    if (!products[0]) return <div style={{ position: "absolute", top: "50%", left: "50%" }}><Icon name="Loading3" size="3rem" /></div>

    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col key={product.id} size={{ xs: 8, md: 5, xl: 4 }} style={{ marginLeft: 'auto', marginRight: 'auto' }} >
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Div p="2rem">
                                <Div
                                    h="20rem"
                                    bgSize="cover"
                                    bgPos="center center"
                                    shadow="3"
                                    hoverShadow="4"
                                    transition="0.3s"
                                    m={{ b: "1.5rem" }}
                                >
                                    <SmoothImage
                                        src={!products[0] ? '../ajax-loader.gif' : product.images[0].src}
                                        alt="..."
                                    >
                                    </SmoothImage>
                                </Div>
                                <Text tag="h1" textWeight="300" textSize="subheader" textDecor="none" textColor="black500">{product.title}</Text>
                                <Text tag="h2" textWeight="300" textSize="body" textDecor="none" textColor="gray500">${product.variants[0].price}</Text>
                            </Div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default HomePage