import { Header } from "../components/Header";

function Home() {
  return (
    <>
      <Header/>
      <main className="p-2 max-w-3xl block m-auto">
        <img className="rounded-full w-52 block mx-auto mb-4" src="https://github.com/lucassnts963.png"/>
        <h2 className="text-lg text-center">Olá, eu sou <strong className="text-red-500">Lucas Santos</strong></h2>
        <p className="text-center text-sm text-zinc-500 mb-4">
          Apaixonado por códigos.
        </p>
        <p className="text-justify mb-4">
          <i>
          "O objetivo desse espaço é registrar os conhecimentos adquiridos na minha jornada em busca de uma vaga de desenvolvedor no mercado de trabalho, na esperança de deixar minha contribuição para outras pessoas que buscam o mesmo conhecimento."
          </i>
        </p>
        
        <p className="text-sm text-red-500 text-center mb-4">
          Convido a você favoritar esse site, que muitas coisas interessantes
          vão surgir por aqui. Valeu!
        </p>

        <h2 className="text-2xl font-bold text-center text-red-500 mb-8">Projetos</h2>

        <a className="bg-red-500 p-4 rounded-lg block mx-auto max-w-xs text-center font-bold hover:bg-red-600 mb-4" href="https://github.com/lucassnts963/telegram-chatgpt-integration" target="_blank">Integração do Telegram com ChatGPT</a>

        <a className="bg-red-500 p-4 rounded-lg block mx-auto max-w-xs text-center font-bold hover:bg-red-600 mb-4" href="https://github.com/lucassnts963/todo" target="_blank">App de TODO</a>
        
      </main>
    </>
  );
}

export default Home;
