function Contact () {
    return (
    <section className="bg-gradient-to-tl from-slate-900 to-gray-700 p-8">
        <h2>Contact</h2>

        <form action="submit" >
            <div className="flex flex-col gap-y-2 mb-4">
                <input
                type="text"
                label="Name"
                placeholder="Name"
                className=""
                />

                <input
                type="text"
                label="Username"
                placeholder="Email"
                className=""
                />

                <input
                type="text"
                label="Name"
                placeholder="Subject"
                className=""
                />

                
                <textarea
                type="text"
                label="Username"
                placeholder="Please describe your request"
                className=""
                />
            </div>


        <button className=" text-white bg-cyan-700 text-md p-4 rounded-full">
            SEND REQUEST 
          </button>

        </form>


    </section>
    );
  }
export default Contact;