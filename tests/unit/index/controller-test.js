import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import sinon from "sinon";

module("Unit | Controller | index", function(hooks) {
  setupTest(hooks);

  test("checkBoxStatus when indeterminate state", function(assert) {
    let controller = this.owner.lookup("controller:index");
    controller.model = [
      {
        isChecked: false
      },
      {
        isChecked: true
      },
      {
        isChecked: false
      }
    ];
    assert.deepEqual(
      controller.checkBoxStatus,
      {
        count: 1,
        indeterminate: true,
        label: "Selected",
        selection: false
      },
      "should be same"
    );
  });

  test("checkBoxStatus when none of them checked state", function(assert) {
    let controller = this.owner.lookup("controller:index");
    controller.model = [
      {
        isChecked: false
      },
      {
        isChecked: false
      },
      {
        isChecked: false
      }
    ];
    assert.deepEqual(
      controller.checkBoxStatus,
      {
        count: "",
        indeterminate: false,
        label: "None Selected",
        selection: false
      },
      "should be same"
    );
  });

  test("checkBoxStatus when none all of them checked state", function(assert) {
    let controller = this.owner.lookup("controller:index");
    controller.model = [
      {
        isChecked: true
      },
      {
        isChecked: true
      },
      {
        isChecked: true
      }
    ];
    assert.deepEqual(
      controller.checkBoxStatus,
      {
        count: 3,
        indeterminate: false,
        label: "Selected",
        selection: true
      },
      "should be same"
    );
  });

  test("selectHandler action", function(assert) {
    let controller = this.owner.lookup("controller:index");
    const list = { isChecked: false };
    controller.selectHandler(list);
    assert.deepEqual(list.isChecked, true, "Should be true");
  });

  test("downloadFiles action when an file selection which has status available", function(assert) {
    let controller = this.owner.lookup("controller:index");
    controller.model = [
      {
        id: 1,
        name: "smss.exe",
        device: "Stark",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
        isChecked: false,
        status: "scheduled"
      },
      {
        id: 2,
        name: "netsh.exe",
        device: "Targaryen",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
        isChecked: true,
        status: "available"
      }
    ];

    controller._scheduledSelectionHandler = function() {};

    let stubAction = sinon.stub(window, "alert");

    controller.downloadFiles();

    assert.equal(
      stubAction.args.firstObject,
      "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
      "Should be same"
    );

    sinon.restore();
  });

  test("downloadFiles action when no files are selected", function(assert) {
    let controller = this.owner.lookup("controller:index");
    controller.model = [
      {
        id: 1,
        name: "smss.exe",
        device: "Stark",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
        isChecked: false,
        status: "scheduled"
      },
      {
        id: 2,
        name: "netsh.exe",
        device: "Targaryen",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
        isChecked: false,
        status: "available"
      }
    ];

    controller._scheduledSelectionHandler = function() {};

    let noSelectedAction = sinon.stub(window, "alert");

    controller.downloadFiles();

    assert.equal(
      noSelectedAction.args.firstObject.join(),
      "Please select the files which are available to download",
      "Should be same"
    );
    sinon.restore();
  });

  test("_scheduledSelectionHandler method when any of them selected", function(assert) {
    let controller = this.owner.lookup("controller:index");

    controller.model = [
      {
        id: 1,
        name: "smss.exe",
        device: "Stark",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
        isChecked: true,
        status: "scheduled"
      },
      {
        id: 2,
        name: "netsh.exe",
        device: "Targaryen",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
        isChecked: false,
        status: "available"
      }
    ];
    let scheduleSelection = sinon.stub(window, "alert");

    controller._scheduledSelectionHandler();

    assert.equal(
      scheduleSelection.args.firstObject.join(),
      "Please try the scheduled files later!",
      "Should be same"
    );

    sinon.restore();
  });

  test("_scheduledSelectionHandler method when none of them selected", function(assert) {
    let controller = this.owner.lookup("controller:index");

    controller.model = [
      {
        id: 1,
        name: "smss.exe",
        device: "Stark",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
        isChecked: false,
        status: "scheduled"
      },
      {
        id: 2,
        name: "netsh.exe",
        device: "Targaryen",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
        isChecked: false,
        status: "available"
      }
    ];
    let scheduleSelection = sinon.stub(window, "alert");

    controller._scheduledSelectionHandler();

    assert.notOk(scheduleSelection.called, "Should be false");

    sinon.restore();
  });
});
