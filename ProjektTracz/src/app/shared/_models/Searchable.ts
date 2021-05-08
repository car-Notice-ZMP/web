export class Searchable {
  id: string;
  title: string;
  message: string;
  notice_author: string;
  notice_author_email: string;
  author_avatar: any;
  mark: string;
  model: string;
  color: string;
  year: string;
  mileage: string;
  price: string;
  body: string;
  image_url: any;
  created_at: string;
  updated_at: string;

  constructor(id: string,
              title: string,
              message: string,
              notice_author: string,
              notice_author_email: string,
              author_avatar: any,
              mark: string,
              model: string,
              color: string,
              year: string,
              mileage: string,
              price: string,
              body: string,
              image_url: any,
              created_at: string,
              updated_at: string) {
    this.id = id;
    this.title = title;
    this.message = message;
    this.notice_author = notice_author;
    this.notice_author_email = notice_author_email;
    this.author_avatar = author_avatar;
    this.mark = mark;
    this.model = model;
    this.color = color;
    this.year = year;
    this.mileage = mileage;
    this.price = price;
    this.body = body;
    this.image_url = image_url;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
