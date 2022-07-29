import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length
        ? <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        : "no items founds"}
    </main>
  );
};

export default Content;
