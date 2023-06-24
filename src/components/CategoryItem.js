function Category({ category }) {
    return (
        <div style={{'background': category.color}} className="relative rounded-lg overflow-hidden before:pt-full before:block">
            <div className="absolute inset-0">
                <h3 className="p-4 text-2xl tracking-tighter font-semibold">
                {category.title}
                </h3>
                <img className="absolute bottom-0 right-0 h-25 w-25 rounded rotate-25 shadow-spotify translate-x-18/100 translate-y-1/20" src={category.cover} alt="" />
            </div>
        </div>
    )
}


export default Category