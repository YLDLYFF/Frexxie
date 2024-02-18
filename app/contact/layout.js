import Contactnav from "../components/contactnav/contactnav";
export const metadata = {
    title:'Food App/Contact Us'
}
export default function MenuLayout({ children }) {
    return (
        <section className='antialiased font-Poppins'>
            <Contactnav/>
            <div>{children}</div>
        
            
        </section>
    )
}