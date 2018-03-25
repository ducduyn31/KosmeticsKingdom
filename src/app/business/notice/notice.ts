export class Notice {
  constructor(public id: number, public _id: string, public subject: string, public author: string, public date: Date, public viewNumber: number, public rawContent: string, public touched? : boolean) {
  }
}
