export const metadata = {
  title: 'Contact',
  description: 'At here you can even contact me',
};

export default function Contact() {
  return (
    <>
      <h1 className="text-center max-w-full text-xl">Say Hi!</h1>
      <form
        action="https://getform.io/f/eae033ab-4929-48bc-8998-c3132a29900b"
        method="POST"
        className="mt-2 flex flex-col"
      >
        <div className="flex max-w-full">
          <input
            className="flex-1 mx-1 outline-none p-1 bg-neutral-800"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="flex-1 mx-1 outline-none p-1 bg-neutral-800"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col mt-2">
          <input
            className="mx-1 outline-none p-1 bg-neutral-800"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            rows={17}
            className="flex-1 block mx-1 outline-none p-1 bg-neutral-800 resize-none mt-2"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="flex flex-1 px-1">
          <button
            className="flex-1 mx-auto mt-1 border-2 border-neutral-100 hover:bg-neutral-100 hover:text-neutral-800 py-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
