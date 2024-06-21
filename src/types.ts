export enum FetchState {
  DEFAULT = "DEFAULT",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export type HackerspaceData = {
    id: number,
    name: string,
    city: string,
    userId: number,
    createdAt: string,
    updatedAt: string
}

