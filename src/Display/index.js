import "./style.css"
// import display from "../App"

export const Display = ({display}) => (
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
