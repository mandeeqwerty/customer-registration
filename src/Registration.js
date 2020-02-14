import React from 'react';
import Modal from 'react-awesome-modal';

class Registration extends React.Component {
  constructor(props){
    super(props);
        this.state={
            name: '',
            address: '',
            mobileNo:'',
            gender:'',
            active:false,
            nonactive:false,
            course: '',
            passingYear: '',
            index:0,
            userArr: [],
            create: true,
            visible:false,
            hide:true,
            study:[],
           qualification:""
        }
}


handleChange=e=>{
  if(e.target.type ==="checkbox"){
      this.setState({
          [e.target.name]:e.target.checked
      });
      }else{
  this.setState({
      [e.target.name]:e.target.value
  })
}
}

openModal = () => {
  this.setState({
    visible: true
  });
}
closeModal = () => {
  this.setState({
    visible: false,
    course: "",
    passingYear: "",
    create:true
  });
}

onStore = (data,id) => {
  this.setState({
    course: data.course,
    passingYear: data.passingYear,
    index:id,
    visible: true,
    create: false
  });
}

deleteRow = i => e => {
  e.preventDefault()
  let study=[
      ...this.state.study.slice(0, i),
      ...this.state.study.slice(i + 1)
  ]
  this.setState({
    study
  });
}

handleRemoveRow = index => e => {
  e.preventDefault()
  let  userArr=[
    ...this.state.userArr.slice(0, index),
    ...this.state.userArr.slice(index + 1)
  ]
   this.setState({
    userArr
   });
 }

 handleClick= () =>{
     
  let abc=this.state;
  let userObj ={
      name:abc.name,
      address:abc.address,
      mobileNo:abc.mobileNo,
      gender:abc.gender,
      active:abc.active,
      nonactive:abc.nonactive,
     qualification:abc.userArr
    //qualification:abc.userArr[0].course + abc.userArr[0].passingYear + abc.userArr[1].course + abc.userArr[1].passingYear 
    }
  abc.study.push(userObj);
   this.setState({
     study:abc.study,
     userArr:[],
     name:"",
     address:"",
     mobileNo:"",
     gender:"",
     active:"",
     nonactive:"",
    
   });
  console.log(abc.study);        
} 

onSave = () => {
  let  set =this.state;
  const newInfo={
    name:set.name,
    address:set.address,
    mobileNo:set.mobileNo,
    gender:set.gender,
    active:set.active,
    nonactive:set.nonactive,
    qualification:set.userArr
  };
  set.study[set.index]=newInfo;
  this.setState({
    study:set.study,
    hide:true,
    name:"",
    address:"",
    mobileNo:"",
    gender:"",
    active:"",
    nonactive:"",
    userArr:[]
  })
}

onChangeHandler = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

onSubmit = () => {
  let abc = this.state;
  let userObj = {
    course: abc.course,
    passingYear: abc.passingYear
  }
  abc.userArr.push(userObj);
  this.setState({
    userArr: abc.userArr ,
    course: "",
    passingYear: "",
    visible:false
  });
}

onUpdate = () => {
  let xyz=this.state;
    const newCourse={
    course:xyz.course,
    passingYear:xyz.passingYear

  };
 xyz.userArr[xyz.index]=newCourse;
      this.setState ({
        userArr:xyz.userArr,
        create: true,
        course: "",
        passingYear: "",
        visible:false
       } )
    
  }

  onEdit = (data,i) => {
    this.setState({
      name: data.name,
      address: data.address,
      mobileNo:data.mobileNo,
      gender:data.gender,
      active:data.active,
      nonactive:data.nonactive,
      userArr:data.qualification,
      index:i,
      hide:false,
     // qualification:data.userArr
    }); 
  }

    
     render() {
         const study=this.state.study;
         const hide = this.state.hide ? "Submit" : "update";
         const create = this.state.create ? "submit" : "update";
        
        return (
            <div>

                <div className="border">
                Name
                <div>
                     <input type="text"name="name" value={this.state.name}
                       onChange={this.handleChange} style={{style:"italic",margin:"10"}}></input>
                    <br/></div>
                Address
                <div>
                     <input className="text" type="text"name="address" value={this.state.address}
                      onChange={this.handleChange} ></input>
                    <br/></div>
                Mobile No
                <div>
                     <input type='number' name='mobileNo'value={this.state.mobileNo}
                     onChange={this.handleChange}></input>
                     <br/></div>
                Gender
                <div>
                     <input type="radio" name="gender" value="male" onChange={this.handleChange}
                     checked={this.state.gender==="male"}/> Male
                     <input type="radio" name="gender" value="female" onChange={this.handleChange}
                     checked={this.state.gender==="female"}/>Female <br/></div>
                Status
                <div>
                     <input type="checkbox" name="active" checked={this.state.active}
                      onChange={this.handleChange}></input> Active  
                     <input type="checkbox" name="nonactive" checked={this.state.nonactive}
                      onChange={this.handleChange}></input> NoN-Active    <br/> </div>
                Qualification:
                 <div style={{ position: "relative" }}>
                        <button style={{ position: 'center', bottom: '15px',float: 'right' }}
                type="button" value="Open" onClick={this.openModal} > Add Qualification </button>
                             <div style={{ width: "auto",  margin: '5px', padding: 0,  border: "1px solid black"  }}>
              {this.state.userArr.map((item, index) => {
                return (<div key={index}>
                    <button  onClick={() => this.onStore(item,index)}  key={index}>{item.course} {item.passingYear}  </button>
                    <button onClick={this.handleRemoveRow(index)}>x</button>
              </div>)
               })}                
          </div>         
</div><br/><br/><br/><br/>

              <button onClick={
                    this.state.hide
                    ? this.handleClick
                    :this.onSave}>

                    {hide}
                           </button>   
                           </div>
                          
        <div  >
            <Modal
             visible={this.state.visible}
             width="400"
             height="250"
                 >        
            <h1>Add your Qualification</h1>
             <div className="tss">
             
             
              <input
                style={{ width: 195 }}
                type="text"
                placeholder="Enter course"
                onChange={this.onChangeHandler}
                name="course"
                value={this.state.course}
              />
            
              
              <input
                style={{ width: 195 }}
                type="number"
                placeholder="Enter passingYear"
                onChange={this.onChangeHandler}
                name="passingYear"
                value={this.state.passingYear}
              /><br />
              <button
                className="btn-add"
                onClick={
                  this.state.create
                    ? this.onSubmit
                    : this.onUpdate}
              >
                {create}
              </button>
                  <button className="btn-close" onClick={this.closeModal} >Close</button>
                  </div> 
          </Modal> 
          </div>  
          
            <div>
            {study.length>0?<div>
         <div className="main">
                <h1>Table!</h1>
                <table border="1" style={{width:400,paddingTop:5}} >
                <tbody>
                  <tr>
                      <th>Name</th>
                      <th>Address</th>
                      <th>MobileNo</th>
                      <th>Gender</th>
                      <th>Status</th>
                      {/* <th>Qualification</th> */}
                      <th>Edit</th>
                      <th>Delete</th>
                   </tr>
                  {study.map((study,i)=>{
                      return(
                          <tr key={i}>
                          <td>{study.name}</td>
                          <td>{study.address}</td>
                          <td>{study.mobileNo}</td>
                          <td>{study.gender}</td>
                          <td>{`${study.active===true ?"Active":study.nonactive === true? "NonActive":''}`}</td>
                          {/* <td>{study.qualification} </td>  */}
                                              
                          <td><button onClick={() => this.onEdit(study,i)}>Edit</button></td>
                          <td><button onClick={this.deleteRow(i)}>Delete</button></td>
                          
                          </tr>    
                      );                
                  })}
                </tbody>
                </table>
            </div>
            </div>:null}
            </div>
           
 
            </div>
           );
       }
    
}
export default Registration;
<div class="three fields">
    <div class="field">
    <label htmlFor="Region">Region</label>
              <Select
        value={selectedOption}
        onChange={this.handleChange1}
        options={options}
      />
    </div>
    <div class="field">
    <input
                className={formErrors.Business_name.length > 0 ? "error" : null}
                placeholder="Business name"
                type="text"
                name="Business_name"
                value={this.state.Business_name}
                onChange={this.handleChange}
              />
              {/*{formErrors.Business_name.length > 0 && (
                <span className="errorMessage">{formErrors.Business_name}</span>
              )}*/}
    </div>
    <div class="field">
    <input
                className={formErrors.Customer_code.length > 0 ? "error" : null}
                placeholder="Customer code"
                type="text"
                name="Customer_code"
                value={this.state.Customer_code}
                noValidate
                onChange={this.handleChange}
              />
              {/*{formErrors.Customer_code.length > 0 && (
                <span className="errorMessage">{formErrors.Customer_code}</span>
              )}*/}
    </div>
  </div>
  <div class="three fields">
  <div class="field">
  <label htmlFor="Address">Address</label>
              <input
                className={formErrors.Address.length > 0 ? "error" : null}
                placeholder="Address"
                type="text"
                name="Address"
                value={this.state.Address}
                noValidate
                onChange={this.handleChange}
              />
              {/*{formErrors.Address.length > 0 && (
                <span className="errorMessage">{formErrors.Address}</span>
              )}*/}
  </div>
  <div class="field">
  <label htmlFor="Area">Area</label>
              <input
                className={formErrors.Area.length > 0 ? "error" : null}
                placeholder="Area"
                type="text"
                name="Area"
                value={this.state.Area}
                noValidate
                onChange={this.handleChange}
              />
              {/*{formErrors.Area.length > 0 && (
                <span className="errorMessage">{formErrors.Area}</span>
              )}*/}
  </div>
  <div class="field">
  <label htmlFor="Pin_code">Pin code</label>
              <input
                className={formErrors.Pin_code.length > 0 ? "error" : null}
                placeholder="Pin code"
                type="number"
                name="Pin_code"
                value={this.state.Pin_code}
                noValidate
                onChange={this.handleChange}
              />
              {/*{formErrors.Pin_code.length > 0 && (
                <span className="errorMessage">{formErrors.Pin_code}</span>
              )}*/}
  </div>
</div>
<div class="three fields">
    <div class="field">
      
    <label htmlFor="City">City</label>
              <input
                className={formErrors.City.length > 0 ? "error" : null}
                placeholder="Area"
                type="text"
                name="City"
                noValidate
                value={this.state.City}
                onChange={this.handleChange}
              />
              {/*{formErrors.City.length > 0 && (
                <span className="errorMessage">{formErrors.City}</span>
              )}*/}
    </div>
    <div class="field">
    <label htmlFor="State">State</label>
              <input
                className={formErrors.State.length > 0 ? "error" : null}
                placeholder="State"
                type="text"
                name="State"
                value={this.state.State}
                noValidate
                onChange={this.handleChange}
              />
              {/*{formErrors.State.length > 0 && (
                <span className="errorMessage">{formErrors.State}</span>
              )}*/}
    </div>
    <div class="field">
    <label htmlFor="MDC">MDC</label>
              <Select
        value={selectedOption1}
        onChange={this.handleChange2}
        options={options}
      />   
    </div>
  </div>
  <div class="three fields">
  <div class="field">
  <label htmlFor="Last_name">Last name</label>
              <input
                className={formErrors.Last_name.length > 0 ? "error" : null}
                placeholder="Last name"
                type="text"
                name="Last_name"
                value={this.state.Last_name}
                noValidate
                onChange={this.handleChange}
              />
              {/*{formErrors.Last_name.length > 0 && (
                <span className="errorMessage">{formErrors.Last_name}</span>
              )}*/}
  </div>
  <div class="field">
  <label htmlFor="Mobile_no">Mobile no</label>
              <input
                className={formErrors.Mobile_no.length > 0 ? "error" : null}
                placeholder="Mobile no"
                type="tel"
                name="Mobile_no"
                value={this.state.Mobile_no}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Mobile_no.length > 0 && (
                <span className="errorMessage">{formErrors.Mobile_no}</span>
              )}
  </div>
  <div class="field">
  <label htmlFor="Landline_no">Landline no</label>
              <input
                /*className={formErrors.Landline_no.length > 0 ? "error" : null}*/
                placeholder="Landline no"
                type="tel"
                name="Landline_no"
                value={this.state.Landline_no}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Landline_no.length > 0 && (
                <span className="errorMessage">{formErrors.Landline_no}</span>
              )}
  </div>
</div>
<div class="three fields">
    <div class="field">
    <label htmlFor="Designation">Designation</label>
              <Select
        value={selectedOption2}
        onChange={this.handleChange3}
        options={options2}
      />
    </div>
    <div class="field">
    <label htmlFor="Email_id">Email id</label>
              <input
                className={formErrors.Email_id.length > 0 ? "error" : null}
                placeholder="Email id"
                type="text"
                name="Email_id"
                value={this.state.Email_id}
                noValidate
                onChange={this.handleChange}
              />
              {/*{formErrors.Email_id.length > 0 && (
                <span className="errorMessage">{formErrors.Email_id}</span>
              )}*/}
    </div>
    <div class="field">
    <label htmlFor="Customer_code">Customer cat</label>
              <input
                className={formErrors.Customer_code.length > 0 ? "error" : null}
                placeholder="Customer code"
                type="text"
                name="Customer_code"
                value={this.state.Customer_code}
                noValidate
                onChange={this.handleChange}
              />
              {/*{formErrors.Customer_code.length > 0 && (
                <span className="errorMessage">{formErrors.Customer_code}</span>
              )}*/}
    </div>
  </div>
  <div class="three fields">
  <div class="field">
  <label htmlFor="Overall_purchase_grocery_value">Overall purchase grocery value</label>
              <input
                className={formErrors.Overall_purchase_grocery_value.length > 0 ? "error" : null}
                placeholder="Overall purchase grocery value"
                type="number"
                value={this.state.Overall_purchase_grocery_value}
                name="Overall_purchase_grocery_value"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Overall_purchase_grocery_value.length > 0 && (
                <span className="errorMessage">{formErrors.Overall_purchase_grocery_value}</span>
              )}
  </div>
  <div class="field">
  <label htmlFor="Credit_days">Credit Days</label>
              <input
                className={formErrors.Credit_days.length > 0 ? "error" : null}
                placeholder="Credit days"
                type="number"
                name="Credit_days"
                value={this.state.Credit_days}
                noValidate
                onChange={this.handleChange}
              />
              {/*{formErrors.Credit_days.length > 0 && (
                <span className="errorMessage">{formErrors.Credit_days}</span>
              )}*/}
  </div>
  <div class="field">
  <label htmlFor="Credit_days">Credit Days</label>
              <input
                className={formErrors.Credit_days.length > 0 ? "error" : null}
                placeholder="Credit days"
                type="number"
                name="Credit_days"
                value={this.state.Credit_days}
                noValidate
                onChange={this.handleChange}
              />
              {/*{formErrors.Credit_days.length > 0 && (
                <span className="errorMessage">{formErrors.Credit_days}</span>
              )}*/}
  </div>
</div>
<div class="three fields">
    <div class="field">
    <label htmlFor="Remark">Remark</label>
              <input
                className={formErrors.Remark.length > 0 ? "error" : null}
                placeholder="Remark"
                type="text"
                name="Remark"
                value={this.state.Remark}
                noValidate
                onChange={this.handleChange}
              />
              {/*{formErrors.Remark.length > 0 && (
                <span className="errorMessage">{formErrors.Remark}</span>
              )}*/}
    </div>
    <div class="field">
    <label>Current suppliers</label>
            <CheckboxGroup
          checkboxes={checkboxes}
          onCheckboxGroupChange={this.handleCheckboxgroupChange}
        />
    </div>
    
  </div>