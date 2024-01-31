import ListaCategorias from "../categoria/listarcategorias/ListarCategorias";


function Home() {

    return (
        <>
            <div id="container" className="flex justify-center  bg-teal-900">
                <div id="subcontainer" className="container grid grid-cols-2  text-gray-400">
                    <div id="texto" className="flex flex-col gap-4 items-center justify-center py-4  ">
                        <h2 className="text-5xl font-bold">Bem vindos a Farmácia Viva</h2>
                        <p className="text-xl">Navegue por entre produtos e categorias para encontrar o que você precisa!</p>
                        <div className="flex justify-around gap-4">

                            
                            
                            </div>
                        </div>

                        <div id="imagem" className=" flex  justify-center">
                            <img
                                src="src/assets/img/Ecommerce checkout laptop-bro.png"
                                alt="Imagem da Página Home"
                                className="w-2/3"
                            />
                        </div>
                    </div>
                </div>
                <ListaCategorias/>
            </>
            );
}

            export default Home