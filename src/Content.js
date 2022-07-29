import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length
        ? <ul>
            {items.map(item =>
              <li className="item" key={item.id}>
                <input
                  onChange={() => handleCheck(item.id)}
                  type="checkbox"
                  checked={item.checked}
                />

                <label
                  style={
                    item.checked
                      ? {
                          textDecoration: "line-through"
                        }
                      : null
                  }
                  onDoubleClick={() => handleCheck(item.id)}
                >
                  {item.item}
                </label>

                <FaTrashAlt
                  onClick={() => handleDelete(item.id)}
                  role="button"
                  tabIndex="0"
                />
              </li>
            )}
          </ul>
        : "no items founds"}
    </main>
  );
};

export default Content;
