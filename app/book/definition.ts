export type BookTable = {
  id: string;
  book: string;
  author: string;
  image_url: string;
  published: string;
  status: "available" | "ordered" | "sold";
};
