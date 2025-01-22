import React,{useState} from 'react'
import axios from 'axios'
import styles from './project_1.module.css'

const Project_1 = () => {
    let [productCode,setProductCode]=useState("")
    let [productData,setProductData]=useState([])
    let handleChange=(a)=>{
        setProductCode(a.target.value)
    }
    let getProductData=()=>{
        if(productCode)
        {
            axios.get(`https://world.openfoodfacts.org/api/v2/product/${productCode}.json`).then((res)=>{
                console.log(res.data.product);
                if(res.data&&res.data.product)
                {
                    setProductData([res.data.product]) 
                }
                else
                {
                    setProductData([])
                    console.log("Data Not Found");
                }
            }).catch(()=>{
                console.log("Product Not Found");
            })
        }
    }
  return (
    <React.Fragment>
        <marquee behavior="slide" direction="up" scrollamount='20' className={styles.marquee}>
            <h1 className={styles.heading}>Product Barcode Code Vaildator</h1>
        </marquee>
        <hr />
        <div className={styles.div1}>
            <label htmlFor="input"><b>Enter the product barcode here:   </b></label>
            <input type="text" name='productCode' value={productCode} onChange={handleChange}/>
            <button onClick={getProductData}>Check</button>
        </div>
        <div className={styles.div2}>
            {productData.map((item)=>{
                return(
                    <div key={item._id}>
                        <ul type='none'>
                            <li>
                                <h3 className={styles.details}>
                                    Name of the Product: {item.product_name}
                                </h3>
                                <h3 className={styles.details}>
                                    Country Of Origin: {item.countries_tags}
                                </h3>
                                <h3 className={styles.details}>
                                    Categories: {item.categories}
                                </h3>
                                <h3 className={styles.details}>
                                    Creator: {item.creator}
                                </h3>
                                <h3 className={styles.details}>Product Image:</h3> 
                                <img src={item.image_url} alt="" />
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    </React.Fragment>
  )
}

export default Project_1