import { useState } from "react";

import GreetingCard from "./components/GreetingCard";
import WelcomeLetter from "./components/WelcomeLetter";
import FloatingHearts from "./components/FloatingHearts";
import PhotoGallery from "./components/PhotoGallery";
import Bouquet from "./components/Bouquet";
import Login from "./components/Login";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [showMemories, setShowMemories] = useState(false);
  const [showBouquet, setShowBouquet] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [shouldOpenLetter, setShouldOpenLetter] = useState(false);
  const [isOpeningLetter, setIsOpeningLetter] = useState(false);

  const handleOpenEnvelope = () => {
    setShowEnvelope(false);
    setShowMessage(true);
  };

  const handleOpenMemories = () => {
    setShowMemories(true);
  };

  const handleCloseMemories = () => {
    setShowMemories(false);
  };

  const handleOpenBouquet = () => {
    setShowBouquet(true);
  };

  const handleCloseBouquet = () => {
    setShowBouquet(false);
  };

  const handleCLoseLogin = () => {
    setShowLogin(false);
  };

  const startLetterOpen = () => {
    if (isOpeningLetter) {
      return;
    }

    setIsOpeningLetter(true);
    setShouldOpenLetter(true);
    setTimeout(() => handleOpenEnvelope(), 5000);
  };

  const handleRequestOpen = () => {
    if (isAuthed) {
      startLetterOpen();
      return;
    }

    setShowLogin(true);
  };

  const handleLogin = () => {
    setIsAuthed(true);
    setShowLogin(false);
    startLetterOpen();
  };

  return (
    <>
      {showEnvelope && (
        <WelcomeLetter
          onRequestOpen={handleRequestOpen}
          shouldOpen={shouldOpenLetter}
        />
      )}
      {showLogin && (
        <Login onCloseLogin={handleCLoseLogin} onLogin={handleLogin} />
      )}
      {showMessage && (
        <GreetingCard
          onOpenMemories={handleOpenMemories}
          onOpenBouquet={handleOpenBouquet}
        />
      )}
      {showMemories && <PhotoGallery onCloseMemories={handleCloseMemories} />}
      {showBouquet && <Bouquet onCloseBouquet={handleCloseBouquet} />}
      {!showMemories && !showBouquet && <FloatingHearts />}
    </>
  );
}

export default App;
