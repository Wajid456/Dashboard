import c2 from "../../../asset/c2.jpg"
import m1 from "../../../asset/m1.webp"
import m5 from "../../../asset/m5.jpeg"
import m3 from "../../../asset/m3.jpg"
import laptop1 from "../../../asset/laptop1.jpg"
import laptop2 from "../../../asset/laptop2.avif"
import laptop3 from "../../../asset/laptop3.jpg"

// Columns
export const columns = [
    { field: 'id', headerName: 'ID', width: 210 },
    {field:'name', headerName:'Name', width:210},
    {field:'image', headerName:'Image', width:210,
     
    renderCell: (elem)=>{
    return (
    <div>
    <img src={elem.row.image} alt="" className="h-[50px] w-[50px]" />
    </div>
    )
    }

    },
    {field:'price', headerName:'Price', width:210},

    {field:'action', headerName:'Action', width:210,
    renderCell: ()=>{
    return (
      <div>
      <button className="bg-[blue] rounded px-4 py-1 text-white">Edit</button>
      <button className=" bg-[red] mx-2 rounded px-4 py-1 text-white">Delete</button>
      </div>
    )
    }
     },
  ];

//   Rows
  export const rows = [
    { id: 1, 
      name: 'Samsung Galaxy S1', 
      image: m1 , 
      price: 35000 },
    
    { id: 2, 
      name: 'Canon EOS', 
      image: c2, 
      price: 200000 },
    { id: 3, 
      name: 'Microsoft Surface', 
      image: laptop1, 
      price: 50000 },
      { id: 4, 
        name: 'DSLR Camera', 
        image: c2, 
        price: 120000 },
        { id: 5, 
            name: 'Samsung Galaxy S3', 
            image: m3, 
            price: 40000 },
    { id: 6, 
      name: 'HP Core i3', 
      image: laptop2, 
      price: 60000 },
    { id: 7, 
      name: 'Dell Inspiron', 
      image: laptop3, 
      price: 70000 },
    { id: 8, 
      name: 'Samsung Galaxy S2', 
      image: m5, 
      price: 80000 },
      { id: 9, 
        name: 'Nikon Z 6', 
        image: c2, 
        price: 150000},
    
        { id: 10, 
            name: 'Samsung Galaxy S1', 
            image: m1 , 
            price: 35000 },
          
          { id: 11, 
            name: 'Canon EOS', 
            image: c2, 
            price: 200000 },
          { id: 12, 
            name: 'Microsoft Surface', 
            image: laptop1, 
            price: 50000 },
            { id: 13, 
              name: 'DSLR Camera', 
              image: c2, 
              price: 120000 },
              { id: 14, 
                  name: 'Samsung Galaxy S3', 
                  image: m3, 
                  price: 40000 },
          { id: 15, 
            name: 'HP Core i3', 
            image: laptop2, 
            price: 60000 },
          { id: 16, 
            name: 'Dell Inspiron', 
            image: laptop3, 
            price: 70000 },
          { id: 17, 
            name: 'Samsung Galaxy S2', 
            image: m5, 
            price: 80000 },
          { id: 18, 
              name: 'Nikon Z 6', 
              image: c2, 
              price: 150000},    
          { id: 19, 
                name: 'Dell Inspiron', 
                image: laptop3, 
                price: 70000 },
          { id: 20, 
            name: 'HP Core i3', 
            image: laptop2, 
            price: 60000 },
  ];