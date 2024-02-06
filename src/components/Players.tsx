function Players() {
  const names: string[] = ["John", "Jane", "Mike", "Sarah", "David"];

  names.map((name, index) => {
    return <li key={index}>{name}</li>;
  });

  return (
    <>
      <h3>Participants</h3>
      <ul className="list-group">
        {names.map((name, index) => {
          return (
            <li key={index} className="list-group-item">
              {name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Players;
