import React from "react";



export default class ProductCard extends React.Component {

    render() {
        console.log("asdfasd", this.props.data)

        return (
            <>
                {this.props.data == undefined ? null : this.props.data.map((data) => {

                    return (
                        <div class="item">

                            <div class="card card-product mb-lg-4">
                                <div class="card-body">

                                    <div class="text-center position-relative ">
                                        <div class=" position-absolute top-0 start-0">
                                            <span class="badge bg-danger">{this.props.tag}</span>
                                        </div>

                                        <a href="#!"> <img src="../assets/images/products/product-img-15.jpg"
                                            alt="Grocery Ecommerce Template" class="mb-3 img-fluid" /></a>


                                    </div>

                                    <div class="text-small mb-1"><a href="#!"
                                        class="text-decoration-none text-muted"><small>Fruits &
                                            Vegetables</small></a>
                                    </div>
                                    <h2 class="fs-6"><a href="#!" class="text-inherit text-decoration-none">Fresh Apple</a>
                                    </h2>
                                    <div>

                                        <small class="text-warning"> <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi,  ,-star-half"></i></small> <span
                                                class="text-muted small">4.5(149)</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center mt-3">
                                        <div><span class="text-dark">$18</span> <span
                                            class="text-decoration-line-through text-muted">$24</span>
                                        </div>

                                        <div>
                                            <a href="#!" class="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
                                                Add
                                            </a>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    )
                })}



            </>
        )

    }


}