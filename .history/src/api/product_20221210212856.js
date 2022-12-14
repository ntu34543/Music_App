import http from './http';

export async function getAllMusic() {
  return http.get('/Music');
}

export async function getWishlist() {
  return http.get('/wishlist');
}

export async function addTowishlist(data) {
  return http.post('/wishlist', data);
}
