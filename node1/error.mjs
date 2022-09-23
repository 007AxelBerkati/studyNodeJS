// import { readFile } from "fs";

// readFile(new URL('app.mj', import.meta.url), 'utf-8', (error, data) => {
//   if (error) {
//     throw error
//   } else {
//     // data
//   }
// })

import { readFile } from "fs/promises";

try {
  const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
} catch (error) {
  throw error
  // console.error(error);
}