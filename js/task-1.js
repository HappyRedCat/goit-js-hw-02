// function getShippingMessage(country, price, deliveryFee) {
//   return `Shipping to ${country}, will cost ${price + deliveryFee} credits`;
// }
// console.log(getShippingMessage('Australia', 120, 50));
// console.log(getShippingMessage('Germany', 80, 20));
// console.log(getShippingMessage('Sweden', 100, 20));

// function getElementWidth(content, padding, border) {
//   return (
//     Number.parseFloat(content) +
//     (Number.parseFloat(padding) + Number.parseFloat(border)) * 2
//   );
// }
// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// console.log(getElementWidth('200px', '0px', '0px')); // 200

// function checkAge(age) {
//   if (age >= 18) return `You are an adult`;
// }
// console.log(checkAge(30));

// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return 'Not enough goods in stock!';
//   } else {
//     return 'Order is processed, our manager will contact you';
//   }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(150, 180));

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return `There are no products in the order!`;
//   } else if (ordered > available) {
//     return 'Your order is too large, there are not enough items in stock!';
//   } else {
//     return 'The order is accepted, our manager will contact you';
//   }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(80, 80));

// !Тернарний оператор це коротша синтакс.заміна інструкції (if...else).

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type); // 'adult'

// const a = 5;
// const b = 10;
// const biggerNumber = a > b ? a : b;
// console.log(biggerNumber); // 10

// function checkPassword(password) {
//   const correctPassword = 'jqueryismyjam';
//   const checkPassword =
//     password === correctPassword
//       ? 'Access granted'
//       : 'Access denied, wrong password!';
//   return checkPassword;
// }
// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('angul4r1sl1f3'));

// // ! switch
// function getSubscriptionPrice(type) {
//   let price;
//   switch (type) {
//     case `starter`:
//       price = 0;
//       break;
//     case `professional`:
//       price = 20;
//       break;
//     case `organization"`:
//       price = 50;
//       break;
//     default:
//       return 'Invalid subscription type!';
//   }
// }

// function getSubscriptionPrice(type) {
//     let price;
//     switch (type) {
//       case `starter`:
//         price = 0;
//         break;
//       case `professional`:
//         price = 20;
//         break;
//       case `organization"`:
//         price = 50;
//         break;
//       default:
//         return 'Invalid subscription type!';
//     }
//     return
//   }\

// let price = 'fgf';
// switch (price) {
//   case 'starter':
//     console.log((price = 0));
//     break;
//   case 'professional':
//     console.log((price = 20));
//     break;
//   case 'organization':
//     console.log((price = 50));
//     break;
//   default:
//     console.log('Invalid subscription type!');
// }

function getSubscriptionPrice(type) {
  let price = type;
  switch (price) {
    case 'starter':
      console.log((price = 0));
      break;
    case 'professional':
      console.log((price = 20));
      break;
    case 'organization':
      console.log((price = 50));
      break;
    default:
      console.log('Invalid subscription type!');

      function fertiop(eray) {}
  }
}

console.log(getSubscriptionPrice('professional'));
