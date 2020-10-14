import React, { useContext, useEffect, useState } from 'react'
import { Text, Image, Row, Col, Container, Icon, Div, Button } from 'atomize';
import { useParams } from 'react-router-dom'
import { ShopperContext } from '../Context/ShopContext';

function ProductPage() {

    let { id } = useParams();
    const { fetchProductWithId, addItemToCheckout, product, productImage } = useContext(ShopperContext);
    const [fetchImage, setfetchImage] = useState('');

    useEffect(() => {
        fetchProductWithId(id)
        setfetchImage(productImage)
        console.log("In use effect: ", fetchImage)
        return () => {
        }
    }, [setfetchImage])

    function getImage(image) {
        setfetchImage(image);
        console.log("Image: : ", image)
    }

    if (!product.images) return <div style={{ position: "absolute", top: "50%", left: "50%" }}><Icon name="Loading3" size="3rem" /></div>
    return (
        <div>
            <Container>
                <Row>
                    <Col size={8}>
                        <Div
                            d="inline-grid"
                            bgSize="cover"
                            bgPos="center center"
                            shadow="3"
                            m={{ b: "1.5rem" }}>
                            <Image
                                minW="20rem"
                                minH="auto"
                                h="auto"
                                w="40vw"
                                maxW="30rem"
                                maxH="40rem"
                                src={fetchImage} >
                            </Image>
                        </Div>
                    </Col>
                    <Col size={4}>
                        <Text textSize="heading">{product.title}</Text>
                        <Text textSize="heading" m={{ b: "1.5rem" }}>${product.variants[0].price}</Text>
                        <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>
                    </Col>
                    <Col size={8}>
                        {product.images.map(i => (
                            <Div key={i.src}
                                d="inline-grid"
                                h="120px"
                                w="120px"
                                bgSize="cover"
                                bgPos="center center"
                                shadow="3"
                                hoverShadow="4"
                                transition="0.3s"
                                m={{ r: 0, b: "1.5rem" }}>
                                <Image
                                    h="120px"
                                    w="120px"
                                    src={i.src}
                                    onClick={() => getImage(i.src)}>
                                </Image>
                            </Div>
                        ))
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductPage
