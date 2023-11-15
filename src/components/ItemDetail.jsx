export const ItemDetail = ({ item }) => {

    return (
        <>
        <div className="ContenedorDetail">
        <div>
                <h1 className="TitleDetail">{item.title}</h1>
                <img className="ImageDetail" src={item.pictureUrl} />
            </div>
            <div className="DescripDetail">
                {item.description}
            </div>
        </div>
          
        </>
    );

};

