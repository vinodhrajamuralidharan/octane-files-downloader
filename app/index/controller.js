import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class IndexController extends Controller {
  /**
   * get checkBoxStatus - This method determins the check box status unchecked, indeterminate and unchecked
   *
   * @return {Object}  returns always object which are required for notification component
   */
  get checkBoxStatus() {
    const validDownloadFiles = this.model.filter(list => list.isChecked);
    if (this.model.length === validDownloadFiles.length) {
      return {
        selection: true,
        indeterminate: false,
        count: validDownloadFiles.length,
        label: "Selected"
      };
    }

    if (validDownloadFiles.length === 0) {
      return {
        selection: false,
        indeterminate: false,
        count: "",
        label: "None Selected"
      };
    }

    return {
      selection: false,
      indeterminate: true,
      count: validDownloadFiles.length,
      label: "Selected"
    };
  }

  /**
   * _scheduledSelectionHandler - This method handles alert popup for status scheduled when selected
   *
   * @return It does not return anything, just makes alert popup
   */
  _scheduledSelectionHandler() {
    const inValidDownloadFiles = this.model.filter(list => {
      return list.isChecked && list.status === "scheduled";
    });

    if (inValidDownloadFiles && inValidDownloadFiles.length) {
      alert("Please try the scheduled files later!");
    }
  }

  /**
   * action selectHandler - This ember action updates the checkbox isChecked status
   *
   * @param  {Object} list
   * @return It does not return anything, just updates the status in the object itself
   */
  @action selectHandler(list) {
    list.isChecked = !list.isChecked;
  }

  /**
   * action downloadFiles - this ember action handles all the scenario of alert when download icon is clicked
   *
   * @return It does not return anything just alerts
   */
  @action downloadFiles() {
    const validDownloadFiles = this.model.filter(list => {
      return list.isChecked && list.status === "available";
    });
    const filePaths = validDownloadFiles.map(files => files.path);

    if (filePaths && filePaths.length) {
      alert(filePaths.join(", "));
    } else {
      alert("Please select the files which are available to download");
    }

    this._scheduledSelectionHandler();
  }
}
