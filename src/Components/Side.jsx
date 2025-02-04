import { useEffect, useState } from "react";

const fetchUserData=async()=>{
const response=await fetch(`https://fakestoreapi.com/products`);
const data=await response.json();
return data;
}

function UserProfile() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //fectch the data userId changes
    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchData = async () => {
            try {
                const data = await fetchUserData(userId);
                setProduct(data);
            }
            catch (err) {
                setError('Failed to fecth user data');
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();

        return () => {
            setProduct([]);
            setLoading(false);
        };

    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
          <p>products List</p>
          <ul>
           {product.map((item)=>(
             <li key={item.id}>
              <h3>{item.title}</h3>
              <p>Price:${item.price}</p>

             </li>
           ))}

          </ul>
        </>
    );


}
export default UserProfile;