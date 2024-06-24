export enum FetchState {
  DEFAULT = "DEFAULT",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export type HackerspaceData = {
  name: string;
  city: string;
  province: string;
  website: string;
};
