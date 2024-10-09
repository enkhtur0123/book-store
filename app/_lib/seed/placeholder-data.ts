// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const customers = [
  {
    id: 1,
    name: "Enkhtur",
    email: "user@nextmail.com",
  },
  {
    id: 2,
    name: "Erdembileg",
    email: "user1@nextmail.com",
  },
];

const orders = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    book_id: 1,
    customer_id: 1,
    from: "2024-10-01",
    to: "2024-10-02",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    book_id: 2,
    customer_id: 2,
    from: "2024-10-01",
    to: "2024-10-02",
  },
];

const books = [
  {
    id: 1,
    book: "MinnaNoNihongo 1",
    author: "Takachi-san",
    status: "available",
    published: "2022-12-06",
    image_url: "/books/minnanonihongo.png",
  },
  {
    id: 2,
    book: "MinnaNoNihongo 2",
    author: "Takachi-san",
    status: "available",
    published: "2022-12-06",
    image_url: "/books/minnanonihongo.png",
  },
  {
    id: 3,
    book: "MinnaNoNihongo 3",
    author: "Takachi-san",
    status: "available",
    published: "2022-12-06",
    image_url: "/books/minnanonihongo.png",
  },
  {
    id: 4,
    book: "MinnaNoNihongo 4",
    author: "Takachi-san",
    status: "available",
    published: "2022-12-06",
    image_url: "/books/minnanonihongo.png",
  },
  {
    id: 5,
    book: "MinnaNoNihongo 5",
    author: "Takachi-san",
    status: "available",
    published: "2022-12-06",
    image_url: "/books/minnanonihongo.png",
  },
];

export { customers, orders, books };
