function ErrorPage(props) {
  console.log(props.isLoggedIn);
  console.log(props);
  

  if (!props.isLoggedIn) {
    return <h1>You have to download TikTok to see this</h1>;
  } else {
    return <h1>ERROR 404 page not found</h1>;
  }
}

export default ErrorPage;
