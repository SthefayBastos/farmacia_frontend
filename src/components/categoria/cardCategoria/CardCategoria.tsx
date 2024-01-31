import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"


interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-teal-900 font-bold text-2xl'>Categoria</header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
            
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className=' font-bold w-full bg-teal-900  text-gray-400 hover:bg-slate-700
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} className='font-bold bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategoria