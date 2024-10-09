export type BookTable = {
  id: string;
  name: string;
  author: string;
  image_url: string;
  published: string;
  status: "available" | "ordered" | "sold";
};
