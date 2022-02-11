const getAllProductsSuccess = products =>
  ({
    type: "GET_ALL_PRODUCTS_SUCCESS",
    payload: { products }
  });

const postProductSuccess = newProduct =>
  ({
    type: "POST_PRODUCT_SUCCESS",
    payload: { newProduct }
  });

const toggleAddProductForm = () =>
  ({
    type: "TOGGLE_ADD_PRODUCT_FORM"
  });

const putProductSuccess = updatedProduct =>
  ({
    type: "PUT_PRODUCT_SUCCESS",
    payload: { updatedProduct }
  });

const setEditingProductId = productId =>
  ({
    type: "SET_EDITING_PRODUCT_ID",
    payload: { productId }
  });

const removeEditingProductId = productId =>
  ({
    type: "REMOVE_EDITING_PRODUCT_ID",
    payload: { productId }
  });

const deleteProductSuccess = productId =>
  ({
    type: "DELETE_PRODUCT_SUCCESS",
    payload: { productId }
  });

const productActions = {
  getAllProductsSuccess,
  postProductSuccess,
  toggleAddProductForm,
  putProductSuccess,
  setEditingProductId,
  removeEditingProductId,
  deleteProductSuccess,
};

export default productActions;
