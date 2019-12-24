import { Link, LinkType } from '../models';

export const customerService: Link = {
  name: 'Customer Service',
  description: 'This is where Freight Bills are created and managed for Dispatch operations, Billing, Collections, and the General Ledger.',
  target: 'CServ.exe',
  linkType: LinkType.application,
  icon: 'user_headset.png'
};

export const dispatch: Link = {
  name: 'Dispatch',
  description: 'The one the only, Dispatch',
  target: 'Dispatch.exe',
  linkType: LinkType.application,
  icon: 'user_monitor.png'
};

export const artAdmin: Link = {
  name: 'REST Services',
  description: 'The ART Server administrator is where you setup all types of ART services',
  target: 'ARTAdmin.exe',
  linkType: LinkType.application,
  icon: 'palette.png',
  requiresElevatedPrivledges: true,
};

