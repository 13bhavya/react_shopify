import React from 'react'

function FilterProdcut(props) {
    return (
        <div>
            {/* {props.fetch.map(x => x.title)} */}

            {props.fetch.filter(name => name.title.includes('m')).map(filteredName => (
                <li>
                    {filteredName.title}
                </li>
            ))}
        </div>
    )
}

export default FilterProdcut
