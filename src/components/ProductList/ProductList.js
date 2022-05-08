import React from 'react'
import "./ProductList.css"
import { products } from '../../Data'
import Product from '../Product/Product'

export default function ProductList() {
    return (
        <div className="pl">
          <div className="pl-texts">
            <h1 className="pl-title">Create & inspire. It's my Design</h1>
            <p className="pl-desc">
              My Design is a creative portfolio that your work has been waiting for.
              Beautiful homes, stunning portfolio styles & a whole lot more awaits
              inside.
            </p>
          </div>
          <div className="pl-list">
            {products.map((item) => (
              <Product key={item.id} img={item.img} link={item.link} />
            ))}
          </div>
        </div>
      );
}
