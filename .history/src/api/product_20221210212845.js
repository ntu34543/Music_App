import http from './http';

export async function getAllMusic() {
  return http.get('/Music');
}

export async function getwishlist() {
  return http.get('/cart');
}

export async function addToCart(data) {
  return http.post('/cart', data);
}
