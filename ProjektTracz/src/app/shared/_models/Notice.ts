export class Notice {
  title: string;
  message: string;
  image: any;
  mark: string;
  model: string;
  color: string;
  body: string;
  mileage: string;
  price: string;
  year: string;

  constructor(title: string, message: string, image: any, mark: string, model: string, color: string, body: string, mileage: string, price: string, year: string) {
    this.title = title;
    this.message = message;
    this.image = image;
    this.mark = mark;
    this.model = model;
    this.color = color;
    this.body = body;
    this.mileage = mileage;
    this.price = price;
    this.year = year;
  }
}
