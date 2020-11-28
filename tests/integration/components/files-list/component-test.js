import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | files-list", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    await render(hbs`<FilesList />`);
    assert.ok(
      this.element.textContent.trim().indexOf("name") > -1,
      "It should render the table headers"
    );
  });
});
