import {Status} from './Status';

export class ResponseNotice {
  title: string;
  author_avatar: any;
  body: string;
  image_url: any;
  mark: string;
  message: string;
  mileage: string;
  model: string;
  notice_author: string;
  notice_author_email: string;
  price: string;
  statuses: Array<Status>;
  year: string;

  constructor(title: string,
              author_avatar: any,
              body: string,
              image_url: any,
              mark: string,
              message: string,
              mileage: string,
              model: string,
              notice_author: string,
              notice_author_email: string,
              price: string,
              statuses: Array<Status>,
              year: string) {
    this.title = title;
    this.author_avatar = author_avatar;
    this.body = body;
    this.image_url = image_url;
    this.mark = mark;
    this.message = message;
    this.mileage = mileage;
    this.model = model;
    this.notice_author = notice_author;
    this.notice_author_email = notice_author_email;
    this.price = price;
    this.statuses = statuses;
    this.year = year;
  }
}
