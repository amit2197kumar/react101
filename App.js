const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { className: "heading" }, "Heading 1"),
    React.createElement(
      "h2",
      { className: "subheading" },
      "Sub-Heading of Heading 1"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { className: "heading" }, "Heading 2"),
    React.createElement(
      "h2",
      { className: "subheading" },
      "Sub-Heading of Heading 2"
    ),
  ]),
]);

ReactDOM.render(parent, document.getElementById("root"));
