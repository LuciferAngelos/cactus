import React, { useState, useEffect } from 'react';
import './App.css';

const imageList = [
  "https://t4.ftcdn.net/jpg/05/19/80/25/360_F_519802561_SQwF4PYgry25b2Lj3xSwl9Xi5Vnb5e8s.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALBw8r9YfYxguAyZzs4cR7CBmO6_gv2m59w&s",
  "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/12/17/1418821590285/f4814765-4bd1-41e5-9ed4-6130f298296a-783x1020.jpeg?width=445&dpr=1&s=none&crop=none",
  "https://media.gettyimages.com/id/171342480/photo/hot-ass.jpg?s=612x612&w=gi&k=20&c=KrW3g2V1WjHt8bxKyaowOkcFzb2gcgmaOOSte8Ceplk=",
  "https://as1.ftcdn.net/v2/jpg/02/57/54/14/1000_F_257541499_rFTh5CEOgqknkaXgH3Puiex6uiU0Aegr.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20220831/pngtree-very-fine-girl-ass-back-beauty-beautiful-ass-girl-beauty-photo-image_33552452.jpg",
  "https://thumbs.dreamstime.com/b/beautiful-female-woman-perfect-ass-skincare-sexy-woman-smooth-body-skin-female-lingerie-fashion-womens-beauty-beautiful-226926985.jpg",
  "https://www.shutterstock.com/image-photo/perfect-young-woman-ass-sexy-600nw-1444763732.jpg",
  "https://www.shutterstock.com/image-photo/big-sexy-ass-belly-beautiful-600nw-615877016.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20220831/pngtree-very-fine-girl-ass-back-beauty-beautiful-ass-girl-beauty-photo-image_33552452.jpg",
  "https://thumbs.dreamstime.com/b/beautiful-female-woman-perfect-ass-skincare-sexy-woman-smooth-body-skin-female-lingerie-fashion-womens-beauty-beautiful-226926985.jpg",
  "https://www.shutterstock.com/image-photo/perfect-young-woman-ass-sexy-600nw-1444763732.jpg",
  "https://www.shutterstock.com/image-photo/big-sexy-ass-belly-beautiful-600nw-615877016.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20220831/pngtree-very-fine-girl-ass-back-beauty-beautiful-ass-girl-beauty-photo-image_33552452.jpg",
  "https://thumbs.dreamstime.com/b/beautiful-female-woman-perfect-ass-skincare-sexy-woman-smooth-body-skin-female-lingerie-fashion-womens-beauty-beautiful-226926985.jpg",
  "https://www.shutterstock.com/image-photo/perfect-young-woman-ass-sexy-600nw-1444763732.jpg",
  "https://www.shutterstock.com/image-photo/big-sexy-ass-belly-beautiful-600nw-615877016.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20220831/pngtree-very-fine-girl-ass-back-beauty-beautiful-ass-girl-beauty-photo-image_33552452.jpg",
  "https://thumbs.dreamstime.com/b/beautiful-female-woman-perfect-ass-skincare-sexy-woman-smooth-body-skin-female-lingerie-fashion-womens-beauty-beautiful-226926985.jpg",
  "https://www.shutterstock.com/image-photo/perfect-young-woman-ass-sexy-600nw-1444763732.jpg",
  "https://www.shutterstock.com/image-photo/big-sexy-ass-belly-beautiful-600nw-615877016.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20220831/pngtree-very-fine-girl-ass-back-beauty-beautiful-ass-girl-beauty-photo-image_33552452.jpg",
  "https://thumbs.dreamstime.com/b/beautiful-female-woman-perfect-ass-skincare-sexy-woman-smooth-body-skin-female-lingerie-fashion-womens-beauty-beautiful-226926985.jpg",
  "https://www.shutterstock.com/image-photo/perfect-young-woman-ass-sexy-600nw-1444763732.jpg",
  "https://www.shutterstock.com/image-photo/big-sexy-ass-belly-beautiful-600nw-615877016.jpg",
];

const App = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        setIsLoading(false);
        return prev;
      });
    }, 15);
  }, []);

  const handleSpin = () => {
    setIsSpinning(true);

    // Останавливаем через 3 секунды
    setTimeout(() => {
      setIsSpinning(false);
      setIsWinner(true);
    }, 3000);
  };

  return (
    <div className="App">
      {isLoading ? (
        <div className="preloader">
          <h1>Загрузка</h1>
          <div className="loading-text">Загрузка {loadingProgress}%</div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${loadingProgress}%` }}></div>
          </div>
        </div>
      ) : isWinner ? (
        <div className="winner-screen">
          <h1>You Win!</h1>
        </div>
      ) : (
        <div className="content">
          <div className={`spin-area ${isSpinning ? 'spinning' : ''}`}>
            <div className="bonus-images">
              {imageList.map((src, index) => (
                <img key={index} src={src} alt={`Bonus ${index + 1}`} />
              ))}
            </div>
          </div>
          <button className="spin-button" onClick={handleSpin}>
            Крути бонус
          </button>
        </div>
      )}
    </div>
  );
};

export default App;