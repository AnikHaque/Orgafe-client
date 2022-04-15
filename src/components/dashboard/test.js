<h1 className="fw-bold mt-2 text-center mb-5">Orders Placed : {foods.length}</h1>
              <div className="service-container  pt-4 pb-4">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
            {foods.map((pd, index) => (

<div class="col">
<div class="card h-100 bg-my-order text-white menu-details pt-3 pb-5">
      
      <div class="card-body">
          <img src={pd.image} className='img-fluid w-100'></img>
        {/* <h4 class="card-title text-center mt-5 text-light"><b className='text-warning'>Ordered by:</b>{pd.name}</h4>
        <h4 class="card-title text-center  text-light"><b className='text-warning'>Ordered Food:</b>{pd.foodname}</h4>
        <h5 className="text-center"><b className='text-warning'>Food Price:</b> {pd.price} Taka</h5>
        <h5 className="text-center"><b className='text-warning'>Delivery Address:</b> {pd.address} </h5> */}
        <ol className='mt-4'>
          <li className='text-dark'><b>Ordered By:</b> {user.displayName}</li>
          <li className='text-dark'><b>Ordered Food:</b> {pd.foodname}</li>
          <li className='text-dark'><b>Food Price:</b> {pd.price}</li>
          <li className='text-dark'><b>Delivery Address</b> {pd.address}</li>
          
        </ol>
      </div>
      
       
</div>
</div>
  ))}
</div>
</div>
</div>