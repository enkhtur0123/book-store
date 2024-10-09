//import bcrypt from 'bcrypt';
import { db } from "@vercel/postgres";
import { orders, customers, books } from "./placeholder-data";

const client = await db.connect();

// async function seedUsers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return client.sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     }),
//   );

//   return insertedUsers;
// }

async function seedBooks() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS books (
      id SERIAL PRIMARY KEY,
      book VARCHAR(255) NOT NULL,
      author VARCHAR(255) NULL,
      status VARCHAR(255) NULL,
      published DATE NULL,
      image_url VARCHAR(255) NULL
    );
  `;

  const insertedBooks = await Promise.all(
    books.map(
      (book) => client.sql`
        INSERT INTO books (book, author, status, published, image_url)
        VALUES (${book.book}, ${book.author}, ${book.status}, ${book.published}, ${book.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedBooks;
}

async function seedCustomers() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS customers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map((customer) => {
      let sql = `
          INSERT INTO customers(id, name, email)
          VALUES(${customer.id}, '${customer.name}', '${customer.email}')
          ON CONFLICT(id) DO NOTHING;
      `;
      console.log(sql);
      client.sql`${sql}`;
    })
  );

  return insertedCustomers;
}

async function seedOrders() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS orders (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      book_id INT NOT NULL,
      customer_id INT NOT NULL,
      from_date  DATE NULL,
      to_date DATE NULL
    );
  `;

  const insertedOrders = await Promise.all(
    orders.map(
      (orders) => client.sql`
        INSERT INTO orders (id, book_id, customer_id, from_date, to_date)
        VALUES (${orders.id}, ${orders.book_id}, ${orders.customer_id}, ${orders.from}, ${orders.to})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedOrders;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    //await seedUsers();
    //await seedCustomers();
    //await seedBooks();
    //await seedOrders();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
