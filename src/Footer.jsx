import React from "react";
function Footer()
{   
    const now=new Date();
    const yr=now.getFullYear();
    return(
        <footer>
             <p>
        Copyright ©{yr}
        </p>
        </footer>
       
    )
}
export default Footer;