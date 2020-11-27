import Route from "@ember/routing/route";
import list from "../data/files-list";

export default class IndexRoute extends Route {
  async model() {
    return list;
  }
}
