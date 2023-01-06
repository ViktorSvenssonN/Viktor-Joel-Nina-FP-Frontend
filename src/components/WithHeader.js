import Header from "./Header";

const WithHeader = (Component) => (props) => {
  return (
    <>
      <Header />
      <Component {...props} />
    </>
  );
};

export default WithHeader;
