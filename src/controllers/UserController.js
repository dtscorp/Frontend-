/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// CODE HERE
import users from "../data/users.js";
/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */
// const formatUser = (title) => {
//   const usersFormat = users.map((item) => {
//     const container = {
//       name: title + " " + item.name,
//       age: item.age,
//       major: item.major,
//     };

//     return container;
//   });
//   //   // for (const user of users) {
//   //   //   const result = {
//   //   //     name: user.map(function (name) {
//   //   //       return title + " " + name;
//   //   //     }),
//   //   //     age: user.age,
//   //   //     major: user.major,
//   //   //   };
//   //   // console.log(`name : ${title + " " + user.name}`);
//   //   // console.log(`age : ${user.age}`);
//   //   // console.log(`major : ${user.major}`);
//   //   // console.log("    ");
//   console.log(usersFormat);
//   //   // }
// };
// formatUser("MR/MRS");
/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
const formatUser = (title) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const usersFormat = users.map((user) => {
        //destructing object user
        const { name, age, major } = user;
        return {
          // kalau key dan valuenya memilikin nama yang sama maka dapet ditulis 1 kali saja seperti contoh dibawah
          name: `${title} ${name}`,
          age,
          major,
        };
      });
      resolve(usersFormat);
    }, 3000);
  });
};

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = (name) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const result = users.find((user) => user.name == name);
      resolve(result);
    }, 2000);
  });
};

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */
// const filterByMajor = (major) => {
//   const result = users.filter(function (user) {
//     return (user.major = major);
//   });
//   console.log(result);
// };
// filterByMajor("English");
/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */

const filterByMajor = (major) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const result = users.filter((user) => user.major == major);
      resolve(result);
    }, 4000);
  });
};

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE
export { formatUser, findByName, filterByMajor };
