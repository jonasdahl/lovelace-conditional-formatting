import { useCallback } from "preact/hooks";
import store from "../store";

export const useEntity = (entityId: string) =>
  store(useCallback(({ hass }) => hass?.states[entityId], [entityId]));
