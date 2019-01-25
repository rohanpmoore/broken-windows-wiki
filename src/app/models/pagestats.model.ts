export class Stats {
  private tags: string[] = [];
  private creator: string;
  private createdTime: Date;
  private lastEditedName: string;
  private lastEditedTime: Date;

  constructor(attributes) {
    this.tags = attributes.tags;
    this.creator = attributes.creator;
    this.lastEditedName = this.creator;
    this.createdTime = new Date(Date.now())
    this.lastEditedTime = this.createdTime;
  }

  update(editor: string) {
    this.lastEditedName = editor;
    this.lastEditedTime = new Date(Date.now());
  }

  removeTag(tag: string) {
    if(this.tags.includes(tag)) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    } else {
      console.log("You attempted to remove an invalid tag.")
    }
  }

  addTag(tag: string) {
    if(!this.tags.includes(tag)) {
      this.tags.push(tag);
    } else {
      console.log("You attempted to add a duplicate tag.")
    }
  }

  getTags() {
    return this.tags;
  }

  getCreator() {
    return this.creator;
  }

  getCreatedTime() {
    return this.parseDate(this.createdTime);
  }

  getPreviousEditorName() {
    return this.lastEditedName;
  }

  getPreviousEditedTime() {
    return this.parseDate(this.lastEditedTime);
  }

  private parseDate(date) {
    //Placeholder code, will come back to this
    return date;
    // parsedString: string = "";
    // parsedString += date.getDate() + ""
  }
}
