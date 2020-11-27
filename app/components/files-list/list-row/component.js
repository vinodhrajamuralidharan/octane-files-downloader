import Component from "@glimmer/component";

export default class FilesListListRowComponent extends Component {
  tagName = "";
  /**
   * get showCircle - it checks the status is available or not for the green circle in the table
   *
   * @return {boolean}  returns true or false
   */
  get showCircle() {
    return this.args.status === "available";
  }
}
