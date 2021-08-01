
import CartWidget from "./CartWidget"
import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer"
import Contador from "./Contador"



const Header = () => {

                

                return (  <header>

                        <CartWidget/>

                    <h1>TIENDA ECOMMERCE</h1>

                        <NavBar/>

                        <ItemListContainer/>

                        <Contador/>

                        

                        </header>  )
            }


  export default Header