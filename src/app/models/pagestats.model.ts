export class Stats {
  public tags: string[] = [];
  public creator: string;
  public lastEditedName: string;
  public lastEditedTime: Date;

  constructor(attributes) {
    this.tags = attributes.tags;
    this.creator = attributes.creator;
    this.lastEditedName = attributes.creator;
    this.lastEditedTime = Time.now();
