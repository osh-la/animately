

const Navbar: React.FC = () => {
  return (
    <section >
        <div className="bg-black text-white  h-20 flex items-center text-lg font-bold justify-between">
        <div className="flex p-5 gap-2">
            <a href="/">Animately</a>
            <ul className="flex gap-2">
                <li><a href="">Basic</a></li>
                <li><a href="">Entrances</a></li>
                <li><a href="">Exits</a></li>
                <li><a href="">Text</a></li>
                <li><a href="">Attention</a></li>
                <li><a href="">Background</a></li>

            </ul>
        </div>
        <div className="">
            <img src="/" alt="menu" />
        </div>
        </div>
        <section>
            <div className="bg-black p-10 w-32 h-32 flex justify-center items-center text-lg font-black border rounded-full text-white">
                <a href="">
                    text
                </a>
            </div>
        </section>
        <hr />
        <div className="grid grid-cols-4 p-5">
            <p className="clo-span-1 text-center"><a href="">
                style
            </a></p>

        </div>
    </section>
  )
}

export default Navbar