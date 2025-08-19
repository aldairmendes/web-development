const randomizeDices = () => {
      let n = Math.floor(Math.random() * 6) + 1;
      let m = Math.floor(Math.random() * 6) + 1;

      document.querySelector("#img1").setAttribute("src", `./images/dice${n}.png`);
      document.querySelector("#img2").setAttribute("src", `./images/dice${m}.png`);
      
      const title = document.querySelector("h1");
      if (n > m) {
        title.textContent = "🏆 Player 1 Wins!";
      } else if (m > n) {
        title.textContent = "Player 2 Wins! 🏆";
      } else {
        title.textContent = "Draw!";
      }
    };