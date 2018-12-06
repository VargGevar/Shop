import Link from 'next/link'
import Layout from '../components/Layout';
import { IItem } from "../assets/models/item";

export default () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className='fluid'>
      <div className='filter'>
        <div className='filter_items container'>
          <div className="filter_category">
            <label>
              <input type='checkbox' /> men
          </label>
            <label>
              <input type='checkbox' /> women
          </label>
            <label>
              <input type='checkbox' /> children
          </label>
          </div>
          <button>see all products</button>
        </div>
      </div>
      <section className='products'>
        <div className='products_items container'>
          <div className='products_header'>
            <span className='products_category'>Men</span>
            <div className="products_header_line"></div>
          </div>
          <div className="wrapper">
            <div className='products_card'>
              <div className='products_card_header'>
                <div className="product_size">size</div>
                <div className="product_color_controller">
                  <div className="color_controller"></div>
                  <div className="color_controller"></div>
                  <div className="color_controller"></div>
                </div>
              </div>
              <div className='product_image'>
                <img src="../static/img/t-shirt-men.png" alt="t-shirt-men" />
              </div>
              <div className='products_card_footer'>
                <span className='product_name'>t-shirt</span>
                <span className='product_price'>5,00&#8364;</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      <style>{`
        .fluid {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
        }
        .container {
          max-width: 1090px;
          width: 100%;
          margin: 0 auto;
        }
        .filter {
          background-color: #f5f6f7;
          padding: 45px 0 45px 0;
        }
        .filter_items {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-transform: uppercase;
        }
        .filter_category label {
          margin-right: 40px;
        }
        .filter button {
          width: 205px;
          height: 50px;
          color: #ffffff;
          background-color: #aa9b77;
          border-radius: 3px;
          border: 0;
        }
        .products {
          padding-top: 90px;
          padding-bottom: 90px;
        }
        .products_items {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .products_header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 100px;
          text-transform: uppercase;
        }
        .products_header_line {
          max-width: 995px;
          width: 100%;
          border-bottom: 2px solid #cccccc; 
        }
        .products_card {
          max-width: 320px;
          max-height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: stretch;
          background-color: #f5f6f7;
          text-transform: uppercase;
          border: 6px solid #ffffff;
        }
        .products_card:hover {
          border: 6px solid #aa9b77;
        }
        .products_card_header,
        .products_card_footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px;
        }
        .product_image {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 30px 0 30px 0;
        }
        .product_name {
          color: #aa9b77;
        }
        .product_color_controller {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .color_controller {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-right: 5px;
          background: #000;
        }
        .color_controller:last-child {
          margin-right: 0;
        }
      `}</style>
    </div>


  </Layout>
)
