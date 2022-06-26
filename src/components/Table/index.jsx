import React from "react";
import get from "lodash/get";

const TableComponent = ({
  items = [],
  rowKey = "id",
  columns = [],
  isFetched = false,
  hasEdit = true,
  editAction,
  hasDelete = true,
  deleteAction,
  emptyUiText = "No data",
  className,
  onRowClick,
  editIcon,
}) => {
  return (
    <div style={{ width: "700px " }}>
      <table className="table table-report">
        <thead>
          <tr className="bg-gray-700 dark:bg-dark-1 text-white">
            {columns.map((col, i) => (
              <th
                key={i}
                className={`whitespace-nowrap ${get(col, "className")}`}
                onClick={() => {
                  if (col.onHeaderClick === "function") {
                    col.onHeaderClick(col);
                  } else return null;
                }}
              >
                {get(col, "title")}
              </th>
            ))}
            {(hasEdit || hasDelete) && <th className="whitespace-nowrap" />}
          </tr>
        </thead>
        {items.length > 0 && (
          <tbody>
            {items.map(item => {
              return (
                <tr key={item[rowKey]} className="intro-x">
                  {columns.map((col, id) => {
                    return (
                      <td
                        key={id}
                        className={get(col, "className")}
                        onClick={() => {
                          if (!get(col, "isClickable") && onRowClick) {
                            onRowClick(item);
                          }
                        }}
                      >
                        {col.render(item[col.dataIndex], item)}
                      </td>
                    );
                  })}
                  {(hasEdit || hasDelete) && (
                    <td className="table-report__action w-20">
                      <div className="flex">
                        {hasEdit && editAction && (
                          <div
                            className="flex items-center mr-3 cursor-pointer"
                            onClick={() => editAction(item)}
                          >
                            {editIcon ? editIcon : <>Hs</>}
                          </div>
                        )}
                        {hasDelete && deleteAction && (
                          <div
                            className="flex items-center text-theme-24 cursor-pointer"
                            onClick={() => deleteAction(item)}
                          >
                            <>Hs</>
                          </div>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      {isFetched && items.length < 1 && (
        <div className="text-center p-4 table__no-data">{emptyUiText}</div>
      )}
    </div>
  );
};

export default TableComponent;
