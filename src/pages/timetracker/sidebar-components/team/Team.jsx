import React from 'react'
  import "./Team.css"   
const Team = () => {
  return (
    <div className="product__container">
       <div id="product__container__sidebar" className="product__container__sidebar">
       </div> 
           <div id="product__container__content" className="product__container__content">
            <div className="mainBody">
                <div className="innerBody__upgrade">
                    <p>PREMIUM features<button>Upgrade</button></p>
                </div>
    
                <div className="mainBody__heading"><p>Team</p></div>
                <div className="mainBody__options">
                    <ul>
                        <li> <a href="teams.html" style={{textDecoration: "none"}}><button style= {{backgroundColor: "white", borderBottom: "0"}} id="member_btn">MEMBERS</button></a></li>
                        <li><button id="group_btn">GROUPS</button></li>
                        <li><button id="reminder_btn">REMINDERS</button></li>
                    </ul>
                </div>
    
                <fieldset disabled>
                    
                    <div className="mainBody__settings" id="mainBody__settings">
                        <div className="settings__innerBody">
                            <div className="innerBody__firstPart">
                                <select name="options" className="groupProjects__options">
                                    <option value="client">Show all</option>
                                    <option value="department">Departments</option>
                                    <option value="ategory">Category</option>
                                    <option value="Custom...">Custom</option>
                                </select>
                                <input type="text" value="Search by name or email"/>
                                <button>Add new member</button>
                            </div>
    
                            <div className="innerBody__table">
                                <table>
                                    <tr style={{backgroundColor: "#E4EAEE"}}>
                                        <td colspan="5">Members</td>
                                    </tr>
                                    <tr className="row2">
                                        <td>NAME <img src="https://i.postimg.cc/Qtjz8mtg/sort-arrows-couple-pointing-up-and-down.png"/></td>
                                        <td>EMAIL <img src="https://i.postimg.cc/Qtjz8mtg/sort-arrows-couple-pointing-up-and-down.png"/></td>
                                        <td>BILLABLE RATE (USD) <img src="https://i.postimg.cc/Qtjz8mtg/sort-arrows-couple-pointing-up-and-down.png"/></td>
                                        <td>Role</td>
                                        <td>GROUP <img src="https://i.postimg.cc/Qtjz8mtg/sort-arrows-couple-pointing-up-and-down.png"/></td>
                                    </tr>
                                    <tr>
                                        <td>Hydrogen (you)</td>
                                        <td>hydrogen@gmail.com</td>
                                        <td><input type="text" value=""/></td>
                                        <td><button>Owner</button></td>
                                        <td><i className="fa fa-plus-circle" style={{color: "#03A9F4"}}></i> Group</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>  
  )
}

export default Team