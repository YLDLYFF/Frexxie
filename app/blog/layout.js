import Blognav from "../components/blognav/blognav";
import Footer from "../components/footer/footer";
export const metadata = {
  title: 'Food App/Blog'
}
export default function BlogLayout ( { children } ) {
  return (
    <section className='antialiased font-Poppins overflow-x-hidden relative tablet:w-full h-dvh max-h-vh '>
      <Blognav />
      <div>{ children }</div>
      <Footer />

    </section>
  )
}