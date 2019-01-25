export class Stats {
  public tags: string[] = [];
  public creator: string;
  public createdTime: Date;
  public lastEditedName: string;
  public lastEditedTime: Date;

  constructor(attributes) {
    this.tags = attributes.tags;
    this.creator = attributes.creator;
    this.lastEditedName = this.creator;
    this.createdTime = new Date(Date.now())
    this.lastEditedTime = this.createdTime;
  }
}
