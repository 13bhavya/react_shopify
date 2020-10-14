import React, { useContext, useEffect } from 'react'
import { Row, Col, Div, Text, Container, Icon } from 'atomize'
import { Link } from 'react-router-dom'
import { ShopperContext } from '../Context/ShopContext'

function WomensPage() {

    const { fetchCollection, fetchCollectionById, collection, collections } = useContext(ShopperContext)

    useEffect(() => {
        fetchCollection("women")
        // let id = collection
        fetchCollectionById(collection, { productsFirst: 50 })
        return () => {
        }
    }, [])

    if (!collections[0]) return <div style={{ position: "absolute", top: "50%", left: "50%" }}><Icon name="Loading3" size="3rem" /></div>

    return (
        <Container>
            <Row>
                {collections.map(product => (
                    <Col key={product.id} size={{ xs: 8, md: 5, xl: 4 }} style={{ marginLeft: 'auto', marginRight: 'auto' }} >
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Div p="2rem">
                                <Div
                                    h="20rem"
                                    bgImg={product.images[0].src}
                                    bgSize="cover"
                                    bgPos="center center"
                                    shadow="3"
                                    hoverShadow="4"
                                    transition="0.3s"
                                    m={{ b: "1.5rem" }}
                                >
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

export default WomensPage
