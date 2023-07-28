import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";

/**
 * this hook returns typed useSelector() from redux
 * so we can access typed state easily
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;