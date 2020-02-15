
import React, {Component } from 'react';
import CheckboxGroup from './CheckboxGroup';
import 'semantic-ui-css/semantic.min.css'
import "./App.css";
import Select from 'react-select';
import axios from 'axios';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
const options = [
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Madurai', label: 'Madurai' },
  { value: 'Salem', label: 'Salem' },
  { value: 'Trichi', label: 'Trichi' },
];


const options2 = [
  { value: 'purchasemanager', label: 'purchasemanager' },
  { value: 'Owner', label: 'Owner' },
  { value: 'other', label: 'other' },
];
const options3 = [
  { value: 'Pub & bars', label: 'Pub & bars' },
  { value: 'Bakeries', label: 'Bakeries' },
  { value: 'FastFood & cafes', label: 'FastFood & cafes' },
  { value: 'Hotels & Restaurants', label: 'Hotels & Restaurants' },
  { value: 'Guests Houses', label: 'Guests Houses' },
  { value: 'Paying Guest Hotels', label: 'FastFood & cafes' },
  { value: 'Caterers-institutions', label: 'Caterers-institutions' },
  { value: 'Canteen-Hospitals', label: 'Canteen-Hospitals' },
  { value: 'Canteen-School &college', label: 'Canteen-School &college' },
  { value: 'Caterers-Events', label: 'Caterers-Events' },
];


const Quality = [
  { value: 'Eco', label: 'Eco' },
  { value: 'Std', label: 'Std' },
  { value: 'Pre', label: 'Pre' },
];

var packsize = [
  { value: '1kg', label: '1kg' },
  { value: '5kg', label: '5kg' },
  { value: '10kg', label: '10kg' },
  { value: '25kg', label: '10kg' },
  { value: '10kg', label: '10kg' },

];


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Business_name: '',
      Customer_code: '',
      Address: '',
      Area: '',
      Pin_code: '',
      City: '',
      State: '',
      First_name: '',
      Last_name: '',
      Mobile_no: '',
      Landline_no: '',
      Email_id: '',
      Customer_cart: '',
      Overall_purchase_grocery_MT: '',
      Overall_purchase_grocery_value: '',
      Credit_limit: '',
      Credit_days: '',
      Next_visit_plan: '',
      Remark: '',
      selectedOption: '',
      selectedOption1: '',
      selectedOption2: '',
      selectedOption3: '',
      selectedOption4: '',
      selectedOption5: '',
      selectedOption6: '',
      selectedOption7: '',
      selectedOption8: '',
      selectedOption9: '',
      selectedOption10: '',
      selectedOption11: '',
      selectedOption12: '',
      selectedOption13: '',
      selectedOption14: '',
      selectedOption15: '',
      selectedOption16: '',
      selectedOption17: '',
      selectedOption18: '',
      selectedOption19: '',
      selectedOption20: '',
      selectedOption21: '',
      selectedOption22: '',
      selectedOption23: '',
      selectedOption24: '',
      selectedOption25: '',
      selectedOption26: '',
      selectedOption27: '',
      selectedOption28: '',
      selectedOption29: '',
      selectedOption30: '',
      selectedOption31: '',
      selectedOption32: '',
      selectedOption33: '',
      selectedOption34: '',
      selectedOption35: '',
      selectedOption36: '',
      selectedOption37: '',
      selectedOption38: '',
      selectedOption39: '',
      selectedOption40: '',
      selectedOption41: '',
      selectedOption42: '',
      selectedOption43: '',
      selectedOption44: '',
      selectedOption45: '',
      selectedOption46: '',
      selectedOption47: '',
      selectedOption48: '',
      selectedOption49: '',
      selectedOption50: '',
      selectedOption51: '',
      selectedOption52: '',
      selectedOption53: '',
      Brand: '',
      Brand1:'',
      Brand2:'',
      Brand3:'',
      Brand4:'',
      Brand5:'',
      Brand6:'',
      Brand7:'',
      Brand8:'',
      Brand9:'',
      Brand10:'',
      Brand11:'',
      Brand12:'',
      Brand13:'',
      Brand14:'',
      Brand15:'',
      Brand16:'',
      Brand17:'',
      Brand18:'',
      Brand19:'',
      Brand20:'',
      Brand21:'',
      Brand22:'',
      Brand23:'',
      Qtymonth:'',
      Qtymonth1:'',
      Qtymonth2:'',
      Qtymonth3:'',
      Qtymonth4:'',
      Qtymonth5:'',
      Qtymonth6:'',
      Qtymonth7:'',
      Qtymonth8:'',
      Qtymonth9:'',
      Qtymonth10:'',
      Qtymonth11:'',
      Qtymonth12:'',
      Qtymonth13:'',
      Qtymonth14:'',
      Qtymonth15:'',
      Qtymonth16:'',
      Qtymonth17:'',
      Qtymonth18:'',
      Qtymonth19:'',
      Qtymonth20:'',
      Qtymonth21:'',
      Qtymonth22:'',
      Qtymonth23:'',
      Qtymonth24:'',
      Exprate:'',
      Exprate1:'',
      Exprate2:'',
      Exprate3:'',
      Exprate4:'',
      Exprate5:'',
      Exprate6:'',
      Exprate7:'',
      Exprate8:'',
      Exprate9:'',
      Exprate10:'',
      Exprate11:'',
      Exprate12:'',
      Exprate13:'',
      Exprate14:'',
      Exprate15:'',
      Exprate16:'',
      Exprate17:'',
      Exprate18:'',
      Exprate19:'',
      Exprate20:'',
      Exprate21:'',
      Exprate22:'',
      Exprate23:'',
      Exprate24:'',
      formErrors: {
        Business_name: "",
        Customer_code: "",
        Address: "",
        Area: "",
        Pin_code: "",
        City: "",
        State: "",
        First_name: "",
        Last_name: "",
        Mobile_no: "",
        Landline_no: "",
        Email_id: "",
        Customer_cart: "",
        Overall_purchase_grocery_MT: "",
        Overall_purchase_grocery_value: "",
        Credit_limit: "",
        Credit_days: "",
        Next_visit_plan: "",
        Remark: "",
        Brand:"",
        Brand1:"",
        Brand2:"",
        Brand3:"",
        Brand4:"",
        Brand5:"",
        Brand6:"",
        Brand7:"",
        Brand8:"",
        Brand9:"",
        Brand10:"",
        Brand11:"",
        Brand12:"",
        Brand13:"",
        Brand14:"",
        Brand15:"",
        Brand16:"",
        Brand17:"",
        Brand18:"",
        Brand19:"",
        Brand20:"",
        Brand21:"",
        Brand22:"",
        Brand23:"",
        Qtymonth:"",
        Qtymonth1:"",
        Qtymonth2:"",
        Qtymonth3:"",
        Qtymonth4:"",
        Qtymonth5:"",
        Qtymonth6:"",
        Qtymonth7:"",
        Qtymonth8:"",
        Qtymonth9:"",
        Qtymonth10:"",
        Qtymonth11:"",
        Qtymonth12:"",
        Qtymonth13:"",
        Qtymonth14:"",
        Qtymonth15:"",
        Qtymonth16:"",
        Qtymonth17:"",
        Qtymonth18:"",
        Qtymonth19:"",
        Qtymonth20:"",
        Qtymonth21:"",
        Qtymonth22:"",
        Qtymonth23:"",
        Qtymonth24:"",
        Exprate:"",
        Exprate1:"",
        Exprate2:"",
        Exprate3:"",
        Exprate4:"",
        Exprate5:"",
        Exprate6:"",
        Exprate7:"",
        Exprate8:"",
        Exprate9:"",
        Exprate10:"",
        Exprate11:"",
        Exprate12:"",
        Exprate13:"",
        Exprate14:"",
        Exprate15:"",
        Exprate16:"",
        Exprate17:"",
        Exprate18:"",
        Exprate19:"",
        Exprate20:"",
        Exprate21:"",
        Exprate22:"",
        Exprate23:"",
      },
      checkboxes: [
        {
          label: 'Wholesale',
          value: 'Wholesale',
          checked: true,
        },
        {
          label: 'Retailer',
          value: 'Retailer',
          checked: true,
        },
        {
          label: 'bigbasket',
          value: 'bigbasket',
          checked: true,
        },
        {
          label: 'Jumbotail',
          value: 'Jumbotail',
          checked: true,
        },
        {
          label: 'uddan',
          value: 'uddan',
          checked: true,
        },
      ]
    };

  }
  myFunction() {
    document.getElementById("myForm").reset();
  }
  handleCheckboxgroupChange = (updatedUsecaseCBState) => {
    this.setState({
      checkboxes: updatedUsecaseCBState,
    });
  };
  handleSubmit = e  => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        
        Business Name: ${this.state.Business_name}
        Customer code: ${this.state.Customer_code}
        Address: ${this.state.Address}
        Area: ${this.state.Area}
        Pin code:${this.state.Pin_code}
        City:${this.state.City}
        Pin code:${this.state.Pin_code}
        State:${this.state.State}
        First Name:${this.state.First_name}
        Last Name:${this.state.Last_name}
        Mobile no:${this.state.Mobile_no}
        State landline no:${this.state.Landline_no}
        Email id:${this.state.Email_id}
        Overall purchase grocery MT:${this.state.Overall_purchase_grocery_MT}
        Overall purchase grocery value:${this.state.Overall_purchase_grocery_value}
        Credit limit:${this.state.Credit_limit}
        Credit days:${this.state.Credit_days}
        Next visit plan:${this.state.Next_visit_plan}
        Remark:${this.state.Remark}
        Region:${this.state.selectedOption}
        MDC:${this.state.selectedOption1}
        Designation:${this.state.selectedOption2}
        Customercart:${this.state.selectedOption3}


      `)
      alert("the form is submitted")
      const user={
        Business_name: this.state.Business_name,
        Customer_code: this.state.Customer_code,
        Address: this.state.Address,
        Area: this.state.Area,
        Pin_code: this.state.Pin_code,
        City: this.state.City,
        State: this.state.State,
        First_name: this.state.First_name,
        Last_name: this.state.Last_name,
        Mobile_no: this.state.Mobile_no,
        Landline_no: this.state.Landline_no,
        Email_id: this.state.Email_id,
        Customer_cart: this.state.Customer_cart,
        Overall_purchase_grocery_MT: this.state.Overall_purchase_grocery_MT,
        Overall_purchase_grocery_value: this.state.Overall_purchase_grocery_value,
        Credit_limit: this.state.Credit_limit,
        Credit_days: this.state.Credit_days,
        Next_visit_plan:this.state.Next_visit_plan,
        Remark: this.state.Remark,
        selectedOption: this.state.selectedOption,
        selectedOption1: this.state.selectedOption1,
        selectedOption2: this.state.selectedOption2,
        selectedOption3: this.state.selectedOption3,
        selectedOption4: this.state.selectedOption4,
        selectedOption5: this.state.selectedOption5,
        selectedOption6: this.state.selectedOption6,
        selectedOption7: this.state.selectedOption7,
        selectedOption8: this.state.selectedOption8,
        selectedOption9: this.state.selectedOption9,
        selectedOption10: this.state.selectedOption10,
        selectedOption11: this.state.selectedOption11,
        selectedOption12: this.state.selectedOption12,
        selectedOption13: this.state.selectedOption13,
        selectedOption14: this.state.selectedOption14,
        selectedOption15: this.state.selectedOption15,
        selectedOption16: this.state.selectedOption16,
        selectedOption17: this.state.selectedOption17,
        selectedOption18: this.state.selectedOption18,
        selectedOption19: this.state.selectedOption19,
        selectedOption20: this.state.selectedOption20,
        selectedOption21: this.state.selectedOption21,
        selectedOptio22: this.state.selectedOption22,
        selectedOption23: this.state.selectedOption23,
        selectedOption24: this.state.selectedOption24,
        selectedOption25: this.state.selectedOption25,
        selectedOption26: this.state.selectedOption26,
        selectedOption27: this.state.selectedOption27,
        selectedOption28: this.state.selectedOption28,
        selectedOption29: this.state.selectedOption29,
        selectedOption30: this.state.selectedOption30,
        selectedOption31: this.state.selectedOption31,
        selectedOption32: this.state.selectedOption32,
        selectedOption33: this.state.selectedOption33,
        selectedOption34: this.state.selectedOption34,
        selectedOption35: this.state.selectedOption35,
        selectedOption36: this.state.selectedOption36,
        selectedOption37: this.state.selectedOption37,
        selectedOption38: this.state.selectedOption38,
        selectedOption39: this.state.selectedOption39,
        selectedOption40: this.state.selectedOption40,
        selectedOption41: this.state.selectedOption41,
        selectedOption42: this.state.selectedOption42,
        selectedOption43: this.state.selectedOption43,
        selectedOption44: this.state.selectedOption44,
        selectedOption45: this.state.selectedOption45,
        selectedOption46: this.state.selectedOption46,
        selectedOption47: this.state.selectedOption47,
        selectedOption48: this.state.selectedOption48,
        selectedOption49: this.state.selectedOption49,
        selectedOption50: this.state.selectedOption50,
        selectedOption51: this.state.selectedOption51,
        selectedOption52: this.state.selectedOption52,
        selectedOption53: this.state.selectedOption53,
        Brand: this.state.Brand,
        Brand1:this.state.Brand1,
        Brand2:this.state.Brand2,
        Brand3:this.state.Brand3,
        Brand4:this.state.Brand4,
        Brand5:this.state.Brand5,
        Brand6:this.state.Brand6,
        Brand7:this.state.Brand7,
        Brand8:this.state.Brand8,
        Brand9:this.state.Brand9,
        Brand10:this.state.Brand10,
        Brand11:this.state.Brand11,
        Brand12:this.state.Brand12,
        Brand13:this.state.Brand13,
        Brand14:this.state.Brand14,
        Brand15:this.state.Brand15,
        Brand16:this.state.Brand16,
        Brand17:this.state.Brand17,
        Brand18:this.state.Brand18,
        Brand19:this.state.Brand19,
        Brand20:this.state.Brand20,
        Brand21:this.state.Brand21,
        Brand22:this.state.Brand22,

        Qtymonth:this.state.Qtymonth,
        Qtymonth1:this.state.Qtymonth1,
        Qtymonth2:this.state.Qtymonth2,
        Qtymonth3:this.state.Qtymonth3,
        Qtymonth4:this.state.Qtymonth4,
        Qtymonth5:this.state.Qtymonth5,
        Qtymonth6:this.state.Qtymonth6,
        Qtymonth7:this.state.Qtymonth7,
        Qtymonth8:this.state.Qtymonth8,
        Qtymonth9:this.state.Qtymonth9,
        Qtymonth10:this.state.Qtymonth10,
        Qtymonth11:this.state.Qtymonth11,
        Qtymonth12:this.state.Qtymonth12,
        Qtymonth13:this.state.Qtymonth13,
        Qtymonth14:this.state.Qtymonth14,
        Qtymonth15:this.state.Qtymonth15,
        Qtymonth16:this.state.Qtymonth16,
        Qtymonth17:this.state.Qtymonth17,
        Qtymonth18:this.state.Qtymonth18,
        Qtymonth19:this.state.Qtymonth19,
        Qtymonth20:this.state.Qtymonth20,
        Qtymonth21:this.state.Qtymonth21,
        Qtymonth22:this.state.Qtymonth22,
      

        Exprate:this.state.Exprate,
        Exprate1:this.state.Exprate1,
        Exprate2:this.state.Exprate2,
        Exprate3:this.state.Exprate3,
        Exprate4:this.state.Exprate4,
        Exprate5:this.state.Exprate5,
        Exprate6:this.state.Exprate6,
        Exprate7:this.state.Exprate7,
        Exprate8:this.state.Exprate8,
        Exprate9:this.state.Exprate9,
        Exprate10:this.state.Exprate10,
        Exprate11:this.state.Exprate11, 
        Exprate12:this.state.Exprate12,  
        Exprate13:this.state.Exprate13,  
        Exprate14:this.state.Exprate14,  
        Exprate15:this.state.Exprate15,  
        Exprate16:this.state.Exprate16,  
        Exprate17:this.state.Exprate17,  
        Exprate18:this.state.Exprate18,  
        Exprate19:this.state.Exprate19,  
        Exprate20:this.state.Exprate20,  
        Exprate21:this.state.Exprate21,  
        Exprate22:this.state.Exprate22,  
        checkboxes:this.state.checkboxes
 
      };
      axios.post(`http://localhost:3005/posts`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })  
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      // alert("It is invalid submitted");
    }

  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "Business_name":
        formErrors.Business_name =
          value.length < 1 ? "required field" : "";
        break;
      case "Customer_code":
        formErrors.Customer_code =
          value.length < 1 ? "required field" : "";
        break;
      case "Address":
        formErrors.Address =
          value.length < 1 ? "required field" : "";
        break;
      case "Area":
        formErrors.Area =
          value.length < 1 ? "required field" : "";
        break;
      case "Pin_code":
        formErrors.Pin_code =
          value.length < 1 ? "required field" : "";
        break;
      case "City":
        formErrors.City =
          value.length < 1 ? "required field" : "";
        break;
      case "State":
        formErrors.State =
        value.length < 1 ? "required field" : "";
        break;
      /*case "MDC":
        formErrors.MDC =
        value.length < 1 ? "required field" : "";
        break;*/
      case "First_name":
        formErrors.First_name =
        value.length < 1 ? "required field" : "";
        break;
      case "Last_name":
        formErrors.Last_name =
        value.length < 1 ? "required field" : "";
        break;
      case "Mobile_no":
        formErrors.Mobile_no =
        value.length < 10 ? "Mobile should be minimum 10 characters" : "";
        break;
      case "Landline_no":
        formErrors.Landline_no =
        value.length < 10 ? "you must enter the landline no" : "";
        break;
      /*case "Designation":
        formErrors.Designation =
        value.length < 1 ? "required field" : "";
        break;*/
      case "Email_id":
        formErrors.Email_id = emailRegex.test(value)
        ? ""
        : "invalid email address";
      break;
      /*case "Customer_cart":
        formErrors.Customer_cart =
        value.length < 1 ? "required field" : "";
        break;*/
      case "Overall_purchase_grocery_MT":
        formErrors.Overall_purchase_grocery_MT =
        value.length < 1 ? "required field" : "";
        break;
      case "Overall_purchase_grocery_value":
        formErrors.Overall_purchase_grocery_value =
        value.length < 1 ? "required field" : "";
        break;
      /*case "Current_suppliers":
        formErrors.Current_suppliers =
        value.length < 1 ? "required field" : "";
        break;*/
      case "Credit_limit":
        formErrors.Credit_limit =
        value.length < 1 ? "required field" : "";
        break;
      case "Credit_days":
        formErrors.Credit_days =
        value.length < 1 ? "required field" : "";
        break;
      case "Next_visit_plan":
        formErrors.Next_visit_plan =
        value.length < 1 ? "required field" : "";
        break;
      case "Remark":
        formErrors.Remark =
        value.length <0 ? "required field" : "";
        break;
      case "Brand":
        formErrors.Brand =
        value.length <1 ? "required field" : "";
        break;
      case "Brand1":
        formErrors.Brand1 =
        value.length <1 ? "required field" : "";
        break;
        case "Brand2":
        formErrors.Brand2 =
        value.length <1 ? "required field" : "";
        break;
        case "Brand3":
        formErrors.Brand3 =
        value.length <1 ? "required field" : "";
        break;
        case "Brand4":
        formErrors.Brand4 =
        value.length <1 ? "required field" : "";
        break;
        case "Brand5":
        formErrors.Brand5 =
        value.length <1 ? "required field" : "";
        break;
        case "Brand6":
        formErrors.Brand6 =
        value.length <1 ? "required field" : "";
        break;
        case "Brand7":
          formErrors.Brand7 =
          value.length <1 ? "required field" : "";
          break;
        case "Brand8":
            formErrors.Brand8 =
            value.length <1 ? "required field" : "";
            break;
        case "Brand9":
              formErrors.Brand9 =
              value.length <1 ? "required field" : "";
              break;
        case "Brand10":
                formErrors.Brand10 =
                value.length <1 ? "required field" : "";
                break;
        case "Brand11":
                  formErrors.Brand11 =
                  value.length <1 ? "required field" : "";
                  break;
                  case "Brand12":
                    formErrors.Brand12 =
                    value.length <1 ? "required field" : "";
                    break; case "Brand13":
                    formErrors.Brand13 =
                    value.length <1 ? "required field" : "";
                    break; case "Brand14":
                    formErrors.Brand14 =
                    value.length <1 ? "required field" : "";
                    break; case "Brand15":
                    formErrors.Brand15 =
                    value.length <1 ? "required field" : "";
                    break; case "Brand16":
                    formErrors.Brand16 =
                    value.length <1 ? "required field" : "";
                    break; case "Brand17":
                    formErrors.Brand17 =
                    value.length <1 ? "required field" : "";
                    break; case "Brand18":
                    formErrors.Brand18 =
                    value.length <1 ? "required field" : "";
                    break; case "Brand19":
                    formErrors.Brand19 =
                    value.length <1 ? "required field" : "";
                    break; case "Brand20":
                    formErrors.Brand20 =
                    value.length <1 ? "required field" : "";
                    break; case "Brand21":
                    formErrors.Brand21 =
                    value.length <1 ? "required field" : "";
                    break;
        case "Qtymonth":
                    formErrors.Qtymonth =
                    value.length <1 ? "required field" : "";
                    break;
        case "Qtymonth1":
                    formErrors.Qtymonth1 =
                    value.length <1 ? "required field" : "";
                    break;
                    case "Qtymonth2":
                      formErrors.Qtymonth2 =
                      value.length <1 ? "required field" : "";
                      break;
                    case "Qtymonth3":
                        formErrors.Qtymonth3 =
                        value.length <1 ? "required field" : "";
                        break;
                    case "Qtymonth4":
                          formErrors.Qtymonth4 =
                          value.length <1 ? "required field" : "";
                          break;
                    case "Qtymonth5":
                            formErrors.Qtymonth5 =
                            value.length <1 ? "required field" : "";
                            break;
                    case "Qtymonth6":
                              formErrors.Qtymonth6 =
                              value.length <1 ? "required field" : "";
                              break;
                    case "Qtymonth7":
                                formErrors.Qtymonth7 =
                                value.length <1 ? "required field" : "";
                                break;
                                case "Qtymonth8":
                                  formErrors.Qtymonth8 =
                                  value.length <1 ? "required field" : "";
                                  break; 
                                case "Qtymonth9":
                                  formErrors.Qtymonth9 =
                                  value.length <1 ? "required field" : "";
                                  break; 
                                case "Qtymonth10":
                                  formErrors.Qtymonth10 =
                                  value.length <1 ? "required field" : "";
                                  break; 
                                case "Qtymonth11":
                                  formErrors.Qtymonth11 =
                                  value.length <1 ? "required field" : "";
                                  break;
                                  case "Qtymonth12":
                                    formErrors.Qtymonth12 =
                                    value.length <1 ? "required field" : "";
                                    break; case "Qtymonth13":
                                    formErrors.Qtymonth13 =
                                    value.length <1 ? "required field" : "";
                                    break; case "Qtymonth14":
                                    formErrors.Qtymonth14 =
                                    value.length <1 ? "required field" : "";
                                    break; case "Qtymonth15":
                                    formErrors.Qtymonth15 =
                                    value.length <1 ? "required field" : "";
                                    break; case "Qtymonth16":
                                    formErrors.Qtymonth16 =
                                    value.length <1 ? "required field" : "";
                                    break; case "Qtymonth17":
                                    formErrors.Qtymonth17 =
                                    value.length <1 ? "required field" : "";
                                    break; case "Qtymonth18":
                                    formErrors.Qtymonth18 =
                                    value.length <1 ? "required field" : "";
                                    break; case "Qtymonth19":
                                    formErrors.Qtymonth19 =
                                    value.length <1 ? "required field" : "";
                                    break;
                                    case "Qtymonth20":
                                    formErrors.Qtymonth20 =
                                    value.length <1 ? "required field" : "";
                                    break;case "Qtymonth21":
                                    formErrors.Qtymonth21 =
                                    value.length <1 ? "required field" : "";
                                    break;
                                case "Exprate":
                                    formErrors.Exprate =
                                    value.length <1 ? "required field" : "";
                                    break;
                                case "Exprate1":
                                      formErrors.Exprate1 =
                                      value.length <1 ? "required field" : "";
                                      break;
                                case "Exprate2":
                                        formErrors.Exprate2 =
                                        value.length <1 ? "required field" : "";
                                        break;
                                case "Exprate3":
                                  formErrors.Exprate3 =
                                  value.length <1 ? "required field" : "";
                                          break;
                                case "Exprate4":
                                  formErrors.Exprate4 =
                                  value.length <1 ? "required field" : "";
                                            break;
                                case "Exprate5":
                                              formErrors.Exprate5 =
                                              value.length <1 ? "required field" : "";
                                              break;
                                case "Exprate6":
                                                formErrors.Exprate6 =
                                                value.length <1 ? "required field" : "";
                                                break;   
                                case "Exprate7":
                                                formErrors.Exprate7 =
                                                value.length <1 ? "required field" : "";
                                                break;  
                                 case "Exprate8":
                                                formErrors.Exprate8 =
                                                value.length <1 ? "required field" : "";
                                                break;   
                                  case "Exprate9":
                                                formErrors.Exprate9 =
                                                value.length <1 ? "required field" : "";
                                                break;  
                                   case "Exprate10":
                                                formErrors.Exprate10 =
                                                value.length <1 ? "required field" : "";
                                                break;  
                                   case "Exprate11":
                                                formErrors.Exprate11 =
                                                value.length <1 ? "required field" : "";
                                                break;
                                                case "Exprate12":
                                                  formErrors.Exprate12 =
                                                  value.length <1 ? "required field" : "";
                                                  break; case "Exprate13":
                                                  formErrors.Exprate13 =
                                                  value.length <1 ? "required field" : "";
                                                  break; case "Exprate14":
                                                  formErrors.Exprate14 =
                                                  value.length <1 ? "required field" : "";
                                                  break; case "Exprate15":
                                                  formErrors.Exprate15 =
                                                  value.length <1 ? "required field" : "";
                                                  break; case "Exprate16":
                                                  formErrors.Exprate16 =
                                                  value.length <1 ? "required field" : "";
                                                  break; case "Exprate17":
                                                  formErrors.Exprate17 =
                                                  value.length <1 ? "required field" : "";
                                                  break; case "Exprate18":
                                                  formErrors.Exprate18 =
                                                  value.length <1 ? "required field" : "";
                                                  break; case "Exprate19":
                                                  formErrors.Exprate19 =
                                                  value.length <1 ? "required field" : "";
                                                  break; case "Exprate20":
                                                  formErrors.Exprate20 =
                                                  value.length <1 ? "required field" : "";
                                                  break; case "Exprate21":
                                                  formErrors.Exprate21 =
                                                  value.length <1 ? "required field" : "";
                                                  break; case "Exprate22":
                                                  formErrors.Exprate22 =
                                                  value.length <1 ? "required field" : "";
                                                  break; case "Exprate23":
                                                  formErrors.Exprate23 =
                                                  value.length <1 ? "required field" : "";
                                                  break;
                                                  case "Exprate24":
                                                  formErrors.Exprate24 =
                                                  value.length <1 ? "required field" : "";
                                                  break;
      default:
        break;

    }

    this.setState({ formErrors, [name]: value }, () => {
       return alert;
    });
   

  };
 
  handleChange1 = selectedOption => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
  };
  handleChange2 = selectedOption1 => {
    this.setState({ selectedOption1});
    // console.log(`Option selected:`, selectedOption1);
  };
  handleChange3 = selectedOption2 => {
    this.setState({ selectedOption2 });
    // console.log(`Option selected:`, selectedOption2);
  };
  handleChange4 = selectedOption3 => {
    this.setState({ selectedOption3 });
    // console.log(`Option selected:`, selectedOption3);
  };
  handleChange5 = selectedOption4 => {
    this.setState({ selectedOption4 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange6 = selectedOption5 => {
    this.setState({ selectedOption5 });
    // console.log(`Option selected:`, selectedOption3);
  };
  handleChange7 = selectedOption6 => {
    this.setState({ selectedOption6 });
    // console.log(`Option selected:`, selectedOption3);
  };
  handleChange8 = selectedOption7 => {
    this.setState({ selectedOption7 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange9 = selectedOption8 => {
    this.setState({ selectedOption8 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange10 = selectedOption9 => {
    this.setState({ selectedOption9 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange11 = selectedOption10 => {
    this.setState({ selectedOption10 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange12 = selectedOption11 => {
    this.setState({ selectedOption11 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange13 = selectedOption12 => {
    this.setState({ selectedOption12 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange14 = selectedOption13 => {
    this.setState({ selectedOption13 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange15 = selectedOption14 => {
    this.setState({ selectedOption14 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange16 = selectedOption15 => {
    this.setState({ selectedOption15 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange17 = selectedOption16 => {
    this.setState({ selectedOption16 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange18 = selectedOption17 => {
    this.setState({ selectedOption17 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange19 = selectedOption18 => {
    this.setState({ selectedOption18 });
    // console.log(`Option selected:`, selectedOption3);
  };
  handleChange20 = selectedOption19 => {
    this.setState({ selectedOption19 });
    // console.log(`Option selected:`, selectedOption3);
  };
  handleChange21 = selectedOption20 => {
    this.setState({ selectedOption20 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange22 = selectedOption21 => {
    this.setState({ selectedOption21 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange23 = selectedOption22 => {
    this.setState({ selectedOption22 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange24 = selectedOption23 => {
    this.setState({ selectedOption23 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange25 = selectedOption24 => {
    this.setState({ selectedOption24 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange26 = selectedOption25 => {
    this.setState({ selectedOption25 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange27 = selectedOption26 => {
    this.setState({ selectedOption26 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange28 = selectedOption27 => {
    this.setState({ selectedOption27 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange29 = selectedOption28 => {
    this.setState({ selectedOption28 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange30 = selectedOption29 => {
    this.setState({ selectedOption29 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange31 = selectedOption30 => {
    this.setState({ selectedOption30 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange32 = selectedOption31 => {
    this.setState({ selectedOption31 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange33 = selectedOption32 => {
    this.setState({ selectedOption32 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange34 = selectedOption33 => {
    this.setState({ selectedOption33 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange35 = selectedOption34 => {
    this.setState({ selectedOption34 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange36 = selectedOption35 => {
    this.setState({ selectedOption35 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange37 = selectedOption36 => {
    this.setState({ selectedOption36 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange38 = selectedOption37 => {
    this.setState({ selectedOption37 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange39 = selectedOption38 => {
    this.setState({ selectedOption38 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange40 = selectedOption39 => {
    this.setState({ selectedOption39 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange41 = selectedOption40 => {
    this.setState({ selectedOption40 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange42 = selectedOption41 => {
    this.setState({ selectedOption41 });
    // console.log(`Option selected:`, selectedOption3);
  }; handleChange43 = selectedOption42 => {
    this.setState({ selectedOption42 });
    // console.log(`Option selected:`, selectedOption3);
  };handleChange44= selectedOption43 => {
    this.setState({ selectedOption43 });
    // console.log(`Option selected:`, selectedOption3);
  };handleChange45 = selectedOption44 => {
    this.setState({ selectedOption44 });
    // console.log(`Option selected:`, selectedOption3);
  };handleChange46 = selectedOption45 => {
    this.setState({ selectedOption45 });
    // console.log(`Option selected:`, selectedOption3);
  };handleChange47 = selectedOption46 => {
    this.setState({ selectedOption46 });
    // console.log(`Option selected:`, selectedOption3);
  };handleChange48 = selectedOption47 => {
    this.setState({ selectedOption47 });
    // console.log(`Option selected:`, selectedOption3);
  };handleChange49 = selectedOption48 => {
    this.setState({ selectedOption48 });
    // console.log(`Option selected:`, selectedOption3);
  };handleChange50 = selectedOption49 => {
    this.setState({ selectedOption49 });
    // console.log(`Option selected:`, selectedOption3);
  };handleChange51 = selectedOption50 => {
    this.setState({ selectedOption50 });
    // console.log(`Option selected:`, selectedOption3);
  };handleChange52 = selectedOption51 => {
    this.setState({ selectedOption51 });
    // console.log(`Option selected:`, selectedOption3);
  };handleChange53 = selectedOption52 => {
    this.setState({ selectedOption52 });
    // console.log(`Option selected:`, selectedOption3);
  };handleChange54 = selectedOption53 => {
    this.setState({ selectedOption53 });
    // console.log(`Option selected:`, selectedOption3);
  };
  render() {
    const { formErrors } = this.state;
    const { selectedOption } = this.state;
    const { selectedOption1 } = this.state;
    const { selectedOption2 } = this.state;
    const { selectedOption3 } = this.state;
    const { selectedOption4 } = this.state;
    const { selectedOption5 } = this.state;
    const { selectedOption6 } = this.state;
    const { selectedOption7 } = this.state;
    const { selectedOption8 } = this.state;
    const { selectedOption9 } = this.state;
    const { selectedOption10 } = this.state;
    const { selectedOption11 } = this.state;
    const { selectedOption12 } = this.state;
    const { selectedOption13 } = this.state;
    const { selectedOption14 } = this.state;
    const { selectedOption15 } = this.state;
    const { selectedOption16 } = this.state;
    const { selectedOption17 } = this.state;
    const { selectedOption18 } = this.state;
    const { selectedOption19 } = this.state;
    const { selectedOption20 } = this.state;
    const { selectedOption21 } = this.state;
    const { selectedOption22 } = this.state;
    const { selectedOption23 } = this.state;
    const { selectedOption24 } = this.state;
    const { selectedOption25 } = this.state;
    const { selectedOption26 } = this.state;
    const { selectedOption27 } = this.state;
    const { selectedOption28 } = this.state;
    const { selectedOption29 } = this.state;
    const { selectedOption30 } = this.state;
    const { selectedOption31 } = this.state;
    const { selectedOption32 } = this.state;
    const { selectedOption33 } = this.state;
    const { selectedOption34 } = this.state;
    const { selectedOption35 } = this.state;
    const { selectedOption36 } = this.state;
    const { selectedOption37 } = this.state;
    const { selectedOption38 } = this.state;
    const { selectedOption39 } = this.state;
    const { selectedOption40 } = this.state;
    const { selectedOption41 } = this.state;
    const { selectedOption42 } = this.state;
    const { selectedOption43 } = this.state;
    const { selectedOption44 } = this.state;
    const { selectedOption45 } = this.state;
    const { selectedOption46 } = this.state;
    const { selectedOption47 } = this.state;
    const { selectedOption48 } = this.state;
    const { selectedOption49 } = this.state;
    const { selectedOption50 } = this.state;
    const { selectedOption51 } = this.state;
    const { selectedOption52 } = this.state;
    const { selectedOption53 } = this.state;
    const { checkboxes } = this.state;

   


    return (
           <div class="ui container">
          <form onSubmit={this.handleSubmit}  id="myForm" noValidate className="ui form one column stackable center aligned page grid">
          <h1 class="text-center col-md-12 pt-5">Customer information</h1>
        <div className="ui equal width grid stackable">
          <div class="row">
          <div class="column">
    <div class="ui segement">
    <label htmlFor="Region">Region</label>
              <Select
        value={selectedOption}
        onChange={this.handleChange1}
        options={options}
      />
    </div>
    </div>
    <div class="column">
    <div class="ui segement">
    <label htmlFor="Businessname">Business name</label>
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
    </div>
    </div>
    <div class="row">
    <div class="column">
    <div class="ui segement">
    <label htmlFor="Region">Customer code</label>
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
  <div class="column">
  <div class="ui segement">
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
  </div>
  </div>
  <div class="row">
  <div class="column">
  <div class="ui segement">
  <label htmlFor="Region">Area</label>
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
  </div>
  <div class="column">
  <div class="ui segement">
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
</div>
<div class='row'>
<div class="column">
    <div class="ui segement">
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
    </div>
    <div class="column">
    <div class="ui segement">
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
    </div>
    </div>
    <div class="row">
    <div class="column">
    <div class="ui segement">
    <label htmlFor="MDC">MDC</label>
              <Select
        value={selectedOption1}
        onChange={this.handleChange2}
        options={options}
      />   
    </div>
  </div>
  <div class="column">
  <div class="ui segement">
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
  </div>
  </div>
  <div class="row">
  <div class="column">
  <div class="ui segement">
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
  </div>
  <div class="column">
  <div class="ui segement">
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
</div>
<div class="row">
<div class="column">
    <div class="ui segement">
    <label htmlFor="Designation">Designation</label>
              <Select
        value={selectedOption2}
        onChange={this.handleChange3}
        options={options2}
      />
    </div>
    </div>
    <div class="column">
    <div class="ui segement">
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
    </div>
    </div>
    <div class="row">
    <div class="column">
    <div class="ui segement">
    <label htmlFor="Customer category"> customer category</label>
              <Select
        value={selectedOption3}
        onChange={this.handleChange4}
        options={options3}
      />
    </div>
    </div>
  <div class="column">
  <div class="ui segement">
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
  </div>
  </div>
  <div class="row">
  <div class="column">
  <div class="ui segement">
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
  <div class="column">
  <div class="ui segement">
  <label htmlFor="Credit_days">Credit limit</label>
              <input
                className={formErrors.Credit_limit.length > 0 ? "error" : null}
                placeholder="Credit limit"
                type="number"
                name="Credit_limit"
                value={this.state.Credit_limit}
                noValidate
                onChange={this.handleChange}
              />
              {/*{formErrors.Credit_days.length > 0 && (
                <span className="errorMessage">{formErrors.Credit_days}</span>
              )}*/}
  </div>
</div>
</div>
<div class="row">
<div class="column">
    <div class="ui segement">
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
    </div>
    <div class="column">
    <div class="col-md-12">
    <label>Current suppliers</label>
            <CheckboxGroup
          checkboxes={checkboxes}
          onCheckboxGroupChange={this.handleCheckboxgroupChange}
        />
    </div>
    
  </div>
  </div>
  </div>                
            <div className="ui container">
            <table class="ui celled table stackable">
  <thead class>
<tr class> 
      <th class>Almond</th>
    <th class>Quality</th>
    <th class>PackSize</th>
    <th class>Brand</th>
    <th class>Qty/month</th>
    <th class>Exp rate</th>
  </tr>
  </thead>
    {/*<Markets />*/}
    <tbody class>
      <tr class>
       <td class>Besan</td>
      <td class>  <Select
value={selectedOption4}onChange={this.handleChange5}        options={Quality}
      /></td>
       <td class> <Select
     value={selectedOption29}onChange={this.handleChange30}
        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand"className={formErrors.Brand.length > 0 ? "error" : null} value={this.state.Brand}
                noValidate
                onChange={this.handleChange} />{/* {formErrors.Brand.length > 0 && (
                <span className="errorMessage">{formErrors.Brand}</span>
                )} */} 
       </td>
       <td class><input className={formErrors.Qtymonth > 0 ? "error" : null}
         value={this.state.Qtymonth}
                placeholder="Qty month"
                type="number"
                name="Qtymonth"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate}
                name="Exprate"
                noValidate
                onChange={this.handleChange}  />  {/*}  {formErrors.Exprate.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Black pepper</td>
      <td class>  <Select
value={selectedOption5}onChange={this.handleChange6}        options={Quality}
      /></td>
       <td class> <Select
      value={selectedOption30}onChange={this.handleChange31}
        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand1" className={formErrors.Brand1.length > 0 ? "error" : null} value={this.state.Brand1}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand1.length > 0 && (
                <span className="errorMessage">{formErrors.Brand1}</span>
                )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth1 > 0 ? "error" : null}
         value={this.state.Qtymonth1}
                placeholder="Qty month"
                type="number"
                name="Qtymonth1"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth1.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth1}</span> )}*/}
      </td>
       <td class><input className={formErrors.Exprate1.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number" value={this.state.Exprate1}
                name="Exprate1"
                noValidate
                onChange={this.handleChange}  />  {/* {formErrors.Exprate1.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate1}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Boiled Rice</td>
      <td class>  <Select
        value={selectedOption6}
        onChange={this.handleChange7}
        options={Quality}
      /></td>
       <td class> <Select
        value={selectedOption31}onChange={this.handleChange32}
        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand2"className={formErrors.Brand2.length > 0 ? "error" : null} value={this.state.Brand2}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand2.length > 0 && (
                <span className="errorMessage">{formErrors.Brand2}</span>
                )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth2 > 0 ? "error" : null}
         value={this.state.Qtymonth2}
                placeholder="Qty month"
                type="number"
                name="Qtymonth2"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth2.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth2}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate2.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate2}
                name="Exprate2"
                noValidate
                onChange={this.handleChange}  />  {/* {formErrors.Exprate2.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate2}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Cardamom</td>
       <td class><Select
        value={selectedOption7}
        onChange={this.handleChange8}
        options={Quality}
      /></td>
       <td class> <Select
     value={selectedOption32}onChange={this.handleChange33}
        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand3"className={formErrors.Brand3.length > 0 ? "error" : null} value={this.state.Brand3}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand3.length > 0 && (
                <span className="errorMessage">{formErrors.Brand3}</span>
                )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth3 > 0 ? "error" : null}
         value={this.state.Qtymonth3}
                placeholder="Qty month"
                type="number"
                name="Qtymonth3"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth3.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth3}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate3.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate3}
                name="Exprate3"
                noValidate
                onChange={this.handleChange}  />   {/* {formErrors.Exprate3.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate3}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Cashew</td>
      <td class>  <Select
        value={selectedOption8}
        onChange={this.handleChange9}
        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption33}onChange={this.handleChange34}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand4"className={formErrors.Brand4.length > 0 ? "error" : null} value={this.state.Brand4}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand4.length > 0 && (
                <span className="errorMessage">{formErrors.Brand4}</span>
                )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth4 > 0 ? "error" : null}
         value={this.state.Qtymonth4}
                placeholder="Qty month"
                type="number"
                name="Qtymonth4"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth4.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth4}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate4.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate4}
                name="Exprate4"
                noValidate
                onChange={this.handleChange}  />  {/*  {formErrors.Exprate4.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate4}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Chana</td>
      <td class>  <Select
value={selectedOption9}onChange={this.handleChange10}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption34}onChange={this.handleChange35}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand5"className={formErrors.Brand5.length > 0 ? "error" : null} value={this.state.Brand5}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand5.length > 0 && (
                <span className="errorMessage">{formErrors.Brand5}</span>
              )}*/}  
       </td>
       <td class><input className={formErrors.Qtymonth5 > 0 ? "error" : null}
         value={this.state.Qtymonth5}
                placeholder="Qty month"
                type="number"
                name="Qtymonth5"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth5.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth5}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate5.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate5}
                name="Exprate5"
                noValidate
                onChange={this.handleChange}  />   {/* {formErrors.Exprate5.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate5}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Chanadal</td>
      <td class>  <Select
value={selectedOption10} onChange={this.handleChange11} options={Quality}
      /></td>
       <td class> <Select
value={selectedOption35}onChange={this.handleChange36}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand6"className={formErrors.Brand6.length > 0 ? "error" : null} value={this.state.Brand6}
                noValidate
                onChange={this.handleChange} />{/*} {formErrors.Brand6.length > 0 && (
                <span className="errorMessage">{formErrors.Brand6}</span>
                )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth6 > 0 ? "error" : null}
         value={this.state.Qtymonth6}
                placeholder="Qty month"
                type="number"
                name="Qtymonth6"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth6.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth6}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate6.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate6}
                name="Exprate6"
                noValidate
                onChange={this.handleChange}  />    {formErrors.Exprate6.length > 0 && (
                  <span className="errorMessage">{formErrors.Exprate6}</span> )}
      </td>
       </tr>
       <tr class>
       <td class>Chilly</td>
      <td class>  <Select
value={selectedOption11}onChange={this.handleChange12}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption36}onChange={this.handleChange37}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand7"className={formErrors.Brand7.length > 0 ? "error" : null} value={this.state.Brand7}
                noValidate
                onChange={this.handleChange} />{/* {formErrors.Brand7.length > 0 && (
                <span className="errorMessage">{formErrors.Brand7}</span>
                )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth7 > 0 ? "error" : null}
         value={this.state.Qtymonth7}
                placeholder="Qty month"
                type="number"
                name="Qtymonth7"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth7.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth7}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate7.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate7}
                name="Exprate7"
                noValidate
                onChange={this.handleChange}  />   {/* {formErrors.Exprate7.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate7}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Coriander</td>
      <td class>  <Select
value={selectedOption12}onChange={this.handleChange13}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption37}onChange={this.handleChange38}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand8"className={formErrors.Brand8.length > 0 ? "error" : null} value={this.state.Brand8}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand8.length > 0 && (
                <span className="errorMessage">{formErrors.Brand8}</span>
                )}*/}
       </td>
       <td class><input className={formErrors.Qtymonth8 > 0 ? "error" : null}
         value={this.state.Qtymonth8}
                placeholder="Qty month"
                type="number"
                name="Qtymonth8"
                noValidate
                onChange={this.handleChange} /> 
                {formErrors.Qtymonth8.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth8}</span> )}
      </td>
      <td class><input className={formErrors.Exprate8.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate8}
                name="Exprate8"
                noValidate
                onChange={this.handleChange}  />  {/*}  {formErrors.Exprate8.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate8}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Cumin</td>
      <td class>  <Select
value={selectedOption13}onChange={this.handleChange14}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption38}onChange={this.handleChange39}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand9"className={formErrors.Brand9.length > 0 ? "error" : null} value={this.state.Brand9}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand9.length > 0 && (
                <span className="errorMessage">{formErrors.Brand9}</span>
                )}*/}
       </td>
       <td class><input className={formErrors.Qtymonth9 > 0 ? "error" : null}
         value={this.state.Qtymonth9}
                placeholder="Qty month"
                type="number"
                name="Qtymonth9"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth7.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth9}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate9.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate9}
                name="Exprate9"
                noValidate
                onChange={this.handleChange}  />   {/*} {formErrors.Exprate9.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate9}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Dried chickpeas whole</td>
      <td class>  <Select
value={selectedOption14}        onChange={this.handleChnage15}
        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption39}onChange={this.handleChange40}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand10"className={formErrors.Brand10.length > 0 ? "error" : null} value={this.state.Brand10}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand10.length > 0 && (
                <span className="errorMessage">{formErrors.Brand10}</span>
              )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth10 > 0 ? "error" : null}
         value={this.state.Qtymonth10}
                placeholder="Qty month"
                type="number"
                name="Qtymonth10"
                noValidate
                onChange={this.handleChange} /> 
                {formErrors.Qtymonth10.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth10}</span> )}
      </td>
      <td class><input className={formErrors.Exprate10.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate10}
                name="Exprate10"
                noValidate
                onChange={this.handleChange}  />   {/* {formErrors.Exprate10.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate10}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Fennel</td>
      <td class>  <Select
value={selectedOption15}onChange={this.handleChange16}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption40}onChange={this.handleChange41}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand11"className={formErrors.Brand11.length > 0 ? "error" : null} value={this.state.Brand11}
                noValidate
                onChange={this.handleChange} />{/* {formErrors.Brand11.length > 0 && (
                <span className="errorMessage">{formErrors.Brand11}</span>
                )}*/}
       </td>
       <td class><input className={formErrors.Qtymonth11 > 0 ? "error" : null}
         value={this.state.Qtymonth11}
                placeholder="Qty month"
                type="number"
                name="Qtymonth11"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth11.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth11}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate11.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate11}
                name="Exprate11"
                noValidate
                onChange={this.handleChange}  />  {/*  {formErrors.Exprate11.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate11}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Fenugreek</td>
      <td class>  <Select
value={selectedOption16}onChange={this.handleChange17}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption41}onChange={this.handleChange42}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand12"className={formErrors.Brand12.length > 0 ? "error" : null} value={this.state.Brand12}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand12.length > 0 && (
                <span className="errorMessage">{formErrors.Brand12}</span>
                )}*/}
       </td>
       <td class><input className={formErrors.Qtymonth12 > 0 ? "error" : null}
         value={this.state.Qtymonth12}
                placeholder="Qty month"
                type="number"
                name="Qtymonth12"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth12.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth12}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate12.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate12}
                name="Exprate12"
                noValidate
                onChange={this.handleChange}  />   {/* {formErrors.Exprate12.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate11}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Idli rice</td>
      <td class>  <Select
value={selectedOption17}onChange={this.handleChange18}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption42}onChange={this.handleChange43}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand13"className={formErrors.Brand13.length > 0 ? "error" : null} value={this.state.Brand13}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand11.length > 0 && (
                <span className="errorMessage">{formErrors.Brand11}</span>
                )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth13 > 0 ? "error" : null}
         value={this.state.Qtymonth13}
                placeholder="Qty month"
                type="number"
                name="Qtymonth13"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth13.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth13}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate13.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate13}
                name="Exprate13"
                noValidate
                onChange={this.handleChange}  />  {/*  {formErrors.Exprate13.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate11}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Jaggery</td>
      <td class>  <Select
value={selectedOption18}onChange={this.handleChange19}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption43}onChange={this.handleChange44}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand14"className={formErrors.Brand14.length > 0 ? "error" : null} value={this.state.Brand14}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand14.length > 0 && (
                <span className="errorMessage">{formErrors.Brand11}</span>
                )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth14 > 0 ? "error" : null}
         value={this.state.Qtymonth14}
                placeholder="Qty month"
                type="number"
                name="Qtymonth14"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth14.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth14}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate11.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate14}
                name="Exprate14"
                noValidate
                onChange={this.handleChange}  />   {/* {formErrors.Exprate11.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate11}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Kabuli channa</td>
      <td class>  <Select
value={selectedOption19}onChange={this.handleChange20}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption44}onChange={this.handleChange45}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand15"className={formErrors.Brand11.length > 0 ? "error" : null} value={this.state.Brand15}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand11.length > 0 && (
                <span className="errorMessage">{formErrors.Brand11}</span>
                )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth15 > 0 ? "error" : null}
         value={this.state.Qtymonth15}
                placeholder="Qty month"
                type="number"
                name="Qtymonth15"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth15.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth15}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate11.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate15}
                name="Exprate15"
                noValidate
                onChange={this.handleChange}  />   {/* {formErrors.Exprate11.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate11}</span> )} */}
      </td>
       </tr>
       <tr class>
       <td class>Maida</td>
      <td class>  <Select
value={selectedOption20}onChange={this.handleChange21}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption45}onChange={this.handleChange46}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand16"className={formErrors.Brand11.length > 0 ? "error" : null} value={this.state.Brand16}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand11.length > 0 && (
                <span className="errorMessage">{formErrors.Brand11}</span>
                )} */}
       </td>
       <td class><input className={formErrors.Qtymonth16 > 0 ? "error" : null}
         value={this.state.Qtymonth16}
                placeholder="Qty month"
                type="number"
                name="Qtymonth16"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth16.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth16}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate11.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate16}
                name="Exprate16"
                noValidate
                onChange={this.handleChange}  />    {/*{formErrors.Exprate11.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate11}</span> )}*/}
      </td>
       </tr>
       <tr class>
       <td class>Moong</td>
      <td class>  <Select
value={selectedOption21}onChange={this.handleChange22}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption46}onChange={this.handleChange47}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand17"className={formErrors.Brand11.length > 0 ? "error" : null} value={this.state.Brand17}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand11.length > 0 && (
                <span className="errorMessage">{formErrors.Brand11}</span>
                )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth7 > 0 ? "error" : null}
         value={this.state.Qtymonth17}
                placeholder="Qty month"
                type="number"
                name="Qtymonth17"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth17.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth17}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate11.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate17}
                name="Exprate17"
                noValidate
                onChange={this.handleChange}  />   {/* {formErrors.Exprate11.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate11}</span> )}*/}
      </td>
     
       </tr>
       <tr class>
       <td class>MoongDal</td>
      <td class>  <Select
value={selectedOption22}onChange={this.handleChange23}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption47}onChange={this.handleChange48}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand18"className={formErrors.Brand11.length > 0 ? "error" : null} value={this.state.Brand18}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand11.length > 0 && (
                <span className="errorMessage">{formErrors.Brand11}</span>
                )}*/}
       </td>
       <td class><input className={formErrors.Qtymonth18 > 0 ? "error" : null}
         value={this.state.Qtymonth18}
                placeholder="Qty month"
                type="number"
                name="Qtymonth18"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth18.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth18}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate11.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate18}
                name="Exprate18"
                noValidate
                onChange={this.handleChange}  />   {/* {formErrors.Exprate11.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate11}</span> )}*/}
      </td>
     
       </tr>
       <tr class>
       <td class>Mustard</td>
      <td class>  <Select
value={selectedOption23}onChange={this.handleChange24}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption48}onChange={this.handleChange49}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand19"className={formErrors.Brand11.length > 0 ? "error" : null} value={this.state.Brand19}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand11.length > 0 && (
                <span className="errorMessage">{formErrors.Brand11}</span>
                )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth7 > 0 ? "error" : null}
         value={this.state.Qtymonth19}
                placeholder="Qty month"
                type="number"
                name="Qtymonth19"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth19.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth19}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate11.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate19}
                name="Exprate19"
                noValidate
                onChange={this.handleChange}  />  {/*  {formErrors.Exprate11.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate11}</span> )}*/}
      </td>
     
       </tr>
       <tr class>
       <td class>Plain sugar</td>
      <td class>  <Select
value={selectedOption24}onChange={this.handleChange25}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption49}onChange={this.handleChange50}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand20"className={formErrors.Brand20.length > 0 ? "error" : null} value={this.state.Brand20}
                noValidate
                onChange={this.handleChange} />{/* {formErrors.Brand11.length > 0 && (
                <span className="errorMessage">{formErrors.Brand11}</span>
                )} */}
       </td>
       <td class><input className={formErrors.Qtymonth20 > 0 ? "error" : null}
         value={this.state.Qtymonth20}
                placeholder="Qty month"
                type="number"
                name="Qtymonth20"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth20.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth20}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate11.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate20}
                name="Exprate20"
                noValidate
                onChange={this.handleChange}  />    {/*{formErrors.Exprate11.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate11}</span> )}*/}
      </td>
     
       </tr>
       <tr class>
       <td class>Raisin</td>
      <td class>  <Select
value={selectedOption25}onChange={this.handleChange26}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption50}onChange={this.handleChange51}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand21"className={formErrors.Brand11.length > 0 ? "error" : null} value={this.state.Brand21}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand11.length > 0 && (
                <span className="errorMessage">{formErrors.Brand11}</span>
                )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth21 > 0 ? "error" : null}
         value={this.state.Qtymonth21}
                placeholder="Qty month"
                type="number"
                name="Qtymonth21"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth21.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth21}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate11.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate21}
                name="Exprate21"
                noValidate
                onChange={this.handleChange}  />  {/*  {formErrors.Exprate11.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate11}</span> )}*/}
      </td>
     
       </tr>
       <tr class>
       <td class>Sooji</td>
      <td class>  <Select
value={selectedOption26}onChange={this.handleChange27}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption51}onChange={this.handleChange52}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand22"className={formErrors.Brand11.length > 0 ? "error" : null} value={this.state.Brand22}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand11.length > 0 && (
                <span className="errorMessage">{formErrors.Brand11}</span>
                )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth7 > 0 ? "error" : null}
         value={this.state.Qtymonth22}
                placeholder="Qty month"
                type="number"
                name="Qtymonth22"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth22.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth22}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate22.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate22}
                name="Exprate22"
                noValidate
                onChange={this.handleChange}  />  {/*  {formErrors.Exprate11.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate11}</span> )}*/}
      </td>
     
       </tr>
       <tr class>
       <td class>Toor Dal</td>
      <td class>  <Select
value={selectedOption27}onChange={this.handleChange28}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption52}onChange={this.handleChange53}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand23"className={formErrors.Brand11.length > 0 ? "error" : null} value={this.state.Brand23}
                noValidate
                onChange={this.handleChange} />{/* {formErrors.Brand11.length > 0 && (
                <span className="errorMessage">{formErrors.Brand11}</span>
                )}*/}  
       </td>
       <td class><input className={formErrors.Qtymonth7 > 0 ? "error" : null}
         value={this.state.Qtymonth23}
                placeholder="Qty month"
                type="number"
                name="Qtymonth23"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth23.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth23}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate11.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate23}
                name="Exprate23"
                noValidate
                onChange={this.handleChange}  />   {/* {formErrors.Exprate11.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate11}</span> )}*/}
      </td>
     
       </tr>
       <tr class>
       <td class>urad Dal</td>
      <td class>  <Select
value={selectedOption28}onChange={this.handleChange29}        options={Quality}
      /></td>
       <td class> <Select
value={selectedOption53}onChange={this.handleChange54}        options={packsize}
      /></td>
       <td  ><input  placeholder="Brand" type="text" name="Brand24"className={formErrors.Brand11.length > 0 ? "error" : null} value={this.state.Brand24}
                noValidate
                onChange={this.handleChange} /> {/*{formErrors.Brand11.length > 0 && (
                <span className="errorMessage">{formErrors.Brand11}</span>
                )}  */}
       </td>
       <td class><input className={formErrors.Qtymonth7 > 0 ? "error" : null}
         value={this.state.Qtymonth24}
                placeholder="Qty month"
                type="number"
                name="Qtymonth24"
                noValidate
                onChange={this.handleChange} /> 
                {/*{formErrors.Qtymonth24.length > 0 && (
                <span className="errorMessage">{formErrors.Qtymonth24}</span> )}*/}
      </td>
      <td class><input className={formErrors.Exprate11.length > 0 ? "error" : null}  placeholder="Exp rate"  type="number"value={this.state.Exprate24}
                name="Exprate24"
                noValidate
                onChange={this.handleChange}  />  {/*  {formErrors.Exprate11.length > 0 && (
                <span className="errorMessage">{formErrors.Exprate11}</span> )}*/}
      </td>
     
       </tr>
      </tbody>
            </table>
            </div>
            <div className="createAccount">
              <button type="submit" onclick=" myFunction()"  >Submit</button>
            </div>
          </form>
          </div>
      
    );
  }
}



export default App;
