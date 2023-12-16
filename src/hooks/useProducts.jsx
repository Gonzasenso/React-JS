import {useState, useEffect} from "react";
import { getDocs, getFirestore, collection, getDoc, doc, query, where} from "firebase/firestore";

export const useAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, "products");
    getDocs(collectionRef)
    .then((res) => {
        const data = res.docs.map((doc) => ( {
            id: doc.id,
            ...doc.data(),
        }));
        setProducts(data);
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false));

}, []);

return {products, loading, error};
};

export const useSingleProduct = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

useEffect(() => {
   const db = getFirestore();
   const docRef = doc(db, "products", id);

   getDoc(docRef)
   .then((res) => {
    setProduct({ id: res.id, ...res.data() });
   })
   .catch(() => setError(true))
   .finally(() => setLoading(false));
},[]);

return {product, loading, error};
};

export const useAllProductsByCategory = (categoryId) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, "products");
    
    const categoryQuery = query(collectionRef, where("category", "==", categoryId))

    getDocs(categoryQuery)
    .then((res) => {
        const data = res.docs.map((doc) => ( {
            id: doc.id,
            ...doc.data(),
        }));
        setProducts(data);
    })
    .catch((err) => setError(true))
    .finally(() => setLoading(false));


}, [categoryId]);

return {products, loading, error};
};