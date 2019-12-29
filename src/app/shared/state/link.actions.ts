import { Link } from '../models';

/**
 * Create / add link
 */

export class CreateLink {
  static readonly type = '[CREAT LINK] Create link';
  constructor(public payload: Link) {}
}

export class CreateLinkSuccess {
  static readonly type = '[CREATE LINK] Create link success';
  constructor(public payload: Link) {}
}

export class CreateLinkFailure {
  static readonly type = '[CREATE LINK] Create link failure';
  constructor(public payload: any) {}
}

/**
 * Fetching
 */

export class FetchLink {
  static readonly type = '[LINK] Fetch Links';
  constructor() {}
}

export class FetchLinkSuccess {
  static readonly type = '[LINK] Fetch Links Success';
  constructor(public payload: Link) {}
}

export class FetchLinkFailure {
  static readonly type = '[LINK] Fetch Links Failure';
  constructor(public payload: any) {}
}

export class EditLink {
  static readonly type = '[LINK] Edit Link';
  constructor(public payload: Link) {}
}

export class DeleteLink {
  static readonly type = '[LINK] Delete Link';
  constructor(public payload: Link) {}
}
