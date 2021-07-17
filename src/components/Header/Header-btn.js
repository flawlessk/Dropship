const HeaderBtn = (props) => {
    return (
      <button
        onClick={props.onClick}
        className={
          "content__header-btn" + (props.big ? " content__header-btn--big" : "")
        }
      >
        {props.name}
      </button>
    );
  };
  
  export default HeaderBtn;
  