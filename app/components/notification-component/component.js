import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class NotificationComponentComponent extends Component {
  /**
   * action downloadFiles - Triggers action to the controller to download the available files
   */
  @action downloadFiles() {
    this.args.downloadFiles();
  }
}
