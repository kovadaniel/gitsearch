import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

/**
 * this hook returns typed dispatch() from redux
 */
export const useAppDispatch: () => AppDispatch = useDispatch;