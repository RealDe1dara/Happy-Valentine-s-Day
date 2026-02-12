import { useState } from "react";

interface LoginProps {
  onCloseLogin: () => void;
  onLogin: () => void;
}

const Login = ({ onCloseLogin, onLogin }: LoginProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [IsPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const CORRECT_PASSWORD = import.meta.env.VITE_LOGIN_PASSWORD;

  const handleCloseBouquet = () => {
    setIsClosing(true);
    setTimeout(() => onCloseLogin(), 500);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    if (password === CORRECT_PASSWORD) {
      setIsPasswordCorrect(true);
      setTimeout(() => onLogin(), 1000);
    } else {
      setError(true);
    }
  };

  return (
    <section
      className={`login ${isClosing || IsPasswordCorrect ? "closing" : ""}`}
    >
      <div className="login__wrapper">
        <button className="login__close-btn" onClick={handleCloseBouquet}>
          ✕
        </button>
        <h2 className="login__header">Введи пароль</h2>
        <form className="login__body" onSubmit={handleSubmit}>
          <div className={`login__input--wrapper`}>
            <input
              className="login__input"
              type="password"
              placeholder="**/**/**"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
            />
          </div>
          <button className="login__submit button-full" type="submit">
            Підтвердити
          </button>

          {error && <p className="login__error">Неправильний пароль</p>}
        </form>
      </div>
    </section>
  );
};

export default Login;
