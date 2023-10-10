import "./style.css"

export const Display = ({ display }) => (
  <div className="containerDisplay">
    <input
      className="inputDisplay"
      value={display}
      max="999999999"
      type="text"
      disabled
    />
  </div>
)
