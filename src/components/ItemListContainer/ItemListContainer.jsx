import estilos from './ItemListContainer.module.css';

const ItemListContainer = ({greeting}) => {
return(
    <div className={estilos.container}>
        {greeting} 
    </div>
);
}

export default ItemListContainer;