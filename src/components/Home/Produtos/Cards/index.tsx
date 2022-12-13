import React from "react";
import { lojaProdutos } from "../../../../database";
import { CardsImgsInfo } from "./CardsImgsInfo";

export type CardKeys = {
  url: string;
  titulo: string;
  subTitulo: string;
  descrição: string;
}

export function Cards() {
  const cardsInfo = lojaProdutos[0]["cardsInfo"]

  return (
    <>
      <div className="grid grid-cols-projetos gap-14">
        {cardsInfo.map((card: CardKeys) => (
            <>
              <div className="max-h-[30rem] max-w-[300px] relative text-center group border border-zinc-400 rounded-xl">
                <CardsImgsInfo
                  card={card}
                />
              </div>
            </>
        ))}
      </div>
    </>
  );
}