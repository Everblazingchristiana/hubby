import React from 'react'
import Card from '../components/Card'

const ProductPage = () => {
    const img1 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/94/5031362/1.jpg?0002"
    const img2 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/72/7728042/1.jpg?8912"
    const img3 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/58/2057431/1.jpg?7161"
    const img4 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/61/7795882/1.jpg?0732"
    const img5 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/23/3086932/1.jpg?1415"
    const img6 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/27/6931721/1.jpg?8750"
    const img7 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/31/2713401/1.jpg?9535"
    const img8 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/1671192/1.jpg?8386"
    const img9 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/11/5375752/1.jpg?0211"
    const img10 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/27/4501292/1.jpg?0956"
  return (
    <>
    <p>This is the ProductPage</p>
    <Card />
    <div className='d-flex flex-wrap gap-4'>
        <Card image={img1} title="itel 32 Inches LED TV" price={600} desc="(A3250) + 1 year Warranty"/>
        <Card image={img2} title="Adjustable Laptop Stand"price={150} desc=""/>
        <Card image={img3} title="Portable Laptop Stand"price={300}/>
        <Card image={img4} title="Men's Fashion Sneakers"price={50}/>
        <Card image={img5} title="Dual USB Solar Panel Controller Charge Regulator"price={120}/>
        <Card image={img6} title="Power Charging Bank"price={40}/>
        <Card image={img7} title="NIVEA Deep Impact Body Lotion"price={50}/>
        <Card image={img8} title="Solar Generator Power Station"price={120}/>
        <Card image={img9} title="Men's Anti-Slip Sandals"price={70}/>
        <Card image={img10} title="CLASSIC MAKEUP"price={50}/>
    </div>
    
    </>
  )
}

export default ProductPage