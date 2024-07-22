export default function ContactForm() {
    return (
        <div className="flex flex-col gap-5">

            <h1>Is there any message ?</h1>
            <form className="flex flex-col gap-5">
                <div>
                    <div>
                        <label htmlFor="namefield">Name :</label>
                    </div>
                    <div className="">
                        <input className="w-full" type="text" placeholder="Enter your name here" name="namefield" id="namefield"/>
                    </div>
                </div>


                <div>
                    <div>
                        <label htmlFor="emailfield">Email :</label>
                    </div>
                    <div>
                        <input className="w-full" type="email" placeholder="Enter your valid email here" name="emailfield" id="emailfield" />
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="commentfield">Enter your message :</label>
                    </div>
                    <div>
                        <textarea className="w-full" rows={5} type="textarea" placeholder="feel free to give me any feedback" name="commentfield" id="commentfield" />
                    </div>
                </div>

                <div>
                    <input className="font-semibold shadow-md rounded-full px-6 py-2 bg-white text-black hover:bg-black hover:text-white transition" type="submit" />
                </div>
            </form>
        </div>
    )
}