interface WelcomeLetterProps {
  onRequestOpen: () => void;
  shouldOpen: boolean;
}

const WelcomeLetter = ({ onRequestOpen, shouldOpen }: WelcomeLetterProps) => {
  return (
    <div className="welcome-letter__wrapper">
      <section className="welcome-letter" onClick={onRequestOpen}>
        <div className="welcome-letter__main">
          <div className="welcome-letter__body letter-design ">
            <div
              className={`letter-design__locker ${shouldOpen ? "remove-letter" : ""}`}
            >
              {shouldOpen ? "🔓" : "🔒"}
            </div>

            <div
              className={`letter-design__top ${
                shouldOpen ? "open-letter" : ""
              }`}
            ></div>
            <div
              className={`letter-design__bottom ${
                shouldOpen ? "remove-letter" : ""
              }`}
            ></div>
            <div
              className={`letter-design__left ${
                shouldOpen ? "remove-letter" : ""
              }`}
            ></div>
            <div
              className={`letter-design__right ${
                shouldOpen ? "remove-letter" : ""
              }`}
            ></div>
            <div
              className={`letter-design__back ${
                shouldOpen ? "remove-letter" : ""
              }`}
            ></div>
            <div
              className={`letter-design__inside ${
                shouldOpen ? "get-letter-text" : ""
              }`}
            ></div>
          </div>
          <h2
            className={`welcome-letter__subtitle ${
              shouldOpen ? "remove-letter" : ""
            }`}
          >
            Тицьни тут
          </h2>
        </div>
      </section>
    </div>
  );
};

export default WelcomeLetter;
