import { Link } from "@phosphor-icons/react";

function Navbar() {
 
    return (
        <>
          <div className='w-full bg-teal-900  text-gray-400
            flex justify-center py-4'>
        
            <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Farmácia</Link>
                <div className='flex gap-4'>
                <Link to='/produtos' className='hover:underline'>Produtos</Link>
                    <Link to='categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                  
                    
               
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar