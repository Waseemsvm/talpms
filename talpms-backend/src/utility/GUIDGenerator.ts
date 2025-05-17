import { v1 as uuidv1 } from "uuid";

export default class GUIDGenerator {
  constructor(options?) {}
  public generate() {
    return uuidv1();
  }
}
