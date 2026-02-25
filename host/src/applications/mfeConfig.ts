export interface IMfeConfig {
  /** single-spa application name (e.g. '@chkp/page1') */
  name: string;
  /** URL path prefixes that activate this MFE */
  activeWhen: string[];
  /** ID of the DOM element the mount-point div is rendered into */
  container: string;
}

export const APPLICATIONS_NAMES = {
  SIDEBAR: '@chkp/sidebar',
  PAGE1: '@chkp/page1',
  PAGE2: '@chkp/page2',
  PAGE3: '@chkp/page3',
  MGMT_UI: '@chkp/mgmt-ui',
} as const;

export const CONTAINERS = {
  SIDEBAR: 'sidebar',
  CONTENT: 'content',
} as const;

export const applications: IMfeConfig[] = [
  {
    name: APPLICATIONS_NAMES.PAGE1,
    activeWhen: ['/page1'],
    container: CONTAINERS.CONTENT,
  },
  {
    name: APPLICATIONS_NAMES.PAGE2,
    activeWhen: ['/page2'],
    container: CONTAINERS.CONTENT,
  },
  {
    name: APPLICATIONS_NAMES.PAGE3,
    activeWhen: ['/page3'],
    container: CONTAINERS.CONTENT,
  },
  {
    name: APPLICATIONS_NAMES.MGMT_UI,
    activeWhen: ['/cloud', '/network'],
    container: CONTAINERS.CONTENT,
  },
];
