//import { sql } from "@vercel/postgres";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

const ITEMS_PER_PAGE = 6;
// export async function fetchBooks(currentPage) {
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;

//   try {
//     const invoices =
//       (await sql) <
//       BookTable >
//       `
//       SELECT id, book, author, image_url, published, status
//       FROM books
//     `;
//     //LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
//     console.log(invoices.rows);
//     return invoices.rows;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch invoices.");
//   }
// }

export function generateFakeData() {
  let fakeData = [];
  for (let i = 0; i < 1000; i++) {
    fakeData.push({
      id: uuidv4(),
      book: faker.word.noun(),
      author: faker.person.fullName(),
      image_url: faker.image.urlLoremFlickr(),
      published: faker.date.past().toDateString(),
      status: "available",
    });
  }
  return fakeData;
}

export class BookTable {
  constructor(id, book, author, image_url, published, status) {
    this.id = id;
    this.book = book;
    this.author = author;
    this.image_url = image_url;
    this.published = published;
    this.status = status;
  }
  //status: "available" | "ordered" | "sold";
}
