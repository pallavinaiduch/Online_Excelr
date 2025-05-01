//functional component
const Header= () =>{
    let menus=["Home","About","Contact","Services","portfolio"];
    return(
        <>
            <h1>Header</h1>
            <ul>
                
                    {menus.map((element)=>(
                        <li>{element}</li>
                    ))}
                
            </ul>
        </>
    )
}
export default Header;