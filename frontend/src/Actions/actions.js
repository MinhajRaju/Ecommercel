
import {
    ALL_NESTED_CATEGORY_FAIL,
    ALL_NESTED_CATEGORY_REQUEST,
    ALL_NESTED_CATEGORY_SUCCESS,

    FLASH_SALE_REQUEST,
    FLASH_SALE_SUCCESS,
    FLASH_SALE_FAIL,


    TOP_CATEGORY_REQUEST,
    TOP_CATEGORY_SUCCESS,
    TOP_CATEGORY_FAIL,


    DASH_PRODUCT_REQUEST,
    DASH_PRODUCT_SUCCESS,
    DASH_PRODUCT_FAIL,

    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_SUCCESS,
    SINGLE_PRODUCT_FAIL

} from "../Constants/constants"
import axios from 'axios'


export const NestedCategoryAction = () => async (dispatch) => {

    try {
        dispatch({
            type: ALL_NESTED_CATEGORY_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }



        const { data } = await axios.get('/api/admin/category/', config)



        dispatch({
            type: ALL_NESTED_CATEGORY_SUCCESS,
            payload: data
        })
        localStorage.setItem('Category', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: ALL_NESTED_CATEGORY_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}

export const FlashSaleAction = () => async (dispatch) => {

    try {
        dispatch({
            type: FLASH_SALE_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.get('/api/po/flashsale/', config)

        dispatch({
            type: FLASH_SALE_SUCCESS,
            payload: data
        })

    }
    catch (error) {

        dispatch({
            type: FLASH_SALE_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,

        })

    }


}


export const TopCategoryAction = (number_of_category) => async (dispatch) => {

    try {
        dispatch({
            type: TOP_CATEGORY_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/admin/topcategory/${number_of_category}`, config)

        dispatch({
            type: TOP_CATEGORY_SUCCESS,
            payload: data
        })

    }
    catch (error) {

        dispatch({
            type: TOP_CATEGORY_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,

        })

    }


}




let visible = 0

export const DashProductAction = () => async (dispatch) => {

    try {
        dispatch({
            type: DASH_PRODUCT_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        visible += 2

        const { data } = await axios.get(`/api/po/dashproduct/${visible}`, config)

        dispatch({
            type: DASH_PRODUCT_SUCCESS,
            payload: data
        })

    }
    catch (error) {

        dispatch({
            type: DASH_PRODUCT_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,

        })

    }


}






export const SingleProductAction = (id) => async (dispatch) => {

    try {
        dispatch({
            type: SINGLE_PRODUCT_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }


        const { data } = await axios.get(`/api/po/singleproduct/${id}`, config)

        dispatch({
            type: SINGLE_PRODUCT_SUCCESS,
            payload: data
        })

    }
    catch (error) {

        dispatch({
            type: SINGLE_PRODUCT_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,

        })

    }


}




