function Card(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <img src={props.image} alt={props.title} />
      <p>{props.description}</p>
      {props.children}
    </div>
  );
}

ReactDOM.render(
  <Card
    title="Заголовок карточки"
    image="https://picsum.photos/200/300"
    description="Описание карточки"
  >
    <button>Кнопка в карточке</button>
  </Card>,
  document.getElementById('root')
);



function List(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      {props.children}
    </ul>
  );
}

ReactDOM.render(
  <List items={['Элемент 1', 'Элемент 2', 'Элемент 3']}>
    <li>Дополнительный элемент списка</li>
  </List>,
  document.getElementById('root')
);
