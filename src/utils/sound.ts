export const playTapSound = () => {
  const audio = new Audio('https://panyero.website/wallet-app/assets/sounds/f2.mp3');
  audio.play().catch(console.error);
};

export const playSuccessSound = () => {
  const audio = new Audio('https://panyero.website/wallet-app/assets/sounds/success.mp3');
  audio.play().catch(console.error);
};