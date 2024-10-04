import { BookTable } from "./definition";
import { sql } from "@vercel/postgres";

const ITEMS_PER_PAGE = 6;
export async function fetchBooks(currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<BookTable>`
      SELECT *
      FROM book
      ORDER BY name ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoices.");
  }
}
