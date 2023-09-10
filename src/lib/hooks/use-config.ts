import store from "../../store";

export const useConfig = () => store(({ config }) => config);
