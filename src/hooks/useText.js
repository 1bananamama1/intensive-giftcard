import { useEffect, useState } from "react";
import { URI_API } from "../const";

export const useText = (holiday) => {
  const [text, setText] = useState(`Выберите повод для поздравления`);

  useEffect(() => {
    if (!holiday) return;

    fetch(`${URI_API}/text/${holiday}`)
      .then((responce) => {
        if (responce.status !== 200) {
          throw new Error(responce.status);
        }
        return responce.json();
      })
      .then((data) => {
        if (data.text) {
          setText(data.text);
        }
      })
      .catch((er) => console.error(er));
  }, [holiday]);

  return [text];
};
