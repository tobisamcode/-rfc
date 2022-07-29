import LineList from "./LineList";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map(item =>
        <LineList
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      )}
    </ul>
  );
};

export default ItemList;
