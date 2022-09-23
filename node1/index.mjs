import { readFile, writeFile } from 'fs/promises'
import path from 'path'

// console.log(import.meta.url);

// menghubungkan template.html ke file ini. utf-8 untuk mengubah kedalam bentuk string
let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')

// console.log(template);


// title dan body sebagai key
// isinya merupakan valuenya
const data = {
  title: "Learn Node.js",
  body: "This is the final HTML"
}

// Object.entries pada dasarnya mengembalikan array passangan nilai kunci
for (const [key, value] of Object.entries(data)) {
  template = template.replace(`{${key}}`, value)
}

// console.log(template);

// Membuat file dengan nama index.html dari hasil variabel template
await writeFile(new URL('index.html', import.meta.url), template)

