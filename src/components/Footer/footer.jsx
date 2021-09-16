import "./footer.scss";

import person from "../../assets/person.svg";
import cash from "../../assets/cash.svg";
import check from "../../assets/cash.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="components">
        <div className="column">
          <img src={person} alt="Person" />
          <p className="text">Over 650.000 clients enrolled</p>
        </div>
        <div className="column">
          <img src={cash} alt="cash" />
          <p className="text">
            Free, no-risk credit card dept relief consultation
          </p>
        </div>
        <div className="column">
          <img src={check} alt="check" />
          <p className="text">Over $10 billion debt resolved since 2002</p>
        </div>
      </div>
    </div>
  );
};
