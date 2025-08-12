import "./Preloader.css";
function Preloader() {
  return (
    <div className="preloader">
      <div className="circle-preloader" />
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}

//   const isLoading = true;

//   <div>{isLoading ? <Preloader /> : <Content />}</div>

export default Preloader;
