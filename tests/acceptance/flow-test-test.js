import { module, test } from "qunit";
import Ember from "ember";

import { visit, click, find } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | flow test", function(hooks) {
  setupApplicationTest(hooks);

  test("checking the selection value when none of them ", async function(assert) {
    await visit("/");
    assert.equal(
      find(".selection-status").textContent.trim(),
      "None Selected",
      "Should be same"
    );
  });

  test("checking the selection value when one row is selected", async function(assert) {
    await visit("/");
    await click("input.table-check");
    assert.equal(
      find(".selection-status").textContent.trim(),
      "Selected1",
      "Should be same"
    );
  });
});
