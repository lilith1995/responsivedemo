import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="components">
        <div className="column">
          <img
            src="https://www.freedomdebtrelief.com/next-assets/person.svg"
            alt="person"
          />
          <p className="text">Over 650.000 clients enrolled</p>
        </div>
        <div className="column">
          <img src="/cash.svg" alt="cash" />
          <p className="text">
            Free, no-risk credit card dept relief consultation
          </p>
        </div>
        <div className="column">
          <img src="/check.svg" alt="check" />
          <p className="text">Over $10 billion debt resolved since 2002</p>
        </div>
      </div>
    </div>
  );
};
