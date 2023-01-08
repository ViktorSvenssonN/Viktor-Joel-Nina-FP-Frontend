import Header from "./Header/Header";

const WithHeader = (Component) => (props) => {
  return (
    <>
      <Header />
      <Component {...props} />
    </>
  );
};

export default WithHeader;
