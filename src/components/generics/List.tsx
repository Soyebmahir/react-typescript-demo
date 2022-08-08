import React from "react";

type ListProps <T> = {
    item: T []
    onClick:(value: T)=>void
}

const List = <T extends {} > ({ item, onClick}: ListProps<T> ) => {
    return (
        <div>
            <h2>List of Items</h2>
            {item.map((item,index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                     {JSON.stringify(item)}
                        </div>
                )
                 
            })}
        </div>
    );
};

export default List ;