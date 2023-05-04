function Copyright() {
  return (
    <div  color="textSecondary" align="center">
      {"© "}
      <a 
        color="inherit"
        href="https://github.com/KalchIgor"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        by Igor Kalchin
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </div>
  );
}
export { Copyright };