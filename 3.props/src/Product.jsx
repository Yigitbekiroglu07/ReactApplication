import React from 'react'

function Product(props) {
    return (
        <>
            <div>ÜRÜN BİLGİLERİ</div>
            <div>
                <div>
                    İsim: {props.productName}
                </div>
                <div>
                    Fiyat: {props.price}
                </div>

            </div>
        </>
    )
}

export default Product