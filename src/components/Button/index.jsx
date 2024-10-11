// eslint-disable-next-line react/prop-types
const Button = ({ label, onClick, backgroundColor }) => { 
//importing all the arguements here and using them to conditionaly show different states of the component
  const buttonStyle = {
    backgroundColor,
    color: "white",
    fontSize: "20px",
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    width: `${label === "Large" ? "300px" : "200px"}`,
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
