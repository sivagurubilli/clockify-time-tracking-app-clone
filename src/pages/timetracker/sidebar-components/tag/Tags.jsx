import React from 'react'
 import "./Tag.css"
export const Tags = () => {
  return (
    <div className="product__container">
    <div id="product__container__sidebar" className="product__container__sidebar">
    </div>
    <div id="product__container__content" className="product__container__content">
         <div className="mainBody">
             <div className="innerBody__upgrade">
                 <p>PREMIUM features<button>Upgrade</button></p>
             </div>
 
             <div className="mainBody__heading"><p>Tags</p></div>
 
             <fieldset disabled>
                 <div className="innerBody__groupProjects">
                     <div>
                         <select name="options" className="groupProjects__options">
                             <option value="client">Show active</option>
                             <option value="department">Show archived</option>
                             <option value="ategory">Show all</option>
                         </select>
                         <input type="text" value="Search by name" className="search__name"/>
                         
                         <input type="text" value="Add new tag" className="add__new__client"/>
                         <button className="add__new__btn">ADD</button>
                     </div>
     
                 </div>
 
                 <div className="clients__input">
                     <input type="text" value="Name"/>
                 </div>
             </fieldset>
         </div>
     </div>
 </div>

  )
}
