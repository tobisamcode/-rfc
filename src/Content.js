import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length
        ? <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        : "no items founds"}
    </>
  );
};

export default Content;
