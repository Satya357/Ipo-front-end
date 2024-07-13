const { createElement } = React;

const Card = ({
  logo,
  title,
  priceBand,
  openDate,
  closeDate,
  issueSize,
  issueType,
  listingDate,
  rhp,
  drhp,
}) =>
  createElement(
    "div",
    { className: "card" },
    createElement(
      "div",
      { className: "com-info" },
      createElement("img", { className: "com-logo", src: logo, alt: title }),
      createElement("a", { className: "com-name", href: "#" }, title)
    ),
    createElement(
      "div",
      { className: "ipo-pricing" },
      createElement(
        "div",
        null,
        createElement("p", { className: "col-gray" }, "PRICE BAND"),
        createElement("p", { className: "bold-600" }, priceBand)
      ),
      createElement(
        "div",
        null,
        createElement("p", { className: "col-gray" }, "OPEN"),
        createElement("p", { className: "bold-600" }, openDate)
      ),
      createElement(
        "div",
        null,
        createElement("p", { className: "col-gray" }, "CLOSE"),
        createElement("p", { className: "bold-600" }, closeDate)
      )
    ),
    createElement(
      "div",
      { className: "ipo-sizing" },
      createElement(
        "div",
        null,
        createElement("p", { className: "col-gray" }, "ISSUE SIZE"),
        createElement("p", { className: "bold-600" }, issueSize)
      ),
      createElement(
        "div",
        null,
        createElement("p", { className: "col-gray" }, "ISSUE TYPE"),
        createElement("p", { className: "bold-600" }, issueType)
      ),
      createElement(
        "div",
        null,
        createElement("p", { className: "col-gray" }, "LISTING DATE"),
        createElement("p", { className: "bold-600" }, listingDate)
      )
    ),
    createElement(
      "div",
      { className: "rhp-dhrp" },
      createElement(
        "a",
        { className: "btn", href: rhp, download: true },
        "RHP"
      ),
      createElement(
        "a",
        { className: "btn btn--red", href: drhp, download: true },
        "DRHP"
      )
    )
  );
