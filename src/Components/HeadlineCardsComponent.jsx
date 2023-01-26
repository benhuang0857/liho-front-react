import React from "react";

function HeadlineCardsComponent() {
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
                    <p className="px-2">Through 8/26</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl px-4 py-1">Order Now</button>
                </div>
                <img
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1602881917445-0b1ba001addf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRpc2h8ZW58MHx8MHx8&w=1000&q=80" alt="/" />
            </div>
            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
                    <p className="px-2">Through 8/26</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl px-4 py-1">Order Now</button>
                </div>
                <img
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjp4socR6H--UXkn8C0i_837it4hSDjjx0nd_R0-X_KAxfsqrTSy4Zgdisvr4vWjknmfs&usqp=CAU" alt="/" />
            </div>
            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
                    <p className="px-2">Through 8/26</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl px-4 py-1">Order Now</button>
                </div>
                <img
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                src="https://static.cms.yp.ca/ecms/media/1/iStock-511793034-1510087990-600x360.jpg" alt="/" />
            </div>
        </div>
    )
}

export default HeadlineCardsComponent