import Card from "../../components/Card/Card";
import Map from "../../components/map/Map";
import "./placeList.css";
export default function PlaceList() {
  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="rightPlaceList">
        <Map />
      </div>
    </section>
  );
}
