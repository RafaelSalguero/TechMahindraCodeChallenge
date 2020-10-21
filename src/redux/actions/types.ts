import * as actions from "./creators"

type ActionCreator = typeof actions[keyof typeof actions];

export interface ActionPayload<Type extends string  = string, Payload = any> {
    type: Type;
    payload: Payload;
}
 
/**All app actions*/
export type Action = ReturnType<ActionCreator>;
/**All action names*/
export type ActionName = Action["type"];