import { useState, useContext, createContext } from "react";
import { defaultColors } from "../constants/LayoutTemplate";

const BotColorsContext = createContext();
const UpdateBotColorsContext = createContext();

export const useBotColorsContext = () => {
  return useContext(BotColorsContext);
};

export const useUpdateBotColorsContext = () => {
  return useContext(UpdateBotColorsContext);
};

export const BotColorsProvider = ({ children }) => {
  const [botColors, setBotColors] = useState(defaultColors);
  return (
    <BotColorsContext.Provider value={botColors}>
      <UpdateBotColorsContext.Provider value={setBotColors}>
        {children}
      </UpdateBotColorsContext.Provider>
    </BotColorsContext.Provider>
  );
};