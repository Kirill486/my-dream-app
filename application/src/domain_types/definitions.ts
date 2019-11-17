import { Action } from "redux";

export const doNothing = () => {
    // do nothing
}

export interface IPayloadAction<Payload> extends Action {
    payload: Payload;
}

export type app_id = string;