import React from 'react'
import Title from '../ui/Title'

const NewComment = () => {
    const allComent = [
        {
            image:"https://i.ibb.co.com/xGFBCpr/user-1-1.png",
            name:"johan Doe",
            star:2,
            coment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor vel est interdum"
        },
        {
            image:"https://i.ibb.co.com/7kC1DDX/user-3.png",
            name:"Leslie Alexander",
            star:3,
            coment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor vel est interdum"
        },
        {
            image:"https://i.ibb.co.com/9y6fx6L/user-2-1.png",
            name:"Devon Lane",
            star:5,
            coment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor vel est interdum"
        },
        {
            image:"https://i.ibb.co.com/b6SBvJz/user-4-1.png",
            name:"Eleanor Pena",
            star:1,
            coment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor vel est interdum"
        },
        {
            image:"https://i.ibb.co.com/b6SBvJz/user-4-1.png",
            name:"Kathryn Murphy",
            star:3,
            coment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor vel est interdum"
        },
        {
            image:"https://i.ibb.co.com/5YJDLtv/user-5-1.png",
            name:"Leslie Alexander",
            star:5,
            coment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor vel est interdum"
        },
        {
            image:"https://i.ibb.co.com/xGFBCpr/user-1-1.png",
            name:"Devon Lane",
            star:1,
            coment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor vel est interdum"
        },
    ]
  return (
    <div className="bg-white mt-4 rounded-lg">
        <div className="main p-4">
            <div className="item">
                <div className="title">
                    <div className="title">
                        <Title title="New Comments" />
                    </div>
                    <div className="icon h-[300px] overflow-y-auto my-4 element">
                        <div className="item flex flex-col gap-4">
                          {
                            allComent.map((item,index)=>
                                <div key={index} className="item flex gap-4">
                                    <div className="image w-[50px] h-[50px]">
                                        <img src={item?.image} alt="image" />
                                    </div>
                                    <div className="coment">
                                        <p className="first-letter:uppercase font-semibold hover:text-indigo-600 duration-300 cursor-pointer">{item?.name}</p>
                                        <div className="review">
                                            {/* Render stars based on the star rating */}
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className={`${ i < item?.star ? "text-yellow-500" : "text-gray-300"}`}>
                                                ★
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-xs text-[#72737d]">{item?.coment}</p>
                                    </div>
                                </div>
                            )
                          }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewComment