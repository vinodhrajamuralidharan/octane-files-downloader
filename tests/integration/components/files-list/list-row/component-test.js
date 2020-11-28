import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | files-list/list-row", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    this.setProperties({
      name: "martin",
      device: "iphone",
      path: "path",
      status: "available",
      isChecked: true
    });

    await render(
      hbs`<FilesList::ListRow @isChecked={{this.isChecked}} @name={{this.name}} @device={{this.device}} @path={{this.path}} @status={{this.status}}/>`
    );

    assert.ok(
      this.element.querySelector(".circle"),
      "Should render the circle"
    );
  });
});
