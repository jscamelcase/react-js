function ColorList(props) {
  console.log(props.colorList);
  return (
    <div>
      {props.colorList.map((item) => {
        return <p>{item.hex}</p>;
      })}
    </div>
  );
}

export default ColorList;
