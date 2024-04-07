const parent = React.createElement("div", { className: "parent" }, [
  React.createElement("h1", { className: "heading" }, "Heading 1"),
  React.createElement(
    "h2",
    { className: "subheading" },
    "Sub-Heading of Heading 1"
  ),
]);

ReactDOM.render(parent, document.getElementById("root"));
