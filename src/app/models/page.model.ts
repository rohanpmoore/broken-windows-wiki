import { Stats } from './pagestats.model';

export class Page {
  public stats: Stats;
  private background: string;
  private abilities: string;

  constructor(attributes) {
    this.stats = new Stats(attributes.stats);
    this.background = attributes.background;
    this.abilities = attributes.abilities;
  }

  editBackground(editor, background) {
    this.background = background;
    this.stats.update(editor);
  }

  editAbilities(editor, abilities) {
    this.abilities = abilities;
    this.stats.update(editor);
  }

  getBackground() {
    return this.background;
  }

  getAbilities() {
    return this.abilities;
  }
}
