import { useRecoilValue } from "recoil";
import { charCountState } from "./CharacterCounterState";

export function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
