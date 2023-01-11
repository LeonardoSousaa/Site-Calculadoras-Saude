import "./style.css";

export default function Button(props) {
  return (
    <button onClick={props.onClick} className="btn-01">
      {props.children}
    </button>
  );
}