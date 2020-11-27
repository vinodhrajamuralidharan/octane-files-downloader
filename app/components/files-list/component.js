import Component from "@glimmer/component";

export default class FilesListComponent extends Component {
  tagName = "table";

  constructor(owner, args) {
    super(owner, args);
    this.headers = ["", "name", "device", "path", "status"];
  }
}
