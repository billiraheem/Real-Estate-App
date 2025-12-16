import React from "react";
import "./list.scss";
import { listData } from "../../lib/dummyData";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";

const List = () => {
    const data = listData;

  return <div className="listPage">
    <div className="list">
        <div className="wrapper">
            <Filter />

            {data.map(item => (<Card key={item.id} item={item} />))}
        </div>
    </div>

    <div className="map">m</div>
  </div>;
};

export default List;
