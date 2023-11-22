export class Task {
  title: string;
  description: string;
  date: Date;
  status: string;
  id: number;

  constructor(title = '', description = '', date = new Date(), status = '',id = 0) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.status = status;
    this.id = id
  }
}
