export class IncompletePayload extends Error {
  constructor() {
    super("Incomplete payload.");
  }
}
