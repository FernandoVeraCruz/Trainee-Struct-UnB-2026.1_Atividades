import { useState } from "react";
import sorriso from "./assets/sorriso.jpg";

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className="bg-[#333] text-white py-10 text-center">
        <div>
          <h1 className="text-4xl font-bold">
            Bem-vindo ao Projeto Struct
          </h1>

          <h2 className="text-xl mt-2">
            Primeira atividade utilizando HTML
          </h2>
        </div>
      </header>

      <nav className="bg-[#444] py-2.5">
        <div
          className="block md:hidden text-center text-white text-4xl cursor-pointer"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          =
        </div>

        <ul
          className={`
            ${
              menuAberto
                ? "flex flex-col items-center"
                : "hidden"
            }
            md:flex md:flex-row md:justify-center
          `}
        >
          <li className="mx-[15px] my-[10px] md:my-0">
            <a
              href="#sobre"
              className="text-white font-bold no-underline"
            >
              Sobre
            </a>
          </li>

          <li className="mx-[15px] my-[10px] md:my-0">
            <a
              href="#equipe"
              className="text-white font-bold no-underline"
            >
              Equipe
            </a>
          </li>

          <li className="mx-[15px] my-[10px] md:my-0">
            <a
              href="#contato"
              className="text-white font-bold no-underline"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <main>
        <section
          id="sobre"
          className="
            bg-white
            max-w-[800px]
            mx-auto
            my-5
            p-5
            border-2
            border-[#333]
            rounded-lg
            text-center
            w-[90%]
            md:w-auto
          "
        >
          <h1 className="text-3xl font-bold mb-4">
            Sobre o Projeto
          </h1>

          <p className="leading-relaxed">
            Esta página foi criada para praticar a estrutura básica
            do HTML utilizando tags semânticas. O objetivo é
            demonstrar o uso de elementos como header, nav,
            main, section, article e footer.
          </p>
        </section>

        <section
          id="equipe"
          className="
            bg-white
            max-w-[800px]
            mx-auto
            my-5
            p-5
            border-2
            border-[#333]
            rounded-lg
            text-center
            w-[90%]
            md:w-auto
          "
        >
          <h1 className="text-3xl font-bold mb-6">
            Equipe
          </h1>

          <article className="my-5">
            <h3 className="text-xl font-semibold">
              Fernando Vera-Cruz
            </h3>

            <p>
              Participante do processo trainee da Struct.
            </p>
          </article>

          <article className="my-5">
            <h3 className="text-xl font-semibold mb-4">
              Teste das TAGS
            </h3>

            <img
              src={sorriso}
              alt="Imagem de um sorriso"
              className="max-w-full h-auto mx-auto"
              width={650}
            />
          </article>
        </section>

        <section
          id="contato"
          className="
            bg-white
            max-w-[800px]
            mx-auto
            my-5
            p-5
            border-2
            border-[#333]
            rounded-lg
            text-center
            w-[90%]
            md:w-auto
          "
        >
          <h1 className="text-3xl font-bold mb-6">
            Contato
          </h1>

          <form>
            <label htmlFor="nome">Nome:</label>
            <br />

            <input
              type="text"
              id="nome"
              name="nome"
              className="border p-2"
            />

            <br />
            <br />

            <label htmlFor="cor">Color:</label>
            <br />

            <input
              type="color"
              id="cor"
              name="cor"
            />

            <br />
            <br />

            <label htmlFor="email">Email:</label>
            <br />

            <input
              type="email"
              id="email"
              name="email"
              className="border p-2"
            />

            <br />
            <br />

            <label htmlFor="data">Data:</label>
            <br />

            <input
              type="date"
              id="data"
              name="data"
              className="border p-2"
            />

            <br />
            <br />

            <label htmlFor="hora">Hora:</label>
            <br />

            <input
              type="time"
              id="hora"
              name="hora"
              className="border p-2"
            />

            <br />
            <br />

            <label htmlFor="CPF">CPF:</label>
            <br />

            <input
              type="text"
              id="CPF"
              name="CPF"
              className="border p-2"
            />

            <br />
            <br />

            <label htmlFor="texto">
              Texto:
            </label>

            <br />

            <textarea
              id="texto"
              name="texto"
              rows={4}
              cols={30}
              className="border p-2"
            />

            <br />
            <br />

            <button
              type="submit"
              className="
                bg-[#333]
                text-white
                px-4
                py-2
                rounded
                hover:opacity-90
              "
            >
              Enviar
            </button>
          </form>
        </section>
      </main>

      <footer className="text-center p-5 bg-[#333] text-white">
        <p>
          © 2026 - Projeto desenvolvido para a atividade Struct.
        </p>
      </footer>
    </>
  );
}