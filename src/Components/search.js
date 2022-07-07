import React from "react";

const Search = ({
  onSubmitSearch,
  onSelectCity,
  setText,
  text,
  showdrop,
  selectedCountry,
  city,
}) => {
  return (
    <div className="row justify-content-center grid-container mb-4 p-2">
      <div className="col-md-12 ">
        <div
          className="col-md-8"
          style={{
            display: "grid",
            gridAutoFlow: "column",
          }}
        >
          <div></div>
          <div>
            <input
              type="search"
              placeholder="enter to search"
              className="form-control mt-4  ml-4 col-md-4"
              name="searchvideo"
              value={text}
              style={{ height: "40px" }}
              onChange={(e) => setText(e.target.value)}
            ></input>
            {showdrop && (
              <>
                <select
                  className="ml-3 col-md-10 form-control"
                  placeholder="Country"
                  value={selectedCountry}
                  onChange={(e) => onSelectCity(e)}
                >
                  <option>--Choose Country--</option>
                  {city &&
                    city.map((value, key) => {
                      // console.log(value)
                      return (
                        <option value={value.id} key={key}>
                          {value.name}
                        </option>
                      );
                    })}
                </select>
              </>
            )}
          </div>

          <button
            className="btn btn-primary mt-4 col-md-3"
            onClick={(e) => onSubmitSearch(e)}
            style={{ height: "40px", marginLeft: "0.5rem " }}
          >
            Search
          </button>
        </div>
        <div style={{}}></div>
      </div>
    </div>
  );
};

export default Search;
