import http from './http';

export async function getAllMusic() {
  console.log();
  return http.get('/Music');
}

export async function getWishlist() {
  return http.get('/wishlist');
}

export async function addToWishlist(data) {
  return http.post('/wishlist', data);
}

export async function removeToWishlist() {
  return http.delete('/wishlist');
}