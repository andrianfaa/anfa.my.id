export interface HttpResponse<T> {
  status?: "success" | "error/failed";
  status_code?: number;
  message: string;
  data?: T;
  data_length?: number;
}

export type StoriesResponseTypes = {
  version: string;
  title: string;
  home_page_url: string;
  description: string;
  author: {
    name: string;
  };
  items: {
    guid: string;
    url: string;
    title: string;
    content_html: string;
    date_published: string;
    author: {
      name: string;
    };
  }[];
};
