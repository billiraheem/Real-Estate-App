import React from "react";
import "./list.scss";
import { listData } from "../../lib/dummyData";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";

const List = () => {

  return <div className="listPage">
    <div className="list">
        <div className="wrapper">
            <Filter />

            {listData.map(item => (<Card key={item.id} item={item} />))}
        </div>
    </div>

    <div className="map">
      <Map items={listData} />
    </div>
  </div>;
};

export default List;
