import React, { createContext, useReducer, useContext } from "react";
import Toast from "./Toast";
import { v4 } from "uuid";

export const ToastContext = createContext();

function ToastProvider(props) {

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "CREATE_NOTIFICATION":
        return [...state, { ...action.payload }];
      case "REMOVE_NOTIFICATION":
        return state.filter((note) => note.id !== action.id);
      default:
        return state;
    }
  }, []);

  return (
    <ToastContext.Provider value={dispatch}>
      {state?.map((note) => (
        <Toast dispatch={dispatch} key={note.id} {...note} />
      ))}
      {props.children}
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const dispatch = useContext(ToastContext);
  return (props) => {
    dispatch({
      type: "CREATE_NOTIFICATION",
      payload: {
        id: v4(),
        ...props,
      },
    });
  };
};

export default ToastProvider;
