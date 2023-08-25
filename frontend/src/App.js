import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./screens/_Dashboard"
import store from "./store"
import { NestedCategoryAction } from "./Actions/actions"
import { connect } from "react-redux";
import HCF from "./screens/_HCF"
import Test from "./screens/_Product"
import Product from "./screens/_Product"




export default class App extends React.Component {


  constructor(props) {
    super(props)

    store.dispatch(NestedCategoryAction())

  }




  render() {
    return (
      <div >

        <Router>






          <Routes>

            <Route element={< HCF />}>

              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/product" element={<Product />} />

            </Route>


          </Routes>





        </Router>


      </div>
    )
  }



}


