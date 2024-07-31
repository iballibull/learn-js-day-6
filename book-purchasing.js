function bookPurcashing(bookDetail, discount, tax) {
  let { price } = bookDetail;
  let discountAmount = (price * discount) / 100;
  let priceAfterDiscount = price - discountAmount;
  let taxAmount = (priceAfterDiscount * tax) / 100;
  let finalPrice = priceAfterDiscount + taxAmount;

  return {
    bookDetail,
    discount: `${discount}%`,
    discountAmount,
    priceAfterDiscount,
    tax: `${tax}%`,
    taxAmount,
    finalPrice,
  };
}

const discount = 30;
const tax = 10;

let bookDetail = {
  title: 'Atomic Habits',
  author: 'James Clear',
  price: 100000,
};

console.log(bookPurcashing(bookDetail, discount, tax));
