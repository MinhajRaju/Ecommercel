import React from 'react'
import $ from 'jquery'
import ReactImageMagnify from 'react-image-magnify';
import { connect } from "react-redux";
import store from '../store';
import { SingleProductAction } from '../Actions/actions';
import Carousel from 'react-grid-carousel'


const mapStateToProps = (state) => {

    return { SingleProductData: state.SingleProductReducer.SingleProductData }

}

export default connect(mapStateToProps)(class Product extends React.Component {

    constructor(props) {
        super(props)

        store.dispatch(SingleProductAction(32))
        this.state = {
            imagePath: null,
            thumbnail: null
        }
    }


    componentDidMount() {
        setTimeout(this.test2, 3000)

    }
    test = (e) => {

        console.log("fire", e.target.getAttribute('src'), e)
        this.setState({ imagePath: e.target.getAttribute('src') })
    }

    test2 = () => {

        if (this.props.SingleProductData) {
            this.setState({ imagePath: `../assets/static${this.props.SingleProductData.image[0].photo}` })

        }

        let x = []

        this.props.SingleProductData.image.map((data) => {
            x.push(data)
        })
        this.props.SingleProductData.variation.map((data) => {
            data.variation_image.map((data) => {
                x.push(data)
            })
        })


        this.setState({ thumbnail: x })






    }


    render() {

        console.log(this.props.SingleProductData, this.state.thumbnail)



        return (


            <>
                <div class="mt-4">
                    <div class="container">

                        <div class="row ">

                            <div class="col-12">

                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb mb-0">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a href="#">Bakery Biscuits</a></li>

                                        <li class="breadcrumb-item active" aria-current="page">Napolitanke Ljesnjak</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="mt-8">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="slider slider-for">
                                    <div class="test">

                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'Wristwatch by Ted Baker London',
                                                isFluidWidth: true,
                                                src: this.state.imagePath,
                                                imageClassName: 'test'
                                            },
                                            largeImage: {
                                                src: this.state.imagePath,
                                                width: 1200,
                                                className: 'test',

                                                height: 1800
                                            },
                                            enlargedImageContainerDimensions: {
                                                width: '100%',
                                                height: '100%'
                                            },
                                            shouldUsePositiveSpaceLens: true
                                        }} />

                                    </div>



                                </div>
                                <div >

                                    <Carousel cols={6} rows={1} gap={10} hideArrow={this.state.thumbnail == null ? true : this.state.thumbnail.length < 6 ? true : false} loop>

                                        {this.state.thumbnail == null ? null : this.state.thumbnail.map((data) => {
                                            return (
                                                <Carousel.Item>
                                                    <img onMouseOver={this.test} width="100%" src={`../assets/static${data.photo}`} />
                                                </Carousel.Item>
                                            )

                                        })}


                                    </Carousel>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="ps-lg-10 mt-6 mt-md-0">


                                    <h1 class="mb-1">Napolitanke Ljesnjak </h1>
                                    <div class="mb-4">
                                        <small class="text-warning"> <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i></small><a href="#" class="ms-2">(30 reviews)</a></div>
                                    <div class="fs-4">
                                        <span class="fw-bold text-dark">$32</span> <span
                                            class="text-decoration-line-through text-muted">$35</span><span><small class="fs-6 ms-2 text-danger">26%
                                                Off</small></span>
                                    </div>

                                    <hr class="my-6" />
                                    <div class="mb-5">
                                        <button type="button" class="btn btn-outline-secondary">250g</button>

                                    </div>
                                    <div>



                                        <div class="input-group input-spinner  ">
                                            <input type="button" value="-" class="button-minus  btn  btn-sm " data-field="quantity" />
                                            <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field form-control-sm form-input   " />
                                            <input type="button" value="+" class="button-plus btn btn-sm " data-field="quantity" />
                                        </div>

                                    </div>
                                    <div class="mt-3 row justify-content-start g-2 align-items-center">

                                        <div class="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">

                                            <button type="button" class="btn btn-primary"><i class="feather-icon icon-shopping-bag me-2"></i>Add to
                                                cart</button>
                                        </div>

                                    </div>

                                    <hr class="my-6" />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mt-lg-14 mt-8 ">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <ul class="nav nav-pills nav-lb-tab" id="myTab" role="tablist">

                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="product-tab" data-bs-toggle="tab"
                                            data-bs-target="#product-tab-pane" type="button" role="tab" aria-controls="product-tab-pane"
                                            aria-selected="true">Product Details</button>
                                    </li>

                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="reviews-tab" data-bs-toggle="tab"
                                            data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane"
                                            aria-selected="false">Reviews</button>
                                    </li>

                                </ul>

                                <div class="tab-content" id="myTabContent">

                                    <div class="tab-pane fade show active" id="product-tab-pane" role="tabpanel" aria-labelledby="product-tab"
                                        tabindex="0">
                                        <div class="my-8">
                                            <div class="mb-5">

                                                <h4 class="mb-1">Nutrient Value & Benefits</h4>
                                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna
                                                    bibendum
                                                    in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius
                                                    habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing
                                                    sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                            <div class="mb-5">
                                                <h5 class="mb-1">Storage Tips</h5>
                                                <p class="mb-0">Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed
                                                    magnis eu
                                                    nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum
                                                    netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </p>
                                            </div>

                                            <div class="mb-5">
                                                <h5 class="mb-1">Unit</h5>
                                                <p class="mb-0">3 units</p>
                                            </div>
                                            <div class="mb-5">
                                                <h5 class="mb-1">Seller</h5>
                                                <p class="mb-0">DMart Pvt. LTD</p>
                                            </div>
                                            <div>
                                                <h5 class="mb-1">Disclaimer</h5>
                                                <p class="mb-0">Image shown is a representation and may slightly vary from the actual product. Every
                                                    effort
                                                    is made to maintain accuracy of all information displayed.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabindex="0">
                                        <div class="my-8">

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="me-lg-12 mb-6 mb-md-0">
                                                        <div class="mb-5">

                                                            <h4 class="mb-3">Customer reviews</h4>
                                                            <span>
                                                                <small class="text-warning"> <i class="bi bi-star-fill"></i>
                                                                    <i class="bi bi-star-fill"></i>
                                                                    <i class="bi bi-star-fill"></i>
                                                                    <i class="bi bi-star-fill"></i>
                                                                    <i class="bi bi-star-half"></i></small><span class="ms-3">4.1 out of 5</span><small
                                                                        class="ms-3">11,130 global ratings</small></span>
                                                        </div>
                                                        <div class="mb-8">

                                                            <div class="d-flex align-items-center mb-2">
                                                                <div class="text-nowrap me-3 text-muted"><span
                                                                    class="d-inline-block align-middle text-muted">5</span><i
                                                                        class="bi bi-star-fill ms-1 small text-warning"></i></div>
                                                                <div class="w-100">
                                                                    <div class="progress" style={{ height: "6px" }}>
                                                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "60%" }}
                                                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div><span class="text-muted ms-3">53%</span>
                                                            </div>

                                                            <div class="d-flex align-items-center mb-2">
                                                                <div class="text-nowrap me-3 text-muted"><span
                                                                    class="d-inline-block align-middle text-muted">4</span><i
                                                                        class="bi bi-star-fill ms-1 small text-warning"></i></div>
                                                                <div class="w-100">
                                                                    <div class="progress" style={{ height: "6px" }}>
                                                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "50%" }}
                                                                            aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div>
                                                                    </div>
                                                                </div><span class="text-muted ms-3">22%</span>
                                                            </div>

                                                            <div class="d-flex align-items-center mb-2">
                                                                <div class="text-nowrap me-3 text-muted"><span
                                                                    class="d-inline-block align-middle text-muted">3</span><i
                                                                        class="bi bi-star-fill ms-1 small text-warning"></i></div>
                                                                <div class="w-100">
                                                                    <div class="progress" style={{ height: "6px" }}>
                                                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "35%" }}
                                                                            aria-valuenow="35" aria-valuemin="0" aria-valuemax="35"></div>
                                                                    </div>
                                                                </div><span class="text-muted ms-3">14%</span>
                                                            </div>

                                                            <div class="d-flex align-items-center mb-2">
                                                                <div class="text-nowrap me-3 text-muted"><span
                                                                    class="d-inline-block align-middle text-muted">2</span><i
                                                                        class="bi bi-star-fill ms-1 small text-warning"></i></div>
                                                                <div class="w-100">
                                                                    <div class="progress" style={{ height: "6px" }}>
                                                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "22%" }}
                                                                            aria-valuenow="22" aria-valuemin="0" aria-valuemax="22"></div>
                                                                    </div>
                                                                </div><span class="text-muted ms-3">5%</span>
                                                            </div>

                                                            <div class="d-flex align-items-center mb-2">
                                                                <div class="text-nowrap me-3 text-muted"><span
                                                                    class="d-inline-block align-middle text-muted">1</span><i
                                                                        class="bi bi-star-fill ms-1 small text-warning"></i></div>
                                                                <div class="w-100">
                                                                    <div class="progress" style={{ height: "6px" }}>
                                                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "14%" }}
                                                                            aria-valuenow="14" aria-valuemin="0" aria-valuemax="14"></div>
                                                                    </div>
                                                                </div><span class="text-muted ms-3">7%</span>
                                                            </div>
                                                        </div>
                                                        <div class="d-grid">
                                                            <h4>Review this product</h4>
                                                            <p class="mb-0">Share your thoughts with other customers.</p>
                                                            <a href="#" class="btn btn-outline-gray-400 mt-4 text-muted">Write the Review</a>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="col-md-8">
                                                    <div class="mb-10">
                                                        <div class="d-flex justify-content-between align-items-center mb-8">
                                                            <div>

                                                                <h4>Reviews</h4>
                                                            </div>
                                                            <div>
                                                                <select class="form-select">
                                                                    <option selected>Top Review</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex border-bottom pb-6 mb-6">
                                                            <img src="../assets/images/avatar/avatar-10.jpg" alt=""
                                                                class="rounded-circle avatar-lg" />
                                                            <div class="ms-5">
                                                                <h6 class="mb-1">
                                                                    Shankar Subbaraman

                                                                </h6>


                                                                <p class="small"> <span class="text-muted">30 December 2022</span>
                                                                    <span class="text-primary ms-3 fw-bold">Verified Purchase</span></p>

                                                                <div class=" mb-2">
                                                                    <i class="bi bi-star-fill text-warning"></i>
                                                                    <i class="bi bi-star-fill text-warning"></i>
                                                                    <i class="bi bi-star-fill text-warning"></i>
                                                                    <i class="bi bi-star-fill text-warning"></i>
                                                                    <i class="bi bi-star-fill text-warning"></i>
                                                                    <span class="ms-3 text-dark fw-bold">Need to recheck the weight at delivery point</span>
                                                                </div>

                                                                <p>Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open
                                                                    package, there is a possibility of pilferage in between. FreshCart sends the veggies and
                                                                    fruits through sealed plastic covers and Barcode on the weight etc. .</p>
                                                                <div>
                                                                    <div class="border icon-shape icon-lg border-2 ">
                                                                        <img src="../assets/images/products/product-img-1.jpg" alt=""
                                                                            class="img-fluid " />
                                                                    </div>
                                                                    <div class="border icon-shape icon-lg border-2 ms-1 ">
                                                                        <img src="../assets/images/products/product-img-2.jpg" alt=""
                                                                            class="img-fluid " />
                                                                    </div>
                                                                    <div class="border icon-shape icon-lg border-2 ms-1 ">
                                                                        <img src="../assets/images/products/product-img-3.jpg" alt=""
                                                                            class="img-fluid " />
                                                                    </div>

                                                                </div>

                                                                <div class="d-flex justify-content-end mt-4">
                                                                    <a href="#" class="text-muted"><i class="feather-icon icon-thumbs-up me-1"></i>Helpful</a>
                                                                    <a href="#" class="text-muted ms-4"><i class="feather-icon icon-flag me-2"></i>Report
                                                                        abuse</a>
                                                                </div>
                                                            </div>
                                                        </div>



                                                        <div>
                                                            <a href="#" class="btn btn-outline-gray-400 text-muted">Read More Reviews</a>
                                                        </div>
                                                    </div>
                                                    <div>

                                                        <h3 class="mb-5">Create Review</h3>



                                                        <div class="border-bottom py-4 mb-4">
                                                            <h5>Add a headline</h5>
                                                            <input type="text" class="form-control" placeholder="What’s most important to know" />
                                                        </div>
                                                        <div class="border-bottom py-4 mb-4">
                                                            <h5>Add a photo or video</h5>
                                                            <p>Shoppers find images and videos more helpful than text alone.</p>

                                                            <form action="#" class=" dropzone profile-dropzone">
                                                                <div class="fallback">
                                                                    <input name="file" type="file" multiple />
                                                                </div>
                                                            </form>

                                                        </div>
                                                        <div class=" py-4 mb-4">

                                                            <h5>Add a written review</h5>
                                                            <textarea class="form-control" rows="3"
                                                                placeholder="What did you like or dislike? What did you use this product for?"></textarea>

                                                        </div>

                                                        <div class="d-flex justify-content-end">
                                                            <a href="#" class="btn btn-primary">Submit Review</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div class="tab-pane fade" id="sellerInfo-tab-pane" role="tabpanel" aria-labelledby="sellerInfo-tab"
                                        tabindex="0">...</div>
                                </div>
                            </div>
                        </div>
                    </div>



                </section>


                <section class="my-lg-14 my-14">
                    <div class="container">

                        <div class="row">
                            <div class="col-12">

                                <h3>Related Items</h3>
                            </div>
                        </div>

                        <div class="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">

                            <div class="col">
                                <div class="card card-product">
                                    <div class="card-body">


                                        <div class="text-center position-relative ">
                                            <div class=" position-absolute top-0 start-0">
                                                <span class="badge bg-danger">Sale</span>
                                            </div>
                                            <a href="#!">
                                                <img src="../assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template"
                                                    class="mb-3 img-fluid" /></a>

                                            <div class="card-product-action">
                                                <a href="#!" class="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    class="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></a>
                                                <a href="shop-wishlist.html" class="btn-action" data-bs-toggle="tooltip" data-bs-html="true"
                                                    title="Wishlist"><i class="bi bi-heart"></i></a>
                                                <a href="#!" class="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i
                                                    class="bi bi-arrow-left-right"></i></a>
                                            </div>
                                        </div>

                                        <div class="text-small mb-1"><a href="#!" class="text-decoration-none text-muted"><small>Snack &
                                            Munchies</small></a></div>
                                        <h2 class="fs-6"><a href="#!" class="text-inherit text-decoration-none">Haldiram's Sev Bhujia</a></h2>
                                        <div>

                                            <small class="text-warning"> <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-half"></i></small> <span class="text-muted small">4.5(149)</span>
                                        </div>

                                        <div class="d-flex justify-content-between align-items-center mt-3">
                                            <div><span class="text-dark">$18</span> <span class="text-decoration-line-through text-muted">$24</span>
                                            </div>

                                            <div><a href="#!" class="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg> Add</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card card-product">
                                    <div class="card-body">

                                        <div class="text-center position-relative"> <a href="#!"><img
                                            src="../assets/images/products/product-img-2.jpg" alt="Grocery Ecommerce Template"
                                            class="mb-3 img-fluid" /></a>

                                            <div class="card-product-action">
                                                <a href="#!" class="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    class="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></a>
                                                <a href="shop-wishlist.html" class="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i
                                                    class="bi bi-heart"></i></a>
                                                <a href="#!" class="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i
                                                    class="bi bi-arrow-left-right"></i></a>
                                            </div>
                                        </div>

                                        <div class="text-small mb-1"><a href="#!" class="text-decoration-none text-muted"><small>Bakery &
                                            Biscuits</small></a></div>
                                        <h2 class="fs-6"><a href="#!" class="text-inherit text-decoration-none">NutriChoice Digestive </a></h2>
                                        <div class="text-warning">

                                            <small> <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-half"></i></small> <span class="text-muted small">4.5 (25)</span>
                                        </div>

                                        <div class="d-flex justify-content-between align-items-center mt-3">
                                            <div><span class="text-dark">$24</span>
                                            </div>

                                            <div><a href="#!" class="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg> Add</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="col">
                                <div class="card card-product">
                                    <div class="card-body">

                                        <div class="text-center position-relative"> <a href="#!"><img
                                            src="../assets/images/products/product-img-9.jpg" alt="Grocery Ecommerce Template"
                                            class="mb-3 img-fluid" /></a>

                                            <div class="card-product-action">
                                                <a href="#!" class="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    class="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></a>
                                                <a href="shop-wishlist.html" class="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i
                                                    class="bi bi-heart"></i></a>
                                                <a href="#!" class="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i
                                                    class="bi bi-arrow-left-right"></i></a>
                                            </div>
                                        </div>

                                        <div class="text-small mb-1"><a href="#!" class="text-decoration-none text-muted"><small>Snack &
                                            Munchies</small></a></div>
                                        <h2 class="fs-6"><a href="#!" class="text-inherit text-decoration-none">Slurrp Millet Chocolate </a></h2>
                                        <div class="text-warning">

                                            <small> <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-half"></i></small> <span class="text-muted small">4.5 (67)</span>
                                        </div>

                                        <div class="d-flex justify-content-between align-items-center mt-3">
                                            <div><span class="text-dark">$6</span> <span class="text-decoration-line-through text-muted">$10</span>
                                            </div>

                                            <div><a href="#!" class="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg> Add</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }


})
