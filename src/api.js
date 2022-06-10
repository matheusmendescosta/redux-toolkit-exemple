// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 10000)
  );
}

// // A mock function to mimic making an async request for data
// export function fetchAddPeople(amount = 1) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 1000000)
//   );
// }
