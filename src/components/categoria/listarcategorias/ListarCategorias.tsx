import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";

import { ThreeDots } from "react-loader-spinner";
import { buscar } from "../../../services/Services";
import CardCategoria from "../cardCategoria/CardCategoria";



function ListaCategorias() {

   

    const [categorias, setCategorias] = useState<Categoria[]>([])


    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            alert('Não foram encontradas categorias!')
        }
    }


useEffect(() => {
    buscarCategorias()
}, [categorias.length])

return (
    <>
        {categorias.length === 0 && (
            <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="flex justify-center m-1"
            />
        )}
        <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <>
                        {categorias.map((categoria) => (
                            <>
                                <CardCategoria key={categoria.id} categoria={categoria} />
                            </>
                        ))}
                    </>
                </div>
            </div>
        </div>
    </>
)
}

export default ListaCategorias;