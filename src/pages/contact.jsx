import ContactForm from '../components/contactForm';
export default function Contact() {

    return (
        <div className="flex flex-col md:flex-row mb-auto mt-10 gap-10 p-5 min">
            <div className='w-full md:w-1/2'>
                <div className="mx-auto flex flex-col gap-5">
                    <h2>Ready to Talk ?</h2>
                    <h1 className="uppercase text-5xl font-bold">Contact Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit repudiandae, ex illum veritatis quod a veniam officiis at vitae repellat amet deleniti laudantium praesentium ducimus debitis, accusamus corporis, ratione est porro autem! Optio saepe eligendi fuga consequuntur voluptatum iure tempore, culpa, at quas incidunt amet. Fugit minima ducimus repellendus magnam non debitis, nemo aut animi fugiat dolores incidunt illum officiis excepturi, temporibus, sint odit molestias error ipsam praesentium quas eligendi quo rerum! Consequatur magni fuga quibusdam culpa blanditiis eum provident sit ut veniam voluptatem praesentium sed, natus voluptas, qui nostrum distinctio! Soluta, iste. Eius vel tempore quisquam cum veritatis fuga!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, ipsam ab? Odio dolore ipsa vel. Sit impedit repellendus eum eveniet, earum voluptatum vero nam? Animi, maxime ea sint cupiditate sunt alias molestiae quo deserunt numquam eum assumenda tempora laboriosam exercitationem qui esse sed nesciunt quos debitis ut nam! Dolorem tempora pariatur ex quos. Porro autem a aspernatur rem dolorum! Temporibus, quas unde? Laborum ducimus quis expedita, odit molestias consequatur atque molestiae, maxime enim id nemo modi consectetur nisi eos cum deserunt quae est, facere quisquam maiores deleniti iusto tempora ea aperiam! Ullam dolores obcaecati quis eaque, possimus quidem facere tenetur?</p>
                </div>
            </div>

            <div className='w-full md:w-1/2'>
                
                <ContactForm />
            </div>
                
        </div>
    )
}