import Card from "../../components/Card/Card";
import Map from "../../components/map/Map";
import "./placeList.css";
import { apiRequest } from "../../lib/apiRequest";
import { useEffect, useState } from "react";
import { PostType } from "../../types";
import { useSearchParams } from "react-router-dom";
export default function PlaceList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState({
    search: searchParams.get("search") || "",
    min: searchParams.get("min") || "0",
    max: searchParams.get("max") || "10000",
  });

  const [cardData, setCardData] = useState<PostType[]>([]);

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const formElement = Object.fromEntries(formData.entries());
    setQuery({
      ...query,
      ...formElement,
    });
    setSearchParams(query);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await apiRequest("/post?" + new URLSearchParams(query));
      setCardData(data);
    };
    getData();
  }, [query]);
  return (
    <section className="placeListContainer">
      <div className="leftPlaceList">
        <form className="searchForm" onSubmit={handelSubmit}>
          <div className="filter">
            <h3>Search Your Desire Place Here...</h3>
            <input
              type="search"
              className="search"
              placeholder="Search here..."
              name="search"
            />
            <div className="filterList">
              <div className="filterType">
                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                  <option value="1"> 1</option>
                  <option value="1"> 1</option>
                  <option value="1"> 1</option>
                </select>
              </div>
              <div className="filterType">
                <label htmlFor="min">Min Price</label>
                <input type="text" name="min" id="min" />
              </div>
              <div className="filterType">
                <label htmlFor="max">Max Price</label>
                <input type="text" name="max" id="max" />
              </div>
              <button type="submit" className="search">
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="cardPlaceList">
          {cardData.length == 0 ? (
            <h1 className="message">No Data Found</h1>
          ) : (
            <Card data={cardData} />
          )}
        </div>
      </div>
      <div className="rightPlaceList">
        <Map item={cardData} />
      </div>
    </section>
  );
}
