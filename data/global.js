const global = (path) => {
    return {
        title: 'GALERIA TES 2024 GRUPO SAN MIGUEL',
        menuOptions: getMenuWithActivePath(path)
    }
}

const getMenuWithActivePath = (path)=>{
    return  [
        {
            label: 'UNICAH',
            url: 'https://www.unicah.edu/',
            page: 'index',
        }
      
    ].map( o => {
        return {
            ...o,
            active: path.includes(o.url)
        }
    });
}

export default global;