function slugify(title) {
  return title.split(' ').join('-').toLowerCase();
}

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

function slugifyTwo(title) {
  return title.replaceAll(' ', '-').toLowerCase();
}

console.log(slugifyTwo('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugifyTwo('English for developer')); // "english-for-developer"
console.log(slugifyTwo('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugifyTwo('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
