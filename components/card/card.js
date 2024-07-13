const { createElement } = React;

const IpoCard = ({
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
    { className: "ipo-card" },
    createElement(
      "div",
      { className: "ipo-card__company-info" },
      createElement("img", { className: "ipo-card__company-logo", src: logo, alt: title }),
      createElement("a", { className: "ipo-card__company-name", href: "#" }, title)
    ),
    createElement(
      "div",
      { className: "ipo-card__pricing" },
      createElement(
        "div",
        { className: "ipo-card__pricing-detail" },
        createElement("p", { className: "ipo-card__label--gray" }, "PRICE BAND"),
        createElement("p", { className: "ipo-card__value--bold" }, priceBand)
      ),
      createElement(
        "div",
        { className: "ipo-card__pricing-detail" },
        createElement("p", { className: "ipo-card__label--gray" }, "OPEN"),
        createElement("p", { className: "ipo-card__value--bold" }, openDate)
      ),
      createElement(
        "div",
        { className: "ipo-card__pricing-detail" },
        createElement("p", { className: "ipo-card__label--gray" }, "CLOSE"),
        createElement("p", { className: "ipo-card__value--bold" }, closeDate)
      )
    ),
    createElement(
      "div",
      { className: "ipo-card__sizing" },
      createElement(
        "div",
        { className: "ipo-card__sizing-detail" },
        createElement("p", { className: "ipo-card__label--gray" }, "ISSUE SIZE"),
        createElement("p", { className: "ipo-card__value--bold" }, issueSize)
      ),
      createElement(
        "div",
        { className: "ipo-card__sizing-detail" },
        createElement("p", { className: "ipo-card__label--gray" }, "ISSUE TYPE"),
        createElement("p", { className: "ipo-card__value--bold" }, issueType)
      ),
      createElement(
        "div",
        { className: "ipo-card__sizing-detail" },
        createElement("p", { className: "ipo-card__label--gray" }, "LISTING DATE"),
        createElement("p", { className: "ipo-card__value--bold" }, listingDate)
      )
    ),
    createElement(
      "div",
      { className: "ipo-card__document-links" },
      createElement(
        "a",
        { className: "ipo-card__button ipo-card__button--rhp", href: rhp, download: true },
        "RHP"
      ),
      createElement(
        "a",
        { className: "ipo-card__button ipo-card__button--drhp", href: drhp, download: true },
        "DRHP"
      )
    )
  );
