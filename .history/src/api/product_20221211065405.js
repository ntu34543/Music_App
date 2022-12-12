import http from './http';

export async function getAllMusic() {
  console.log(http.get('/Music'));
  return http.get('/Music');
}

export async function getWishlist() {
  return http.get('/wishlist');
}

export async function addToWishlist(data) {
  return http.post('/wishlist', data);
}

export async function removeToWishlist(data) {
  console.log(http.delete('/wishlist', ));
  return http.delete('/wishlist');
}