const ClientsPage = () => {

    const clientsImg = [
        {image: "assets/client1.png"},
        {image: "assets/client2.png"},
        {image: "assets/client3.png"},
        {image: "assets/client4.png"},
        {image: "assets/client5.png"},
        {image: "assets/client6.png"},
        {image: "assets/client7.png"}
    ];

  return (
    <div className="flex flex-col items-center">
        <h1 className="font-medium text-gray-500 text-3xl mb-2 mt-5">Our Clients</h1>
        <h1 className=" text-gray-500">We have been working with some Fortune 500+ clients</h1>

        <div className="flex justify-evenly w-full px-10">
            {clientsImg.map((client) => <img src={client.image} className="my-10" />)}
        </div>
        
    </div>
  )
}

export default ClientsPage
