'use client';
import { useRouter } from 'next/navigation';

export default function HomePage() {
    const router = useRouter();
    return (
        <>
            {/* Seção Home */}
            <section
                id="home"
                className="hero bg-gradient-to-r from-[#2E5A33] to-[#4E944F] text-white h-screen flex items-center justify-center text-center px-10"
            >
                <div className="hero-content">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Fortalecendo a Agricultura Regional
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Consultoria especializada em gestão, cooperativismo e desenvolvimento
                        sustentável.
                    </p>
                    <a
                        href="#sobre"
                        className="btn bg-[#F2C14E] text-[#2E5A33] font-bold py-2.5 px-6 rounded-full hover:bg-[#4E944F] hover:text-white transition"
                    >
                        Saiba Mais
                    </a>
                </div>
            </section>


            {/* Seção Sobre */}
            <section id="sobre" className="section py-20 px-[10%] text-center">
                <h2 className="text-3xl font-bold text-[#2E5A33] mb-6">
                    Sobre Nós
                </h2>
                <p className="text-lg leading-relaxed text-[#333]">
                    A <strong>AgroVision Consultoria</strong> é uma iniciativa formada por
                    estudantes e profissionais das áreas de Administração, Contabilidade,
                    Direito e TI, dedicada a apoiar pequenos e médios produtores rurais de
                    Feira de Santana. Nosso objetivo é promover a organização de
                    cooperativas, capacitar em gestão e impulsionar o acesso a crédito e
                    mercados, fortalecendo a agricultura regional.
                </p>

                <div className="mt-16 flex justify-center ">
                    <video
                        src="/pitch.mp4"
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="rounded-2xl shadow-lg w-full max-w-2xl"
                    >
                        Seu navegador não suporta vídeos HTML5.
                    </video>
                </div>
            </section>

            {/* Seção Projetos */}
            <section id="projetos" className="section bg-[#f9f9f9] py-20 px-[10%] text-center">
                <h2 className="text-3xl font-bold text-[#2E5A33] mb-6">Projetos</h2>
                <p className="text-lg text-[#333] mb-10 leading-relaxed">
                    Nosso principal projeto é o{" "}
                    <strong>
                        “Fortalecimento da Agricultura Regional por meio da Estruturação de
                        Cooperativas e Capacitação em Gestão”
                    </strong>
                    . A iniciativa oferece consultoria em gestão, capacitação técnica e
                    apoio estratégico aos produtores rurais, visando sustentabilidade,
                    competitividade e inovação no campo.
                </p>

                <div className="cards flex flex-wrap justify-center gap-8 mt-8">
                    {[
                        {
                            title: "Gestão e Finanças",
                            desc: "Capacitação em planejamento, controle de custos e acesso a crédito.",
                        },
                        {
                            title: "Cooperativismo",
                            desc: "Formalização e fortalecimento de cooperativas com base em boas práticas de governança.",
                        },
                        {
                            title: "Sustentabilidade",
                            desc: "Promoção de práticas agrícolas responsáveis e sustentáveis, com impacto social positivo.",
                        },
                    ].map((card) => (
                        <div
                            key={card.title}
                            className="bg-white p-6 rounded-xl shadow-md w-72 hover:-translate-y-1 transition-transform"
                        >
                            <h3 className="text-xl font-semibold text-[#2E5A33] mb-2">
                                {card.title}
                            </h3>
                            <p className="text-[#333]">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Seção Equipe */}
            <section id="equipe" className="section py-30 px-[10%] text-center">
                <h2 className="text-3xl font-bold text-[#2E5A33] mb-6">Nossa Equipe</h2>
                <div className="team flex flex-wrap justify-center gap-6 mt-8">
                    {[
                        { nome: "Caio Sampaio Santana" },
                        { nome: "Diwary Ângelo Araújo Lima" },
                        { nome: "Ingrid Franca de Carvalho" },
                        { nome: "Joanderson Macedo da Silva" },
                        { nome: "José Antônio Barreiros Dantas" },
                        { nome: "Sandy de Almeida Carneiro" },
                        { nome: "Victoria Luiza Magalhães Lima" },
                        { nome: "Vinícius Cerqueira Oliveira" }
                    ].map((membro) => (
                            <div
                                key={membro.nome}
                                className="bg-white p-5 rounded-xl shadow-md w-56"
                            >
                                <h3 className="text-lg font-semibold text-[#2E5A33] mb-1">
                                    {membro.nome}
                                </h3>
                            </div>
                        ))}
                </div>
            </section>

            {/* Seção Contato */}
            <section id="contato" className="section bg-[#f9f9f9] py-20 px-[10%] text-center">
                <h2 className="text-3xl font-bold text-[#2E5A33] mb-6">Entre em Contato</h2>
                <p className="text-lg text-[#333] mb-6">
                    Tem interesse em saber mais sobre nossos projetos ou quer fazer parte
                    dessa transformação?
                </p>

                <form className="contact-form flex flex-col gap-4 max-w-md mx-auto mt-6">
                    <input
                        type="text"
                        placeholder="Seu nome"
                        required
                        className="p-3 rounded-lg border border-gray-300"
                    />
                    <input
                        type="email"
                        placeholder="Seu e-mail"
                        required
                        className="p-3 rounded-lg border border-gray-300"
                    />
                    <textarea
                        placeholder="Sua mensagem"
                        rows={5}
                        required
                        className="p-3 rounded-lg border border-gray-300"
                    ></textarea>
                    <button
                        type="submit"
                        className="btn bg-[#F2C14E] text-[#2E5A33] font-bold py-2.5 px-6 rounded-full hover:bg-[#4E944F] hover:text-white transition"
                    >
                        Enviar
                    </button>
                </form>
            </section>

            {/* Rodapé */}
            <footer className="bg-[#2E5A33] text-white text-center py-5">
                <p>
                    &copy; 2025 AgroVision Consultoria • Todos os direitos reservados
                    <a
                        href="https://www.instagram.com/agrovisionfsa"
                        target="_blank"
                        className="ml-2 text-[#F2C14E] hover:underline"
                    >
                        Instagram
                    </a>
                </p>
            </footer>
        </>
    );
}