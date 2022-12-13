import React from "react";

export function Main() {
  return (
    <main className="w-full h-screen flex items-center justify-center pt-[64px] text-white">
      <div className="w-[380px] md:w-[46%] h-[500px] md:h-auto bg-white overflow-auto rounded-2xl border border-zinc-600 shadow-lg">
        <div className="grid gap-4 px-6 py-6">
          <header className="w-full h-auto text-black" translate="no">
            <h2 className="font-serif text-base md:text-lg">
              Faça seu login ou crie sua conta
            </h2>
          </header>

          <section className="w-full h-auto grid gap-6 md:gap-0 md:flex items-start">
            <form className="h-full w-full max-w-[250px] text-black grid gap-3">
              <div className="grid gap-2 md:gap-[1px]">
                <label>Digite seu email</label>
                <input
                  className="outline-none h-8 md:h-10 px-2 border border-zinc-400"
                  type="email"
                  placeholder="Digite seu email"
                  required
                />
              </div>
              <div className="grid gap-2 md:gap-[1px]">
                <label>Digite sua senha</label>
                <input
                  className="outline-none h-8 md:h-10 px-2 border border-zinc-400"
                  type="password"
                  placeholder="Digite sua senha"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-4 py-1 bg-blue-700 text-white"
              >
                Login
              </button>
              <a className="text-blue-600" href="#">
                Esqueci minha senha
              </a>
            </form>

            <div className="block h-[1px] md:h-full w-full md:w-[1px] md:mx-8 bg-zinc-500"></div>

            <div className="w-full grid gap-3 text-black">
              <p>Ou conecte com outra conta</p>

              <div className="grid gap-2">
                <div className="w-full h-10 border border-zinc-400 cursor-pointer hover:bg-sombreamento">
                  <div className="w-full h-full flex items-center gap-6 ml-2">
                    <img src="google-svgrepo-com.svg" alt="" className="h-6 w-6 flex items-center justify-center"></img>
                    <p className="text-sm md:text-[15px]">
                      Continue com o Google
                    </p>
                  </div>
                </div>

                <div className="w-full h-10 border border-zinc-400 cursor-pointer hover:bg-sombreamento">
                  <div className="w-full h-full flex items-center gap-6 ml-2">
                    <img src="facebook-svgrepo-com.svg" className="h-6 w-6 flex items-center justify-center"></img>
                    <p className="text-sm md:text-[15px]">
                      Continue com o Facebook
                    </p>
                  </div>
                </div>

                <div className="w-full h-10 border border-zinc-400 cursor-pointer hover:bg-sombreamento">
                  <div className="w-full h-full flex items-center gap-6 ml-2">
                    <img src="apple-svgrepo-com.svg" className="h-6 w-6 flex items-center justify-center"></img>
                    <p className="text-sm md:text-[15px]">
                      Continue com o Apple
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <h3 className="text-black mt-4">
            Não tem conta ainda?{" "}
            <a href="/registro" className="text-blue-600 cursor-pointer">
              Inscreva-se gratuitamente
            </a>
          </h3>
        </div>
      </div>
    </main>
  );
}