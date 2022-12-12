import http from './http';

export async function getAllMusic() {
  return http.get('/Music');
}

export async function getWishlist() {
  return http.get('/wishlist');
}

export async function addToWishlist(data) {
  return http.post('/wishlist', data);
}

export async function removeToWishlist(dataid) {
  return http.delete('/wishlist', id);
}