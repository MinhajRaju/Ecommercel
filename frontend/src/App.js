import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./screens/_Dashboard"
import store from "./store"
import { NestedCategoryAction } from "./Actions/actions"
import { connect } from "react-redux";


const mapStateToProps = (state) => {

  console.log(state)

  return { FlashSaleData: state.FlashSaleReducer.FlashSaleData, ParentCategory: state.NestedcategoryReducer.NestedCategoryData, loading: state.FlashSaleReducer.loading }



}



class App extends React.Component {


  constructor(props) {
    super(props)

    store.dispatch(NestedCategoryAction())

  }




  render() {
    return (
      <div >

        <Router>


          <Routes>


            <Route exact path="/" element={<Dashboard data={this.props.ParentCategory} />} />


          </Routes>



        </Router>


      </div>
    )
  }



}


export default connect(mapStateToProps)(App)
