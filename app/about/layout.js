import Aboutnav from "../components/aboutnav/aboutnav";
import Footer from "../components/footer/footer";

export const metadata = {
    title: 'Food App/About Us'
}
export default function AboutLayout ({ children }) {
    return (
        <section className='antialiased font-Poppins overflow-x-hidden relative tablet:w-full h-dvh max-h-vh '>
            <Aboutnav />
            <div>{children}</div>
            <Footer />

        </section>
    )
}