import React, { useContext, useEffect, useState } from 'react'
import SmoothImage from 'react-smooth-image'
import { Row, Col, Div, Text, Container, Icon, Dropdown, Anchor } from 'atomize'
import { Link } from 'react-router-dom'
import { ShopperContext } from '../Context/ShopContext'
import FilterProdcut from '../Components/FilterProdcut'

function MenPage(props) {

    const [open, setOpen] = useState(false)
    const [isloading, setLoading] = useState(false)
    const { fetchCollection, fetchCollectionById, collection, collections, loading } = useContext(ShopperContext)

    const menuList = (
        <Div w="4rem">
            {["red", "blue", "green"].map((name, index) => (
                <Anchor key={index} d="block" p={{ y: "0.25rem" }} onClick={() => (collection)}>
                    {name}
                </Anchor>
            ))}
        </Div >
    )

    // fetchCollectionById(collection, { productsFirst: 50 })
    useEffect(() => {
        fetchCollection(props.passed)
        return () => {

        }
    }, [fetchCollection, props.passed, props.load, isloading])

    useEffect(() => {
        setLoading(props.load)
        let newTime = setTimeout(() => {
            fetchCollectionById(collection, { productsFirst: 50 })
            setLoading(false)
        }, 3000)
        setLoading(props.load)
        return () => {
            clearTimeout(newTime);
        }
    }, [collection, fetchCollectionById, isloading, props.load])


    if (isloading) return <div style={{ position: "absolute", top: "50%", left: "50%" }}><Icon name="Loading3" size="3rem" /></div>

    return (
        <Container>
            <Dropdown
                isOpen={open}
                onClick={() => setOpen(!open)}
                menu={menuList}>
                Colors
            </Dropdown>
            <Row>
                {collections.map(product => (
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
                                        src={isloading ? '../loadin_speed.jpg' : product.images[0].src}
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
        </Container >
    )
}

export default MenPage
