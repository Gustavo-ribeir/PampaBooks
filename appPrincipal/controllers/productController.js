const axios = require('axios');
require('dotenv').config();
const port = process.env.PORT_PRODUCT
const productServiceUrl = `http://localhost:${port}/api/products`;


async function getProducts() {
  try {
    const response = await axios.get(productServiceUrl);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    throw error;
  }
}

async function getProductById(id) {
  try {
    const response = await axios.get(`${productServiceUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter produto por ID:', error);
    throw error;
  }
}

async function createProduct(productData) {
  try {
    const response = await axios.post(productServiceUrl, productData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    throw error;
  }
}

async function updateProduct(id, productData) {
  try {
    const response = await axios.put(`${productServiceUrl}/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    throw error;
  }
}

async function deleteProduct(id) {
  try {
    const response = await axios.delete(`${productServiceUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    throw error;
  }
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
