
import Footer from "../components/footer/footer";
import Menunav from "../components/menunav/menunav";


export const metadata = {
    title: 'Food App/The Menu'
}
export default function MenuLayout ( { children } ) {
    return (
        <section className='antialiased font-Poppins '>
            <Menunav />
            <div className=' mt-16 '>{ children }</div>
            <Footer />

        </section>
    )
}