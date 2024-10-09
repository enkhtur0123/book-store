import { BookTable } from "./definition";
import { sql } from "@vercel/postgres";

const ITEMS_PER_PAGE = 6;
export async function fetchBooks(currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<BookTable>`
      SELECT id, name, author, image_url, published, status
      FROM books
      ORDER BY name ASC
    `;
    //LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    console.log(invoices.rows);
    return invoices.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoices.");
  }
}
