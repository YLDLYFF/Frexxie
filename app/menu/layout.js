
import Menunav from "../components/menunav/menunav";
export const metadata = {
    title:'Food App/The Menu'
}
export default function MenuLayout({ children }) {
    return (
        <section className='antialiased font-Poppins'>
            <Menunav/>
            <div>{children}</div>
        
            
        </section>
    )
}