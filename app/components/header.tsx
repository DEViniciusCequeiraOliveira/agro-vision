export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="flex items-center justify-between px-[5%] py-3.5">
                <img
                    src="logo.png"
                    alt="Logo AgroVision"
                    className="h-16"
                />

                <nav>
                    <ul className="flex gap-5 list-none">
                        <li>
                            <a
                                href="#home"
                                className="text-[#2E5A33] font-semibold hover:text-[#F2C14E] transition-colors duration-300"
                            >
                                Início
                            </a>
                        </li>
                        <li>
                            <a
                                href="#sobre"
                                className="text-[#2E5A33] font-semibold hover:text-[#F2C14E] transition-colors duration-300"
                            >
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projetos"
                                className="text-[#2E5A33] font-semibold hover:text-[#F2C14E] transition-colors duration-300"
                            >
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a
                                href="#equipe"
                                className="text-[#2E5A33] font-semibold hover:text-[#F2C14E] transition-colors duration-300"
                            >
                                Equipe
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contato"
                                className="text-[#2E5A33] font-semibold hover:text-[#F2C14E] transition-colors duration-300"
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


