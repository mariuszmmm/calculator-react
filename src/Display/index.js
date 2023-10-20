import { DisplayContainer, Input } from "./styled"

export const Display = ({ display }) => (
  <DisplayContainer>
    <Input
      value={display}
      max="999999999"
      type="text"
      disabled
    />
  </DisplayContainer>
)
