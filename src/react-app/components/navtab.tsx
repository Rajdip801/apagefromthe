import ThumbnailById from "../components/thumbnails";
import "../styles/navtab.css";

const Navtab = () => {
  return (
    <>
      <ul
        className="nav nav-pills mb-3"
        id="pills-tab"
        role="tablist"
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          marginTop: "2%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
            display: "flex",
        }}
      >
        <li
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <span>Broadcasting in :&nbsp;</span>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            India
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            USA
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            UK
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex={0}
        >
          <div className="section-1" style={{ marginTop: "2%" }}>
            <div className="thumbnail-container">
              <div className="thumbnail">
                <ThumbnailById id={"1"} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex={0}
        >
          <div className="section-1" style={{ marginTop: "2%" }}>
            <div className="thumbnail-container">
              <div className="thumbnail">
              <ThumbnailById id={"2"} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabIndex={0}
        >
          <div className="section-1" style={{ marginTop: "2%" }}>
            <div className="thumbnail-container">
              <div className="thumbnail">
              <ThumbnailById id={"1"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navtab;